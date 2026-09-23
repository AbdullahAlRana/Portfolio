import Icon from '../components/Icon.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import { publications } from '../data/resume.js'

export default function Publications() {
  return (
    <div className="container reveal">
      <SectionHeading eyebrow="Research" title="Publication" />

      {publications.map((item) => (
        <article key={item.id} className="entry">
          <div className="entry__aside">
            <span className="mono">{item.year}</span>
          </div>
          <div>
            <h3 className="entry__title">{item.title}</h3>
            <p className="entry__sub">{item.venue}</p>
            <p className="entry__summary">{item.summary}</p>
            <p className="entry__cite">{item.citation}</p>
            <a
              className="link-inline"
              href={item.href}
              target="_blank"
              rel="noreferrer noopener"
            >
              Read on IEEE Xplore
              <Icon name="external" size={14} />
            </a>
          </div>
        </article>
      ))}
    </div>
  )
}
