import React from "react";

import ReactDOM from "react-dom/client";

import App from "./App.tsx";
import "./tokens/button.css";
import "./tokens/color-palette.css";
import "./tokens/input-tokens.css";
import "./tokens/theme-tokens.css";
import "./globals.css";

const root = document.getElementById("root");

if (root) {
  ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
}
