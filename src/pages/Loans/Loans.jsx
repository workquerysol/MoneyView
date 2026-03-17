import React, { useState } from 'react'
import {
  Box, Container, Grid, Typography, Button, TextField, Paper, MenuItem, Select, FormControl, InputLabel,
} from '@mui/material'
import { AccountBalance, Send } from '@mui/icons-material'
import { motion, AnimatePresence } from 'framer-motion'
import PageHero from '../../components/common/PageHero'
import SectionTitle from '../../components/common/SectionTitle'
import ScrollReveal from '../../components/common/ScrollReveal'

const LOAN_TYPES = [
  'Personal Loan',
  'Home Loan',
  'Business Loan',
  'Loan Against Property',
  'Vehicle Loan',
]

export default function Loans() {
  const [form, setForm] = useState({
    name: '',
    mobile: '',
    email: '',
    income: '',
    occupation: '',
    amount: '',
    loanType: LOAN_TYPES[0],
  })
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState({})

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Name is required'
    if (!/^[0-9]{10}$/.test(form.mobile)) e.mobile = 'Enter valid 10-digit mobile number'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Enter valid email address'
    if (!form.income) e.income = 'Income is required'
    if (!form.occupation.trim()) e.occupation = 'Occupation is required'
    if (!form.amount) e.amount = 'Required loan amount is required'
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
        title="Loans"
        subtitle="Find the best loan options for your needs. Quick approvals and competitive rates."
        breadcrumb="Loans"
        icon={AccountBalance}
      />

      <Container maxWidth="xl" sx={{ py: { xs: 4, md: 6 } }}>
        <Grid container spacing={6}>
          <Grid item xs={12} md={6}>
            <SectionTitle
              tag="Loan Types"
              title="Choose your loan" 
              center={false}
            />
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              {LOAN_TYPES.map((type) => (
                <ScrollReveal key={type}>
                  <Box
                    sx={{
                      p: 3, borderRadius: 3, background: '#fff',
                      border: '1px solid rgba(11,31,58,0.07)',
                      boxShadow: '0 2px 14px rgba(11,31,58,0.06)',
                    }}
                  >
                    <Typography variant="subtitle1" sx={{ fontWeight: 700, color: 'primary.main' }}>
                      {type}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary', mt: 1 }}>
                      Get competitive rates, flexible tenure, and fast approvals for {type.toLowerCase()}.
                    </Typography>
                  </Box>
                </ScrollReveal>
              ))}
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <ScrollReveal direction="left">
              <Paper elevation={0} sx={{ p: { xs: 3, md: 4 }, borderRadius: 3, border: '1px solid rgba(11,31,58,0.08)', boxShadow: '0 4px 30px rgba(11,31,58,0.08)' }}>
                <Typography variant="h5" sx={{ fontWeight: 800, color: 'primary.main', mb: 0.5 }}>
                  Get Loan Assistance
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary', mb: 3 }}>
                  Fill in the details and our loan specialist will get in touch within 24 hours.
                </Typography>

                <AnimatePresence mode="wait">
                  {!submitted ? (
                    <motion.div key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                      <Box component="form" onSubmit={handleSubmit} noValidate>
                        <Grid container spacing={2.5}>
                          <Grid item xs={12} sm={6}>
                            <TextField
                              fullWidth
                              label="Full Name"
                              required
                              value={form.name}
                              onChange={(e) => setForm({ ...form, name: e.target.value })}
                              error={!!errors.name}
                              helperText={errors.name}
                            />
                          </Grid>
                          <Grid item xs={12} sm={6}>
                            <TextField
                              fullWidth
                              label="Mobile Number"
                              required
                              value={form.mobile}
                              onChange={(e) => setForm({ ...form, mobile: e.target.value })}
                              error={!!errors.mobile}
                              helperText={errors.mobile}
                              inputProps={{ maxLength: 10 }}
                            />
                          </Grid>
                          <Grid item xs={12} sm={6}>
                            <TextField
                              fullWidth
                              label="Email Address"
                              type="email"
                              required
                              value={form.email}
                              onChange={(e) => setForm({ ...form, email: e.target.value })}
                              error={!!errors.email}
                              helperText={errors.email}
                            />
                          </Grid>
                          <Grid item xs={12} sm={6}>
                            <TextField
                              fullWidth
                              label="Monthly Income"
                              required
                              value={form.income}
                              onChange={(e) => setForm({ ...form, income: e.target.value })}
                              error={!!errors.income}
                              helperText={errors.income}
                            />
                          </Grid>
                          <Grid item xs={12} sm={6}>
                            <TextField
                              fullWidth
                              label="Occupation"
                              required
                              value={form.occupation}
                              onChange={(e) => setForm({ ...form, occupation: e.target.value })}
                              error={!!errors.occupation}
                              helperText={errors.occupation}
                            />
                          </Grid>
                          <Grid item xs={12} sm={6}>
                            <TextField
                              fullWidth
                              label="Required Loan Amount (₹)"
                              required
                              value={form.amount}
                              onChange={(e) => setForm({ ...form, amount: e.target.value })}
                              error={!!errors.amount}
                              helperText={errors.amount}
                            />
                          </Grid>
                          <Grid item xs={12}>
                            <FormControl fullWidth>
                              <InputLabel>Loan Type</InputLabel>
                              <Select
                                value={form.loanType}
                                label="Loan Type"
                                onChange={(e) => setForm({ ...form, loanType: e.target.value })}
                              >
                                {LOAN_TYPES.map((type) => (
                                  <MenuItem key={type} value={type}>{type}</MenuItem>
                                ))}
                              </Select>
                            </FormControl>
                          </Grid>
                          <Grid item xs={12}>
                            <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}>
                              <Button type="submit" variant="contained" color="secondary" fullWidth size="large" endIcon={<Send />} sx={{ fontWeight: 700, py: 1.5 }}>
                                Request Callback
                              </Button>
                            </motion.div>
                          </Grid>
                        </Grid>
                      </Box>
                    </motion.div>
                  ) : (
                    <motion.div key="success" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}>
                      <Box sx={{ textAlign: 'center', py: 4 }}>
                        <Box sx={{ width: 80, height: 80, borderRadius: '50%', background: 'linear-gradient(135deg, #00C853, #009624)', display: 'flex', alignItems: 'center', justifyContent: 'center', mx: 'auto', mb: 3 }}>
                          <Send sx={{ color: '#fff', fontSize: 36 }} />
                        </Box>
                        <Typography variant="h5" sx={{ fontWeight: 800, color: 'primary.main', mb: 1 }}>
                          Request Submitted!
                        </Typography>
                        <Typography variant="body1" sx={{ color: 'text.secondary', mb: 3 }}>
                          Thank you, <strong>{form.name}</strong>! Our loan specialist will contact you on <strong>{form.mobile}</strong> within 24 hours.
                        </Typography>
                        <Alert severity="success">Your loan inquiry has been received.</Alert>
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
