import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";

// ✅ Works locally and on GitHub Pages if you're using CRA:
//    PUBLIC_URL is "" in dev, and your homepage path in prod.
const base =
  (typeof process !== "undefined" && process.env?.PUBLIC_URL) // CRA / gh-pages
  || (typeof import.meta !== "undefined" && import.meta.env?.BASE_URL) // Vite
  || "/portfolioWebsite"; // fallback for safety

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename={base}>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
