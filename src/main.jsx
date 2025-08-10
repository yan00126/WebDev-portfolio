import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Hotjar from "@hotjar/browser";

const siteId = 6489320;
const hotjarVersion = 6;

Hotjar.init(siteId, hotjarVersion);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
