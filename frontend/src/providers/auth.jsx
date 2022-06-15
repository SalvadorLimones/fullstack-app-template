import { React, useState, useContext, createContext } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const increment = () => setValue(value + 1);
  const decrement = () => setValue(value - 1);
  const contextValue = { token, increment, decrement };

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
