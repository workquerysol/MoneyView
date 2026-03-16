import React, { useState } from 'react'
import { Box, Container, Grid, Typography, Avatar, Rating, IconButton } from '@mui/material'
import { FormatQuote, ArrowBack, ArrowForward } from '@mui/icons-material'
import { motion, AnimatePresence } from 'framer-motion'
import SectionTitle from '../common/SectionTitle'

const TESTIMONIALS = [
  {
    name: 'Rahul Sharma',
    role: 'IT Professional, Bangalore',
    avatar: 'RS',
    rating: 5,
    text: 'MoneyView helped me discover amazing mutual funds and SIPs. My portfolio has grown by 24% in just 18 months. The expert curation is top-notch!',
    color: '#1565C0',
  },
  {
    name: 'Priya Nair',
    role: 'Doctor, Chennai',
    avatar: 'PN',
    rating: 5,
    text: 'As a busy professional, I needed simple guidance on investments. MoneyView\'s PMS service has been a game changer for my wealth management.',
    color: '#00695C',
  },
  {
    name: 'Amit Patel',
    role: 'Entrepreneur, Ahmedabad',
    avatar: 'AP',
    rating: 5,
    text: 'Opened my Demat account through MoneyView\'s Angel One referral. The process was seamless and I started trading within 24 hours!',
    color: '#E65100',
  },
  
]

export default function Testimonials() {
  return (
    <Box sx={{ py: { xs: 8, md: 12 }, background: '#F8FAFC' }}>
      <Container maxWidth="xl">
        <SectionTitle
          tag="Investor Stories"
          title="What Our Investors Say"
          subtitle="Join 10 + happy investors who have grown their wealth with MoneyView."
        />

        <Grid container spacing={3}>
          {TESTIMONIALS.map((t, i) => (
            <Grid item xs={12} sm={6} lg={4} key={t.name}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                whileHover={{ y: -4 }}
              >
                <Box
                  sx={{
                    p: 3.5, borderRadius: 3, height: '100%',
                    background: '#fff',
                    border: '1px solid rgba(11,31,58,0.06)',
                    boxShadow: '0 2px 20px rgba(11,31,58,0.06)',
                    display: 'flex', flexDirection: 'column',
                    position: 'relative',
                  }}
                >
                  <FormatQuote
                    sx={{
                      position: 'absolute', top: 16, right: 16,
                      color: `${t.color}22`, fontSize: 48,
                    }}
                  />

                  <Rating value={t.rating} readOnly size="small" sx={{ mb: 2, '& .MuiRating-iconFilled': { color: '#F9A825' } }} />

                  <Typography
                    variant="body2"
                    sx={{ color: 'text.secondary', lineHeight: 1.8, mb: 3, flexGrow: 1, fontStyle: 'italic' }}
                  >
                    "{t.text}"
                  </Typography>

                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                    <Avatar
                      sx={{
                        background: `linear-gradient(135deg, ${t.color}, ${t.color}88)`,
                        fontWeight: 700,
                        fontSize: '0.85rem',
                        width: 40, height: 40,
                      }}
                    >
                      {t.avatar}
                    </Avatar>
                    <Box>
                      <Typography variant="subtitle2" sx={{ fontWeight: 700, color: 'primary.main' }}>
                        {t.name}
                      </Typography>
                      <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                        {t.role}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}
