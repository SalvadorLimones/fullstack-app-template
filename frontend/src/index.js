import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { CounterProvider } from "./providers/counter";
import { AuthProvider } from "./providers/auth";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <CounterProvider>
        <Router>
          <App />
        </Router>
      </CounterProvider>
    </AuthProvider>
  </React.StrictMode>
);

reportWebVitals();
