import React, { useState } from 'react'
import {
  Box, Container, Grid, Typography, Button, TextField, Paper, Alert,
  Divider, List, ListItem, ListItemIcon, ListItemText,
} from '@mui/material'
import { Shield, CheckCircle, Send, HealthAndSafety, FamilyRestroom, Apartment } from '@mui/icons-material'
import { motion, AnimatePresence } from 'framer-motion'
import PageHero from '../../components/common/PageHero'
import SectionTitle from '../../components/common/SectionTitle'
import ScrollReveal from '../../components/common/ScrollReveal'

const INSURANCE_TYPES = [
  { icon: FamilyRestroom, title: 'Term Life Insurance', description: 'High coverage at low premiums. Protect your family\'s future financially.', color: '#1565C0' },
  { icon: HealthAndSafety, title: 'Health Insurance', description: 'Cashless hospitalization, OPD coverage, and comprehensive health protection.', color: '#00695C' },
  { icon: Apartment, title: 'Investment Plans', description: 'ULIPs, endowment, and money-back plans for wealth + protection.', color: '#6A1B9A' },
]

export default function Insurance() {
  const [form, setForm] = useState({ name: '', mobile: '', dob: '', email: '' })
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState({})

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Name is required'
    if (!/^\d{10}$/.test(form.mobile)) e.mobile = 'Enter valid 10-digit mobile number'
    if (!form.dob) e.dob = 'Date of birth is required'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Enter valid email address'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (validate()) {
      setSubmitted(true)
    }
  }

  return (
    <Box sx={{ background: '#F8FAFC', minHeight: '100vh' }}>
      <PageHero
        title="Insurance"
        subtitle="Secure your life and health with the best insurance plans. Get a free consultation from our experts."
        breadcrumb="Insurance"
        icon={Shield}
      />

      <Container maxWidth="xl" sx={{ py: { xs: 4, md: 6 } }}>
        <Grid container spacing={6}>
          {/* Left: Info */}
          <Grid item xs={12} md={6}>
            <SectionTitle
              tag="Why Insurance"
              title="Protect What Matters Most"
              subtitle="Insurance is the foundation of any sound financial plan. Don't leave your family's future to chance."
              center={false}
            />

            <Grid container spacing={2.5} sx={{ mb: 3 }}>
              {INSURANCE_TYPES.map((type, i) => {
                const Icon = type.icon
                return (
                  <Grid item xs={12} key={type.title}>
                    <ScrollReveal delay={i * 0.1}>
                      <Box
                        sx={{
                          p: 2.5, borderRadius: 2.5, background: '#fff',
                          border: '1px solid rgba(11,31,58,0.07)',
                          boxShadow: '0 2px 12px rgba(11,31,58,0.05)',
                          display: 'flex', gap: 2, alignItems: 'flex-start',
                        }}
                      >
                        <Box sx={{
                          width: 44, height: 44, borderRadius: 2,
                          background: `${type.color}15`,
                          display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                        }}>
                          <Icon sx={{ color: type.color, fontSize: 22 }} />
                        </Box>
                        <Box>
                          <Typography variant="subtitle2" sx={{ fontWeight: 700, color: 'primary.main', mb: 0.5 }}>
                            {type.title}
                          </Typography>
                          <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.6 }}>
                            {type.description}
                          </Typography>
                        </Box>
                      </Box>
                    </ScrollReveal>
                  </Grid>
                )
              })}
            </Grid>

            <List dense>
              {['Free expert consultation', 'Lowest premiums guaranteed', 'Instant policy issuance', 'Pan India claims support'].map((item) => (
                <ListItem key={item} disableGutters>
                  <ListItemIcon sx={{ minWidth: 28 }}>
                    <CheckCircle sx={{ color: '#00C853', fontSize: 18 }} />
                  </ListItemIcon>
                  <ListItemText primary={item} primaryTypographyProps={{ variant: 'body2', fontWeight: 500 }} />
                </ListItem>
              ))}
            </List>
          </Grid>

          {/* Right: Form */}
          <Grid item xs={12} md={6}>
            <ScrollReveal direction="left">
              <Paper elevation={0} sx={{ p: { xs: 3, md: 4 }, borderRadius: 3, border: '1px solid rgba(11,31,58,0.08)', boxShadow: '0 4px 30px rgba(11,31,58,0.08)' }}>
                <Typography variant="h5" sx={{ fontWeight: 800, color: 'primary.main', mb: 0.5 }}>
                  Get Free Insurance Quote
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary', mb: 3 }}>
                  Fill in your details and our insurance advisor will contact you within 24 hours.
                </Typography>

                <AnimatePresence mode="wait">
                  {!submitted ? (
                    <motion.div key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                      <Box component="form" onSubmit={handleSubmit} noValidate>
                        <Grid container spacing={2.5}>
                          <Grid item xs={12}>
                            <TextField
                              fullWidth label="Full Name" value={form.name}
                              onChange={(e) => setForm({ ...form, name: e.target.value })}
                              error={!!errors.name} helperText={errors.name}
                              required
                            />
                          </Grid>
                          <Grid item xs={12} sm={6}>
                            <TextField
                              fullWidth label="Mobile Number" value={form.mobile}
                              onChange={(e) => setForm({ ...form, mobile: e.target.value })}
                              error={!!errors.mobile} helperText={errors.mobile}
                              inputProps={{ maxLength: 10 }} required
                            />
                          </Grid>
                          <Grid item xs={12} sm={6}>
                            <TextField
                              fullWidth label="Date of Birth" type="date" value={form.dob}
                              onChange={(e) => setForm({ ...form, dob: e.target.value })}
                              error={!!errors.dob} helperText={errors.dob}
                              InputLabelProps={{ shrink: true }} required
                            />
                          </Grid>
                          <Grid item xs={12}>
                            <TextField
                              fullWidth label="Email Address" type="email" value={form.email}
                              onChange={(e) => setForm({ ...form, email: e.target.value })}
                              error={!!errors.email} helperText={errors.email}
                              required
                            />
                          </Grid>
                          <Grid item xs={12}>
                            <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}>
                              <Button
                                type="submit" variant="contained" color="secondary"
                                fullWidth size="large" endIcon={<Send />}
                                sx={{ fontWeight: 700, py: 1.5 }}
                              >
                                Get Free Quote
                              </Button>
                            </motion.div>
                          </Grid>
                        </Grid>
                      </Box>
                    </motion.div>
                  ) : (
                    <motion.div key="success" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}>
                      <Box sx={{ textAlign: 'center', py: 4 }}>
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ type: 'spring', stiffness: 200, delay: 0.1 }}
                        >
                          <Box sx={{
                            width: 80, height: 80, borderRadius: '50%',
                            background: 'linear-gradient(135deg, #00C853, #009624)',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            mx: 'auto', mb: 3,
                          }}>
                            <CheckCircle sx={{ color: '#fff', fontSize: 42 }} />
                          </Box>
                        </motion.div>
                        <Typography variant="h5" sx={{ fontWeight: 800, color: 'primary.main', mb: 1 }}>
                          Request Submitted!
                        </Typography>
                        <Typography variant="body1" sx={{ color: 'text.secondary', mb: 3 }}>
                          Thank you, <strong>{form.name}</strong>! Our insurance advisor will call you on <strong>{form.mobile}</strong> within 24 hours.
                        </Typography>
                        <Alert severity="success" sx={{ textAlign: 'left' }}>
                          Your inquiry has been received. Expect a call between 9 AM - 7 PM on working days.
                        </Alert>
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
