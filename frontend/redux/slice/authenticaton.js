import { createSlice } from "@reduxjs/toolkit";

export const Authentication = createSlice({
  name: "authentication",
  initialState: {
    isloggin: false,
    token: localStorage.getItem("token")
      ? JSON.parse(localStorage.getItem("token"))
      : null,
  },
  reducers: {
    setLogin: (state, action) => {
      state.token = action.payload;
      localStorage.setItem("token", JSON.stringify(action.payload));
    },
    setLogout: (state, action) => {
      state.token = null;
      localStorage.removeItem("token");
    },
  },
});

export const { setLogin, setLogout } = Authentication.actions;

export default Authentication.reducer;
