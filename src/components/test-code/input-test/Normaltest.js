import React from "react";

const Normaltest = (props) => {
  console.log(props.data);
  const name = props.data;
  console.log(props.xyz);
  return (
    <div>
      <h1>{name}</h1>
      <h1>{name}</h1>
    </div>
  );
};

export default Normaltest;
