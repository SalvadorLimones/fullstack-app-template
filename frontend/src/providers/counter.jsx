import { React, useState, useContext, createContext } from "react";

const CounterContext = createContext();
const useCounter = () => useContext(CounterContext);

const CounterProvider = ({ children }) => {
  const [value, setValue] = useState(0);
  const [valueHome, setValueHome] = useState(0);
  const [valueProfile, setValueProfile] = useState(0);

  const contextValue = {
    value,
    setValue,
    valueHome,
    setValueHome,
    valueProfile,
    setValueProfile,
  };

  return (
    <div>
      <CounterContext.Provider value={contextValue}>
        {children}
      </CounterContext.Provider>
    </div>
  );
};

export { CounterProvider, useCounter };
