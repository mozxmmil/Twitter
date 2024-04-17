import { createSlice } from "@reduxjs/toolkit";
export const twittSlice = createSlice({
  name: "twitt",
  initialState: {
    twitt: null,
    refresh: false,
    isActive: true,
  },
  reducers: {
    setTwitt: (state, action) => {
      state.twitt = action.payload;
    },
    setRefresh: (state) => {
      state.refresh = !state.refresh;
    },
    setIsActive: (state, action) => {
      state.isActive = action.payload;
    },
    setTwittNull: (state) => {
      state.twitt = null;
    },
  },
});

export const { setTwitt, setRefresh, setIsActive,setTwittNull } = twittSlice.actions;
export default twittSlice.reducer;
