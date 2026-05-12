



export default function Star() {
  return (
    <div className="top_svg" style={{padding: '16%'}}>
      <svg viewBox="0 0 100 100">
        <polygon
          points="50,5 61,35 95,35 67,57 76,90 50,72 24,90 33,57 5,35 39,35"
          fill="gold"
          stroke="black"
          strokeWidth="2"
        />
        <text
          x="50"
          y="55"
          textAnchor="middle"
          dominantBaseline="middle"
          fontSize="18"
          fill="black"
          fontFamily="sans-serif"
        >
          42
        </text>
      </svg>
    </div>
  )
}