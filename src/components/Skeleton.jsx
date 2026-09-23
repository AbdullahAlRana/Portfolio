export default function Skeleton({ rows = 6 }) {
  return (
    <div className="container skeleton" aria-hidden="true">
      <div className="skeleton__bar" style={{ width: '32%', height: 22 }} />
      {Array.from({ length: rows }, (_, i) => (
        <div
          key={i}
          className="skeleton__bar"
          style={{ width: `${95 - (i % 3) * 14}%` }}
        />
      ))}
    </div>
  )
}
