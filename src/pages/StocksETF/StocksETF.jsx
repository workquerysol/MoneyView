import React from 'react'
import {
  Box, Container, Grid, Typography, Button, Chip,
} from '@mui/material'
import { TrendingUp, ArrowForward, ShowChart, Star } from '@mui/icons-material'
import { motion } from 'framer-motion'
import PageHero from '../../components/common/PageHero'
import ScrollReveal from '../../components/common/ScrollReveal'

const SBI_MF = [
  {
    name: 'SBI Bluechip Fund',
    category: 'Large Cap',
    risk: 'Moderate',
    returns: '12.45%',
    returns3Y: '10.2%',
    minSIP: '₹500',
    description: 'Invests in top 100 companies by market cap. Stable large-cap performance.',
    color: '#1565C0',
  },
  {
    name: 'SBI Small Cap Fund',
    category: 'Small Cap',
    risk: 'High',
    returns: '28.52%',
    returns3Y: '21.8%',
    minSIP: '₹500',
    description: 'High growth potential through small-cap stocks. For aggressive investors.',
    color: '#E65100',
  },
  {
    name: 'SBI Midcap Fund',
    category: 'Mid Cap',
    risk: 'Moderate-High',
    returns: '18.75%',
    returns3Y: '15.2%',
    minSIP: '₹500',
    description: 'Balanced exposure to mid-cap companies with growth potential.',
    color: '#00695C',
  },
  {
    name: 'SBI Hybrid Equity Fund',
    category: 'Hybrid',
    risk: 'Moderate',
    returns: '14.28%',
    returns3Y: '11.5%',
    minSIP: '₹500',
    description: 'Mix of equity and debt for balanced growth and stability.',
    color: '#6A1B9A',
  },
  {
    name: 'SBI Liquid Fund',
    category: 'Liquid',
    risk: 'Low',
    returns: '6.85%',
    returns3Y: '5.9%',
    minSIP: '₹500',
    description: 'Best for short-term investments with high liquidity.',
    color: '#0277BD',
  },
  {
    name: 'SBI Focused Equity Fund',
    category: 'Focused',
    risk: 'High',
    returns: '16.42%',
    returns3Y: '12.8%',
    minSIP: '₹500',
    description: 'Concentrated portfolio of 30 high conviction stocks.',
    color: '#C62828',
  },
  {
    name: 'SBI Nifty Index Fund',
    category: 'Index',
    risk: 'Moderate',
    returns: '11.85%',
    returns3Y: '9.8%',
    minSIP: '₹500',
    description: 'Tracks Nifty 50 index. Low cost exposure to top 50 companies.',
    color: '#4527A0',
  },
  {
    name: 'SBI Long Term Equity Fund',
    category: 'ELSS',
    risk: 'Moderate-High',
    returns: '15.68%',
    returns3Y: '12.5%',
    minSIP: '₹500',
    description: 'Tax savings under Section 80C with 3-year lock-in period.',
    color: '#00838F',
  },
  {
    name: 'SBI Balanced Advantage Fund',
    category: 'Balanced Advantage',
    risk: 'Moderate',
    returns: '13.95%',
    returns3Y: '11.2%',
    minSIP: '₹500',
    description: 'Dynamic asset allocation based on market valuations.',
    color: '#558B2F',
  },
]

