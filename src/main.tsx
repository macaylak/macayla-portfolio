import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/globals.css";
import "./styles/layout.css";
import "./styles/components.css";
import "./styles/pages/home.css";
import "./styles/pages/about.css";
import "./styles/pages/projects.css";
import "./styles/pages/experience.css";
import "./styles/pages/contact.css";

import { initTheme } from "./theme";

initTheme();

// document.documentElement.setAttribute("data-theme", "pomegranate");

// document.documentElement.setAttribute("data-theme", "plumbutter");

document.documentElement.setAttribute("data-theme", "winesmoke");

document.documentElement.setAttribute("data-mode", "dark"); // or "light"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);