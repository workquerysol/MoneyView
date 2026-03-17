import React, { useState } from 'react'
import {
  Box, Container, Grid, Typography, Button, Chip, TextField, InputAdornment,
  Tab, Tabs, Select, MenuItem, FormControl, InputLabel, Skeleton,
} from '@mui/material'
import { Search, TrendingUp, TrendingDown, ArrowForward, ShowChart } from '@mui/icons-material'
import { motion } from 'framer-motion'
import { useDispatch, useSelector } from 'react-redux'
import { setStockSearch, setStockSector, setETFType } from '../../store/slices/filterSlice'
import { STOCKS, ETFS, SECTORS, ETF_TYPES } from '../../data/stocks'
import { BROKERS } from '../../data/brokers'
import PageHero from '../../components/common/PageHero'
import ScrollReveal from '../../components/common/ScrollReveal'

const MOTILAL = BROKERS.find((b) => b.id === 'motilal')

function StockCard({ stock, referralUrl }) {
  return (
    <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.2 }} style={{ width: '100%', display: 'flex' }}>
      <Box
        sx={{
          p: 2.5, borderRadius: 3, background: '#fff',
          border: '1px solid rgba(11,31,58,0.07)',
          boxShadow: '0 2px 14px rgba(11,31,58,0.06)',
          display: 'flex', flexDirection: 'column', gap: 1.5,
          width: '100%', flex: 1,
          transition: 'box-shadow 0.2s',
          '&:hover': { boxShadow: '0 6px 30px rgba(11,31,58,0.12)' },
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <Box>
            <Typography variant="subtitle1" sx={{ fontWeight: 700, color: 'primary.main', lineHeight: 1.2 }}>
              {stock.name}
            </Typography>
            <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 600 }}>{stock.symbol}</Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
            {stock.positive ? <TrendingUp sx={{ color: '#00C853', fontSize: 16 }} /> : <TrendingDown sx={{ color: '#FF1744', fontSize: 16 }} />}
            <Typography sx={{ color: stock.positive ? '#00C853' : '#FF1744', fontWeight: 700, fontSize: '0.875rem' }}>
              {stock.change}
            </Typography>
          </Box>
        </Box>

        <Chip label={stock.sector || stock.type} size="small" sx={{ alignSelf: 'flex-start', fontWeight: 600, fontSize: '0.72rem', background: 'rgba(11,31,58,0.05)' }} />

        <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.6, fontSize: '0.82rem' }}>
          {stock.description}
        </Typography>

        {stock.expenseRatio && (
          <Typography variant="caption" sx={{ color: 'text.secondary' }}>
            Expense Ratio: <strong>{stock.expenseRatio}</strong>
          </Typography>
        )}

        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} style={{ marginTop: 'auto' }}>
          <Button
            href={referralUrl}
            target="_blank"
            rel="noopener noreferrer"
            variant="contained"
            color="secondary"
            fullWidth
            size="small"
            endIcon={<ArrowForward />}
            sx={{ fontWeight: 700, mt: 0.5 }}
          >
            Buy Now
          </Button>
        </motion.div>
      </Box>
    </motion.div>
  )
}

export default function StocksETF() {
  const [tab, setTab] = useState(0)
  const dispatch = useDispatch()
  const { stockSearch, stockSector, etfType } = useSelector((s) => s.filter)

  const filteredStocks = STOCKS.filter((s) => {
    const matchSearch = s.name.toLowerCase().includes(stockSearch.toLowerCase()) || s.symbol.toLowerCase().includes(stockSearch.toLowerCase())
    const matchSector = stockSector === 'All' || s.sector === stockSector
    return matchSearch && matchSector
  })

  const filteredETFs = ETFS.filter((e) => etfType === 'All' || e.type === etfType)

  return (
    <Box sx={{ background: '#F8FAFC', minHeight: '100vh' }}>
      <PageHero
        title="Stocks & ETFs"
        subtitle="Invest in India's top companies and index ETFs. Click Buy to open your demat account with Motilal Oswal."
        breadcrumb="Stocks & ETF"
        icon={ShowChart}
      />

      <Container maxWidth="xl" sx={{ py: { xs: 4, md: 6 } }}>
        {/* Tabs */}
        <Tabs
          value={tab}
          onChange={(_, v) => setTab(v)}
          sx={{ mb: 4, '& .MuiTab-root': { fontWeight: 700 }, '& .Mui-selected': { color: 'primary.main' } }}
        >
          <Tab label={`Stocks (${STOCKS.length})`} />
          <Tab label={`ETFs (${ETFS.length})`} />
        </Tabs>

        {/* Filters */}
        {tab === 0 && (
          <Box sx={{ display: 'flex', gap: 2, mb: 4, flexWrap: 'wrap' }}>
            <TextField
              size="small"
              placeholder="Search stocks..."
              value={stockSearch}
              onChange={(e) => dispatch(setStockSearch(e.target.value))}
              InputProps={{ startAdornment: <InputAdornment position="start"><Search sx={{ color: 'text.disabled' }} /></InputAdornment> }}
              sx={{ width: { xs: '100%', sm: 280 } }}
            />
            <FormControl size="small" sx={{ minWidth: 160 }}>
              <InputLabel>Sector</InputLabel>
              <Select value={stockSector} label="Sector" onChange={(e) => dispatch(setStockSector(e.target.value))}>
                {SECTORS.map((s) => <MenuItem key={s} value={s}>{s}</MenuItem>)}
              </Select>
            </FormControl>
          </Box>
        )}

        {tab === 1 && (
          <Box sx={{ display: 'flex', gap: 2, mb: 4, flexWrap: 'wrap' }}>
            <FormControl size="small" sx={{ minWidth: 160 }}>
              <InputLabel>ETF Type</InputLabel>
              <Select value={etfType} label="ETF Type" onChange={(e) => dispatch(setETFType(e.target.value))}>
                {ETF_TYPES.map((t) => <MenuItem key={t} value={t}>{t}</MenuItem>)}
              </Select>
            </FormControl>
          </Box>
        )}

        {/* Grid */}
        <Grid container spacing={3}>
          {(tab === 0 ? filteredStocks : filteredETFs).map((item, i) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={item.id} sx={{ display: 'flex' }}>
              <ScrollReveal delay={i * 0.04} style={{ width: '100%', display: 'flex' }}>
                <StockCard stock={item} referralUrl={MOTILAL.referralUrl} />
              </ScrollReveal>
            </Grid>
          ))}
        </Grid>

        {(tab === 0 ? filteredStocks : filteredETFs).length === 0 && (
          <Box sx={{ textAlign: 'center', py: 8 }}>
            <Typography color="text.secondary">No results found. Try a different search or filter.</Typography>
          </Box>
        )}
      </Container>
    </Box>
  )
}
