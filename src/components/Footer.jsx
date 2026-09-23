import { formatMonth } from '../lib/dates.js'
import { lastUpdated, profile } from '../data/resume.js'

export default function Footer() {
  return (
    <footer className="footer container">
      <span>
        © {new Date().getFullYear()} {profile.firstName} {profile.lastName} ·
        Built with React
      </span>
      <span>Last updated {formatMonth(lastUpdated)}</span>
    </footer>
  )
}
