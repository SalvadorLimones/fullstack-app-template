import { React, useState, useContext, createContext } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const auth = () => {};
  const logout = () => setToken(null);
  const contextValue = { token, auth, logout };

  return (
    <div>
      <AuthContext.Provider value={contextValue}>
        {children}
      </AuthContext.Provider>
    </div>
  );
};

const useCounter = () => useContext(AuthContext);

export { AuthProvider, useCounter };
