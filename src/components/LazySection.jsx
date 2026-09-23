import { Suspense, useEffect } from 'react'
import Skeleton from './Skeleton.jsx'

/**
 * Renders a section only once it is about to enter the viewport.
 *
 * The section body lives in its own code-split chunk, so the initial
 * page load only ships the shell + hero. `visible` is decided by the
 * scroll observer in App, which is authoritative: an IntersectionObserver
 * here would miss sections that cross the viewport between two callbacks
 * (a fast flick or an End key press), leaving them stuck as skeletons.
 *
 * Until a section is visible the placeholder reserves roughly its real
 * height, so the scrollbar and anchor offsets stay stable.
 */
export default function LazySection({
  id,
  minHeight,
  skeletonRows,
  component: Component,
  visible,
  onReady,
}) {
  return (
    <section
      id={id}
      className="section"
      style={visible ? undefined : { minHeight }}
    >
      {visible ? (
        <Suspense fallback={<Skeleton rows={skeletonRows} />}>
          <Component />
          <ReadySignal id={id} onReady={onReady} />
        </Suspense>
      ) : (
        <Skeleton rows={skeletonRows} />
      )}
    </section>
  )
}

/**
 * Renders nothing; its effect runs once the suspended chunk has
 * resolved and committed, which is when a pending nav jump can safely
 * scroll to the now-correct position.
 */
function ReadySignal({ id, onReady }) {
  useEffect(() => {
    onReady?.(id)
  }, [id, onReady])

  return null
}
