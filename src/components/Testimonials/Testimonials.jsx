import React from 'react'
import { Box, Container, Grid, Typography, Avatar, Rating } from '@mui/material'
import { FormatQuote } from '@mui/icons-material'
import { motion } from 'framer-motion'
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
  {
    name: 'Sneha Verma',
    role: 'Teacher, Delhi',
    avatar: 'SV',
    rating: 5,
    text: 'I started my investment journey with just ₹500 SIP through MoneyView. Now I\'m confidently building wealth for my retirement.',
    color: '#6A1B9A',
  },
  {
    name: 'Vikram Mehta',
    role: 'CA, Mumbai',
    avatar: 'VM',
    rating: 5,
    text: 'The Gold ETF and Fixed Deposit options on MoneyView are excellent. Great platform for diversified, low-risk portfolios.',
    color: '#C62828',
  },
  {
    name: 'Lakshmi Reddy',
    role: 'Homemaker, Hyderabad',
    avatar: 'LR',
    rating: 5,
    text: 'Even as a first-time investor, MoneyView made everything easy to understand. Highly recommend the insurance and FD sections!',
    color: '#F9A825',
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.96 },
  visible: (i) => ({
    opacity: 1, y: 0, scale: 1,
    transition: { duration: 0.55, delay: i * 0.09, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function Testimonials() {
  return (
    <Box sx={{ py: { xs: 8, md: 12 }, background: '#F8FAFC', position: 'relative', overflow: 'hidden' }}>
      {/* Background accents */}
      <Box sx={{
        position: 'absolute', top: 40, left: -100, width: 300, height: 300, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(0,200,83,0.05) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <Container maxWidth="xl">
        <SectionTitle
          tag="Investor Stories"
          title="What Our Investors Say"
          subtitle="Join 10 lakh+ happy investors who have grown their wealth with MoneyView."
        />

        <Grid container spacing={3} alignItems="stretch">
          {TESTIMONIALS.map((t, i) => (
            <Grid item xs={12} sm={6} lg={4} key={t.name} sx={{ display: 'flex' }}>
              <motion.div
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-50px' }}
                whileHover={{ y: -6, transition: { duration: 0.25, ease: 'easeOut' } }}
                style={{ width: '100%', display: 'flex' }}
              >
                <Box
                  sx={{
                    p: 3.5, borderRadius: 3,
                    width: '100%',
                    background: '#fff',
                    border: '1px solid rgba(11,31,58,0.06)',
                    boxShadow: '0 2px 20px rgba(11,31,58,0.06)',
                    display: 'flex', flexDirection: 'column',
                    position: 'relative',
                    transition: 'box-shadow 0.3s ease, border-color 0.3s ease',
                    '&:hover': {
                      boxShadow: `0 16px 48px ${t.color}18`,
                      border: `1px solid ${t.color}30`,
                    },
                  }}
                >
                  <motion.div
                    style={{ position: 'absolute', top: 16, right: 16 }}
                    initial={{ opacity: 0, scale: 0.5, rotate: -20 }}
                    whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.09 + 0.3, duration: 0.4 }}
                  >
                    <FormatQuote sx={{ color: `${t.color}30`, fontSize: 52 }} />
                  </motion.div>

                  <Rating
                    value={t.rating}
                    readOnly
                    size="small"
                    sx={{ mb: 2, '& .MuiRating-iconFilled': { color: '#F9A825' } }}
                  />

                  <Typography
                    variant="body2"
                    sx={{ color: 'text.secondary', lineHeight: 1.8, mb: 3, flexGrow: 1, fontStyle: 'italic' }}
                  >
                    "{t.text}"
                  </Typography>

                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                    <motion.div whileHover={{ scale: 1.12, transition: { duration: 0.2 } }}>
                      <Avatar
                        sx={{
                          background: `linear-gradient(135deg, ${t.color}, ${t.color}88)`,
                          fontWeight: 700,
                          fontSize: '0.85rem',
                          width: 40, height: 40,
                          boxShadow: `0 4px 12px ${t.color}40`,
                        }}
                      >
                        {t.avatar}
                      </Avatar>
                    </motion.div>
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
