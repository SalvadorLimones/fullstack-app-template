import React from "react";

import { useCounter as useGlobalCounter } from "../providers/counter";

const Profile = () => {
  const { value, setValue, valueProfile, setValueProfile } = useGlobalCounter();

  return (
    <>
      <div>Profile</div>
      <h3>Local counter:</h3>
      <p>{valueProfile}</p>
      <button onClick={() => setValueProfile(valueProfile - 1)}>-</button>
      <button onClick={() => setValueProfile(valueProfile + 1)}>+</button>
      <h3>Global counter:</h3>
      <p>{value}</p>
      <button onClick={() => setValue(value - 1)}>-</button>
      <button onClick={() => setValue(value + 1)}>+</button>
    </>
  );
};

export default Profile;
