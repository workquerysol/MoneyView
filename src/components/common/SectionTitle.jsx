import React, { useRef } from 'react'
import { Box, Typography, Chip } from '@mui/material'
import { motion, useInView } from 'framer-motion'

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
}

export default function SectionTitle({ tag, title, subtitle, light = false, center = true }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
    >
      <Box sx={{ textAlign: center ? 'center' : 'left', mb: { xs: 4, md: 6 } }}>
        {tag && (
          <motion.div variants={itemVariants} style={{ display: 'inline-block' }}>
            <Chip
              label={tag}
              size="small"
              sx={{
                mb: 2,
                background: 'linear-gradient(135deg, rgba(0,200,83,0.15), rgba(0,200,83,0.05))',
                color: '#00C853',
                border: '1px solid rgba(0,200,83,0.3)',
                fontWeight: 700,
                letterSpacing: 0.5,
                fontSize: '0.75rem',
              }}
            />
          </motion.div>
        )}
        <motion.div variants={itemVariants}>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 800,
              color: light ? '#fff' : 'primary.main',
              fontSize: { xs: '1.8rem', md: '2.5rem', lg: '2.8rem' },
              lineHeight: 1.2,
              mb: subtitle ? 2 : 0,
            }}
          >
            {title}
          </Typography>
        </motion.div>
        {subtitle && (
          <motion.div variants={itemVariants}>
            <Typography
              variant="body1"
              sx={{
                color: light ? 'rgba(255,255,255,0.65)' : 'text.secondary',
                maxWidth: 620,
                mx: center ? 'auto' : 0,
                lineHeight: 1.8,
              }}
            >
              {subtitle}
            </Typography>
          </motion.div>
        )}
      </Box>
    </motion.div>
  )
}
