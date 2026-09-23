import { useCallback, useEffect, useRef, useState } from 'react'
import Footer from './components/Footer.jsx'
import Hero from './components/Hero.jsx'
import LazySection from './components/LazySection.jsx'
import Navbar from './components/Navbar.jsx'
import { navItems, sections } from './sections/registry.js'
import useTheme from './hooks/useTheme.js'

// A section counts as "current" once its top passes under the navbar.
const NAV_OFFSET = 96

// How far below the fold a section starts loading.
const PRELOAD_MARGIN = 400

export default function App() {
  const [theme, toggleTheme] = useTheme()
  const [activeId, setActiveId] = useState('home')

  // Index of the last section that may mount. Sections mount in order
  // because a nav jump needs everything above the target laid out at
  // its real height for the landing position to be correct.
  const [mountedUpTo, setMountedUpTo] = useState(-1)

  const readyRef = useRef(new Set())
  const pendingRef = useRef(null)

  const scrollToId = useCallback((id) => {
    document.getElementById(id)?.scrollIntoView({ block: 'start' })
  }, [])

  const handleNavigate = useCallback(
    (id) => {
      setActiveId(id)

      const index = sections.findIndex((section) => section.id === id)
      const required = sections.slice(0, index + 1).map((s) => s.id)

      if (index === -1 || required.every((s) => readyRef.current.has(s))) {
        scrollToId(id)
        return
      }

      pendingRef.current = { id, index }
      setMountedUpTo((current) => Math.max(current, index))
    },
    [scrollToId],
  )

  const handleReady = useCallback(
    (id) => {
      readyRef.current.add(id)

      const pending = pendingRef.current
      if (!pending) return

      const required = sections.slice(0, pending.index + 1).map((s) => s.id)
      if (!required.every((s) => readyRef.current.has(s))) return

      pendingRef.current = null
      requestAnimationFrame(() => scrollToId(pending.id))
    },
    [scrollToId],
  )

  // Single scroll observer: it both highlights the current nav link and
  // decides which sections have come close enough to mount.
  useEffect(() => {
    let frame = 0

    const update = () => {
      frame = 0

      let current = navItems[0].id
      for (const item of navItems) {
        const element = document.getElementById(item.id)
        if (element && element.getBoundingClientRect().top <= NAV_OFFSET) {
          current = item.id
        }
      }

      // Anything scrolled to the very bottom lights up the last link.
      const atBottom =
        window.innerHeight + window.scrollY >= document.body.scrollHeight - 2
      if (atBottom) current = navItems[navItems.length - 1].id

      setActiveId(current)

      let reached = -1
      sections.forEach((section, index) => {
        const element = document.getElementById(section.id)
        if (!element) return
        if (
          element.getBoundingClientRect().top <
          window.innerHeight + PRELOAD_MARGIN
        ) {
          reached = index
        }
      })

      // At the bottom of the page everything above has been passed,
      // even if a fast scroll never rendered a frame in between.
      if (atBottom) reached = sections.length - 1

      if (reached > -1) {
        setMountedUpTo((currentIndex) => Math.max(currentIndex, reached))
      }
    }

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)

    return () => {
      if (frame) cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  // Sections grow as they mount, which can reveal the next one — re-run
  // the observer after each commit until the page settles.
  useEffect(() => {
    if (mountedUpTo < 0) return
    window.dispatchEvent(new Event('resize'))
  }, [mountedUpTo])

  // Support deep links such as /#projects on first paint.
  useEffect(() => {
    const hash = window.location.hash.slice(1)
    if (hash && navItems.some((item) => item.id === hash)) {
      handleNavigate(hash)
    }
    // Only ever on mount.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <Navbar
        activeId={activeId}
        onNavigate={handleNavigate}
        theme={theme}
        onToggleTheme={toggleTheme}
      />

      <main>
        <Hero onNavigate={handleNavigate} />

        {sections.map((section, index) => (
          <LazySection
            key={section.id}
            id={section.id}
            minHeight={section.minHeight}
            skeletonRows={section.skeletonRows}
            component={section.component}
            visible={index <= mountedUpTo}
            onReady={handleReady}
          />
        ))}
      </main>

      <Footer />
    </>
  )
}
