import React, { useState } from 'react'
import {
  Box, Container, Grid, Typography, Button, TextField, Paper, Alert,
  Divider, List, ListItem, ListItemIcon, ListItemText, Snackbar, MenuItem, CircularProgress,
} from '@mui/material'
import { Shield, CheckCircle, Send, HealthAndSafety, FamilyRestroom, Apartment, DirectionsCar, Business, Flight } from '@mui/icons-material'
import { motion, AnimatePresence } from 'framer-motion'
import PageHero from '../../components/common/PageHero'
import SectionTitle from '../../components/common/SectionTitle'
import ScrollReveal from '../../components/common/ScrollReveal'

const LIFE_INSURANCE = [
  { title: 'Term Plan', description: 'Pure life cover at lowest premiums. Get high sum assured for your family\'s financial security.', color: '#1565C0' },
  { title: 'Child Plan', description: 'Secure your child\'s future education and marriage with guaranteed returns.', color: '#1976D2' },
  { title: 'Pension Plan', description: 'Build a retirement corpus with guaranteed pension and spouse benefits.', color: '#1E88E5' },
  { title: 'Investment Plan', description: 'Wealth creation with life cover - ULIPs, endowment, and money-back plans.', color: '#2196F3' },
]

const GENERAL_INSURANCE = [
  { title: 'Health Insurance', description: 'Cashless hospitalization, OPD coverage, pre & post hospitalization expenses.', color: '#00695C' },
  { title: 'Motor Insurance', description: 'Comprehensive & third-party car & two-wheeler insurance with instant claim.', color: '#00897B' },
  { title: 'Business Insurance', description: 'Protect your business with property, liability, and trade insurance.', color: '#009688' },
  { title: 'Travel Insurance', description: 'Coverage for trip cancellation, baggage loss, medical emergencies abroad.', color: '#00BFA5' },
]

