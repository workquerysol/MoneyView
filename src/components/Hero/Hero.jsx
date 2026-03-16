import React, { useEffect, useRef } from 'react'
import {
  Box, Container, Typography, Button, Grid, Chip, Stack, Avatar,
} from '@mui/material'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { TrendingUp, ArrowForward, PlayArrow } from '@mui/icons-material'
import AnimatedChart from '../common/AnimatedChart'

const STATS = [
  { value: '10L+', label: 'Happy Investors' },
  { value: '₹500Cr+', label: 'Assets Managed' },
  { value: '15+', label: 'Years of Trust' },
  { value: '99.9%', label: 'Uptime' },
]

const FLOATING_TICKERS = [
  { symbol: 'NIFTY 50', change: '+0.84%', positive: true },
  { symbol: 'SENSEX', change: '+0.71%', positive: true },
  { symbol: 'GOLD', change: '+0.45%', positive: true },
  { symbol: 'RELIANCE', change: '+1.24%', positive: true },
]

function TickerItem({ symbol, change, positive }) {
  return (
    <Box
      sx={{
        display: 'inline-flex', alignItems: 'center', gap: 1,
        background: 'rgba(255,255,255,0.06)', backdropFilter: 'blur(8px)',
        border: '1px solid rgba(255,255,255,0.1)',
        borderRadius: 2, px: 1.5, py: 0.75, whiteSpace: 'nowrap',
      }}
    >
      <Typography variant="caption" sx={{ color: '#fff', fontWeight: 600, fontSize: '0.8rem' }}>
        {symbol}
      </Typography>
      <Typography
        variant="caption"
        sx={{ color: positive ? '#00C853' : '#FF1744', fontWeight: 700, fontSize: '0.8rem' }}
      >
        {change}
      </Typography>
    </Box>
  )
}

