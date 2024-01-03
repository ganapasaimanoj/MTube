import { createSlice } from "@reduxjs/toolkit";
const homePageSlice = createSlice({
  name: "homePage",
  initialState: {
    isHomePage: true,
    homePageData: [],
  },
  reducers: {
    setHomePage(state, action) {
      state.isHomePage = action.payload;
    },
    setHomePageData(state, action) {
      state.homePageData = [...state.homePageData, ...action.payload];
    },
  },
});
export const { setHomePage, setHomePageData } = homePageSlice.actions;
export default homePageSlice.reducer;