export default function Insurance() {
  const [form, setForm] = useState({ name: '', mobile: '', dob: '', email: '', insuranceType: '' })
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)
  const [toast, setToast] = useState({ open: false, message: '', severity: 'success' })

  const showToast = (message, severity = 'success') => {
    setToast({ open: true, message, severity })
  }

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Name is required'
    if (!/^\d{10}$/.test(form.mobile)) e.mobile = 'Enter valid 10-digit mobile number'
    if (!form.dob) e.dob = 'Date of birth is required'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Enter valid email address'
    if (!form.insuranceType) e.insuranceType = 'Please select insurance type'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (validate()) {
      setLoading(true)
      try {
        const response = await fetch('https://api.staticforms.xyz/submit', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            accessKey: 'YOUR_STATICFORM_ACCESS_KEY',
            subject: `New Insurance Quote Request - ${form.insuranceType}`,
            fromName: form.name,
            email: form.email,
            mobile: form.mobile,
            dob: form.dob,
            insuranceType: form.insuranceType,
            message: `Insurance Quote Request\nName: ${form.name}\nMobile: ${form.mobile}\nDOB: ${form.dob}\nEmail: ${form.email}\nInsurance Type: ${form.insuranceType}`,
          }),
        })
        if (response.ok) {
          setSubmitted(true)
          showToast('Request submitted successfully! We will contact you soon.', 'success')
        } else {
          showToast('Failed to submit request. Please try again.', 'error')
        }
      } catch (error) {
        showToast('Network error. Please check your connection.', 'error')
      } finally {
        setLoading(false)
      }
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
          <Grid item xs={12} md={6}>
            <SectionTitle
              tag="Life Insurance"
              title="Comprehensive Life Coverage"
              subtitle="Protect your family's future with our range of life insurance solutions."
              center={false}
            />

            <Grid container spacing={2} sx={{ mb: 4 }}>
              {LIFE_INSURANCE.map((item, i) => (
                <Grid item xs={12} sm={6} key={item.title}>
                  <ScrollReveal delay={i * 0.08}>
                    <motion.div whileHover={{ y: -4 }}>
                      <Box sx={{
                        p: 2.5, borderRadius: 2.5, background: '#fff',
                        border: '1px solid rgba(11,31,58,0.07)',
                        boxShadow: '0 2px 12px rgba(11,31,58,0.05)',
                        height: '100%',
                      }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1.5 }}>
                          <FamilyRestroom sx={{ color: item.color, fontSize: 22 }} />
                          <Typography variant="subtitle2" sx={{ fontWeight: 700, color: 'primary.main' }}>
                            {item.title}
                          </Typography>
                        </Box>
                        <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.6 }}>
                          {item.description}
                        </Typography>
                      </Box>
                    </motion.div>
                  </ScrollReveal>
                </Grid>
              ))}
            </Grid>

            <SectionTitle
              tag="General Insurance"
              title="Protect What Matters"
              subtitle="Safeguard your health, vehicle, business, and travels."
              center={false}
            />

            <Grid container spacing={2} sx={{ mb: 3 }}>
              {GENERAL_INSURANCE.map((item, i) => (
                <Grid item xs={12} sm={6} key={item.title}>
                  <ScrollReveal delay={i * 0.08}>
                    <motion.div whileHover={{ y: -4 }}>
                      <Box sx={{
                        p: 2.5, borderRadius: 2.5, background: '#fff',
                        border: '1px solid rgba(11,31,58,0.07)',
                        boxShadow: '0 2px 12px rgba(11,31,58,0.05)',
                        height: '100%',
                      }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1.5 }}>
                          {item.title === 'Health Insurance' && <HealthAndSafety sx={{ color: item.color, fontSize: 22 }} />}
                          {item.title === 'Motor Insurance' && <DirectionsCar sx={{ color: item.color, fontSize: 22 }} />}
                          {item.title === 'Business Insurance' && <Business sx={{ color: item.color, fontSize: 22 }} />}
                          {item.title === 'Travel Insurance' && <Flight sx={{ color: item.color, fontSize: 22 }} />}
                          <Typography variant="subtitle2" sx={{ fontWeight: 700, color: 'primary.main' }}>
                            {item.title}
                          </Typography>
                        </Box>
                        <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.6 }}>
                          {item.description}
                        </Typography>
                      </Box>
                    </motion.div>
                  </ScrollReveal>
                </Grid>
              ))}
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
                            <TextField
                              fullWidth select label="Insurance Type" value={form.insuranceType}
                              onChange={(e) => setForm({ ...form, insuranceType: e.target.value })}
                              error={!!errors.insuranceType} helperText={errors.insuranceType}
                              required
                            >
                              <MenuItem value="Term Plan">Term Plan</MenuItem>
                              <MenuItem value="Child Plan">Child Plan</MenuItem>
                              <MenuItem value="Pension Plan">Pension Plan</MenuItem>
                              <MenuItem value="Investment Plan">Investment Plan</MenuItem>
                              <MenuItem value="Health Insurance">Health Insurance</MenuItem>
                              <MenuItem value="Motor Insurance">Motor Insurance</MenuItem>
                              <MenuItem value="Business Insurance">Business Insurance</MenuItem>
                              <MenuItem value="Travel Insurance">Travel Insurance</MenuItem>
                            </TextField>
                          </Grid>
                          <Grid item xs={12}>
                            <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}>
                              <Button
                                type="submit" variant="contained" color="secondary"
                                fullWidth size="large" endIcon={loading ? <CircularProgress size={20} color="inherit" /> : <Send />}
                                sx={{ fontWeight: 700, py: 1.5 }}
                                disabled={loading}
                              >
                                {loading ? 'Submitting...' : 'Get Free Quote'}
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

      <Snackbar
        open={toast.open}
        autoHideDuration={6000}
        onClose={() => setToast({ ...toast, open: false })}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert onClose={() => setToast({ ...toast, open: false })} severity={toast.severity} sx={{ width: '100%' }}>
          {toast.message}
        </Alert>
      </Snackbar>
    </Box>
  )
}
