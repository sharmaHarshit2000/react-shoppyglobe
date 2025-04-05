import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { items: [] },
  reducers: {
    addToCart: (state, action) => {
      // Check if the item already exists in the cart by comparing IDs
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );

      if (existingItem) {
        // If item exists, increase its quantity 
        existingItem.quantity += 1;
      } else {
        // If item is new, add it to the cart with quantity = 1
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },

    removeFromCart: (state, action) => {
      // Remove item from cart by filtering out the matching ID
      state.items = state.items.filter((item) => item.id !== action.payload);
    },

    decreaseQuantity: (state, action) => {
      // Find the item to decrease quantity
      const existingItem = state.items.find(
        (item) => item.id === action.payload
      );

      if (existingItem) {
        if (existingItem.quantity > 1) {
          // If quantity is more than 1, decrement
          existingItem.quantity -= 1;
        } else {
          // If quantity is 1, remove item from cart
          state.items = state.items.filter((item) => item.id !== action.payload);
        }
      }
    },

    clearCart: (state) => {
      // Reset cart to empty array
      state.items = [];
    },
  },
});

export const { addToCart, removeFromCart, decreaseQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
