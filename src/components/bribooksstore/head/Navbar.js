import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Container, Nav, NavDropdown } from "react-bootstrap";
import Link from "next/link";
import styles from "./navbar.module.css";
import { BiUser } from "react-icons/bi";
import { IoCartOutline } from "react-icons/io5";

function Head() {
  const btn = [
    {
      id: 1,
      image: "/assets/images/bristore/Toddlers.svg",
      name: "Toddlers",
      category: "Toddlers",
    },
    {
      id: 2,
      image: "/assets/images/bristore/pre-school.svg",
      name: "Pre-School",
      category: "Pre-School",
    },
    {
      id: 3,
      image: "/assets/images/bristore/primary school.svg",
      name: "Primary School",
      category: "Primary School",
    },
    {
      id: 4,
      image: "/assets/images/bristore/9th grade.svg",
      name: "9th Grade",
      category: "9th Grade",
    },
    {
      id: 5,
      image: "/assets/images/bristore/10th grade.svg",
      name: "10th Grade",
      category: "10th Grade",
    },
    {
      id: 6,
      image: "/assets/images/bristore/11th grade.svg",
      name: "11th Grade",
      category: "11th Grade",
    },
    {
      id: 7,
      image: "/assets/images/bristore/12th grade.svg",
      name: "12th Grade",
      category: "12th Grade",
    },
  ];

  return (
    <>
      {/* -------------------- nav bar start --------------------- */}
      <Navbar expand="lg" className="container-fluid bg-body-tertiary  ">
        <Container className="">
          <Navbar.Brand href="/bristore" className="">
            <img src="/assets/images/bristore/LOGO (1).svg" alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse
            className="justify-content-between text-center"
            id="navbarScroll  "
          >
            <Form inline className={`${styles.dropdown} my-2 d-flex`}>
              <InputGroup.Text
                id="basic-addon1 "
                className={`${styles.border} `}
              >
                <NavDropdown className={`${styles.dropDown}`} title="All">
                  <NavDropdown.Item className={`${styles.dropDown}`}>
                    Action
                  </NavDropdown.Item>
                  <NavDropdown.Item className={`${styles.test} `}>
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item>Something</NavDropdown.Item>
                  <NavDropdown.Item>Separated link</NavDropdown.Item>
                </NavDropdown>
              </InputGroup.Text>
              <Form.Control
                className={styles.formcontrol}
                placeholder="Search by title, author or ISBN here..."
              />
            </Form>
            <Form className={`${styles.navbtn} mx-2`}>
              <Link href="/bristore/login">
                <Button variant="outline-secondary" className=" me-3 ">
                  <span className={styles.BiUser}>
                    <BiUser />
                  </span>
                  Login/Register
                </Button>
              </Link>

              <Link href="/bristore/cart">
                <Button variant="outline-secondary">
                  <span>
                    <IoCartOutline />
                  </span>
                  Cart
                </Button>
              </Link>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* ----------------------- buttons --------------------- */}
      <div className="container justify-content-md-between justify-content-center d-flex flex-wrap">
        {btn.map((item, i) => (
          <div className="my-2  text-center" key={i}>
            <div className={btn?.length !== i + 1 && "border-end mx-2"}>
              <img src={item.image} className={`${styles.img} px-3`} />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Head;
