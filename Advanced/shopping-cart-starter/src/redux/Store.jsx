import { configureStore } from '@reduxjs/toolkit'
import CartSlice from './Slice/CartSlice.jsx'

export const store = configureStore({
  reducer: {
    cart: CartSlice
  },
})