import { configureStore } from "@reduxjs/toolkit";
import appSliceReducer from "./appSlice";
import videoSliceReducer from "./videosSlice";
import searchCacheReducer from "./searchCacheSlice";
import chatSliceReducer from "./chatSlice";
const appStore = configureStore({
  reducer: {
    app: appSliceReducer,
    videos: videoSliceReducer,
    searchCache: searchCacheReducer,
    chat: chatSliceReducer,
  },
});
export default appStore;
