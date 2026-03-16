import { createSlice } from '@reduxjs/toolkit'

const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    stockSearch: '',
    stockSector: 'All',
    mfCategory: 'All',
    mfRisk: 'All',
    etfType: 'All',
  },
  reducers: {
    setStockSearch: (state, action) => { state.stockSearch = action.payload },
    setStockSector: (state, action) => { state.stockSector = action.payload },
    setMFCategory: (state, action) => { state.mfCategory = action.payload },
    setMFRisk: (state, action) => { state.mfRisk = action.payload },
    setETFType: (state, action) => { state.etfType = action.payload },
  },
})

export const { setStockSearch, setStockSector, setMFCategory, setMFRisk, setETFType } = filterSlice.actions
export default filterSlice.reducer
