import React from 'react'
import { Box, Container, Grid, Typography, Button } from '@mui/material'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  ShowChart, AccountBalance, Savings, Shield, BusinessCenter, Diamond, ArrowForward,
} from '@mui/icons-material'
import SectionTitle from '../common/SectionTitle'
import ScrollReveal from '../common/ScrollReveal'

const SERVICES = [
  {
    icon: ShowChart, label: 'Equity & Stocks', path: '/stocks-etf',
    color: '#1565C0', gradient: 'linear-gradient(135deg, #1565C0, #42A5F5)',
  },
  {
    icon: AccountBalance, label: 'Future & Options', path: '/futures-options',
    color: '#6A1B9A', gradient: 'linear-gradient(135deg, #6A1B9A, #AB47BC)',
  },
  {
    icon: AccountBalance, label: 'US Stocks', path: '/us-stocks',
    color: '#6A1B9A', gradient: 'linear-gradient(135deg, #6A1B9A, #AB47BC)',
  },
  {
    icon: AccountBalance, label: 'Alternative Investments Funds', path: '/futures-options',
    color: '#6A1B9A', gradient: 'linear-gradient(135deg, #6A1B9A, #AB47BC)',
  },
  {
    icon: AccountBalance, label: 'Insurance', path: '/insurance',
    color: '#6A1B9A', gradient: 'linear-gradient(135deg, #6A1B9A, #AB47BC)',
  },
  {
    icon: AccountBalance, label: 'Mutual Funds', path: '/mutual-funds',
    color: '#6A1B9A', gradient: 'linear-gradient(135deg, #6A1B9A, #AB47BC)',
  },
  {
    icon: AccountBalance, label: 'Commodities', path: '/commodities',
    color: '#6A1B9A', gradient: 'linear-gradient(135deg, #6A1B9A, #AB47BC)',
  },
  {
    icon: Savings, label: 'Fixed Deposits', path: '/fixed-deposit',
    color: '#E65100', gradient: 'linear-gradient(135deg, #E65100, #FF9800)',
  },
  {
    icon: Savings, label: 'Portfolio Management Services)', path: '/portfolio-management',
    color: '#E65100', gradient: 'linear-gradient(135deg, #E65100, #FF9800)',
  },
  {
    icon: Savings, label: 'Initial Public Offerings(IPO)', path: '/ipo',
    color: '#E65100', gradient: 'linear-gradient(135deg, #E65100, #FF9800)',
  },
  {
    icon: Shield, label: 'Insurance', path: '/insurance',
    color: '#00695C', gradient: 'linear-gradient(135deg, #00695C, #26A69A)',
  },
  {
    icon: BusinessCenter, label: 'Bonds', path: '/bonds',
    color: '#C62828', gradient: 'linear-gradient(135deg, #C62828, #EF5350)',
  },
  
]

export default function Services() {
  return (
    <Box sx={{ py: { xs: 8, md: 12 }, background: '#fff' }}>
      <Container maxWidth="xl">
        <SectionTitle
          tag="What We Offer"
          title="Investment Services"
          subtitle="Choose from a wide range of investment options tailored to your financial goals and risk appetite."
        />

        <Grid container spacing={3}>
          {SERVICES.map((svc, i) => {
            const Icon = svc.icon
            return (
              <Grid item xs={12} sm={6} md={4} key={svc.label}>
                <ScrollReveal delay={i * 0.08}>
                  <motion.div
                    whileHover={{ y: -6, transition: { duration: 0.22 } }}
                    style={{ height: '100%' }}
                  >
                    <Box
                      component={Link}
                      to={svc.path}
                      sx={{
                        display: 'flex', flexDirection: 'column', height: '100%',
                        p: 3, borderRadius: 3, textDecoration: 'none',
                        background: '#fff',
                        border: '1px solid rgba(11,31,58,0.07)',
                        boxShadow: '0 2px 16px rgba(11,31,58,0.06)',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          boxShadow: '0 8px 40px rgba(11,31,58,0.14)',
                          borderColor: `${svc.color}44`,
                        },
                      }}
                    >
                      {/* Icon */}
                      <Box
                        sx={{
                          width: 56, height: 56, borderRadius: 3,
                          background: svc.gradient,
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          mb: 2.5,
                          boxShadow: `0 6px 20px ${svc.color}33`,
                        }}
                      >
                        <Icon sx={{ color: '#fff', fontSize: 28 }} />
                      </Box>

                      <Typography variant="h6" sx={{ fontWeight: 700, color: 'primary.main', mb: 1 }}>
                        {svc.label}
                      </Typography>
                      <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.7, flexGrow: 1, mb: 2 }}>
                        {svc.description}
                      </Typography>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, color: svc.color }}>
                        <Typography variant="body2" sx={{ fontWeight: 700 }}>Explore</Typography>
                        <ArrowForward fontSize="small" />
                      </Box>
                    </Box>
                  </motion.div>
                </ScrollReveal>
              </Grid>
            )
          })}
        </Grid>
      </Container>
    </Box>
  )
}
