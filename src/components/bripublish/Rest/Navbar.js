import React from "react";
import styles from "./Resturant.module.css";
import Link from "next/link";
import { Button, Nav } from "react-bootstrap";

const Navbar = ({ filterItem, btnList }) => {
  //   const btn_name = [
  //     {
  //       id: 1,
  //       name: "Toddlers",
  //     },
  //     {
  //       id: 2,
  //       name: "Pre-School",
  //     },
  //     {
  //       id: 3,
  //       name: "Primary School",
  //     },
  //     {
  //       id: 4,
  //       name: "9th Grade",
  //     },
  //     {
  //       id: 5,
  //       name: "10th Grade",
  //     },
  //     {
  //       id: 6,
  //       name: "11th Grade",
  //     },
  //     {
  //       id: 6,
  //       name: "12th Grade",
  //     },
  //   ];
  return (
    <>
      <div className={`${styles.btn} col-2`}>
        <Nav className="flex-column mt-4">
          {btnList.map((btn) => (
            <Nav.Link
              onClick={() => filterItem(btn)}
              className={`${styles.button} my-1`}
            >
              {btn}
            </Nav.Link>
          ))}
        </Nav>
      </div>
    </>
  );
};

export default Navbar;
