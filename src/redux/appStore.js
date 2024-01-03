import { configureStore } from "@reduxjs/toolkit";
import appSliceReducer from "./appSlice";
import homePageSliceReducer from "./homePageSlice";
const appStore = configureStore({
  reducer: { app: appSliceReducer, homePage: homePageSliceReducer },
});
export default appStore;
