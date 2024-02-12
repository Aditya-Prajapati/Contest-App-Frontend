import React from "react";
import { createRoot } from "react-dom/client";
import "./index.scss";
import App from "./App.js";

const root = createRoot(document.getElementById("root"));
root.render(<App />);