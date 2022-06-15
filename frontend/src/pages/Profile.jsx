import React from "react";
import { useCounter } from "../hooks/useCounter";
import { useCounter as useGlobalCounter } from "../providers/counter";
import { useAuth } from "../providers/auth";

const Profile = () => {
  const { counter, increment, decrement } = useCounter();
  const { value, increment: goUp, decrement: goDown } = useGlobalCounter();
  const { token } = useAuth();
  console.log(token);
  return (
    <>
      <div>Profile</div>
      <p>{token ? "Logged in" : "Anonymus user"}</p>
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

export default Profile;