export default function Hero() {
  return (
    <Box
      sx={{
        background: 'linear-gradient(135deg, #060D1F 0%, #0B1F3A 50%, #0E2244 100%)',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        pt: { xs: 10, md: 8 },
      }}
    >
      {/* Animated chart background */}
      <AnimatedChart color="#00C853" opacity={0.1} height={300} />

      {/* Radial glow effects */}
      <Box sx={{
        position: 'absolute', top: '10%', right: '5%',
        width: { xs: 300, md: 600 }, height: { xs: 300, md: 600 }, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(0,200,83,0.06) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />
      <Box sx={{
        position: 'absolute', bottom: '10%', left: '-10%',
        width: 400, height: 400, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(26,58,107,0.4) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
        <Grid container spacing={4} alignItems="center">
          {/* Left content */}
          <Grid item xs={12} md={7} lg={6}>
            <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              {/* Live ticker row */}
              <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mb: 3 }}>
                {FLOATING_TICKERS.map((t, idx) => (
                  <motion.div
                    key={t.symbol}
                    initial={{ opacity: 0, y: 12, scale: 0.85 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ delay: 0.15 + idx * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    whileHover={{ scale: 1.05, transition: { duration: 0.15 } }}
                  >
                    <TickerItem {...t} />
                  </motion.div>
                ))}
              </Box>

              <Typography
                variant="h1"
                sx={{
                  color: '#fff',
                  fontWeight: 900,
                  fontSize: { xs: '2.2rem', sm: '2.8rem', md: '3.5rem', lg: '4rem' },
                  lineHeight: 1.1,
                  mb: 2.5,
                  letterSpacing: '-1px',
                }}
              >
                Smart Investment
                <Box component="span" sx={{ display: 'block', color: '#00C853' }}>
                  Opportunities
                </Box>
                Managed by Experts
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  color: 'rgba(255,255,255,0.7)',
                  fontSize: { xs: '1rem', md: '1.1rem' },
                  lineHeight: 1.8,
                  mb: 4,
                  maxWidth: 520,
                }}
              >
                Explore stocks, ETFs, mutual funds and more. Start investing through trusted broker partners
                with expert guidance and data-driven insights.
              </Typography>

              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mb: 5 }}>
                <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                  <Button
                    component={Link}
                    to="/open-demat"
                    variant="contained"
                    color="secondary"
                    size="large"
                    endIcon={<ArrowForward />}
                    sx={{ fontWeight: 700, fontSize: '1rem', px: 4, py: 1.5 }}
                  >
                    Start Investing
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                  <Button
                    component={Link}
                    to="/stocks-etf"
                    variant="outlined"
                    size="large"
                    sx={{
                      fontWeight: 700, fontSize: '1rem', px: 4, py: 1.5,
                      color: '#fff', borderColor: 'rgba(255,255,255,0.3)',
                      '&:hover': { borderColor: '#00C853', color: '#00C853', background: 'rgba(0,200,83,0.08)' },
                    }}
                  >
                    View Opportunities
                  </Button>
                </motion.div>
              </Stack>

              {/* Stats */}
              <Grid container spacing={2}>
                {STATS.map((stat, i) => (
                  <Grid item xs={6} sm={3} key={stat.label}>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 + i * 0.1 }}
                    >
                      <Box
                        sx={{
                          background: 'rgba(255,255,255,0.04)',
                          border: '1px solid rgba(255,255,255,0.08)',
                          borderRadius: 2, p: 1.5, textAlign: 'center',
                        }}
                      >
                        <Typography sx={{ color: '#00C853', fontWeight: 800, fontSize: '1.3rem' }}>
                          {stat.value}
                        </Typography>
                        <Typography sx={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.75rem' }}>
                          {stat.label}
                        </Typography>
                      </Box>
                    </motion.div>
                  </Grid>
                ))}
              </Grid>
            </motion.div>
          </Grid>

          {/* Right — animated visual */}
          <Grid item xs={12} md={5} lg={6} sx={{ display: { xs: 'none', md: 'block' } }}>
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              style={{ animation: 'float 6s ease-in-out infinite' }}
            >
              <Box
                sx={{
                  position: 'relative',
                  background: 'rgba(255,255,255,0.04)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: 4,
                  p: 3,
                  overflow: 'hidden',
                }}
              >
                {/* Fake chart card */}
                <Typography sx={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.8rem', mb: 1 }}>Portfolio Performance</Typography>
                <Typography sx={{ color: '#fff', fontWeight: 800, fontSize: '2rem', mb: 0.5 }}>₹24,85,320</Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
                  <TrendingUp sx={{ color: '#00C853', fontSize: 18 }} />
                  <Typography sx={{ color: '#00C853', fontWeight: 700, fontSize: '0.9rem' }}>+18.4% this year</Typography>
                </Box>

                {/* Mini chart */}
                <Box sx={{ height: 120, position: 'relative', mb: 3 }}>
                  <AnimatedChart color="#00C853" opacity={0.3} height={120} />
                </Box>

                {/* Asset list */}
                {[
                  { name: 'NIFTY 50', alloc: '40%', change: '+12.4%' },
                  { name: 'Mutual Funds', alloc: '35%', change: '+22.1%' },
                  { name: 'Gold ETF', alloc: '15%', change: '+8.3%' },
                  { name: 'Fixed Deposit', alloc: '10%', change: '+7.5%' },
                ].map((item) => (
                  <Box
                    key={item.name}
                    sx={{
                      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                      py: 0.75, borderBottom: '1px solid rgba(255,255,255,0.06)',
                    }}
                  >
                    <Typography sx={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.85rem', fontWeight: 600 }}>
                      {item.name}
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 2 }}>
                      <Typography sx={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.8rem' }}>{item.alloc}</Typography>
                      <Typography sx={{ color: '#00C853', fontSize: '0.8rem', fontWeight: 700 }}>{item.change}</Typography>
                    </Box>
                  </Box>
                ))}
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
