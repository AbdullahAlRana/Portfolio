export default function SectionHeading({ eyebrow, title, lede }) {
  return (
    <header className="section__head">
      {eyebrow && <span className="section__eyebrow">{eyebrow}</span>}
      <h2 className="section__title">{title}</h2>
      {lede && <p className="section__lede">{lede}</p>}
    </header>
  )
}
