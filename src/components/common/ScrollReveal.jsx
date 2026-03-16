import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function ScrollReveal({ children, delay = 0, direction = 'up', distance = 36, ...props }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  const variants = {
    hidden: {
      opacity: 0,
      y: direction === 'up' ? distance : direction === 'down' ? -distance : 0,
      x: direction === 'left' ? distance : direction === 'right' ? -distance : 0,
      scale: 0.97,
    },
    visible: {
      opacity: 1, y: 0, x: 0, scale: 1,
      transition: {
        duration: 0.65,
        delay,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      {...props}
    >
      {children}
    </motion.div>
  )
}
