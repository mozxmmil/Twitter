
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import store from "../redux/store.js";
import { Provider } from "react-redux";
import { Toasterr } from "../utils/HotTost.js";
import { PersistGate } from "redux-persist/es/integration/react";
import { persistStore } from "redux-persist";
let persistor = persistStore(store)
ReactDOM.createRoot(document.getElementById("root")).render(
  
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
        <Toasterr />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
