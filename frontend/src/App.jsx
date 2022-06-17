import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./pages/Profile";
import Navbar from "./components/Navbar";
import Callback from "./pages/Callback";
import Protected from "./components/Protected";
import Register from "./pages/Register";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route
          path="/profile"
          element={
            <Protected key={"1"}>
              <Profile />
            </Protected>
          }
        ></Route>
        <Route path="/callback" element={<Callback />}></Route>
        <Route
          path="/register"
          element={
            <Protected key={"2"}>
              <Register />
            </Protected>
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
