import React from 'react'
import { Box, Container, Typography, Breadcrumbs, Link } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import AnimatedChart from './AnimatedChart'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
}

export default function PageHero({ title, subtitle, breadcrumb, icon: Icon }) {
  return (
    <Box
      sx={{
        background: 'linear-gradient(135deg, #060D1F 0%, #0B1F3A 60%, #1A3A6B 100%)',
        pt: { xs: 14, md: 16 },
        pb: { xs: 6, md: 8 },
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <AnimatedChart color="#00C853" opacity={0.08} height={180} />

      {/* Glow */}
      <Box sx={{
        position: 'absolute', top: '-20%', right: '-5%',
        width: 400, height: 400, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(0,200,83,0.08) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <Container maxWidth="xl">
        <motion.div variants={containerVariants} initial="hidden" animate="visible">
          <motion.div variants={itemVariants}>
            <Breadcrumbs sx={{ mb: 2 }} aria-label="breadcrumb">
            <Link component={RouterLink} to="/" sx={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.875rem', textDecoration: 'none', '&:hover': { color: '#00C853' } }}>
              Home
            </Link>
            <Typography sx={{ color: '#00C853', fontSize: '0.875rem' }}>{breadcrumb}</Typography>
          </Breadcrumbs>
          </motion.div>

          <motion.div variants={itemVariants}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
            {Icon && (
              <Box sx={{
                width: 52, height: 52, borderRadius: 3,
                background: 'linear-gradient(135deg, #00C853, #009624)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexShrink: 0,
              }}>
                <Icon sx={{ color: '#fff', fontSize: 28 }} />
              </Box>
            )}
            <Typography variant="h3" sx={{ color: '#fff', fontWeight: 800, fontSize: { xs: '1.8rem', md: '2.5rem' } }}>
              {title}
            </Typography>
          </Box>
          </motion.div>

          {subtitle && (
            <motion.div variants={itemVariants}>
              <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.65)', maxWidth: 600, lineHeight: 1.8 }}>
                {subtitle}
              </Typography>
            </motion.div>
          )}
        </motion.div>
      </Container>
    </Box>
  )
}
