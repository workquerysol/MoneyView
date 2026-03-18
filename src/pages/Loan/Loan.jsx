import React, { useState } from 'react'
import {
  Box, Container, Grid, Typography, Button, TextField, Paper, Alert,
  List, ListItem, ListItemIcon, ListItemText, Chip, Snackbar, CircularProgress, MenuItem,
} from '@mui/material'
import { AccountBalance, CheckCircle, Send, Home, DirectionsCar, Business, Apartment, AttachMoney } from '@mui/icons-material'
import { motion, AnimatePresence } from 'framer-motion'
import PageHero from '../../components/common/PageHero'
import SectionTitle from '../../components/common/SectionTitle'
import ScrollReveal from '../../components/common/ScrollReveal'

const LOAN_TYPES = [
  {
    name: 'Personal Loan',
    icon: AttachMoney,
    description: 'Quick personal loans for weddings, travel, medical emergencies, or any personal need. Minimal documentation.',
    color: '#1565C0',
    processingFee: 'Up to 2.5%',
    tenure: 'Up to 7 years',
  },
  {
    name: 'Home Loan',
    icon: Home,
    description: 'Buy your dream home with competitive interest rates. Includes builder & resale property loans.',
    color: '#00695C',
    processingFee: 'Up to 1%',
    tenure: 'Up to 30 years',
  },
  {
    name: 'Business Loan',
    icon: Business,
    description: 'Working capital, machinery purchase, or expansion funding. Quick approval with flexible repayment.',
    color: '#6A1B9A',
    processingFee: 'Up to 2%',
    tenure: 'Up to 5 years',
  },
  {
    name: 'Loan Against Property',
    icon: Apartment,
    description: 'Unlock value of your residential or commercial property. Get funds for business or personal use.',
    color: '#E65100',
    processingFee: 'Up to 1%',
    tenure: 'Up to 15 years',
  },
  {
    name: 'Vehicle Loan',
    icon: DirectionsCar,
    description: 'Finance for new cars, used cars, or two-wheelers. Quick disbursement with competitive rates.',
    color: '#0277BD',
    processingFee: 'Up to 3%',
    tenure: 'Up to 7 years',
  },
]

