import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './Components/CartSlice';
const store = configureStore(
    {
        reducer: {
            cart: cartReducer,
        },
        // Additional store configuration options can be included such as
        // middleware, enhancers, or other options such as devtools configuration
    }
);

export default store;