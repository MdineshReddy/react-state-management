import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showConfirm: false,
};

const confirmSlice = createSlice({
  name: "confirm slice",
  initialState,
  reducers: {
    showConfirm(state) {
      state.showConfirm = true;
    },
    hideConfirm(state) {
      state.showConfirm = false;
    },
  },
});

export const { hideConfirm, showConfirm } = confirmSlice.actions;

export default confirmSlice.reducer;
