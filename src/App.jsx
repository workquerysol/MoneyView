import React, { Suspense, lazy } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { Box, CircularProgress } from '@mui/material'
import { AnimatePresence, motion } from 'framer-motion'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import ScrollToTopButton from './components/common/ScrollToTopButton'

const Home = lazy(() => import('./pages/Home/Home'))
const StocksETF = lazy(() => import('./pages/StocksETF/StocksETF'))
const MutualFunds = lazy(() => import('./pages/MutualFunds/MutualFunds'))
const FixedDeposit = lazy(() => import('./pages/FixedDeposit/FixedDeposit'))
const Insurance = lazy(() => import('./pages/Insurance/Insurance'))
const PMS = lazy(() => import('./pages/PMS/PMS'))
const GoldSilverETF = lazy(() => import('./pages/GoldSilverETF/GoldSilverETF'))
const OpenDemat = lazy(() => import('./pages/OpenDemat/OpenDemat'))

function PageLoader() {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '60vh' }}>
      <CircularProgress color="secondary" />
    </Box>
  )
}

function AnimatedRoutes() {
  const location = useLocation()
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 16, scale: 0.99 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -12, scale: 0.99 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      >
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/stocks-etf" element={<StocksETF />} />
          <Route path="/mutual-funds" element={<MutualFunds />} />
          <Route path="/fixed-deposit" element={<FixedDeposit />} />
          <Route path="/insurance" element={<Insurance />} />
          <Route path="/pms" element={<PMS />} />
          <Route path="/gold-silver-etf" element={<GoldSilverETF />} />
          <Route path="/open-demat" element={<OpenDemat />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Navbar />
        <Box component="main" sx={{ flexGrow: 1 }}>
          <Suspense fallback={<PageLoader />}>
            <AnimatedRoutes />
          </Suspense>
        </Box>
        <Footer />
        <ScrollToTopButton />
      </Box>
    </BrowserRouter>
  )
}
