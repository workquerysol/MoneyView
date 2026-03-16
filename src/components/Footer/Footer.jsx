import React from 'react'
import {
  Box, Container, Grid, Typography, Link as MuiLink, Divider, IconButton, TextField, Button, Stack,
} from '@mui/material'
import { Link } from 'react-router-dom'
import { Facebook, TrendingUp, ArrowForward } from '@mui/icons-material'
import { motion } from 'framer-motion'

const FOOTER_LINKS = {
  Services: [
    { label: 'Stocks & ETF', path: '/stocks-etf' },
    { label: 'Mutual Funds', path: '/mutual-funds' },
    { label: 'Fixed Deposit', path: '/fixed-deposit' },
    { label: 'Insurance', path: '/insurance' },
    { label: 'PMS', path: '/pms' },
    { label: 'Gold & Silver ETF', path: '/gold-silver-etf' },
  ],
  Company: [
    { label: 'About Us', path: '/#about' },
    { label: 'Open Demat', path: '/open-demat' },
    { label: 'Contact', path: '/#contact' },
  ],
}

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        background: 'linear-gradient(135deg, #060D1F 0%, #0B1F3A 100%)',
        color: 'rgba(255,255,255,0.8)',
        pt: 8,
        pb: 4,
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={4}>
          {/* Brand */}
          <Grid item xs={12} md={4}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
              <Box
                sx={{
                  width: 36, height: 36, borderRadius: 2,
                  background: 'linear-gradient(135deg, #00C853, #009624)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}
              >
                <TrendingUp sx={{ color: '#fff', fontSize: 20 }} />
              </Box>
              <Typography variant="h6" sx={{ color: '#fff', fontWeight: 800 }}>
                Money<span style={{ color: '#00C853' }}>View</span>
              </Typography>
            </Box>
            <Typography variant="body2" sx={{ mb: 3, lineHeight: 1.8, maxWidth: 320, color: 'rgba(255,255,255,0.6)' }}>
              Expert-curated investment opportunities in stocks, ETFs, mutual funds, FDs and more.
              Start your wealth journey with trusted broker partners.
            </Typography>
            <Stack direction="row" spacing={1}>
              <IconButton
                component="a"
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener"
                sx={{
                  color: '#fff', background: 'rgba(255,255,255,0.08)',
                  '&:hover': { background: '#1877F2' },
                }}
              >
                <Facebook />
              </IconButton>
            </Stack>
          </Grid>

          {/* Links */}
          {Object.entries(FOOTER_LINKS).map(([title, links]) => (
            <Grid item xs={6} sm={4} md={2} key={title}>
              <Typography variant="subtitle2" sx={{ color: '#fff', fontWeight: 700, mb: 2, letterSpacing: 0.5 }}>
                {title}
              </Typography>
              <Stack spacing={1}>
                {links.map((l) => (
                  <MuiLink
                    key={l.label}
                    component={Link}
                    to={l.path}
                    sx={{
                      color: 'rgba(255,255,255,0.6)', textDecoration: 'none', fontSize: '0.875rem',
                      '&:hover': { color: '#00C853' }, transition: 'color 0.2s',
                    }}
                  >
                    {l.label}
                  </MuiLink>
                ))}
              </Stack>
            </Grid>
          ))}

          {/* Newsletter */}
          <Grid item xs={12} sm={12} md={4}>
            <Typography variant="subtitle2" sx={{ color: '#fff', fontWeight: 700, mb: 2 }}>
              Newsletter
            </Typography>
            <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.6)', mb: 2, fontSize: '0.875rem' }}>
              Get investment tips & market updates directly to your inbox.
            </Typography>
            <Box sx={{ display: 'flex', gap: 1 }}>
              <TextField
                size="small"
                placeholder="Enter your email"
                variant="outlined"
                sx={{
                  flexGrow: 1,
                  '& .MuiOutlinedInput-root': {
                    color: '#fff', background: 'rgba(255,255,255,0.08)',
                    '& fieldset': { borderColor: 'rgba(255,255,255,0.2)' },
                    '&:hover fieldset': { borderColor: 'rgba(255,255,255,0.4)' },
                    '&.Mui-focused fieldset': { borderColor: '#00C853' },
                  },
                  '& input::placeholder': { color: 'rgba(255,255,255,0.4)' },
                }}
              />
              <Button
                variant="contained"
                color="secondary"
                sx={{ minWidth: 'unset', px: 2 }}
              >
                <ArrowForward fontSize="small" />
              </Button>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4, borderColor: 'rgba(255,255,255,0.1)' }} />

        {/* Disclaimer */}
        <Box
          sx={{
            background: 'rgba(255,193,7,0.08)', border: '1px solid rgba(255,193,7,0.2)',
            borderRadius: 2, p: 2, mb: 3,
          }}
        >
          <Typography variant="caption" sx={{ color: 'rgba(255,193,7,0.9)', display: 'block', lineHeight: 1.7 }}>
            <strong>Disclaimer:</strong> Investments in securities market are subject to market risks. Read all related
            documents carefully before investing. Past performance is not indicative of future returns. MoneyView
            is a referral platform and does not provide investment advisory services. Please consult your financial
            advisor before making investment decisions.
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: 2 }}>
          <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.4)' }}>
            © {new Date().getFullYear()} MoneyView. All rights reserved.
          </Typography>
          <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.4)' }}>
            SEBI Registered Investment Advisor | ARN-XXXXX
          </Typography>
        </Box>
      </Container>
    </Box>
  )
}
