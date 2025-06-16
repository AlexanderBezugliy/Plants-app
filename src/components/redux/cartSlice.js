import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    items: [],
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            // const existingItem = state.items.find((item) => item.id === action.payload.id);
            // if (existingItem) {
            //     existingItem.quantity = 1;
            // } else {
            //     state.items.push({ ...action.payload, quantity: 1 });
            // }
            state.items.push({...action.payload, quantity: 1 });
        },

        removeCart: (state, action) => {
            state.items = state.items.filter((i) => i.id !== action.payload);
        },

        increaseQuantity: (state, action) => {
            const item = state.items.find((i) => i.id === action.payload);
            if (item) {
                item.quantity +=1
            }
        },

        decreaseQuantity: (state, action) => {
            const item = state.items.find((i) => i.id === action.payload);
            if (item && item.quantity > 1) {
                item.quantity -=1
            }
        },

        clearBasket: (state) => {
            state.items = [];
        }
    }
});

export const { addToCart, removeCart, increaseQuantity, decreaseQuantity, clearBasket } = cartSlice.actions;

export default cartSlice.reducer;