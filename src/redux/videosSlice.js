import { createSlice } from "@reduxjs/toolkit";
const videosSlice = createSlice({
  name: "videos",
  initialState: {
    isHomePage: true,
    homePageData: [],
    watchVideo: null,
    users: [],
  },
  reducers: {
    fetchUsersSuccess(state, action) {
      console.log('__fetchUsersSuccess', action.payload);
      state.users = action.payload;
    },
    fetchUsersFail(state, action) {},
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
export const { setHomePage, setHomePageData, setWatchVideo, fetchUsersSuccess, fetchUsersFail } =
  videosSlice.actions;
export default videosSlice.reducer;
