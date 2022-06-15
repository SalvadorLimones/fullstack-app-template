import { React, useState, useContext, createContext } from "react";
import http from "axios";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const auth = () => {
    const googleBaseUrl = "https://accounts.google.com/o/oauth2/v2/auth";
    const searchParams = new URLSearchParams();
    searchParams.append(
      "client_id",
      "423125049963-vnhlm59vvirdjsquu0efhqvq5u91orks.apps.googleusercontent.com"
    );
    searchParams.append("scope", "openid");
    searchParams.append("redirect_uri", "http://localhost:3000/callback");
    searchParams.append("response_type", "code");
    searchParams.append("prompt", "select_account");

    const fullUrl = googleBaseUrl + "?" + searchParams.toString();
    window.close("http://localhost:3000");
    window.open(fullUrl);
  };

  const login = async (code, provider) => {
    try {
      const resp = await http.post("http://localhost:4000/api/user/login", {
        code: code,
        provider: provider,
      });
      setToken(resp.data.sessionToken);
    } catch (err) {
      setToken(null);
    }
  };
  const logout = () => setToken(null);
  const contextValue = { token, auth, login, logout };

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