export default function Loan() {
  const [form, setForm] = useState({ name: '', mobile: '', email: '', income: '', occupation: '', loanAmount: '', loanType: '' })
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
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Enter valid email address'
    if (!form.income) e.income = 'Annual income is required'
    if (!form.occupation.trim()) e.occupation = 'Occupation is required'
    if (!form.loanAmount) e.loanAmount = 'Required loan amount is required'
    if (!form.loanType) e.loanType = 'Please select loan type'
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
            subject: `New Loan Request - ${form.loanType}`,
            fromName: form.name,
            email: form.email,
            mobile: form.mobile,
            income: form.income,
            occupation: form.occupation,
            loanAmount: form.loanAmount,
            loanType: form.loanType,
            message: `Loan Request\nName: ${form.name}\nMobile: ${form.mobile}\nEmail: ${form.email}\nAnnual Income: ₹${form.income}\nOccupation: ${form.occupation}\nLoan Type: ${form.loanType}\nRequired Amount: ₹${form.loanAmount}`,
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
        title="Loans"
        subtitle="Get the best loan deals at lowest interest rates. Personal, home, business & vehicle loans with quick approval."
        breadcrumb="Loans"
        icon={AccountBalance}
      />

      <Container maxWidth="xl" sx={{ py: { xs: 4, md: 6 } }}>
        <ScrollReveal>
          <Box sx={{ mb: 6, textAlign: 'center' }}>
            <Chip label="Loan Services" sx={{ mb: 2, background: 'rgba(0,200,83,0.1)', color: '#00C853', fontWeight: 700 }} />
            <Typography variant="h4" sx={{ fontWeight: 800, color: 'primary.main', mb: 2 }}>
              Financial Support When You Need It
            </Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary', maxWidth: 720, mx: 'auto', lineHeight: 1.8 }}>
              We connect you with top banks and NBFCs to get the best loan offers tailored to your needs. 
              Quick approval, minimal documentation, and competitive interest rates.
            </Typography>
          </Box>
        </ScrollReveal>

        <Grid container spacing={3} sx={{ mb: 6 }}>
          {LOAN_TYPES.map((loan, i) => {
            const Icon = loan.icon
            return (
              <Grid item xs={12} md={4} key={loan.name}>
                <ScrollReveal delay={i * 0.1}>
                  <motion.div whileHover={{ y: -4 }}>
                    <Box
                      sx={{
                        p: 3, borderRadius: 3, background: '#fff',
                        border: `2px solid ${loan.color}22`,
                        boxShadow: '0 2px 14px rgba(11,31,58,0.06)',
                        position: 'relative', overflow: 'hidden',
                        '&::before': {
                          content: '""', position: 'absolute', top: 0, left: 0, right: 0, height: 4,
                          background: loan.color,
                        },
                      }}
                    >
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2 }}>
                        <Box sx={{ width: 44, height: 44, borderRadius: 2, background: `${loan.color}15`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          <Icon sx={{ color: loan.color, fontSize: 22 }} />
                        </Box>
                        <Typography variant="h6" sx={{ fontWeight: 800, color: 'primary.main' }}>{loan.name}</Typography>
                      </Box>
                      <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2.5, lineHeight: 1.7 }}>{loan.description}</Typography>
                      <Grid container spacing={2}>
                        <Grid item xs={6}>
                          <Typography variant="caption" sx={{ color: 'text.secondary', display: 'block' }}>Processing Fee</Typography>
                          <Typography variant="body2" sx={{ fontWeight: 600, color: loan.color }}>{loan.processingFee}</Typography>
                        </Grid>
                        <Grid item xs={6}>
                          <Typography variant="caption" sx={{ color: 'text.secondary', display: 'block' }}>Tenure</Typography>
                          <Typography variant="body2" sx={{ fontWeight: 600, color: 'primary.main' }}>{loan.tenure}</Typography>
                        </Grid>
                      </Grid>
                    </Box>
                  </motion.div>
                </ScrollReveal>
              </Grid>
            )
          })}
        </Grid>

        <Grid container spacing={6}>
          <Grid item xs={12} md={5}>
            <SectionTitle tag="Why Choose Us" title="Best Loan Solutions" center={false} />
            <List>
              {[
                'Interest rates starting from 8.50% p.a.',
                'Loan approval in 24-48 hours',
                'Minimal documentation required',
                'Hassle-free online application',
                'Doorstep service available',
                'Flexible repayment options',
              ].map((item, i) => (
                <ScrollReveal key={item} delay={i * 0.08}>
                  <ListItem disableGutters sx={{ pb: 2 }}>
                    <ListItemIcon sx={{ minWidth: 36 }}>
                      <CheckCircle sx={{ color: '#00C853', fontSize: 20 }} />
                    </ListItemIcon>
                    <ListItemText primary={item} primaryTypographyProps={{ variant: 'body2', fontWeight: 500, color: 'text.primary' }} />
                  </ListItem>
                </ScrollReveal>
              ))}
            </List>
          </Grid>

          <Grid item xs={12} md={7}>
            <ScrollReveal direction="left">
              <Paper elevation={0} sx={{ p: { xs: 3, md: 4 }, borderRadius: 3, border: '1px solid rgba(11,31,58,0.08)', boxShadow: '0 4px 30px rgba(11,31,58,0.08)' }}>
                <Typography variant="h5" sx={{ fontWeight: 800, color: 'primary.main', mb: 0.5 }}>
                  Apply for Loan
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary', mb: 3 }}>
                  Fill in your details and our loan expert will contact you with the best offers.
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
                          <Grid item xs={12} sm={6}>
                            <TextField fullWidth label="Annual Income (₹)" required value={form.income} onChange={(e) => setForm({ ...form, income: e.target.value })} error={!!errors.income} helperText={errors.income} placeholder="e.g. 500000" />
                          </Grid>
                          <Grid item xs={12} sm={6}>
                            <TextField fullWidth label="Occupation" required value={form.occupation} onChange={(e) => setForm({ ...form, occupation: e.target.value })} error={!!errors.occupation} helperText={errors.occupation} placeholder="e.g. Salaried, Business" />
                          </Grid>
                          <Grid item xs={12} sm={6}>
                            <TextField fullWidth select label="Loan Type" required value={form.loanType} onChange={(e) => setForm({ ...form, loanType: e.target.value })} error={!!errors.loanType} helperText={errors.loanType}>
                              {LOAN_TYPES.map((loan) => (
                                <MenuItem key={loan.name} value={loan.name}>{loan.name}</MenuItem>
                              ))}
                            </TextField>
                          </Grid>
                          <Grid item xs={12} sm={6}>
                            <TextField fullWidth label="Required Loan Amount (₹)" required value={form.loanAmount} onChange={(e) => setForm({ ...form, loanAmount: e.target.value })} error={!!errors.loanAmount} helperText={errors.loanAmount} placeholder="e.g. 1000000" />
                          </Grid>
                          <Grid item xs={12}>
                            <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}>
                              <Button type="submit" variant="contained" color="secondary" fullWidth size="large" endIcon={loading ? <CircularProgress size={20} color="inherit" /> : <Send />} sx={{ fontWeight: 700, py: 1.5 }} disabled={loading}>
                                {loading ? 'Submitting...' : 'Apply Now'}
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
                        <Typography variant="h5" sx={{ fontWeight: 800, color: 'primary.main', mb: 1 }}>Application Submitted!</Typography>
                        <Typography variant="body1" sx={{ color: 'text.secondary', mb: 3 }}>
                          Thank you, <strong>{form.name}</strong>! Our loan expert will contact you on <strong>{form.mobile}</strong> within 24 hours with the best offers.
                        </Typography>
                        <Alert severity="success">Your loan application has been received successfully.</Alert>
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
