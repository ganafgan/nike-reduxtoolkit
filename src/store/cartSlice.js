import { createSlice, createSelector } from "@reduxjs/toolkit";

const initialState = {
    items: [],
    deliveryFee: 15,
    freeDeliveryfrom: 200,
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState: initialState,
    reducers: {
        addCartItem: (state, action) => {
            const newProduct = action.payload.product
            
            const cartItem = state.items.find((i) => i.product.id == newProduct.id)

            if(cartItem){
                cartItem.quantity += 1
            } else {
                state.items.push({
                    product: newProduct,
                    quantity: 1
                })
            }

        },
        changeQuantity: (state, action) => {
            const { productId, amount } = action.payload

            const cartItem = state.items.find((i) => i.product.id == productId)

            if(cartItem){
                cartItem.quantity += amount
            }

            if(cartItem.quantity <= 0){
                state.items = state.items.filter((val) => val.product.id !== productId)
            }
        }
    }
})

export const selectNumberOfItems = (state) => state.cart.items.length

export const selectSubtotal = (state) => {
    return state.cart.items.reduce((sum, cartItem) => (sum + cartItem.product.price * cartItem.quantity), 0) 
}

const cartSelector = (state) => state.cart

export const selectDeliveryPrice = createSelector(
    cartSelector,
    selectSubtotal,
    (cart, subtotal) => subtotal > cart.freeDeliveryfrom ? 0 : cart.deliveryFee
)

export const selectTotal = createSelector(
    selectSubtotal,
    selectDeliveryPrice,
    (total, deliveryFee) => total + deliveryFee
)
