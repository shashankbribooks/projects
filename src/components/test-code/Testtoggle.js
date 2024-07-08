import React, { useState, useEffect } from "react";
import Input from "./input-test/Input";
import Hideshow from "./input-test/Hideshow";
import Formcont from "./input-test/Formcont";
import Condtional from "./input-test/Condtional";
import Formvalidation from "./input-test/Formvalidation";
import Cssfile from "./input-test/Cssfile";
import MyComponent from "./apibribook/Bribooksapi";

const Testtoggle = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [secondcomp, setSecondcomp] = useState(true);
  const [showcontent, setShowcontent] = useState(false);
  const [formshow, setFormshow] = useState(false);
  const [condtionalShow, setCondtionalShow] = useState(false);
  const [formvalidation, setFormvalidation] = useState(false);
  const [advice, setAdvice] = useState("");
  useEffect(() => {
    const url = "https://api.adviceslip.com/advice";
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        console.log(json);
        setAdvice(json.slip.advice);
      } catch (error) {}
    };
    fetchData();
  }, []);
  return (
    <div>
      {secondcomp && <MyComponent />}
      {isOpen && <Input advice={advice} />}
      <div>
        {showcontent && <Hideshow />}
        {formshow && <Formcont />}
        {condtionalShow && <Condtional />}
        {formvalidation && <Formvalidation />}
        {/* <Cssfile /> */}
      </div>
    </div>
  );
};

export default Testtoggle;
