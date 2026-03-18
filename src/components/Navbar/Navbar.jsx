import React, { useState, useEffect } from 'react'
import {
  AppBar, Toolbar, Box, Button, IconButton, Drawer, List, ListItem,
  ListItemText, Container, useScrollTrigger, Slide, Typography,
} from '@mui/material'
import { Menu as MenuIcon, Close as CloseIcon, TrendingUp } from '@mui/icons-material'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMobileMenu, closeMobileMenu } from '../../store/slices/uiSlice'

const NAV_LINKS = [
  { label: 'Home', path: '/' },
  { label: 'Stocks & ETF', path: '/stocks-etf' },
  { label: 'Mutual Funds', path: '/mutual-funds' },
  { label: 'Gold & Silver ETF', path: '/gold-silver-etf' },
  { label: 'Fixed Deposit', path: '/fixed-deposit' },
  { label: 'Insurance', path: '/insurance' },
  { label: 'Loans', path: '/loan' },
  { label: 'PMS', path: '/pms' },
]

function HideOnScroll({ children }) {
  const trigger = useScrollTrigger()
  return <Slide appear={false} direction="down" in={!trigger}>{children}</Slide>
}

export default function Navbar() {
  const dispatch = useDispatch()
  const mobileOpen = useSelector((s) => s.ui.mobileMenuOpen)
  const location = useLocation()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    dispatch(closeMobileMenu())
  }, [location.pathname, dispatch])

  return (
    <>
      <HideOnScroll>
        <motion.div initial={{ y: -100 }} animate={{ y: 0 }} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}>
        <AppBar
          position="fixed"
          elevation={0}
          sx={{
            background: scrolled
              ? 'rgba(11,31,58,0.97)'
              : 'rgba(11,31,58,0.85)',
            backdropFilter: 'blur(12px)',
            borderBottom: scrolled ? '1px solid rgba(255,255,255,0.08)' : 'none',
            transition: 'all 0.3s ease',
          }}
        >
          <Container maxWidth="xl">
            <Toolbar sx={{ py: { xs: 0.5, md: 1 }, px: '0 !important' }}>
              {/* Logo */}
              <Box
                component={Link}
                to="/"
                sx={{ display: 'flex', alignItems: 'center', gap: 1, textDecoration: 'none', flexGrow: { xs: 1, md: 0 }, mr: { md: 4 } }}
              >
                <Box
                  sx={{
                    width: 36, height: 36, borderRadius: 2,
                    background: 'linear-gradient(135deg, #00C853, #009624)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}
                >
                  <TrendingUp sx={{ color: '#fff', fontSize: 20 }} />
                </Box>
                <Typography variant="h6" sx={{ color: '#fff', fontWeight: 800, letterSpacing: '-0.5px' }}>
                  Money<span style={{ color: '#00C853' }}>View</span>
                </Typography>
              </Box>

              {/* Desktop nav */}
              <Box sx={{ display: { xs: 'none', lg: 'flex' }, gap: 0.5, flexGrow: 1, flexWrap: 'nowrap' }}>
                {NAV_LINKS.map((link) => (
                  <Button
                    key={link.path}
                    component={Link}
                    to={link.path}
                    sx={{
                      color: location.pathname === link.path ? '#00C853' : 'rgba(255,255,255,0.85)',
                      fontSize: '0.82rem',
                      px: 1.5,
                      py: 0.75,
                      borderRadius: 2,
                      fontWeight: location.pathname === link.path ? 700 : 500,
                      '&:hover': { color: '#fff', background: 'rgba(255,255,255,0.1)' },
                      position: 'relative',
                      '&::after': location.pathname === link.path ? {
                        content: '""', position: 'absolute', bottom: 2, left: '50%',
                        transform: 'translateX(-50%)', width: '60%', height: 2,
                        background: '#00C853', borderRadius: 1,
                      } : {},
                    }}
                  >
                    {link.label}
                  </Button>
                ))}
              </Box>

              {/* CTA */}
              <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                <Button
                  component={Link}
                  to="/open-demat"
                  variant="contained"
                  color="secondary"
                  size="small"
                  sx={{ fontWeight: 700, whiteSpace: 'nowrap' }}
                >
                  Open Demat Account
                </Button>
              </Box>

              {/* Mobile menu icon */}
              <IconButton
                sx={{ color: '#fff', display: { xs: 'flex', lg: 'none' } }}
                onClick={() => dispatch(toggleMobileMenu())}
              >
                {mobileOpen ? <CloseIcon /> : <MenuIcon />}
              </IconButton>
            </Toolbar>
          </Container>
        </AppBar>
        </motion.div>
      </HideOnScroll>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={() => dispatch(closeMobileMenu())}
        PaperProps={{
          sx: {
            width: 280,
            background: '#0B1F3A',
            pt: 8,
          },
        }}
      >
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 30 }}
            >
              <List sx={{ px: 2 }}>
                {NAV_LINKS.map((link, i) => (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06 }}
                  >
                    <ListItem
                      component={Link}
                      to={link.path}
                      sx={{
                        borderRadius: 2, mb: 0.5,
                        color: location.pathname === link.path ? '#00C853' : 'rgba(255,255,255,0.85)',
                        background: location.pathname === link.path ? 'rgba(0,200,83,0.1)' : 'transparent',
                        '&:hover': { background: 'rgba(255,255,255,0.08)', color: '#fff' },
                      }}
                    >
                      <ListItemText
                        primary={link.label}
                        primaryTypographyProps={{ fontWeight: 600, fontSize: '0.95rem' }}
                      />
                    </ListItem>
                  </motion.div>
                ))}
                <Box sx={{ px: 2, pt: 2 }}>
                  <Button
                    component={Link}
                    to="/open-demat"
                    variant="contained"
                    color="secondary"
                    fullWidth
                    sx={{ fontWeight: 700 }}
                  >
                    Open Demat Account
                  </Button>
                </Box>
              </List>
            </motion.div>
          )}
        </AnimatePresence>
      </Drawer>
    </>
  )
}
