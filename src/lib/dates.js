const MONTHS = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
]

/** '2024-06' -> { year: 2024, month: 6 } */
function parse(value) {
  const [year, month] = value.split('-').map(Number)
  return { year, month }
}

/** '2024-06' -> 'Jun 2024' */
export function formatMonth(value) {
  const { year, month } = parse(value)
  return `${MONTHS[month - 1]} ${year}`
}

/** 'Jun 2024 — Present' */
export function formatRange(start, end) {
  return `${formatMonth(start)} — ${end ? formatMonth(end) : 'Present'}`
}

/**
 * Human duration between two 'YYYY-MM' values, e.g. '2 yrs 4 mos'.
 * An open-ended range runs to today, so the page never goes stale.
 */
export function formatDuration(start, end) {
  const from = parse(start)
  const now = new Date()
  const to = end
    ? parse(end)
    : { year: now.getFullYear(), month: now.getMonth() + 1 }

  const total =
    (to.year - from.year) * 12 + (to.month - from.month) + 1
  if (total < 1) return null

  const years = Math.floor(total / 12)
  const months = total % 12

  const parts = []
  if (years) parts.push(`${years} yr${years > 1 ? 's' : ''}`)
  if (months) parts.push(`${months} mo${months > 1 ? 's' : ''}`)

  return parts.join(' ')
}
