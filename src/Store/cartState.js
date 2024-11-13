import { createSlice } from "@reduxjs/toolkit";

// creating a slice
const cartSlice = createSlice({
  name: "cart",
  initialState: { items: [], heading: "Add to cart" },

  // reducers to add to cart aswell as remove
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      const itemToRemove = action.payload.id;
      state.items = state.items.filter((item) => item.id !== itemToRemove);
    },
  },
});

// exporting everything that is needed
export const { addItem, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
