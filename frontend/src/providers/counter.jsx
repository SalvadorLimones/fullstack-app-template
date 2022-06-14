import { React, useState, useContext, createContext } from "react";

const CounterContext = createContext();

const CounterProvider = ({ children }) => {
  const [value, setValue] = useState(0);
  const increment = () => setValue(value + 1);
  const decrement = () => setValue(value - 1);
  const contextValue = { value, increment, decrement };

  return (
    <div>
      <CounterContext.Provider value={contextValue}>
        {children}
      </CounterContext.Provider>
    </div>
  );
};

const useCounter = () => useContext(CounterContext);

export { CounterProvider, useCounter };
