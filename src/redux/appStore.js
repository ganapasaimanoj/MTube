import { configureStore } from "@reduxjs/toolkit";
import appSliceReducer from "./appSlice";
const appStore = configureStore({ reducer: { app: appSliceReducer } });
export default appStore;
