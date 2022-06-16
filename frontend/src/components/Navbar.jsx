import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../providers/auth";

const Navbar = () => {
  const navigate = useNavigate();
  const { auth, token, logout } = useAuth();
  const nav = (path) => {
    console.log("routing");
    navigate(path);
  };
  return (
    <nav
      style={{
        backgroundColor: "grey",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <div>
        <button onClick={() => nav("/")}>Home</button>
        <button onClick={() => nav("/about")}>About</button>
        {/* <button onClick={() => navigate("/profile")}>Profile</button> */}
        <Link to="/profile">Profile</Link>
      </div>
      <div>
        {!token ? (
          <button onClick={auth}>Login</button>
        ) : (
          <button onClick={logout}>Logout</button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
