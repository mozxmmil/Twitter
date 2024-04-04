import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./slice/counter/counter";
import searchSlice from "./slice/searchboxHiddenShow/searchbox";
import  UserSlice  from "./slice/userData/userData";

export default configureStore({
  reducer: {
    user: UserSlice,
    seachHiddenShow: searchSlice,
  },
});
