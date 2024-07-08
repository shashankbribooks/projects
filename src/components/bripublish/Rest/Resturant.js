import React, { useState } from "react";
import styles from "./Resturant.module.css";
import Menu from "./menuApi";
import Card from "./Card";
import Navbar from "./Navbar";

const uniqueList = [
  ...new Set(
    Menu.map((curElem) => {
      return curElem.category;
    })
  ),
//   "All",
];

const Resturant = () => {
  const [menuData, setMenuData] = useState(Menu);
  const [btnList, setBtnlist] = useState(uniqueList);

  const filterItem = (category) => {
    // if(category === "All"){
    //     setMenuData(Menu);
    //     return;
    // }
    const updatedList = Menu.filter((curElem) => {
      return curElem.category === category;
    });
    setMenuData(updatedList);
  };
  return (
    <>
      <div className="container d-flex">
        <div className="nav me-2 ">
          <Navbar filterItem={filterItem} btnList={btnList} />
        </div>

        <Card menuData={menuData} />

      </div>
    </>
  );
};

export default Resturant;
