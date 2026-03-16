import React from 'react'
import {
  Box, Container, Grid, Typography, Button, Chip, Stack, Divider, List, ListItem, ListItemIcon, ListItemText,
} from '@mui/material'
import { CheckCircle, ArrowForward, OpenInNew, Star } from '@mui/icons-material'
import { motion } from 'framer-motion'
import { BROKERS } from '../../data/brokers'
import PageHero from '../../components/common/PageHero'
import SectionTitle from '../../components/common/SectionTitle'
import ScrollReveal from '../../components/common/ScrollReveal'

const STEPS = [
  { step: '01', title: 'Choose a Broker', desc: 'Select from our trusted broker partners below.' },
  { step: '02', title: 'Click & Register', desc: 'Click the button to open account — our referral link ensures you get priority service.' },
  { step: '03', title: 'Complete KYC', desc: 'Quick online KYC with Aadhaar & PAN. Takes only 10 minutes.' },
  { step: '04', title: 'Start Investing', desc: 'Account activated in 1-2 days. Start investing in stocks, ETFs, MFs & more!' },
]

export default function OpenDemat() {
  return (
    <Box sx={{ background: '#F8FAFC', minHeight: '100vh' }}>
      <PageHero
        title="Open Demat Account"
        subtitle="Choose from India's top SEBI-registered brokers. Open a free demat account in minutes and start your investment journey."
        breadcrumb="Open Demat"
      />

      <Container maxWidth="xl" sx={{ py: { xs: 4, md: 6 } }}>
        {/* Steps */}
        <ScrollReveal>
          <Box sx={{ mb: 7 }}>
            <SectionTitle tag="How It Works" title="Open Account in 4 Simple Steps" />
            <Grid container spacing={3}>
              {STEPS.map((step, i) => (
                <Grid item xs={12} sm={6} md={3} key={step.step}>
                  <ScrollReveal delay={i * 0.1}>
                    <Box
                      sx={{
                        p: 3, borderRadius: 3, background: '#fff', textAlign: 'center',
                        border: '1px solid rgba(11,31,58,0.07)',
                        boxShadow: '0 2px 14px rgba(11,31,58,0.05)',
                        position: 'relative',
                      }}
                    >
                      <Box
                        sx={{
                          width: 52, height: 52, borderRadius: '50%',
                          background: 'linear-gradient(135deg, #0B1F3A, #1A3A6B)',
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          mx: 'auto', mb: 2,
                        }}
                      >
                        <Typography sx={{ color: '#00C853', fontWeight: 900, fontSize: '1.1rem' }}>{step.step}</Typography>
                      </Box>
                      <Typography variant="subtitle1" sx={{ fontWeight: 700, color: 'primary.main', mb: 1 }}>{step.title}</Typography>
                      <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.7 }}>{step.desc}</Typography>
                    </Box>
                  </ScrollReveal>
                </Grid>
              ))}
            </Grid>
          </Box>
        </ScrollReveal>

        {/* Broker Cards */}
        <SectionTitle tag="Choose Your Broker" title="Our Partner Brokers" subtitle="All brokers are SEBI-registered and trusted by millions of investors across India." />

        <Grid container spacing={4} justifyContent="center">
          {BROKERS.map((broker, i) => (
            <Grid item xs={12} md={4} key={broker.id}>
              <ScrollReveal delay={i * 0.12}>
                <motion.div whileHover={{ y: -8 }}>
                  <Box
                    sx={{
                      borderRadius: 3, overflow: 'hidden', background: '#fff',
                      border: '1px solid rgba(11,31,58,0.07)',
                      boxShadow: '0 4px 24px rgba(11,31,58,0.08)',
                    }}
                  >
                    {/* Header */}
                    <Box
                      sx={{
                        p: 3.5,
                        background: `linear-gradient(135deg, ${broker.color}15, ${broker.color}08)`,
                        borderBottom: `3px solid ${broker.color}`,
                      }}
                    >
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <Box
                          sx={{
                            width: 60, height: 60, borderRadius: 3,
                            background: `linear-gradient(135deg, ${broker.color}, ${broker.color}aa)`,
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                          }}
                        >
                          <Typography sx={{ color: '#fff', fontWeight: 900, fontSize: '1.2rem' }}>{broker.logo}</Typography>
                        </Box>
                        <Box>
                          <Typography variant="h5" sx={{ fontWeight: 800, color: 'primary.main' }}>{broker.name}</Typography>
                          <Typography variant="caption" sx={{ color: 'text.secondary' }}>{broker.tagline}</Typography>
                        </Box>
                      </Box>
                    </Box>

                    {/* Body */}
                    <Box sx={{ p: 3.5 }}>
                      <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.8, mb: 3 }}>
                        {broker.description}
                      </Typography>

                      <Typography variant="subtitle2" sx={{ fontWeight: 700, color: 'primary.main', mb: 1.5 }}>
                        Key Benefits:
                      </Typography>
                      <List dense disablePadding sx={{ mb: 3 }}>
                        {broker.features.map((feat) => (
                          <ListItem key={feat} disableGutters sx={{ py: 0.5 }}>
                            <ListItemIcon sx={{ minWidth: 26 }}>
                              <CheckCircle sx={{ color: '#00C853', fontSize: 16 }} />
                            </ListItemIcon>
                            <ListItemText
                              primary={feat}
                              primaryTypographyProps={{ variant: 'body2', fontWeight: 500, color: 'text.primary' }}
                            />
                          </ListItem>
                        ))}
                      </List>

                      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                        <Button
                          href={broker.referralUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          variant="contained"
                          fullWidth
                          size="large"
                          endIcon={<OpenInNew />}
                          sx={{
                            fontWeight: 700, py: 1.5,
                            background: `linear-gradient(135deg, ${broker.color}, ${broker.color}cc)`,
                            '&:hover': { background: broker.color },
                          }}
                        >
                          Open Free Demat Account
                        </Button>
                      </motion.div>

                      <Typography variant="caption" sx={{ display: 'block', textAlign: 'center', mt: 1.5, color: 'text.disabled' }}>
                        You will be redirected to {broker.name}'s official website
                      </Typography>
                    </Box>
                  </Box>
                </motion.div>
              </ScrollReveal>
            </Grid>
          ))}
        </Grid>

        {/* Disclaimer */}
        <Box sx={{ mt: 6, p: 2.5, background: 'rgba(255,193,7,0.06)', border: '1px solid rgba(255,193,7,0.3)', borderRadius: 2 }}>
          <Typography variant="caption" sx={{ color: 'text.secondary', lineHeight: 1.8, display: 'block' }}>
            <strong>Note:</strong> MoneyView earns a referral fee when you open an account through our links. This does not affect your charges or the service quality from the broker. All broker platforms are SEBI-registered and your funds/securities are held in segregated accounts.
          </Typography>
        </Box>
      </Container>
    </Box>
  )
}
