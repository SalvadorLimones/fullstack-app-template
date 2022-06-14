import React from "react";
import { useCounter } from "../hooks/useCounter";
import { useCounter as useGlobalCounter } from "../providers/counter";

const Home = () => {
  const { counter, increment, decrement } = useCounter("home");
  const { value, increment: goUp, decrement: goDown } = useGlobalCounter();
  return (
    <>
      <div>Home</div>
      <h3>Local counter:</h3>
      <p>{counter}</p>
      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>
      <h3>Global counter:</h3>
      <p>{value}</p>
      <button onClick={goDown}>-</button>
      <button onClick={goUp}>+</button>
    </>
  );
};

export default Home;
