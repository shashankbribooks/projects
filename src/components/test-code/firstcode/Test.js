import React, { useState } from "react";
import Component from "./googledoc";

const Test = () => {
  const myBioData = [
    {
      id: 0,
      name: "imtiyaz",
      phone: "333",
    },
    {
      id: 1,
      name: "rashid",
      phone: "589",
    },
    {
      id: 2,
      name: "kamran",
      phone: "9889",
    },
    {
      id: 3,
      name: "rohit",
      phone: "7889",
    },
  ];
  const [remove, setRemove] = useState(myBioData);  // here i'm using a use state 
  
  const clearData = () => {
    setRemove([]);
  };

  const removeElem = (id) => {    // here i'm createa a function to remove items ...
    const myNewArray = remove.filter((curElemt) => {  //here we do filter id and remove element ..
      return curElemt.id !== id;
    });
    setRemove(myNewArray);
  };
  return (
    <div className="">
      {remove.map((curElem) => (
        <h3 className="" key={curElem.id}>
          Name :{curElem.name} and phone no. {curElem.phone}
          <button onClick={() => removeElem(curElem.id)}>clear</button>  
        </h3>
      ))}
      <button onClick={clearData}>clear</button> 
      <Component />
    </div>
  );
};

export default Test;
