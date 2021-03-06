import { React, useState, useContext, createContext, useEffect } from "react";
import http from "axios";
import jwt from "jwt-decode";
import { todoApi } from "../api/todoApi";
import config from "../app.config";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);
  const { post } = todoApi();

  const auth = () => {
    const googleBaseUrl = config.google_base_url;
    const searchParams = new URLSearchParams();
    searchParams.append("client_id", config.google_client_id);
    searchParams.append("scope", "openid");
    searchParams.append("redirect_uri", window.location.origin + "/callback");
    searchParams.append("response_type", "code");
    searchParams.append("prompt", "select_account");

    const fullUrl = googleBaseUrl + "?" + searchParams.toString();

    //window.open(fullUrl, "_self");
    window.location.href = fullUrl;
  };

  const login = async (code, provider) => {
    try {
      const resp = await http.post("http://localhost:4000/api/user/login", {
        code: code,
        provider: provider,
      });
      setToken(resp.data.sessionToken);
      localStorage.setItem("token", resp.data.sessionToken);
      setUser(jwt(resp.data.sessionToken));
    } catch (err) {
      setToken(null);
      localStorage.removeItem("token");
    }
  };
  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
  };

  const register = async (username) => {
    const resp = await post("/user/create", { username });

    if (resp?.status === 200) {
      setToken(resp.data.sessionToken);
      localStorage.setItem("token", resp.data.sessionToken);
      setUser(jwt(resp.data.sessionToken));
    }
  };

  const contextValue = { user, token, auth, login, logout, register };

  useEffect(() => {
    const tokenInStorage = localStorage.getItem("token");
    if (tokenInStorage) {
      setToken(tokenInStorage);
      setUser(jwt(tokenInStorage));
    }
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <AuthContext.Provider value={contextValue}>
        {children}
      </AuthContext.Provider>
    </div>
  );
};

const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("add authprovider route");
  return context;
};

export { AuthProvider, useAuth };
