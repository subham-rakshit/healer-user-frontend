import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

// ✅ Local Custom CSS
import "./css/mobiscroll.jquery.min.css";
import "./css/wr-core-1.1.1-min.css";
import "./css/style.css";
import "./css/responsive.css";
import "./css/all-icons.css";

// ✅ Font Awesome CSS (npm-installed)
import "@fortawesome/fontawesome-free/css/all.min.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
