import React from 'react'
import { Box, Container, Typography, Button, Stack, Grid } from '@mui/material'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowForward, OpenInNew } from '@mui/icons-material'
import AnimatedChart from '../common/AnimatedChart'

export default function CTA() {
  return (
    <Box
      sx={{
        py: { xs: 10, md: 14 },
        background: 'linear-gradient(135deg, #0B1F3A 0%, #1A3A6B 50%, #0B1F3A 100%)',
        position: 'relative',
        overflow: 'hidden',
        textAlign: 'center',
      }}
    >
      <AnimatedChart color="#00C853" opacity={0.07} height={200} />

      {/* Glow */}
      <Box sx={{
        position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
        width: 600, height: 400, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(0,200,83,0.06) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8, type: 'spring', bounce: 0.3 }}
        >
          <Typography
            variant="h2"
            sx={{
              color: '#fff', fontWeight: 900,
              fontSize: { xs: '2rem', md: '3rem' },
              mb: 2, lineHeight: 1.2,
            }}
          >
            Start Your Investment
            <Box component="span" sx={{ color: '#00C853' }}> Journey Today</Box>
          </Typography>

          <Typography
            variant="body1"
            sx={{ color: 'rgba(255,255,255,0.65)', mb: 5, maxWidth: 480, mx: 'auto', lineHeight: 1.8 }}
          >
            Join 10 lakh+ investors who trust MoneyView to manage and grow their wealth with expert guidance.
          </Typography>

          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center">
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <Button
                component={Link}
                to="/open-demat"
                variant="contained"
                color="secondary"
                size="large"
                endIcon={<OpenInNew />}
                sx={{ fontWeight: 700, fontSize: '1rem', px: 4, py: 1.6 }}
              >
                Open Demat Account
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <Button
                component={Link}
                to="/stocks-etf"
                variant="outlined"
                size="large"
                endIcon={<ArrowForward />}
                sx={{
                  fontWeight: 700, fontSize: '1rem', px: 4, py: 1.6,
                  color: '#fff', borderColor: 'rgba(255,255,255,0.3)',
                  '&:hover': { borderColor: '#00C853', color: '#00C853', background: 'rgba(0,200,83,0.08)' },
                }}
              >
                Explore Investments
              </Button>
            </motion.div>
          </Stack>
        </motion.div>
      </Container>
    </Box>
  )
}
