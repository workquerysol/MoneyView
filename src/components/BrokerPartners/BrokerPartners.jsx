import React from 'react'
import { Box, Container, Grid, Typography, Button, Stack } from '@mui/material'
import { CheckCircle, ArrowForward } from '@mui/icons-material'
import { motion } from 'framer-motion'
import { BROKERS } from '../../data/brokers'
import { AngelOneLogo, SharekhanLogo, MotilalOswalLogo } from './BrokerLogos'
import SectionTitle from '../common/SectionTitle'
import ScrollReveal from '../common/ScrollReveal'

const BROKER_LOGOS = {
  angelone: AngelOneLogo,
  sharekhan: SharekhanLogo,
  motilal: MotilalOswalLogo,
}

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: (i) => ({
    opacity: 1, y: 0, scale: 1,
    transition: { duration: 0.6, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function BrokerPartners() {
  return (
    <Box sx={{ py: { xs: 8, md: 12 }, background: '#F8FAFC', position: 'relative', overflow: 'hidden' }}>
      {/* Background decorative blobs */}
      <Box sx={{
        position: 'absolute', top: -80, right: -80, width: 320, height: 320, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(0,200,83,0.06) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />
      <Box sx={{
        position: 'absolute', bottom: -60, left: -60, width: 260, height: 260, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(26,58,107,0.05) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <Container maxWidth="xl">
        <SectionTitle
          tag="Trusted Partners"
          title="Our Broker Partners"
          subtitle="Open a free Demat account with India's top brokers through our referral links and start investing today."
        />

        <Grid container spacing={3} justifyContent="center">
          {BROKERS.map((broker, i) => {
            const LogoComponent = BROKER_LOGOS[broker.id]
            return (
              <Grid item xs={12} sm={6} md={4} key={broker.id}>
                <motion.div
                  custom={i}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-60px' }}
                  whileHover={{ y: -10, transition: { duration: 0.25, ease: 'easeOut' } }}
                  style={{ height: '100%' }}
                >
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
                      transition: 'box-shadow 0.3s ease',
                      '&:hover': {
                        boxShadow: `0 20px 60px ${broker.color}22`,
                        border: `1px solid ${broker.color}33`,
                      },
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
                      <motion.div
                        whileHover={{ rotate: [0, -5, 5, 0], transition: { duration: 0.4 } }}
                      >
                        {LogoComponent ? (
                          <LogoComponent size={52} />
                        ) : (
                          <Box
                            sx={{
                              width: 52, height: 52, borderRadius: 2.5,
                              background: `linear-gradient(135deg, ${broker.color}22, ${broker.color}11)`,
                              border: `2px solid ${broker.color}33`,
                              display: 'flex', alignItems: 'center', justifyContent: 'center',
                            }}
                          >
                            <Typography sx={{ color: broker.color, fontWeight: 900, fontSize: '1rem' }}>
                              {broker.logo}
                            </Typography>
                          </Box>
                        )}
                      </motion.div>
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
                      {broker.features.map((feat, fi) => (
                        <motion.div
                          key={feat}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.15 + fi * 0.06 + 0.3 }}
                        >
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <CheckCircle sx={{ color: '#00C853', fontSize: 16 }} />
                            <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 500 }}>
                              {feat}
                            </Typography>
                          </Box>
                        </motion.div>
                      ))}
                    </Stack>

                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}>
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
                          py: 1.2,
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            background: broker.color,
                            boxShadow: `0 8px 24px ${broker.color}55`,
                          },
                        }}
                      >
                        Open Demat Account
                      </Button>
                    </motion.div>
                  </Box>
                </motion.div>
              </Grid>
            )
          })}
        </Grid>
      </Container>
    </Box>
  )
}
