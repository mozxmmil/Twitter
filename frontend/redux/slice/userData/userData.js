import { createSlice } from "@reduxjs/toolkit";

export const UserSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    otheruser: null,
    profile: null,
  },
  reducers: {
    user: (state, action) => {
      state.user = action.payload;
    },
    otheruser: (state, action) => {
      state.otheruser = action.payload;
    },
    setprofile: (state, action) => {
      state.profile = action.payload;
    },
  },
});

export const { user, otheruser,setprofile } = UserSlice.actions;
export default UserSlice.reducer;
