import React, { useState } from 'react'
import {
  Box, Container, Grid, Typography, Button, TextField, Paper, Alert,
  List, ListItem, ListItemIcon, ListItemText, Chip, Divider,
} from '@mui/material'
import { BusinessCenter, CheckCircle, Send, TrendingUp, Security, Speed, Groups } from '@mui/icons-material'
import { motion, AnimatePresence } from 'framer-motion'
import PageHero from '../../components/common/PageHero'
import SectionTitle from '../../components/common/SectionTitle'
import ScrollReveal from '../../components/common/ScrollReveal'

const PORTFOLIO_TYPES = [
  {
    name: 'Growth Portfolio',
    target: '18-22% CAGR',
    risk: 'Moderate-High',
    minInvestment: '₹50 Lakhs',
    description: 'Equity-focused portfolio targeting high-growth mid and large cap stocks.',
    color: '#1565C0',
  },
  {
    name: 'Balanced Portfolio',
    target: '14-18% CAGR',
    risk: 'Moderate',
    minInvestment: '₹50 Lakhs',
    description: 'Mix of equity and debt instruments for stable, consistent returns.',
    color: '#00695C',
  },
  {
    name: 'Conservative Portfolio',
    target: '10-14% CAGR',
    risk: 'Low-Moderate',
    minInvestment: '₹50 Lakhs',
    description: 'Debt-heavy allocation with select blue-chip equities for steady returns.',
    color: '#6A1B9A',
  },
]

const BENEFITS = [
  { icon: Groups, text: 'Dedicated portfolio manager assigned to your account' },
  { icon: TrendingUp, text: 'Customized strategy based on your financial goals' },
  { icon: Security, text: 'SEBI-regulated, transparent reporting every quarter' },
  { icon: Speed, text: 'Real-time portfolio tracking via mobile & web dashboard' },
]