function MFCard({ fund }) {
  return (
    <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.2 }} style={{ width: '100%', display: 'flex' }}>
      <Box
        sx={{
          p: 2.5, borderRadius: 3, background: '#fff',
          border: '1px solid rgba(11,31,58,0.07)',
          boxShadow: '0 2px 14px rgba(11,31,58,0.06)',
          display: 'flex', flexDirection: 'column', gap: 1,
          width: '100%', flex: 1,
          transition: 'box-shadow 0.2s',
          '&:hover': { boxShadow: '0 6px 30px rgba(11,31,58,0.12)' },
          position: 'relative',
          overflow: 'hidden',
          '&::before': {
            content: '""', position: 'absolute', top: 0, left: 0, right: 0, height: 4,
            background: fund.color,
          },
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 1 }}>
          <Box>
            <Typography variant="subtitle1" sx={{ fontWeight: 700, color: 'primary.main', lineHeight: 1.2 }}>
              {fund.name}
            </Typography>
            <Chip label={fund.category} size="small" sx={{ mt: 0.5, fontWeight: 600, fontSize: '0.7rem', background: `${fund.color}15`, color: fund.color }} />
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, background: 'rgba(0,200,83,0.1)', px: 1, py: 0.5, borderRadius: 1 }}>
            <TrendingUp sx={{ color: '#00C853', fontSize: 16 }} />
            <Typography sx={{ color: '#00C853', fontWeight: 700, fontSize: '0.875rem' }}>
              {fund.returns}
            </Typography>
          </Box>
        </Box>

        <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.5, fontSize: '0.8rem', flex: 1 }}>
          {fund.description}
        </Typography>

        <Box sx={{ display: 'flex', justifyContent: 'space-between', py: 1, borderTop: '1px solid rgba(11,31,58,0.08)', borderBottom: '1px solid rgba(11,31,58,0.08)', my: 1 }}>
          <Box>
            <Typography variant="caption" sx={{ color: 'text.secondary', display: 'block' }}>3Y Returns</Typography>
            <Typography variant="body2" sx={{ fontWeight: 700, color: fund.color }}>{fund.returns3Y}</Typography>
          </Box>
          <Box>
            <Typography variant="caption" sx={{ color: 'text.secondary', display: 'block' }}>Risk</Typography>
            <Typography variant="body2" sx={{ fontWeight: 600, fontSize: '0.8rem' }}>{fund.risk}</Typography>
          </Box>
          <Box>
            <Typography variant="caption" sx={{ color: 'text.secondary', display: 'block' }}>Min SIP</Typography>
            <Typography variant="body2" sx={{ fontWeight: 600, fontSize: '0.8rem' }}>{fund.minSIP}</Typography>
          </Box>
        </Box>

        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
          <Button
            variant="contained"
            color="secondary"
            fullWidth
            size="small"
            endIcon={<ArrowForward />}
            sx={{ fontWeight: 700, mt: 0.5 }}
          >
            Invest Now
          </Button>
        </motion.div>
      </Box>
    </motion.div>
  )
}

export default function StocksETF() {
  return (
    <Box sx={{ background: '#F8FAFC', minHeight: '100vh' }}>
      <PageHero
        title="Best SBI Mutual Funds"
        subtitle="Invest in top-performing SBI Mutual Funds. Choose from our curated list of 9 best funds across categories."
        breadcrumb="SBI Mutual Funds"
        icon={ShowChart}
      />

      <Container maxWidth="xl" sx={{ py: { xs: 4, md: 6 } }}>
        <ScrollReveal>
          <Box sx={{ textAlign: 'center', mb: 5 }}>
            <Chip label="Top Performing Funds" sx={{ mb: 2, background: 'rgba(0,200,83,0.1)', color: '#00C853', fontWeight: 700 }} />
            <Typography variant="h4" sx={{ fontWeight: 800, color: 'primary.main', mb: 2 }}>
              9 Best SBI Mutual Funds to Invest in 2026
            </Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary', maxWidth: 700, mx: 'auto', lineHeight: 1.8 }}>
              SBI Mutual Fund is one of India's largest asset management companies. 
              These funds have consistently delivered good returns across different market conditions.
            </Typography>
          </Box>
        </ScrollReveal>

        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1, mb: 4, flexWrap: 'wrap' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
            <Star sx={{ color: '#FFC107', fontSize: 20 }} />
            <Typography variant="body2" sx={{ fontWeight: 600 }}>Expert Recommended</Typography>
          </Box>
          <Box sx={{ width: 1, height: 20, background: 'rgba(11,31,58,0.15)' }} />
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>Data as of March 2026</Typography>
        </Box>

        <Grid container spacing={3}>
          {SBI_MF.map((fund, i) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={fund.name} sx={{ display: 'flex' }}>
              <ScrollReveal delay={i * 0.05} style={{ width: '100%', display: 'flex' }}>
                <MFCard fund={fund} />
              </ScrollReveal>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ mt: 6, p: 3, borderRadius: 3, background: '#fff', border: '1px solid rgba(11,31,58,0.08)', textAlign: 'center' }}>
          <Typography variant="h6" sx={{ fontWeight: 700, color: 'primary.main', mb: 1 }}>
            Disclaimer
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.7 }}>
            Mutual fund investments are subject to market risks. Past performance does not guarantee future results. 
            Please read the scheme information document before investing. The returns shown are for illustration purposes only.
          </Typography>
        </Box>
      </Container>
    </Box>
  )
}
