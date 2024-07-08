import React, { useState } from "react";

const Hideshow = () => {
  const [status, setStatus] = useState(true);
  return (
    <div className="w-50 bg-success text-center">
      {status ? <h1 className="text-danger">Hello world !</h1> : null}
      {/* <button onClick={() => setStatus(true)} className="px-3 mx-2">
        show
      </button>
      <button onClick={() => setStatus(false)} className="px-3 mx-2">
        hide
      </button> */}
      <button onClick={() => setStatus(!status)}>Toggle </button>
    </div>
  );
};

export default Hideshow;
