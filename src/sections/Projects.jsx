import Icon from '../components/Icon.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import Tags from '../components/Tags.jsx'
import { formatRange } from '../lib/dates.js'
import { projects } from '../data/resume.js'

export default function Projects() {
  return (
    <div className="container reveal">
      <SectionHeading
        eyebrow="Selected work"
        title="Projects"
        lede="Client engagements delivered through my employers. Most are proprietary, so the code isn't public — happy to walk through the architecture of any of them."
      />

      <ul className="grid">
        {projects.map((project) => (
          <li key={project.id} className="card">
            <div className="card__top">
              <span className="mono">
                {formatRange(project.start, project.end)}
              </span>
              {project.href && (
                <a
                  className="card__link"
                  href={project.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={`Open ${project.name}`}
                >
                  <Icon name="external" size={15} />
                </a>
              )}
            </div>

            <h3 className="card__title">
              {project.href ? (
                <a href={project.href} target="_blank" rel="noreferrer noopener">
                  {project.name}
                </a>
              ) : (
                project.name
              )}
            </h3>

            <p className="card__client">
              <strong>{project.client}</strong> · via {project.via} ·{' '}
              {project.role}
            </p>

            <p className="card__body">{project.description}</p>

            {project.impact.length > 0 && (
              <ul className="card__impact">
                {project.impact.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            )}

            <Tags items={project.stack} />
          </li>
        ))}
      </ul>
    </div>
  )
}
