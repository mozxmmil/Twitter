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
    setRefreshFollowing: (state, action) => {
      if (state.user.following.includes(action.payload)) {
        state.user.following = state.user.following.filter(
          (item) => item !== action.payload
        );
      } else {
        state.user.following.push(action.payload);
      }
    },
    setUserDataNull:(state)=>{
      state.user=null;
      state.profile=null;
      state.otheruser=null;
    }
  },
});

export const { user, otheruser, setprofile, setRefreshFollowing,setUserDataNull } =
  UserSlice.actions;
export default UserSlice.reducer;
