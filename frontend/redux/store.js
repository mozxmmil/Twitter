import { combineSlices, configureStore } from "@reduxjs/toolkit";
import counterSlice from "./slice/counter/counter";
import searchSlice from "./slice/searchboxHiddenShow/searchbox";
import  UserSlice  from "./slice/userData/userData";
import twitt from "./slice/twitt/twitt";
import {
  
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'



const persistConfig = {
  key: 'root',
  version: 1,
  storage,
}
const rootReducer = combineSlices( {
  user: UserSlice,
  seachHiddenShow: searchSlice,
  twitt: twitt,
  counter: counterSlice,
})
const persistedReducer = persistReducer(persistConfig, rootReducer)
export default configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),

});
