import { createSlice } from "@reduxjs/toolkit";
export const twittSlice = createSlice({
  name: "twitt",
  initialState: {
    twitt: null,
    refresh: false,
    
  },
  reducers: {
    setTwitt: (state, action) => {
      state.twitt = action.payload;
    },
    setRefresh: (state) => {
      state.refresh = !state.refresh;
    },
  },
});

export const { setTwitt,setRefresh } = twittSlice.actions;
export default twittSlice.reducer;
