import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Toasterr } from "../utils/HotTost.js";
import Providers from "../redux/Providers.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Providers>
      <App />
      <Toasterr />
    </Providers>
  </React.StrictMode>
);
