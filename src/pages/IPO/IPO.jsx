import React from 'react'
import { Box, Container, Grid, Typography, Button, Chip } from '@mui/material'
import { ArrowForward, TrendingUp } from '@mui/icons-material'
import { motion } from 'framer-motion'
import { IPOS } from '../../data/ipos'
import PageHero from '../../components/common/PageHero'
import ScrollReveal from '../../components/common/ScrollReveal'

export default function IPO() {
  return (
    <Box sx={{ background: '#F8FAFC', minHeight: '100vh' }}>
      <PageHero
        title="Upcoming IPOs"
        subtitle="Explore upcoming IPOs, check issue dates, lot sizes, and subscription details."
        breadcrumb="IPO"
        icon={TrendingUp}
      />

      <Container maxWidth="xl" sx={{ py: { xs: 4, md: 6 } }}>
        <Grid container spacing={4}>
          {IPOS.map((ipo, i) => (
            <Grid item xs={12} md={6} key={ipo.id}>
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
                      {ipo.name}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2, lineHeight: 1.6 }}>
                      {ipo.purpose}
                    </Typography>

                    <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', mb: 3 }}>
                      <Chip label={`Price: ${ipo.issuePrice}`} color="secondary" />
                      <Chip label={`Lot: ${ipo.lotSize}`} />
                      <Chip label={`Open: ${ipo.issueOpen}`} />
                      <Chip label={`Close: ${ipo.issueClose}`} />
                    </Box>

                    <Box sx={{ mt: 'auto' }}>
                      <Button variant="contained" color="secondary" endIcon={<ArrowForward />} fullWidth>
                        Apply Now
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
