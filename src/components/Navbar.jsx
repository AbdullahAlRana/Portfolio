import Icon from './Icon.jsx'
import { profile } from '../data/resume.js'
import { navItems } from '../sections/registry.js'

export default function Navbar({ activeId, onNavigate, theme, onToggleTheme }) {
  return (
    <nav className="nav" aria-label="Section navigation">
      <div className="container">
        <div className="nav__inner">
          <button
            type="button"
            className="nav__brand"
            onClick={() => onNavigate('home')}
          >
            {profile.firstName} <span>{profile.lastName}</span>
          </button>

          <ul className="nav__links">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  type="button"
                  className={`nav__link${
                    activeId === item.id ? ' is-active' : ''
                  }`}
                  aria-current={activeId === item.id ? 'true' : undefined}
                  onClick={() => onNavigate(item.id)}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          <div className="nav__actions">
            <a
              className="button button--sm nav__cv"
              href={profile.resumeUrl}
              target="_blank"
              rel="noreferrer noopener"
            >
              <Icon name="download" size={14} />
              CV
            </a>

            <button
              type="button"
              className="icon-button"
              onClick={onToggleTheme}
              aria-label={`Switch to ${
                theme === 'dark' ? 'light' : 'dark'
              } theme`}
              title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
            >
              <Icon name={theme === 'dark' ? 'sun' : 'moon'} size={17} />
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}
