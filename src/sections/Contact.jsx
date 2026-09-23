import Icon from '../components/Icon.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import { profile, socials } from '../data/resume.js'

export default function Contact() {
  return (
    <div className="container reveal">
      <SectionHeading eyebrow="Get in touch" title="Contact" />

      <div className="contact">
        <h3 className="contact__title">Let's build something</h3>
        <p className="contact__text">
          {profile.availability} — backend and full-stack: distributed systems,
          .NET services and cloud-native platforms. Based in {profile.location} (
          {profile.timezone}), used to working across US and EU hours.
        </p>

        <div className="contact__actions">
          <a className="button button--primary" href={`mailto:${profile.email}`}>
            <Icon name="mail" size={16} />
            {profile.email}
          </a>

          <a
            className="button"
            href={profile.resumeUrl}
            target="_blank"
            rel="noreferrer noopener"
          >
            <Icon name="download" size={16} />
            Download CV
          </a>

          {socials
            .filter((social) => social.icon !== 'mail')
            .map((social) => (
              <a
                key={social.label}
                className="button"
                href={social.href}
                target="_blank"
                rel="noreferrer noopener"
              >
                <Icon name={social.icon} size={16} />
                {social.label}
              </a>
            ))}
        </div>
      </div>
    </div>
  )
}
