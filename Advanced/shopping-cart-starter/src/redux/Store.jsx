import { configureStore } from '@reduxjs/toolkit'
import CartSlice, { add } from './Slice/CartSlice.jsx'

export const store = configureStore({
  reducer: {
    cart: CartSlice
  },
})