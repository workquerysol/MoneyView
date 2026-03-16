import React, { useEffect, useRef } from 'react'
import { Box } from '@mui/material'

function generatePath(width, height, points = 60) {
  const step = width / (points - 1)
  let d = `M 0 ${height * 0.6}`
  const vals = []
  let val = height * 0.6
  for (let i = 0; i < points; i++) {
    val += (Math.random() - 0.48) * height * 0.08
    val = Math.max(height * 0.1, Math.min(height * 0.9, val))
    vals.push(val)
    d += ` L ${i * step} ${val}`
  }
  return { d, vals }
}

export default function AnimatedChart({ color = '#00C853', opacity = 0.15, height = 200 }) {
  const svgRef = useRef(null)
  const frameRef = useRef(null)
  const offsetRef = useRef(0)
  const pathDataRef = useRef(null)

  useEffect(() => {
    const svg = svgRef.current
    if (!svg) return
    const w = svg.clientWidth || 800
    const h = height

    if (!pathDataRef.current) {
      pathDataRef.current = generatePath(w * 2, h, 120)
    }

    const linePath = svg.querySelector('.chart-line')
    const fillPath = svg.querySelector('.chart-fill')

    const animate = () => {
      offsetRef.current -= 0.4
      if (offsetRef.current < -w) offsetRef.current = 0

      if (linePath) linePath.setAttribute('transform', `translate(${offsetRef.current}, 0)`)
      if (fillPath) fillPath.setAttribute('transform', `translate(${offsetRef.current}, 0)`)
      frameRef.current = requestAnimationFrame(animate)
    }

    frameRef.current = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(frameRef.current)
  }, [height])

  const w = 1200
  const h = height
  const { d } = generatePath(w * 2, h, 150)
  const fillD = `${d} L ${w * 2} ${h} L 0 ${h} Z`

  return (
    <Box sx={{ position: 'absolute', bottom: 0, left: 0, right: 0, overflow: 'hidden', height, pointerEvents: 'none' }}>
      <svg ref={svgRef} width="100%" height={height} style={{ display: 'block' }}>
        <defs>
          <linearGradient id={`chartGrad-${color.replace('#', '')}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={color} stopOpacity={opacity * 2} />
            <stop offset="100%" stopColor={color} stopOpacity={0} />
          </linearGradient>
        </defs>
        <path
          className="chart-fill"
          d={fillD}
          fill={`url(#chartGrad-${color.replace('#', '')})`}
        />
        <path
          className="chart-line"
          d={d}
          fill="none"
          stroke={color}
          strokeWidth={2}
          opacity={opacity * 4}
        />
      </svg>
    </Box>
  )
}
