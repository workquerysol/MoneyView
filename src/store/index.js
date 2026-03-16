import { configureStore } from '@reduxjs/toolkit'
import filterReducer from './slices/filterSlice'
import uiReducer from './slices/uiSlice'

export const store = configureStore({
  reducer: {
    filter: filterReducer,
    ui: uiReducer,
  },
})
