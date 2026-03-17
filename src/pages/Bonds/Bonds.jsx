import React from 'react'
import { Box, Container, Grid, Typography, Button, Chip } from '@mui/material'
import { AccountBalance, ArrowForward } from '@mui/icons-material'
import { motion } from 'framer-motion'
import { BONDS } from '../../data/bonds'
import PageHero from '../../components/common/PageHero'
import ScrollReveal from '../../components/common/ScrollReveal'

export default function Bonds() {
  return (
    <Box sx={{ background: '#F8FAFC', minHeight: '100vh' }}>
      <PageHero
        title="Bonds & Fixed Income"
        subtitle="Browse high-quality bonds offering stable income. Suitable for conservative portfolios."
        breadcrumb="Bonds"
        icon={AccountBalance}
      />

      <Container maxWidth="xl" sx={{ py: { xs: 4, md: 6 } }}>
        <Grid container spacing={4}>
          {BONDS.map((bond, i) => (
            <Grid item xs={12} md={6} key={bond.id}>
              <ScrollReveal delay={i * 0.08}>
                <motion.div whileHover={{ y: -6 }}>
                  <Box
                    sx={{
                      p: 3, borderRadius: 3, background: '#fff',
                      border: '1px solid rgba(11,31,58,0.07)',
                      boxShadow: '0 2px 14px rgba(11,31,58,0.06)',
                      height: '100%', display: 'flex', flexDirection: 'column',
                    }}
                  >
                    <Typography variant="h6" sx={{ fontWeight: 800, color: 'primary.main', mb: 1.5 }}>
                      {bond.name}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2, lineHeight: 1.6 }}>
                      {bond.description}
                    </Typography>

                    <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', mb: 3 }}>
                      <Chip label={`Coupon: ${bond.coupon}`} color="secondary" />
                      <Chip label={`Maturity: ${bond.maturity}`} />
                      <Chip label={`Rating: ${bond.rating}`} />
                    </Box>

                    <Box sx={{ mt: 'auto' }}>
                      <Button variant="contained" color="secondary" endIcon={<ArrowForward />} fullWidth>
                        Invest Now
                      </Button>
                    </Box>
                  </Box>
                </motion.div>
              </ScrollReveal>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}
