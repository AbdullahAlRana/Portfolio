import SectionHeading from '../components/SectionHeading.jsx'
import Tags from '../components/Tags.jsx'
import { formatDuration, formatRange } from '../lib/dates.js'
import { experience } from '../data/resume.js'

export default function Experience() {
  return (
    <div className="container reveal">
      <SectionHeading eyebrow="Where I've worked" title="Experience" />

      <ol className="timeline">
        {experience.map((job) => (
          <li key={job.id} className="job">
            <div className="job__aside">
              <span className="mono job__period">
                {formatRange(job.start, job.end)}
              </span>
              <span className="job__duration">
                {formatDuration(job.start, job.end)}
              </span>
              {!job.end && <span className="job__badge">Current</span>}
              <span className="job__location">{job.location}</span>
            </div>

            <div>
              <h3 className="job__role">{job.role}</h3>
              <p className="job__company">
                {job.href ? (
                  <a href={job.href} target="_blank" rel="noreferrer noopener">
                    {job.company}
                  </a>
                ) : (
                  job.company
                )}
              </p>

              {job.clients.length > 0 && (
                <p className="job__clients">
                  <strong>Clients:</strong> {job.clients.join(', ')}
                </p>
              )}

              {job.impact.length > 0 && (
                <ul className="job__impact">
                  {job.impact.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}

              <ul className="job__points">
                {job.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>

              <Tags items={job.stack} />
            </div>
          </li>
        ))}
      </ol>
    </div>
  )
}
