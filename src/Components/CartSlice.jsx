import { createSlice } from '@reduxjs/toolkit';



// initialize an empty array named cartItems outside CartSlice.
const initialState = {
    cartItems: [],
};


// initialize CartSlice with one createSlice Redux Toolkit function
const CartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        //create five functions out of which two are used to handle 
        // addition and removal of products in the shopping cart, 
        // one to clear all the items at once, and other two are to 
        // increase and decrease the quantity.
        addItemToCart(state, action){
            const existingItem = state.cartItems.find(item => item.id == action.payload.id);
            if(existingItem){
                existingItem.quantity += 1;
            }else{
                // If the item doesn't exist in the cart, it adds the item 
                // to the cartItems array with a quantity of 1.
                state.cartItems.push({...action.payload, quantity:1});
            }
        },
        removeItemFromCart(state, action){
            state.cartItems = state.cartItems.filter(item => item.id !== action.payload);
        },
        clearCart(state){
            state.cartItems = [];
        },
        increaseItemQuantity(state, action){
            const itemToIncrease = state.cartItems.find(item => item.id === action.payload);
            if(itemToIncrease){
                itemToIncrease.quantity += 1;
            }
        },
        decreaseItemQuantity(state, action){
            const itemToDecrease = state.cartItems.find(item => item.id === action.payload);
            if(itemToDecrease && itemToDecrease > 1){
                itemToDecrease.quantity -= 1;
            }
        },
    }


    
}
);

export const {
    addItemToCart,
    removeItemFromCart,
    clearCart,
    increaseItemQuantity,
    decreaseItemQuantity,
} = CartSlice.actions;

export default CartSlice.reducer;
