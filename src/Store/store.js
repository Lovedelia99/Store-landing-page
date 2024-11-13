import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartState";

// creating Redux store as shown in example
const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
