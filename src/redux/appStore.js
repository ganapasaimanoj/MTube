import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from 'redux-saga';
import appSliceReducer from "./appSlice";
import videoSliceReducer from "./videosSlice";
import searchCacheReducer from "./searchCacheSlice";
import chatSliceReducer from "./chatSlice";
import rootSaga from './rootSaga';

const sagaMiddleware = createSagaMiddleware();
const appStore = configureStore({
  reducer: {
    app: appSliceReducer,
    videos: videoSliceReducer,
    searchCache: searchCacheReducer,
    chat: chatSliceReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});
sagaMiddleware.run(rootSaga);
export default appStore;