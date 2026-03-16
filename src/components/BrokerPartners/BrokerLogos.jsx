import React from 'react'

export function AngelOneLogo({ size = 48 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Orange background */}
      <rect width="48" height="48" rx="12" fill="#FFF3E0" />
      {/* Angel wings — left arc */}
      <path d="M7 30 Q10 16 24 18" stroke="#E65100" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      {/* Angel wings — right arc */}
      <path d="M41 30 Q38 16 24 18" stroke="#E65100" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      {/* Arrow pointing up */}
      <path d="M24 12 L29 22 H26 V34 H22 V22 H19 Z" fill="#E65100" />
    </svg>
  )
}

export function SharekhanLogo({ size = 48 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Blue background */}
      <rect width="48" height="48" rx="12" fill="#E3F2FD" />
      {/* Globe circle */}
      <circle cx="24" cy="24" r="14" stroke="#1565C0" strokeWidth="2.5" fill="none" />
      {/* Horizontal lines (globe parallels) */}
      <path d="M10.5 20 Q24 17 37.5 20" stroke="#1565C0" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <path d="M10.5 28 Q24 31 37.5 28" stroke="#1565C0" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      {/* Vertical center meridian */}
      <path d="M24 10 Q28 24 24 38" stroke="#1565C0" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <path d="M24 10 Q20 24 24 38" stroke="#1565C0" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      {/* Upward arrow on top-right */}
      <circle cx="36" cy="12" r="6" fill="#1565C0" />
      <path d="M36 15 L36 10 M34 12 L36 10 L38 12" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function MotilalOswalLogo({ size = 48 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Purple background */}
      <rect width="48" height="48" rx="12" fill="#F3E5F5" />
      {/* Columns / pillars representing research/growth */}
      <rect x="8" y="28" width="7" height="14" rx="1.5" fill="#6A1B9A" />
      <rect x="18" y="20" width="7" height="22" rx="1.5" fill="#6A1B9A" />
      <rect x="28" y="13" width="7" height="29" rx="1.5" fill="#6A1B9A" />
      {/* Star / research insight on top-right */}
      <circle cx="38" cy="12" r="6" fill="#6A1B9A" />
      <path d="M38 8 L39 11 H42 L39.5 13 L40.5 16 L38 14 L35.5 16 L36.5 13 L34 11 H37 Z" fill="white" />
      {/* Base line */}
      <rect x="6" y="40" width="36" height="2.5" rx="1.25" fill="#6A1B9A" opacity="0.4" />
    </svg>
  )
}
