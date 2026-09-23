export default function Tags({ items }) {
  if (!items?.length) return null

  return (
    <ul className="tags">
      {items.map((item) => (
        <li key={item} className="tag">
          {item}
        </li>
      ))}
    </ul>
  )
}
