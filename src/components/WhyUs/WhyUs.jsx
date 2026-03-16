import React, { useEffect, useRef, useState } from 'react'
import { Box, Container, Grid, Typography } from '@mui/material'
import { motion, useInView } from 'framer-motion'
import { Psychology, Handshake, Analytics, TrendingUp } from '@mui/icons-material'
import SectionTitle from '../common/SectionTitle'
import ScrollReveal from '../common/ScrollReveal'

const BENEFITS = [
  {
    icon: Psychology,
    title: 'Expert Portfolio Management',
    description: 'Our seasoned analysts and portfolio managers curate investment opportunities with 10+ years of market experience.',
    stat: '10+ Years', statLabel: 'Experience',
    color: '#1565C0',
  },
  {
    icon: Handshake,
    title: 'Trusted Broker Partnerships',
    description: 'SEBI-registered broker partners — Angel One, Sharekhan, and Motilal Oswal — ensure your investments are safe and regulated.',
    stat: '3 Brokers', statLabel: 'Partners',
    color: '#00695C',
  },
  {
    icon: Analytics,
    title: 'Data-Driven Insights',
    description: 'Advanced analytics and research reports to help you make informed investment decisions every time.',
    stat: '500+', statLabel: 'Reports/Year',
    color: '#6A1B9A',
  },
  {
    icon: TrendingUp,
    title: 'Long-term Wealth Strategy',
    description: 'We focus on sustainable, long-term wealth creation through diversified asset allocation and compounding returns.',
    stat: '18.4%', statLabel: 'Avg. Returns',
    color: '#00C853',
  },
]

function AnimatedCounter({ target, suffix = '' }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  const numericTarget = parseFloat(target.replace(/[^0-9.]/g, ''))

  useEffect(() => {
    if (!inView) return
    const duration = 1500
    const steps = 50
    const increment = numericTarget / steps
    let current = 0
    const timer = setInterval(() => {
      current += increment
      if (current >= numericTarget) {
        setCount(numericTarget)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)
    return () => clearInterval(timer)
  }, [inView, numericTarget])

  return (
    <span ref={ref}>
      {target.replace(numericTarget.toString(), count.toString())}
      {suffix}
    </span>
  )
}

export default function WhyUs() {
  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        background: 'linear-gradient(135deg, #060D1F 0%, #0B1F3A 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background decoration */}
      <Box sx={{
        position: 'absolute', top: '-20%', right: '-10%',
        width: 600, height: 600, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(0,200,83,0.05) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <Container maxWidth="xl">
        <SectionTitle
          tag="Why Choose Us"
          title="Why Invest With Us"
          subtitle="We bring together expert management, trusted partnerships, and data-driven insights to maximize your wealth."
          light
        />

        <Grid container spacing={3}>
          {BENEFITS.map((benefit, i) => {
            const Icon = benefit.icon
            return (
              <Grid item xs={12} sm={6} lg={3} key={benefit.title}>
                <ScrollReveal delay={i * 0.1}>
                  <motion.div whileHover={{ y: -6 }}>
                    <Box
                      sx={{
                        p: 3.5, borderRadius: 3, height: '100%',
                        background: 'rgba(255,255,255,0.04)',
                        backdropFilter: 'blur(10px)',
                        border: '1px solid rgba(255,255,255,0.08)',
                        transition: 'all 0.3s',
                        '&:hover': {
                          background: 'rgba(255,255,255,0.07)',
                          borderColor: `${benefit.color}44`,
                        },
                      }}
                    >
                      <Box
                        sx={{
                          width: 52, height: 52, borderRadius: 2.5,
                          background: `${benefit.color}22`,
                          border: `1px solid ${benefit.color}33`,
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          mb: 2.5,
                        }}
                      >
                        <Icon sx={{ color: benefit.color, fontSize: 26 }} />
                      </Box>

                      <Typography variant="h6" sx={{ color: '#fff', fontWeight: 700, mb: 1.5, lineHeight: 1.3 }}>
                        {benefit.title}
                      </Typography>
                      <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, mb: 3 }}>
                        {benefit.description}
                      </Typography>

                      <Box sx={{
                        pt: 2, borderTop: '1px solid rgba(255,255,255,0.08)',
                        display: 'flex', alignItems: 'baseline', gap: 1,
                      }}>
                        <Typography sx={{ color: benefit.color, fontWeight: 800, fontSize: '1.5rem' }}>
                          <AnimatedCounter target={benefit.stat} />
                        </Typography>
                        <Typography sx={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.8rem' }}>
                          {benefit.statLabel}
                        </Typography>
                      </Box>
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
