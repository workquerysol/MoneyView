import { createSlice } from '@reduxjs/toolkit'

const uiSlice = createSlice({
  name: 'ui',
  initialState: {
    mobileMenuOpen: false,
    newsletterSubscribed: false,
  },
  reducers: {
    toggleMobileMenu: (state) => { state.mobileMenuOpen = !state.mobileMenuOpen },
    closeMobileMenu: (state) => { state.mobileMenuOpen = false },
    setNewsletterSubscribed: (state) => { state.newsletterSubscribed = true },
  },
})

export const { toggleMobileMenu, closeMobileMenu, setNewsletterSubscribed } = uiSlice.actions
export default uiSlice.reducer
