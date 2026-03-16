import React from 'react'
import {
  Box, Container, Grid, Typography, Button, Chip, Divider,
} from '@mui/material'
import { Savings, ArrowForward, LocalOffer, Star } from '@mui/icons-material'
import { motion } from 'framer-motion'
import { FIXED_DEPOSITS } from '../../data/fixedDeposits'
import PageHero from '../../components/common/PageHero'
import ScrollReveal from '../../components/common/ScrollReveal'

const TYPE_COLORS = {
  'Private Bank': { bg: '#E3F2FD', text: '#1565C0' },
  'Public Bank': { bg: '#E8F5E9', text: '#2E7D32' },
  'Corporate FD': { bg: '#FFF3E0', text: '#E65100' },
}

export default function FixedDeposit() {
  return (
    <Box sx={{ background: '#F8FAFC', minHeight: '100vh' }}>
      <PageHero
        title="Fixed Deposits"
        subtitle="Guaranteed returns up to 9% p.a. Compare FD rates across top banks and corporate houses."
        breadcrumb="Fixed Deposit"
        icon={Savings}
      />

      <Container maxWidth="xl" sx={{ py: { xs: 4, md: 6 } }}>
        {/* Info banner */}
        <Box sx={{
          background: 'linear-gradient(135deg, #E3F2FD, #E8F5E9)',
          border: '1px solid #90CAF9',
          borderRadius: 3, p: 2.5, mb: 4,
          display: 'flex', gap: 2, alignItems: 'center', flexWrap: 'wrap',
        }}>
          <LocalOffer sx={{ color: '#1565C0' }} />
          <Typography variant="body2" sx={{ fontWeight: 500, color: 'primary.main' }}>
            <strong>Pro Tip:</strong> Corporate FDs offer higher interest rates than bank FDs. Diversify across both for optimal returns with safety.
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {FIXED_DEPOSITS.map((fd, i) => {
            const typeColor = TYPE_COLORS[fd.type] || TYPE_COLORS['Private Bank']
            return (
              <Grid item xs={12} sm={6} lg={4} key={fd.id}>
                <ScrollReveal delay={i * 0.06}>
                  <motion.div whileHover={{ y: -4 }}>
                    <Box
                      sx={{
                        p: 3, borderRadius: 3, background: '#fff',
                        border: fd.highlight ? '2px solid #00C853' : '1px solid rgba(11,31,58,0.07)',
                        boxShadow: fd.highlight ? '0 4px 24px rgba(0,200,83,0.15)' : '0 2px 14px rgba(11,31,58,0.06)',
                        position: 'relative', overflow: 'hidden',
                        '&:hover': { boxShadow: '0 6px 30px rgba(11,31,58,0.12)' },
                        transition: 'box-shadow 0.2s',
                      }}
                    >
                      {fd.highlight && (
                        <Chip
                          icon={<Star sx={{ fontSize: '14px !important' }} />}
                          label="Best Rate"
                          size="small"
                          sx={{
                            position: 'absolute', top: 12, right: 12,
                            background: '#00C853', color: '#fff', fontWeight: 700, fontSize: '0.7rem',
                          }}
                        />
                      )}

                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                        <Typography variant="h6" sx={{ fontWeight: 700, color: 'primary.main', lineHeight: 1.2, pr: 6 }}>
                          {fd.bank}
                        </Typography>
                      </Box>

                      <Chip label={fd.type} size="small" sx={{ fontWeight: 600, fontSize: '0.72rem', background: typeColor.bg, color: typeColor.text, mb: 2 }} />

                      <Box
                        sx={{
                          background: 'linear-gradient(135deg, rgba(0,200,83,0.08), rgba(0,200,83,0.04))',
                          borderRadius: 2, p: 2, mb: 2, textAlign: 'center',
                        }}
                      >
                        <Typography variant="h3" sx={{ color: '#00C853', fontWeight: 900, lineHeight: 1 }}>
                          {fd.rate}
                        </Typography>
                        <Typography variant="caption" sx={{ color: 'text.secondary' }}>Interest Rate p.a.</Typography>
                      </Box>

                      <Divider sx={{ mb: 2 }} />

                      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.75 }}>
                        <Typography variant="caption" sx={{ color: 'text.secondary' }}>Duration</Typography>
                        <Typography variant="caption" sx={{ fontWeight: 600, color: 'primary.main' }}>{fd.duration}</Typography>
                      </Box>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2.5 }}>
                        <Typography variant="caption" sx={{ color: 'text.secondary' }}>Minimum Amount</Typography>
                        <Typography variant="caption" sx={{ fontWeight: 600, color: 'primary.main' }}>{fd.minAmount}</Typography>
                      </Box>

                      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                        <Button
                          variant={fd.highlight ? 'contained' : 'outlined'}
                          color={fd.highlight ? 'secondary' : 'primary'}
                          fullWidth
                          endIcon={<ArrowForward />}
                          sx={{ fontWeight: 700 }}
                        >
                          Apply Now
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
