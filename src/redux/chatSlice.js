import { createSlice } from "@reduxjs/toolkit";
import { MAX_CHAT_COUNT, OFFSET_LIVE_CHAT } from "../utils/constants";
const chatSlice = createSlice({
  name: "chat",
  initialState: {
    messages: [],
  },
  reducers: {
    addMessages(state, action) {
      if (state.messages.length) state.messages.splice(OFFSET_LIVE_CHAT, 1);
      state.messages.unshift(action.payload);
    },
  },
});

export const { addMessages } = chatSlice.actions;
export default chatSlice.reducer;
