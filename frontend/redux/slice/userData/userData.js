import { createSlice, current } from "@reduxjs/toolkit";

export const UserSlice = createSlice({
  name: "user",
  initialState: {
    user:
      localStorage.getItem("user") || localStorage.getItem("user") !== undefined
        ? JSON.parse(localStorage.getItem("user"))
        : null,
    otheruser: null,
    profile: null,
    googleLogin: false,
    googleauthData: null,
  },
  reducers: {
    user: (state, action) => {
      state.user = action.payload;
      localStorage.setItem("user", JSON.stringify(action.payload));
    },
    otheruser: (state, action) => {
      state.otheruser = action.payload;
    },
    setprofile: (state, action) => {
      state.profile = action.payload;
    },
    setRefreshFollowing: (state, action) => {
      if (state.user.following.includes(action.payload)) {
        state.user.following = state.user.following.filter(
          (item) => item !== action.payload
        );
      } else {
        state.user.following.push(action.payload);
      }
    },
    setUserDataNull: (state) => {
      state.user = null;
      state.profile = null;
      state.otheruser = null;
      localStorage.removeItem("user");
    },
    setGoogleLogin: (state, action) => {
      state.googleLogin = action.payload;
    },
    setgoogleauthData: (state, action) => {
      state.googleauthData = action.payload;
    },
  },
});

export const {
  user,
  otheruser,
  setprofile,
  setRefreshFollowing,
  setUserDataNull,
  setGoogleLogin,
  setgoogleauthData,
} = UserSlice.actions;
export default UserSlice.reducer;
