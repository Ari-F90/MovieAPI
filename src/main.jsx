import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app/app";
import { BrowserRouter as Router } from "react-router-dom";

const root = ReactDOM.createRoot(document.querySelector(".container"));
root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
