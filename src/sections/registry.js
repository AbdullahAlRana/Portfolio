import { lazy } from 'react'

/**
 * One entry per scroll section. Each `component` is its own dynamic
 * import, so Vite emits a separate chunk that is only fetched when the
 * section is about to scroll into view.
 *
 * `minHeight` reserves roughly the rendered height so the placeholder
 * does not collapse the page and make the scrollbar jump.
 */
export const sections = [
  {
    id: 'experience',
    label: 'Experience',
    minHeight: 1080,
    skeletonRows: 10,
    component: lazy(() => import('./Experience.jsx')),
  },
  {
    id: 'projects',
    label: 'Projects',
    minHeight: 940,
    skeletonRows: 8,
    component: lazy(() => import('./Projects.jsx')),
  },
  {
    id: 'skills',
    label: 'Skills',
    minHeight: 440,
    skeletonRows: 5,
    component: lazy(() => import('./Skills.jsx')),
  },
  {
    id: 'education',
    label: 'Education',
    minHeight: 300,
    skeletonRows: 4,
    component: lazy(() => import('./Education.jsx')),
  },
  {
    id: 'publication',
    label: 'Publication',
    minHeight: 370,
    skeletonRows: 5,
    component: lazy(() => import('./Publications.jsx')),
  },
  {
    id: 'contact',
    label: 'Contact',
    minHeight: 510,
    skeletonRows: 4,
    component: lazy(() => import('./Contact.jsx')),
  },
]

export const navItems = [
  { id: 'home', label: 'Home' },
  ...sections.map(({ id, label }) => ({ id, label })),
]
