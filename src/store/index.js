import { configureStore } from '@reduxjs/toolkit'
import { cartSlice } from './cartSlice'
import { productsSlice } from './productSlice'

export const store = configureStore({
    reducer:{
        products: productsSlice.reducer,
        cart: cartSlice.reducer
    }
})
