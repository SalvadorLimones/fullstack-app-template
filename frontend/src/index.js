import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { CounterProvider } from "./providers/counter";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CounterProvider>
      <Router>
        <App />
      </Router>
    </CounterProvider>
  </React.StrictMode>
);

reportWebVitals();
