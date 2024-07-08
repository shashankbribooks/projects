import React, { useState } from "react";

const Input = (props) => {
  const [data, setData] = useState(null);
  const [print, setPrint] = useState(false);
  function getdata(val) {
    console.log(val.target.value);
    setData(val.target.value);
    setPrint(false);
  }

  return (
    <div className="border border-2 w-50 h-50 bg-info text-center">
      {print ? <h3>{data}</h3> : null}
      <input type="text" onChange={getdata} />
      <button onClick={() => setPrint(true)}>click me </button>
    </div>
  );
};

export default Input;
