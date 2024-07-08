import React, { useState } from "react";

const Usestate = () => {
  const [value, setValue] = useState(0);
  const increment = () => {
    setValue(value + 1);
  };
  const decrement = () => {
    setValue(value - 1);
  };
  return (
    <div className="w-50 border mt-5 mx-auto">
      <h1 className="text-center">{value}</h1>
      <div className="text-center">
        <button onClick={increment} className="mx-2">
          Increment
        </button>
        <button onClick={decrement}>Decrement</button>
      </div>
    </div>
  );
};

export default Usestate;
