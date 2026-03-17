import React from 'react'
import {
  Box, Container, Grid, Typography, Button, Chip, Tab, Tabs,
} from '@mui/material'
import { Diamond, TrendingUp, ArrowForward } from '@mui/icons-material'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setETFType } from '../../store/slices/filterSlice'
import { GOLD_SILVER_ETFS } from '../../data/goldETFs'
import { BROKERS } from '../../data/brokers'
import PageHero from '../../components/common/PageHero'
import ScrollReveal from '../../components/common/ScrollReveal'

const MOTILAL = BROKERS.find((b) => b.id === 'motilal')

const TYPE_STYLES = {
  Gold: { bg: '#FFF8E1', color: '#F57F17', border: '#FFD54F' },
  Silver: { bg: '#F5F5F5', color: '#616161', border: '#BDBDBD' },
}

export default function GoldSilverETF() {
  const [tab, setTab] = useState(0)
  const tabFilter = tab === 0 ? 'All' : tab === 1 ? 'Gold' : 'Silver'
  const filtered = GOLD_SILVER_ETFS.filter((e) => tabFilter === 'All' || e.type === tabFilter)

  return (
    <Box sx={{ background: '#F8FAFC', minHeight: '100vh' }}>
      <PageHero
        title="Commodities"
        subtitle="Invest in commodity ETFs like gold and silver to hedge inflation and diversify your portfolio."
        breadcrumb="Commodities"
        icon={Diamond}
      />

      <Container maxWidth="xl" sx={{ py: { xs: 4, md: 6 } }}>
        {/* Info banner */}
        <Box sx={{
          background: 'linear-gradient(135deg, #FFF8E1, #FFF3E0)',
          border: '1px solid #FFD54F',
          borderRadius: 3, p: 2.5, mb: 4,
          display: 'flex', gap: 2, alignItems: 'center', flexWrap: 'wrap',
        }}>
          <Diamond sx={{ color: '#F57F17' }} />
          <Typography variant="body2" sx={{ fontWeight: 500, color: '#E65100' }}>
            <strong>Why Gold & Silver ETFs?</strong> No storage costs, easy liquidity on stock exchanges, and returns linked to global commodity prices. Ideal for portfolio diversification.
          </Typography>
        </Box>

        <Tabs value={tab} onChange={(_, v) => setTab(v)} sx={{ mb: 4, '& .MuiTab-root': { fontWeight: 700 } }}>
          <Tab label={`All (${GOLD_SILVER_ETFS.length})`} />
          <Tab label={`Gold (${GOLD_SILVER_ETFS.filter((e) => e.type === 'Gold').length})`} />
          <Tab label={`Silver (${GOLD_SILVER_ETFS.filter((e) => e.type === 'Silver').length})`} />
        </Tabs>

        <Grid container spacing={3}>
          {filtered.map((etf, i) => {
            const typeStyle = TYPE_STYLES[etf.type]
            return (
              <Grid item xs={12} sm={6} lg={3} key={etf.id} sx={{ display: 'flex' }}>
                <ScrollReveal delay={i * 0.06} style={{ width: '100%', display: 'flex' }}>
                  <motion.div whileHover={{ y: -4 }} style={{ width: '100%', display: 'flex' }}>
                    <Box
                      sx={{
                        p: 3, borderRadius: 3, background: '#fff',
                        border: '1px solid rgba(11,31,58,0.07)',
                        boxShadow: '0 2px 14px rgba(11,31,58,0.06)',
                        display: 'flex', flexDirection: 'column',
                        width: '100%', flex: 1,
                        '&:hover': { boxShadow: '0 6px 30px rgba(11,31,58,0.12)' },
                        transition: 'box-shadow 0.2s',
                      }}
                    >
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                        <Chip
                          label={etf.type}
                          size="small"
                          sx={{
                            fontWeight: 700, fontSize: '0.72rem',
                            background: typeStyle.bg,
                            color: typeStyle.color,
                            border: `1px solid ${typeStyle.border}`,
                          }}
                        />
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                          <TrendingUp sx={{ color: '#00C853', fontSize: 14 }} />
                          <Typography sx={{ color: '#00C853', fontWeight: 700, fontSize: '0.8rem' }}>
                            {etf.change}
                          </Typography>
                        </Box>
                      </Box>

                      <Typography variant="subtitle1" sx={{ fontWeight: 700, color: 'primary.main', mb: 0.5, lineHeight: 1.3 }}>
                        {etf.name}
                      </Typography>
                      <Typography variant="caption" sx={{ color: 'text.secondary', mb: 1.5, display: 'block' }}>
                        {etf.fundHouse}
                      </Typography>

                      <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.7, flexGrow: 1, mb: 2.5, fontSize: '0.82rem' }}>
                        {etf.description}
                      </Typography>

                      <Box sx={{
                        display: 'flex', justifyContent: 'space-between', mb: 2, mt: 'auto',
                        p: 1.5, background: typeStyle.bg, borderRadius: 2,
                      }}>
                        <Typography variant="caption" sx={{ color: 'text.secondary' }}>Expense Ratio</Typography>
                        <Typography variant="caption" sx={{ fontWeight: 700, color: typeStyle.color }}>{etf.expenseRatio}</Typography>
                      </Box>

                      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                        <Button
                          href={MOTILAL.referralUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          variant="contained"
                          fullWidth
                          endIcon={<ArrowForward />}
                          sx={{
                            fontWeight: 700,
                            background: `linear-gradient(135deg, ${typeStyle.color}, ${typeStyle.color}cc)`,
                            '&:hover': { background: typeStyle.color },
                          }}
                        >
                          Buy Now
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
