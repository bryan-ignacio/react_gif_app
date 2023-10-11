import React from "react";
import ReactDOM from "react-dom/client";
import { GifApp } from "./GifApp.jsx";
import "./styles.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  // el modo estricto: ayuda a identificar componentes con warning, con codigo viejo.
  // <React.StrictMode>
  <GifApp />
  // </React.StrictMode>
);
