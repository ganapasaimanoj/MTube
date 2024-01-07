import { configureStore } from "@reduxjs/toolkit";
import appSliceReducer from "./appSlice";
import videoSliceReducer from "./videosSlice";
import searchCacheReducer from "./searchCacheSlice";
const appStore = configureStore({
  reducer: {
    app: appSliceReducer,
    videos: videoSliceReducer,
    searchCache: searchCacheReducer,
  },
});
export default appStore;
