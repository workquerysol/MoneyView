import React from 'react'
import {
  Box, Container, Grid, Typography, Button, Chip, Select, MenuItem, FormControl, InputLabel,
} from '@mui/material'
import { ArrowForward, AccountBalance, TrendingUp } from '@mui/icons-material'
import { motion } from 'framer-motion'
import { useDispatch, useSelector } from 'react-redux'
import { setMFCategory, setMFRisk } from '../../store/slices/filterSlice'
import { MUTUAL_FUNDS, MF_CATEGORIES, MF_RISKS } from '../../data/mutualFunds'
import { BROKERS } from '../../data/brokers'
import PageHero from '../../components/common/PageHero'
import ScrollReveal from '../../components/common/ScrollReveal'

const MOTILAL = BROKERS.find((b) => b.id === 'motilal')

const RISK_COLORS = {
  'Low': { bg: '#E8F5E9', text: '#2E7D32' },
  'Medium': { bg: '#FFF8E1', text: '#F57F17' },
  'Medium-High': { bg: '#FFF3E0', text: '#E65100' },
  'High': { bg: '#FFEBEE', text: '#C62828' },
}

export default function MutualFunds() {
  const dispatch = useDispatch()
  const { mfCategory, mfRisk } = useSelector((s) => s.filter)

  const filtered = MUTUAL_FUNDS.filter((f) => {
    const matchCat = mfCategory === 'All' || f.category === mfCategory
    const matchRisk = mfRisk === 'All' || f.risk === mfRisk
    return matchCat && matchRisk
  })

  return (
    <Box sx={{ background: '#F8FAFC', minHeight: '100vh' }}>
      <PageHero
        title="Mutual Funds"
        subtitle="Start your SIP from as low as ₹100. Invest in top-rated mutual funds across categories."
        breadcrumb="Mutual Funds"
        icon={AccountBalance}
      />

      <Container maxWidth="xl" sx={{ py: { xs: 4, md: 6 } }}>
        {/* Filters */}
        <Box sx={{ display: 'flex', gap: 2, mb: 4, flexWrap: 'wrap' }}>
          <FormControl size="small" sx={{ minWidth: 160 }}>
            <InputLabel>Category</InputLabel>
            <Select value={mfCategory} label="Category" onChange={(e) => dispatch(setMFCategory(e.target.value))}>
              {MF_CATEGORIES.map((c) => <MenuItem key={c} value={c}>{c}</MenuItem>)}
            </Select>
          </FormControl>
          <FormControl size="small" sx={{ minWidth: 160 }}>
            <InputLabel>Risk Level</InputLabel>
            <Select value={mfRisk} label="Risk Level" onChange={(e) => dispatch(setMFRisk(e.target.value))}>
              {MF_RISKS.map((r) => <MenuItem key={r} value={r}>{r}</MenuItem>)}
            </Select>
          </FormControl>
        </Box>

        <Grid container spacing={3}>
          {filtered.map((fund, i) => {
            const riskColor = RISK_COLORS[fund.risk] || RISK_COLORS['Medium']
            return (
              <Grid item xs={12} sm={6} lg={4} key={fund.id}>
                <ScrollReveal delay={i * 0.06}>
                  <motion.div whileHover={{ y: -4 }}>
                    <Box
                      sx={{
                        p: 3, borderRadius: 3, background: '#fff', height: '100%',
                        border: '1px solid rgba(11,31,58,0.07)',
                        boxShadow: '0 2px 14px rgba(11,31,58,0.06)',
                        display: 'flex', flexDirection: 'column',
                        '&:hover': { boxShadow: '0 6px 30px rgba(11,31,58,0.12)' },
                        transition: 'box-shadow 0.2s',
                      }}
                    >
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                        <Box sx={{ flexGrow: 1, pr: 1 }}>
                          <Typography variant="subtitle1" sx={{ fontWeight: 700, color: 'primary.main', lineHeight: 1.3, mb: 0.5 }}>
                            {fund.name}
                          </Typography>
                          <Chip label={fund.category} size="small" sx={{ fontWeight: 600, fontSize: '0.72rem', background: 'rgba(106,27,154,0.08)', color: '#6A1B9A' }} />
                        </Box>
                        <Chip
                          label={fund.risk}
                          size="small"
                          sx={{ fontWeight: 700, fontSize: '0.7rem', background: riskColor.bg, color: riskColor.text, flexShrink: 0 }}
                        />
                      </Box>

                      <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.7, flexGrow: 1, mb: 2 }}>
                        {fund.description}
                      </Typography>

                      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2, p: 1.5, background: 'rgba(0,200,83,0.05)', borderRadius: 2 }}>
                        <Box>
                          <Typography variant="caption" sx={{ color: 'text.secondary' }}>3Y Returns</Typography>
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                            <TrendingUp sx={{ color: '#00C853', fontSize: 16 }} />
                            <Typography sx={{ color: '#00C853', fontWeight: 800, fontSize: '1.1rem' }}>{fund.returns3Y}</Typography>
                          </Box>
                        </Box>
                        <Box sx={{ textAlign: 'right' }}>
                          <Typography variant="caption" sx={{ color: 'text.secondary' }}>Min SIP</Typography>
                          <Typography sx={{ fontWeight: 700, color: 'primary.main' }}>{fund.minSIP}/mo</Typography>
                        </Box>
                      </Box>

                      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                        <Button
                          href={MOTILAL.referralUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          variant="contained"
                          color="secondary"
                          fullWidth
                          endIcon={<ArrowForward />}
                          sx={{ fontWeight: 700 }}
                        >
                          Invest Now
                        </Button>
                      </motion.div>
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
