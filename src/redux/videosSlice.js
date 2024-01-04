import { createSlice } from "@reduxjs/toolkit";
const videosSlice = createSlice({
  name: "videos",
  initialState: {
    isHomePage: true,
    homePageData: [],
    watchVideo: null,
  },
  reducers: {
    setHomePage(state, action) {
      state.isHomePage = action.payload;
    },
    setHomePageData(state, action) {
      state.homePageData = [...state.homePageData, ...action.payload];
    },
    setWatchVideo(state, action) {
      state.watchVideo = { ...action.payload };
    },
  },
});
export const { setHomePage, setHomePageData, setWatchVideo } =
  videosSlice.actions;
export default videosSlice.reducer;
