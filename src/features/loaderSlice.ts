import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showLoader: false,
};

const loaderSlice = createSlice({
  name: "confirm slice",
  initialState,
  reducers: {
    showLoader(state) {
      state.showLoader = true;
    },
    hideLoader(state) {
      state.showLoader = false;
    },
  },
});

export const { showLoader, hideLoader } = loaderSlice.actions;

export default loaderSlice.reducer;
