import React, { useState } from 'react'
import { Box, Container, Grid, Typography, Button, TextField, Stack } from '@mui/material'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  ShowChart, AccountBalance, Savings, Shield, BusinessCenter, Diamond, ArrowForward,
} from '@mui/icons-material'
import SectionTitle from '../common/SectionTitle'
import ScrollReveal from '../common/ScrollReveal'

const SERVICES = [
  {
    icon: ShowChart,
    label: 'Equity & Stocks',
    path: '/stocks-etf',
    description: 'Invest in India’s top companies and ETFs with real-time insights.',
    color: '#1565C0',
    gradient: 'linear-gradient(135deg, #1565C0, #42A5F5)',
  },
  {
    icon: AccountBalance,
    label: 'Futures & Options',
    path: '/stocks-etf',
    description: 'View live options chain, greeks, and F&O strategies for active traders.',
    color: '#0D47A1',
    gradient: 'linear-gradient(135deg, #0D47A1, #1976D2)',
  },
  {
    icon: AccountBalance,
    label: 'US Stocks',
    path: '/stocks-etf',
    description: 'Trade 9 popular US stocks from India with seamless execution.',
    color: '#1E88E5',
    gradient: 'linear-gradient(135deg, #1E88E5, #42A5F5)',
  },
  {
    icon: AccountBalance,
    label: 'Alternative Investment Funds',
    path: '/mutual-funds',
    description: 'Explore private credit, real estate and other alternative funds.',
    color: '#F57C00',
    gradient: 'linear-gradient(135deg, #F57C00, #FFB300)',
  },
  {
    icon: Shield,
    label: 'Insurance',
    path: '/insurance',
    description: 'Get expert help comparing life and general insurance plans.',
    color: '#00695C',
    gradient: 'linear-gradient(135deg, #00695C, #26A69A)',
  },
  {
    icon: AccountBalance,
    label: 'Mutual Funds',
    path: '/mutual-funds',
    description: 'Browse 12 top SBI mutual funds for SIP and lump sum investments.',
    color: '#6A1B9A',
    gradient: 'linear-gradient(135deg, #6A1B9A, #AB47BC)',
  },
  {
    icon: Diamond,
    label: 'Commodities',
    path: '/commodities',
    description: 'Invest in gold & silver ETFs to hedge against inflation.',
    color: '#F9A825',
    gradient: 'linear-gradient(135deg, #F9A825, #FDD835)',
  },
  {
    icon: Savings,
    label: 'Fixed Deposits',
    path: '/fixed-deposit',
    description: 'Secure fixed income with top bank and corporate FD rates.',
    color: '#E65100',
    gradient: 'linear-gradient(135deg, #E65100, #FF9800)',
  },
  {
    icon: BusinessCenter,
    label: 'Portfolio Management Services',
    path: '/pms',
    description: 'Personalized PMS strategies for HNI investors with dedicated managers.',
    color: '#C62828',
    gradient: 'linear-gradient(135deg, #C62828, #EF5350)',
  },
  {
    icon: BusinessCenter,
    label: 'IPOs',
    path: '/ipo',
    description: 'Discover upcoming IPOs and plan your allocation ahead of listing.',
    color: '#2E7D32',
    gradient: 'linear-gradient(135deg, #2E7D32, #66BB6A)',
  },
  {
    icon: BusinessCenter,
    label: 'Bonds',
    path: '/bonds',
    description: 'Browse a selection of government and corporate bonds for stable income.',
    color: '#283593',
    gradient: 'linear-gradient(135deg, #283593, #3F51B5)',
  },
  {
    icon: BusinessCenter,
    label: 'Loans',
    path: '/loans',
    description: 'Apply for personal, home, business, vehicle & property loans.',
    color: '#455A64',
    gradient: 'linear-gradient(135deg, #455A64, #607D8B)',
  },
]

export default function Services() {
  const [showAll, setShowAll] = useState(false)
  const [enquiry, setEnquiry] = useState({ name: '', mobile: '', dob: '', email: '' })

  const visibleServices = showAll ? SERVICES : SERVICES.slice(0, 9)

  const handleEnquiryChange = (field) => (event) => {
    setEnquiry((prev) => ({ ...prev, [field]: event.target.value }))
  }

  const handleEnquirySubmit = () => {
    alert(`Enquiry submitted:\nName: ${enquiry.name}\nMobile: ${enquiry.mobile}\nDOB: ${enquiry.dob}\nEmail: ${enquiry.email}`)
    setEnquiry({ name: '', mobile: '', dob: '', email: '' })
  }

  return (
    <Box sx={{ py: { xs: 8, md: 12 }, background: '#fff' }}>
      <Container maxWidth="xl">
        <SectionTitle
          tag="What We Offer"
          title="Investment Services"
          subtitle="Choose from a wide range of investment options tailored to your financial goals and risk appetite."
        />

        <Grid container spacing={3}>
          {visibleServices.map((svc, i) => {
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
                        <Typography variant="body2" sx={{ fontWeight: 700 }}>View More</Typography>
                        <ArrowForward fontSize="small" />
                      </Box>
                    </Box>
                  </motion.div>
                </ScrollReveal>
              </Grid>
            )
          })}
        </Grid>

        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
          <Button variant="outlined" size="large" onClick={() => setShowAll((prev) => !prev)}>
            {showAll ? 'Show Less' : 'View More Services'}
          </Button>
        </Box>

        <Box sx={{ mt: 10, p: 4, borderRadius: 3, background: 'rgba(11,31,58,0.04)', border: '1px solid rgba(11,31,58,0.12)' }}>
          <Typography variant="h5" sx={{ fontWeight: 800, mb: 2 }}>
            Have a question? Get in touch.
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary', mb: 4 }}>
            Share your details and one of our experts will reach out to help you pick the best investment options.
          </Typography>

          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Name"
                value={enquiry.name}
                onChange={handleEnquiryChange('name')}
                placeholder="Your full name"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Mobile Number"
                value={enquiry.mobile}
                onChange={handleEnquiryChange('mobile')}
                placeholder="+91 98765 43210"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Date of Birth"
                type="date"
                value={enquiry.dob}
                onChange={handleEnquiryChange('dob')}
                InputLabelProps={{ shrink: true }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Email"
                type="email"
                value={enquiry.email}
                onChange={handleEnquiryChange('email')}
                placeholder="you@example.com"
              />
            </Grid>
          </Grid>

          <Stack direction="row" justifyContent="flex-end" sx={{ mt: 4 }}>
            <Button
              variant="contained"
              size="large"
              onClick={handleEnquirySubmit}
              disabled={!enquiry.name || !enquiry.mobile || !enquiry.dob || !enquiry.email}
            >
              Submit Enquiry
            </Button>
          </Stack>
        </Box>
      </Container>
    </Box>
  )
}
