import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Toast {
  msg?: string;
  success?: boolean;
}

const initialState: Toast = {};

const toastSlice = createSlice({
  name: "Toast Slice",
  initialState,
  reducers: {
    showToast(state, action: PayloadAction<Toast>) {
      state.msg = action.payload.msg;
      state.success = action.payload.success;
    },
    hideToast(state) {
      state = {};
    },
  },
});

export const { hideToast, showToast } = toastSlice.actions;

export default toastSlice.reducer;
