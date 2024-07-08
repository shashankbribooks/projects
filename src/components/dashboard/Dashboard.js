import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./das.module.css";
import Image from "next/image";
const Dashboard = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div
          className={`${styles.sidebar} col-3 p-0 d-flex justify-content-center `}
        >
          <div className="text-center m-3">
            <div>
              <img
                src="./assets/images/dashboard/bribooks-logo.png"
                className="mt-2 mx-auto"
                alt="bribooks logo"
              />
            </div>

            <div className={`${styles.school_logo} mx-auto mt-3 mb-2 `}>
              <img
                src="./assets/images/dashboard/Kothari International School.png"
                alt="school logo"
                className=""
              />
            </div>
            <div>
              <p className="m-0 fs-5 fw-bolder">Kothari Internation schools</p>
              <p className=" ">
                <span className="me-1">
                  <img
                    src="./assets/images/dashboard/location-icon.svg"
                    alt=""
                  />
                </span>
                Noida, Uttar Pradesh{" "}
              </p>
              <hr className={`${styles.horizontal} mb-3`} />
            </div>
            <div className="">
              <div className="text-start ps-2 fs-6 p-2 fw-bolder  bg-white rounded">
                <img
                  src="./assets/images/dashboard/Group 1000004374 (1).svg"
                  alt=""
                  className="me-3 ms-1"
                />
                <span className="my-auto">Dashboard</span>
              </div>
              <div className="text-start ps-2 d-flex fs-6 p-2 fw-bolder mt-1 rounded">
                <div className={styles.box}>
                  <img
                    src="./assets/images/dashboard/surface1.svg"
                    alt=""
                    className=""
                  />
                </div>
                <span className="my-auto ms-3">Report</span>
              </div>
              <div className="text-start ps-2 d-flex fs-6 p-2 fw-bolder mt-1 rounded">
                <div className={styles.box}>
                  <img
                    src="./assets/images/dashboard/Group 1000004514 (1).svg"
                    alt=""
                    className=""
                  />
                </div>
                <span className="my-auto ms-3">Teachers</span>
              </div>
              <div className="text-start ps-2 d-flex fs-6 p-2 fw-bolder mt-1 rounded">
                <div className={styles.box}>
                  <img
                    src="./assets/images/dashboard/Bookshelves-book-books-education-book store.svg"
                    alt=""
                    className=""
                  />
                </div>
                <span className="my-auto ms-3">School Bookstore</span>
              </div>
              <div className="text-start ps-2 d-flex fs-6 p-2 fw-bolder mt-1 rounded">
                <div className={styles.box}>
                  <img
                    src="./assets/images/dashboard/Vector (2).svg"
                    alt=""
                    className=""
                  />
                </div>
                <span className="my-auto ms-3">Profile</span>
              </div>
              <div className="text-start ps-2 fs-6 p-2 fw-bolder mt-4 bg-white rounded">
                <img
                  src="./assets/images/dashboard/Group 1000004374 (1).svg"
                  alt=""
                  className="me-3 ms-1"
                />
                <span className="my-auto">Log Out</span>
              </div>
            </div>
          </div>
        </div>
        <div className={`${styles.sidebar2} col-9 p-0`}>
          <div className="d-flex">
            <div className={`${styles.navdate} m-3`}>
              <nav class="nav nav-pills nav-justified">
                <a
                  class="nav-link active bg-success fw-bolder"
                  aria-current="page"
                  href="#"
                >
                  2022-23
                </a>
                <a class="nav-link fw-bolder" href="#">
                  2023-24
                </a>
                <a class="nav-link fw-bolder" href="#">
                  2024-25
                </a>
                <a
                  class="nav-link disabled fw-bolder"
                  href="#"
                  tabindex="-1"
                  aria-disabled="true"
                >
                  2025-26
                </a>
                <a
                  class="nav-link disabled fw-bolder"
                  href="#"
                  tabindex="-1"
                  aria-disabled="true"
                >
                  2026-27
                </a>
              </nav>
            </div>
            <div className="ms-3 mt-3">
              <nav class="nav nav-pills nav-justified">
                <a
                  class="nav-link bg-success active fw-bolder "
                  aria-current="page"
                  href="#"
                >
                  <span>
                    <img src="" alt="" />
                    <Image
                      src="./assets/images/dashboard/add-cart.svg"
                      width={25}
                      height={25}
                      alt="Picture of the author"
                      className="pe-1"
                    />
                  </span>
                  Buy Books
                </a>
              </nav>
            </div>
          </div>
          <div className="row m-3">
            <div className="col-4 border rounded bg-white p-3">
              <div className=" d-flex align-items-center justify-content-between">
                <p className="fs-4 m-0">
                  Total <br /> Registerd Student
                </p>
                <Image
                  src="./assets/images/dashboard/add-cart.svg"
                  width={70}
                  height={70}
                  alt="Picture of the author"
                  className=""
                />
              </div>
              <hr className="m-0 w-100" />
              <p className="text-center fs-1 fw-bold ">1,678</p>
            </div>
            <div className="col-4 border "> donrt be sad</div>
            <div className="col-4 border"> donrt be sad</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
