import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./slice/counter/counter";
import searchSlice from "./slice/searchboxHiddenShow/searchbox";
import  UserSlice  from "./slice/userData/userData";
import twitt from "./slice/twitt/twitt";

export default configureStore({
  reducer: {
    user: UserSlice,
    seachHiddenShow: searchSlice,
    twitt: twitt
  },

});
