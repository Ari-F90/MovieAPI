import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app/app";
import { BrowserRouter as Router } from "react-router-dom";
import { MoviesContextProvider } from "./movies/context/movies.context.provider";

const root = ReactDOM.createRoot(document.querySelector(".container"));
root.render(
  <React.StrictMode>
    <MoviesContextProvider>
      <Router>
        <App />
      </Router>
    </MoviesContextProvider>
  </React.StrictMode>
);
