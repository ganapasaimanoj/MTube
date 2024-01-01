import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    isMenuOpen: true,
    countryCode: null,
  },
  reducers: {
    toggleMenu(state) {
      state.isMenuOpen = !state.isMenuOpen;
    },
    closeMenu(state) {
      state.isMenuOpen = false;
    },
    setCountryCode(state, action) {
      state.countryCode = action.payload;
    },
  },
});
export const { toggleMenu, setCountryCode, closeMenu } = appSlice.actions;
export default appSlice.reducer;
