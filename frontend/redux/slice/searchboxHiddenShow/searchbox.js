import { createSlice } from "@reduxjs/toolkit";
export const searchSlice = createSlice({
  name: "search",
  initialState: false,
  reducers: {
    hiddenShow: (state) => {
     return state = !state;
    },
  },
});

export const { hiddenShow } = searchSlice.actions
export default searchSlice.reducer;
