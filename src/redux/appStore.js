import { configureStore } from "@reduxjs/toolkit";
import appSliceReducer from "./appSlice";
import videoSliceReducer from "./videosSlice";
const appStore = configureStore({
  reducer: { app: appSliceReducer, videos: videoSliceReducer },
});
export default appStore;