export default function PMS() {
  const [form, setForm] = useState({ name: '', mobile: '', email: '', amount: '' })
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState({})

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Name is required'
    if (!/^\d{10}$/.test(form.mobile)) e.mobile = 'Enter valid 10-digit mobile number'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Enter valid email'
    if (!form.amount) e.amount = 'Investment amount is required'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (validate()) setSubmitted(true)
  }

  return (
    <Box sx={{ background: '#F8FAFC', minHeight: '100vh' }}>
      <PageHero
        title="Portfolio Management Services"
        subtitle="Exclusive, personalized portfolio management for HNI investors. Minimum ₹50 Lakhs. Let our experts manage your wealth."
        breadcrumb="PMS"
        icon={BusinessCenter}
      />

      <Container maxWidth="xl" sx={{ py: { xs: 4, md: 6 } }}>
        {/* What is PMS */}
        <ScrollReveal>
          <Box sx={{ mb: 6 }}>
            <Chip label="What is PMS" sx={{ mb: 2, background: 'rgba(0,200,83,0.1)', color: '#00C853', fontWeight: 700 }} />
            <Typography variant="h4" sx={{ fontWeight: 800, color: 'primary.main', mb: 2 }}>
              Managed by Experts, Made for You
            </Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary', maxWidth: 720, lineHeight: 1.8 }}>
              Portfolio Management Services (PMS) is a premium investment service where a professional portfolio manager
              makes investment decisions on your behalf. Unlike mutual funds, PMS offers complete customization, transparency,
              and dedicated attention to your portfolio. Minimum investment starts at ₹50 Lakhs as per SEBI guidelines.
            </Typography>
          </Box>
        </ScrollReveal>

        {/* Portfolio Types */}
        <SectionTitle tag="Portfolio Types" title="Choose Your Strategy" center={false} />
        <Grid container spacing={3} sx={{ mb: 6 }}>
          {PORTFOLIO_TYPES.map((pt, i) => (
            <Grid item xs={12} md={4} key={pt.name}>
              <ScrollReveal delay={i * 0.1}>
                <motion.div whileHover={{ y: -4 }}>
                  <Box
                    sx={{
                      p: 3, borderRadius: 3, background: '#fff',
                      border: `2px solid ${pt.color}22`,
                      boxShadow: '0 2px 14px rgba(11,31,58,0.06)',
                      position: 'relative', overflow: 'hidden',
                      '&::before': {
                        content: '""', position: 'absolute', top: 0, left: 0, right: 0, height: 4,
                        background: pt.color,
                      },
                    }}
                  >
                    <Typography variant="h6" sx={{ fontWeight: 800, color: 'primary.main', mb: 1 }}>{pt.name}</Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2.5, lineHeight: 1.7 }}>{pt.description}</Typography>
                    <Divider sx={{ mb: 2 }} />
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                      <Typography variant="caption" sx={{ color: 'text.secondary' }}>Target Returns</Typography>
                      <Typography variant="caption" sx={{ fontWeight: 700, color: '#00C853' }}>{pt.target}</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                      <Typography variant="caption" sx={{ color: 'text.secondary' }}>Risk Level</Typography>
                      <Typography variant="caption" sx={{ fontWeight: 700, color: pt.color }}>{pt.risk}</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                      <Typography variant="caption" sx={{ color: 'text.secondary' }}>Min Investment</Typography>
                      <Typography variant="caption" sx={{ fontWeight: 700, color: 'primary.main' }}>{pt.minInvestment}</Typography>
                    </Box>
                  </Box>
                </motion.div>
              </ScrollReveal>
            </Grid>
          ))}
        </Grid>

        {/* Benefits + Form */}
        <Grid container spacing={6}>
          <Grid item xs={12} md={5}>
            <SectionTitle tag="Benefits" title="Why Choose Our PMS" center={false} />
            <List>
              {BENEFITS.map((b, i) => {
                const Icon = b.icon
                return (
                  <ScrollReveal key={b.text} delay={i * 0.08}>
                    <ListItem disableGutters sx={{ pb: 2 }}>
                      <ListItemIcon>
                        <Box sx={{ width: 40, height: 40, borderRadius: 2, background: 'rgba(0,200,83,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          <Icon sx={{ color: '#00C853', fontSize: 20 }} />
                        </Box>
                      </ListItemIcon>
                      <ListItemText primary={b.text} primaryTypographyProps={{ variant: 'body2', fontWeight: 500, color: 'text.primary' }} />
                    </ListItem>
                  </ScrollReveal>
                )
              })}
            </List>
          </Grid>

          <Grid item xs={12} md={7}>
            <ScrollReveal direction="left">
              <Paper elevation={0} sx={{ p: { xs: 3, md: 4 }, borderRadius: 3, border: '1px solid rgba(11,31,58,0.08)', boxShadow: '0 4px 30px rgba(11,31,58,0.08)' }}>
                <Typography variant="h5" sx={{ fontWeight: 800, color: 'primary.main', mb: 0.5 }}>
                  Request PMS Consultation
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary', mb: 3 }}>
                  Our PMS expert will understand your goals and design a personalized strategy for you.
                </Typography>

                <AnimatePresence mode="wait">
                  {!submitted ? (
                    <motion.div key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                      <Box component="form" onSubmit={handleSubmit} noValidate>
                        <Grid container spacing={2.5}>
                          <Grid item xs={12} sm={6}>
                            <TextField fullWidth label="Full Name" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} error={!!errors.name} helperText={errors.name} />
                          </Grid>
                          <Grid item xs={12} sm={6}>
                            <TextField fullWidth label="Mobile Number" required value={form.mobile} onChange={(e) => setForm({ ...form, mobile: e.target.value })} error={!!errors.mobile} helperText={errors.mobile} inputProps={{ maxLength: 10 }} />
                          </Grid>
                          <Grid item xs={12}>
                            <TextField fullWidth label="Email Address" type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} error={!!errors.email} helperText={errors.email} />
                          </Grid>
                          <Grid item xs={12}>
                            <TextField fullWidth label="Investment Amount (₹)" required value={form.amount} onChange={(e) => setForm({ ...form, amount: e.target.value })} error={!!errors.amount} helperText={errors.amount || 'Minimum ₹50 Lakhs for PMS'} placeholder="e.g. 5000000" />
                          </Grid>
                          <Grid item xs={12}>
                            <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}>
                              <Button type="submit" variant="contained" color="secondary" fullWidth size="large" endIcon={<Send />} sx={{ fontWeight: 700, py: 1.5 }}>
                                Request Consultation
                              </Button>
                            </motion.div>
                          </Grid>
                        </Grid>
                      </Box>
                    </motion.div>
                  ) : (
                    <motion.div key="success" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}>
                      <Box sx={{ textAlign: 'center', py: 4 }}>
                        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring', stiffness: 200, delay: 0.1 }}>
                          <Box sx={{ width: 80, height: 80, borderRadius: '50%', background: 'linear-gradient(135deg, #00C853, #009624)', display: 'flex', alignItems: 'center', justifyContent: 'center', mx: 'auto', mb: 3 }}>
                            <CheckCircle sx={{ color: '#fff', fontSize: 42 }} />
                          </Box>
                        </motion.div>
                        <Typography variant="h5" sx={{ fontWeight: 800, color: 'primary.main', mb: 1 }}>Consultation Requested!</Typography>
                        <Typography variant="body1" sx={{ color: 'text.secondary', mb: 3 }}>
                          Thank you, <strong>{form.name}</strong>! Our PMS specialist will contact you on <strong>{form.mobile}</strong> within 2 business hours.
                        </Typography>
                        <Alert severity="success">Your PMS consultation request has been received successfully.</Alert>
                      </Box>
                    </motion.div>
                  )}
                </AnimatePresence>
              </Paper>
            </ScrollReveal>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
