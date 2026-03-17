import React, { useEffect, useRef, useState } from 'react'
import {
  Box, Container, Typography, Button, Grid, Chip, Stack, Avatar, Tabs, Tab, List, ListItem, ListItemText,
} from '@mui/material'
import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import { TrendingUp, ArrowForward, PlayArrow } from '@mui/icons-material'
import AnimatedChart from '../common/AnimatedChart'

const STATS = [
  { value: '10+', label: 'Happy Investors' },
  { value: '₹50L+', label: 'Assets Managed' },
  { value: '10+', label: 'Years of Trust' },
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
  const [heroTab, setHeroTab] = useState(0)
  const { scrollY } = useScroll()
  const yParallaxFast = useTransform(scrollY, [0, 800], [0, -200])
  const yParallaxSlow = useTransform(scrollY, [0, 800], [0, 100])

  const FNO_CHAIN = [
    { name: 'NIFTY 50', strike: 19500, type: 'Call', expiry: '28 Mar 2026', last: '120', change: '+2.1%' },
    { name: 'BANKNIFTY', strike: 45000, type: 'Put', expiry: '28 Mar 2026', last: '78', change: '-0.6%' },
    { name: 'NIFTY 50', strike: 19600, type: 'Call', expiry: '28 Mar 2026', last: '94', change: '+1.4%' },
  ]

  const US_STOCKS = [
    { name: 'Apple', symbol: 'AAPL', change: '+1.2%' },
    { name: 'Microsoft', symbol: 'MSFT', change: '+0.8%' },
    { name: 'Amazon', symbol: 'AMZN', change: '+0.7%' },
    { name: 'Tesla', symbol: 'TSLA', change: '-0.5%' },
    { name: 'Google', symbol: 'GOOGL', change: '+1.1%' },
    { name: 'Nvidia', symbol: 'NVDA', change: '+2.5%' },
    { name: 'Meta', symbol: 'META', change: '+0.9%' },
    { name: 'Netflix', symbol: 'NFLX', change: '-0.2%' },
    { name: 'AMD', symbol: 'AMD', change: '+1.7%' },
  ]

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
      <motion.div style={{ position: 'absolute', width: '100%', height: '100%', y: yParallaxSlow }}>
        <AnimatedChart color="#00C853" opacity={0.1} height={300} />
      </motion.div>

      {/* Radial glow effects */}
      <motion.div style={{
        position: 'absolute', top: '10%', right: '5%',
        width: 600, height: 600, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(0,200,83,0.06) 0%, transparent 70%)',
        pointerEvents: 'none',
        y: yParallaxFast
      }} />
      <motion.div style={{
        position: 'absolute', bottom: '10%', left: '-10%',
        width: 400, height: 400, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(26,58,107,0.4) 0%, transparent 70%)',
        pointerEvents: 'none',
        y: yParallaxSlow
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

          {/* Right — Motilal & Quick Views */}
          <Grid item xs={12} md={5} lg={6} sx={{ display: { xs: 'none', md: 'block' } }}>
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3, type: 'spring', bounce: 0.4 }}
              style={{ y: yParallaxFast }}
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
                <Tabs
                  value={heroTab}
                  onChange={(_, v) => setHeroTab(v)}
                  textColor="secondary"
                  indicatorColor="secondary"
                  sx={{ mb: 2 }}
                >
                  <Tab label="Motilal" />
                  <Tab label="F&O" />
                  <Tab label="US Stocks" />
                </Tabs>

                {heroTab === 0 && (
                  <Box>
                    <Typography sx={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem', mb: 1 }}>
                      Open a Demat account with Motilal Oswal
                    </Typography>
                    <Typography sx={{ color: '#fff', fontWeight: 800, fontSize: '1.6rem', mb: 2 }}>
                      Start Investing Today
                    </Typography>
                    <Typography sx={{ color: 'rgba(255,255,255,0.7)', mb: 3 }}>
                      Get priority onboarding, research tools and seamless trading access across equities, derivatives, mutual funds and more.
                    </Typography>
                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Button
                        component="a"
                        href="https://shorturl.at/pG1yY"
                        target="_blank"
                        rel="noopener noreferrer"
                        variant="contained"
                        color="secondary"
                        fullWidth
                        endIcon={<ArrowForward />}
                        sx={{ fontWeight: 700, py: 1.5 }}
                      >
                        Open Demat Account
                      </Button>
                    </motion.div>
                  </Box>
                )}

                {heroTab === 1 && (
                  <Box>
                    <Typography sx={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem', mb: 1 }}>
                      Sample options chain (F&O)
                    </Typography>
                    <List dense sx={{ mb: 2 }}>
                      {FNO_CHAIN.map((item) => (
                        <ListItem key={`${item.name}-${item.strike}-${item.type}`} sx={{ py: 0.5 }}>
                          <ListItemText
                            primary={`${item.name} ${item.type} ${item.strike}`} 
                            secondary={`${item.expiry} • Last ${item.last} • ${item.change}`}
                            primaryTypographyProps={{ sx: { color: '#fff', fontWeight: 700, fontSize: '0.85rem' } }}
                            secondaryTypographyProps={{ sx: { color: 'rgba(255,255,255,0.6)', fontSize: '0.75rem' } }}
                          />
                        </ListItem>
                      ))}
                    </List>
                    <Button
                      component={Link}
                      to="/stocks-etf"
                      variant="outlined"
                      fullWidth
                      sx={{ color: '#fff', borderColor: 'rgba(255,255,255,0.4)' }}
                    >
                      View Full Options Chain
                    </Button>
                  </Box>
                )}

                {heroTab === 2 && (
                  <Box>
                    <Typography sx={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem', mb: 1 }}>
                      Trending US stocks
                    </Typography>
                    <List dense sx={{ mb: 2 }}>
                      {US_STOCKS.slice(0, 6).map((stock) => (
                        <ListItem key={stock.symbol} sx={{ py: 0.5 }}>
                          <ListItemText
                            primary={`${stock.symbol} • ${stock.name}`}
                            secondary={stock.change}
                            primaryTypographyProps={{ sx: { color: '#fff', fontWeight: 700, fontSize: '0.85rem' } }}
                            secondaryTypographyProps={{ sx: { color: 'rgba(255,255,255,0.6)', fontSize: '0.75rem' } }}
                          />
                        </ListItem>
                      ))}
                    </List>
                    <Button
                      component={Link}
                      to="/stocks-etf"
                      variant="outlined"
                      fullWidth
                      sx={{ color: '#fff', borderColor: 'rgba(255,255,255,0.4)' }}
                    >
                      View All US Stocks
                    </Button>
                  </Box>
                )}
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
