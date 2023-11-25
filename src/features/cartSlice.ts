import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { CartItem } from "../cartItems";
import { hideLoader, showLoader } from "./loaderSlice";
import { showToast } from "./toastSlice";

const url = "https://course-api.com/react-useReucer-cart-project";

export const getCartItems = createAsyncThunk(
  "cart/getCartItems",
  async (_, thunkAPI) => {
    try {
      thunkAPI.dispatch(showLoader());
      const { data } = await axios(url);
      thunkAPI.dispatch(hideLoader());
      thunkAPI.dispatch(
        showToast({
          msg: "Successfully Fetched Data",
          success: true,
        })
      );
      return data;
    } catch (error) {
      thunkAPI.dispatch(hideLoader());
      thunkAPI.dispatch(
        showToast({
          msg: "Something went wrong while fetching data",
          success: false,
        })
      );
      console.log(error);
      throw error;
    }
  }
);

interface Cart {
  cartItems: CartItem[];
  amount: number;
  total: number;
}

const initialState: Cart = {
  amount: 0,
  total: 0,
  cartItems: [],
};

const cartSlice = createSlice({
  name: "cart slice",
  initialState,
  reducers: {
    increase(state, action: PayloadAction<string>) {
      state.cartItems = state.cartItems.map((item) => {
        if (item.id === action.payload) {
          return { ...item, amount: item.amount + 1 };
        }
        return item;
      });
    },
    decrease(state, action: PayloadAction<string>) {
      state.cartItems = state.cartItems.map((item) => {
        if (item.id === action.payload) {
          return { ...item, amount: item.amount - 1 };
        }
        return item;
      });
    },
    remove(state, action: PayloadAction<string>) {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
    },
    clearCart(state) {
      state.cartItems = [];
    },
    calculateTotals(state) {
      let total = 0;
      let amount = 0;

      for (let i of state.cartItems) {
        amount += i.amount;
        total += i.amount * Number(i.price);
      }

      state.amount = amount;
      state.total = total;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getCartItems.fulfilled, (state, action) => {
        state.cartItems = action.payload;
      })
      .addCase(getCartItems.rejected, (state, action) => {
        console.log(action);
      });
  },
});

export const { calculateTotals, decrease, increase, remove, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;
