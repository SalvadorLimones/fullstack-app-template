import React from "react";
import { useCounter as useGlobalCounter } from "../providers/counter";

const Home = () => {
  const { value, setValue, valueHome, setValueHome } = useGlobalCounter();
  return (
    <>
      <div>Home</div>
      <h3>Local counter:</h3>
      <p>{valueHome}</p>
      <button onClick={() => setValueHome(valueHome - 1)}>-</button>
      <button onClick={() => setValueHome(valueHome + 1)}>+</button>
      <h3>Global counter:</h3>
      <p>{value}</p>
      <button onClick={() => setValue(value - 1)}>-</button>
      <button onClick={() => setValue(value + 1)}>+</button>
    </>
  );
};

export default Home;
