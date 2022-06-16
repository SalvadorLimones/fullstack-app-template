import React, { useEffect } from "react";
import { useAuth } from "../providers/auth";
import { useNavigate } from "react-router-dom";

const Protected = ({ children }) => {
  const { token } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) navigate("/");
    // eslint-disable-next-line
  }, [token]);

  return <>{children}</>;
};

export default Protected;
