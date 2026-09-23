import SectionHeading from '../components/SectionHeading.jsx'
import { formatRange } from '../lib/dates.js'
import { education } from '../data/resume.js'

export default function Education() {
  return (
    <div className="container reveal">
      <SectionHeading eyebrow="Background" title="Education" />

      {education.map((item) => (
        <article key={item.id} className="entry">
          <div className="entry__aside">
            <span className="mono">{formatRange(item.start, item.end)}</span>
            <span className="job__location">{item.location}</span>
          </div>
          <div>
            <h3 className="entry__title">{item.degree}</h3>
            <p className="entry__sub">{item.school}</p>
            <p className="entry__note">{item.note}</p>
          </div>
        </article>
      ))}
    </div>
  )
}
