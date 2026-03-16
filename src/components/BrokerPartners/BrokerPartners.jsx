import React from 'react'
import { Box, Container, Grid, Typography, Button, Chip, Stack } from '@mui/material'
import { CheckCircle, ArrowForward } from '@mui/icons-material'
import { motion } from 'framer-motion'
import { BROKERS } from '../../data/brokers'
import SectionTitle from '../common/SectionTitle'
import ScrollReveal from '../common/ScrollReveal'

export default function BrokerPartners() {
  return (
    <Box sx={{ py: { xs: 8, md: 12 }, background: '#F8FAFC' }}>
      <Container maxWidth="xl">
        <SectionTitle
          tag="Trusted Partners"
          title="Our Broker Partners"
          subtitle="Open a free Demat account with India's top brokers through our referral links and start investing today."
        />

        <Grid container spacing={3} justifyContent="center">
          {BROKERS.map((broker, i) => (
            <Grid item xs={12} sm={6} md={4} key={broker.id}>
              <ScrollReveal delay={i * 0.12}>
                <motion.div whileHover={{ y: -8, transition: { duration: 0.25 } }}>
                  <Box
                    sx={{
                      background: '#fff',
                      borderRadius: 3,
                      p: 3.5,
                      height: '100%',
                      border: '1px solid rgba(11,31,58,0.06)',
                      boxShadow: '0 4px 24px rgba(11,31,58,0.07)',
                      display: 'flex',
                      flexDirection: 'column',
                      position: 'relative',
                      overflow: 'hidden',
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0, left: 0, right: 0,
                        height: 4,
                        background: `linear-gradient(90deg, ${broker.color}, ${broker.color}88)`,
                      },
                    }}
                  >
                    {/* Logo */}
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2.5 }}>
                      <Box
                        sx={{
                          width: 52, height: 52, borderRadius: 2.5,
                          background: `linear-gradient(135deg, ${broker.color}22, ${broker.color}11)`,
                          border: `2px solid ${broker.color}33`,
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          flexShrink: 0,
                        }}
                      >
                        <Typography sx={{ color: broker.color, fontWeight: 900, fontSize: '1rem' }}>
                          {broker.logo}
                        </Typography>
                      </Box>
                      <Box>
                        <Typography variant="h6" sx={{ fontWeight: 800, color: 'primary.main', lineHeight: 1.2 }}>
                          {broker.name}
                        </Typography>
                        <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                          {broker.tagline}
                        </Typography>
                      </Box>
                    </Box>

                    <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2.5, lineHeight: 1.7, flexGrow: 1 }}>
                      {broker.description}
                    </Typography>

                    <Stack spacing={0.75} sx={{ mb: 3 }}>
                      {broker.features.map((feat) => (
                        <Box key={feat} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                          <CheckCircle sx={{ color: '#00C853', fontSize: 16 }} />
                          <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 500 }}>
                            {feat}
                          </Typography>
                        </Box>
                      ))}
                    </Stack>

                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Button
                        href={broker.referralUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        variant="contained"
                        fullWidth
                        endIcon={<ArrowForward />}
                        sx={{
                          background: `linear-gradient(135deg, ${broker.color}, ${broker.color}cc)`,
                          fontWeight: 700,
                          '&:hover': { background: broker.color },
                        }}
                      >
                        Open Demat Account
                      </Button>
                    </motion.div>
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
