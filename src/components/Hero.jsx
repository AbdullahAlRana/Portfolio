import Icon from './Icon.jsx'
import { clients, profile, socials } from '../data/resume.js'

export default function Hero({ onNavigate }) {
  return (
    <section id="home" className="section section--flush hero">
      <div className="container">
        <p className="hero__status">
          <span className="hero__dot" />
          {profile.availability}
        </p>

        <h1 className="hero__name">
          {profile.firstName} <em>{profile.lastName}</em>
        </h1>

        <p className="hero__title">{profile.title}</p>
        <p className="hero__headline">{profile.headline}</p>
        <p className="hero__summary">{profile.summary}</p>

        <div className="hero__meta">
          <span className="hero__meta-item">
            <Icon name="pin" size={14} />
            {profile.location}
          </span>
          <span className="hero__meta-item">
            <Icon name="clock" size={14} />
            {profile.timezone}
          </span>
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
          <a href={`tel:${profile.phoneHref}`}>{profile.phone}</a>
        </div>

        <div className="hero__actions">
          <a
            className="button button--primary"
            href={profile.resumeUrl}
            target="_blank"
            rel="noreferrer noopener"
          >
            <Icon name="download" size={16} />
            Download CV
          </a>

          <button
            type="button"
            className="button"
            onClick={() => onNavigate('projects')}
          >
            View projects
            <Icon name="arrow" size={16} />
          </button>

          <div className="social-row">
            {socials.map((social) => (
              <a
                key={social.label}
                className="icon-button"
                href={social.href}
                target={social.icon === 'mail' ? undefined : '_blank'}
                rel="noreferrer noopener"
                aria-label={social.label}
                title={social.label}
              >
                <Icon name={social.icon} size={17} />
              </a>
            ))}
          </div>
        </div>

        <dl className="hero__stats">
          {profile.highlights.map((item) => (
            <div key={item.label} className="stat">
              <dt className="stat__value">
                {item.value}
                <span className="stat__suffix">{item.suffix}</span>
              </dt>
              <dd className="stat__label">{item.label}</dd>
            </div>
          ))}
        </dl>

        <div className="clients">
          <p className="clients__label">Client work delivered for</p>
          <ul className="clients__list">
            {clients.map((client) => (
              <li key={client} className="clients__item">
                {client}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
