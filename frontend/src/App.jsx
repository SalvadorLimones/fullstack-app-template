import "./App.css";
import React from "react";
import NumberPresenter from "./components/NumberPresenter";
import NumberModifier from "./components/NumberModifier";
import { useCounter } from "./CounterProvider";

function App() {
  const { value, increment, decrement } = useCounter();
  return (
    <div className="App">
      <p>change the value</p>
      <p>Value: {value}</p>
      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>
      <NumberPresenter />
      <NumberModifier />
    </div>
  );
}

export default App;
