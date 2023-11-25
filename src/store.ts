import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./features/cartSlice";
import confirmSlice from "./features/confirmSlice";
import loaderSlice from "./features/loaderSlice";
import toastSlice from "./features/toastSlice";

const store = configureStore({
  reducer: {
    cart: cartSlice,
    confirm: confirmSlice,
    loader: loaderSlice,
    toast: toastSlice,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
