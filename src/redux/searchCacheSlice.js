import { createSlice } from "@reduxjs/toolkit";

const searchCacheSlice = createSlice({
  name: "searchCache",
  initialState: {},
  reducers: {
    setCacheResults(state, action) {
      state = Object.assign(state, action.payload);
      /*state = { ...state, ...action.payload };*/
    },
  },
});
export const { setCacheResults } = searchCacheSlice.actions;
export default searchCacheSlice.reducer;
