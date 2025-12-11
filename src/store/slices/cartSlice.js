import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: {},
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const id = action.payload;
      state.items[id] = (state.items[id] || 0) + 1;
    },
    removeFromCart: (state, action) => {
      const id = action.payload;
      if (!state.items[id]) return;

      if (state.items[id] === 1) {
        delete state.items[id];
      } else {
        state.items[id] -= 1;
      }
    },
    clearCart: (state) => {
      state.items = {};
    },
  },
  selectors: {
    selectCartItems: (state) => state.items,
    selectCartItemAmountById: (state, id) => state.items[id] || 0,
    selectCartTotalAmount: (state) =>
      Object.values(state.items).reduce((acc, amount) => acc + amount, 0),
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export const {
  selectCartItems,
  selectCartItemAmountById,
  selectCartTotalAmount,
} = cartSlice.selectors;

export default cartSlice.reducer;

