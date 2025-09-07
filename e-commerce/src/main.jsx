import React from "react";
import App from "./App";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "/global.css"
import ShopContextProvider from "./Context/ShopContext";
createRoot(document.querySelector("#root")).render(
    <ShopContextProvider>
      <App/>
    </ShopContextProvider>
);