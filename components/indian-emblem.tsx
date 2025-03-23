export function IndianEmblem({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className={className} aria-label="Indian Emblem">
      <circle cx="50" cy="50" r="48" fill="#fff" stroke="#000080" strokeWidth="1" />
      <circle cx="50" cy="50" r="40" fill="#0066CC" />
      <circle cx="50" cy="50" r="20" fill="#fff" />
      <g fill="#000080">
        {/* Simplified Ashoka Chakra */}
        {Array.from({ length: 24 }).map((_, i) => (
          <rect key={i} x="49" y="30" width="2" height="20" transform={`rotate(${i * 15} 50 50)`} />
        ))}
      </g>
    </svg>
  )
}

