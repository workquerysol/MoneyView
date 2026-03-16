import React from 'react'
import { Box, Typography, Chip } from '@mui/material'
import ScrollReveal from './ScrollReveal'

export default function SectionTitle({ tag, title, subtitle, light = false, center = true }) {
  return (
    <ScrollReveal>
      <Box sx={{ textAlign: center ? 'center' : 'left', mb: { xs: 4, md: 6 } }}>
        {tag && (
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
        )}
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
        {subtitle && (
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
        )}
      </Box>
    </ScrollReveal>
  )
}
