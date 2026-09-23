import SectionHeading from '../components/SectionHeading.jsx'
import Tags from '../components/Tags.jsx'
import { skills } from '../data/resume.js'

export default function Skills() {
  return (
    <div className="container reveal">
      <SectionHeading
        eyebrow="What I work with"
        title="Skills"
        lede="Split by depth rather than listed flat — the first group is what I'd be hired for."
      />

      <div className="skills-grid">
        {skills.primary.map((group) => (
          <div key={group.group} className="skill-group">
            <h3 className="skill-group__name">{group.group}</h3>
            <Tags items={group.items} />
          </div>
        ))}
      </div>

      <div className="skills-familiar skill-group">
        <h3 className="skill-group__name">Also worked with</h3>
        <Tags items={skills.familiar} />
      </div>
    </div>
  )
}
