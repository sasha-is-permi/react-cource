import { configureStore } from '@reduxjs/toolkit';
import restaurantReducer from './slices/restaurantSlice';
import dishReducer from './slices/dishSlice';
import reviewReducer from './slices/reviewSlice';
import userReducer from './slices/userSlice';
import cartReducer from './slices/cartSlice';

export const store = configureStore({
  reducer: {
    restaurant: restaurantReducer,
    dish: dishReducer,
    review: reviewReducer,
    user: userReducer,
    cart: cartReducer,
  },
});

