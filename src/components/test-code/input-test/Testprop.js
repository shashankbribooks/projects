import { grey } from "@mui/material/colors";
import React from "react";
import Normaltest from "./Normaltest";

const Testprop = (props) => {
  const name = props.name;
  const person = [
    { firstName: "John", lastName: "Doe", age: 46 },
    { firstName: "Ahmad", lastName: "khan", age: 30 },
    { firstName: "Izhan", lastName: "khan", age: 1 },
    { firstName: "Javed", lastName: "khan", age: 39 },
  ];
  return (
    <div className="d-flex ">
      {name.map((name) => (
        <Normaltest data={name} />
      ))}
    </div>
  );
};

export default Testprop;
