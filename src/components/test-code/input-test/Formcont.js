import React, { useState } from "react";

const Formcont = () => {
  const [name, setName] = useState("");
  const [tnc, setTnc] = useState(false);
  const [boysname, setBoysname] = useState("");
  function getFormData(e) {
    console.log(name, boysname, tnc);
    e.preventDefault();
  }
  return (
    <div className="w-50 my-2 text-center bg-danger">
      <form onSubmit={getFormData}>
        <input
          type="text"
          placeholder="enter name"
          onChange={(e) => setName(e.target.value)}
        />
        <br /> <br />
        <select onChange={(e) => setBoysname(e.target.value)}>
          <option>Select</option>
          <option>Atif</option>
          <option>Hadi</option>
          <option>Daniyal</option>
          <option>Izhan</option>
          <option>Faham</option>
        </select>
        <br /> <br />
        <input type="checkbox" onChange={(e) => setTnc(e.target.checked)} />
        <span>Acept Terms and condition</span>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Formcont;
