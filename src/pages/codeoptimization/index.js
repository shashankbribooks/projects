// pages/index.js
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { Inter } from "next/font/google";
import style from "./code.module.css";
import { Description } from "@mui/icons-material";
import { Col, Row } from "react-bootstrap";
const inter = Inter({ subsets: ["latin"] });
import { isMobile } from "react-device-detect";
// async function userList() {
//   let data = await fetch("https://dummyjson.com/users");
//   data = await data.json();
//   console.log(data.users);
// }

const Home = () => {
  const [color, setColor] = useState("red");
  const [data, setData] = useState(null);
  const [error, setError] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://dummyjson.com/users");
        const result = await response.json();
        setData(result.users);
        console.log(result);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "auto",
      }}
    >
      <Image
        src="/assets/images/bagckround image.svg"
        layout="fill"
        alt="background image"
        className={style.backgroundImage}
      />
      <div style={{ position: "relative", zIndex: 1 }}>
        <div className={style.maindiv}>
          <h3
            className={`${inter.className} ${style.heading} ${
              color == "red" ? style.red : style.green
            } text-center `}
          >
            Hi inner pands
          </h3>
        </div>
        <h2>
          {/* {data?.map((item) => (
            <div className="d-flex ms-2 mb-2 border flex-row">
              <h6 className="me-3">{item.firstName}</h6>
              <h6>{item.lastName}</h6>
              <div className={style.box}>
                <h6 className="me-3">{item.firstName}</h6>
              </div>
            </div>
          ))} */}
        </h2>
        {/* <button className="text-center" onClick={() => setColor("green")}>
          {" "}
          Change color{" "}
        </button> */}
        <Row
          className={`d-flex justify-content-center  align-items-center ${
            style.main
          } ${isMobile ? "gap-2" : "gap-3"} pb-5 mx-sm-0 mx-1 mb-5`}
        >
          <div
            className={`${style.adsboxs} text-center text-uppercase d-flex flex-column align-items-center justify-content-center`}
          >
            advertisement 
            <Image
              src={"/assets/images/ads.png"}
              width={670}
              height={50}
              className="d-none d-sm-block "
            />
            <Image
              src={"/assets/images/ads_mobile.png"}
              width={300}
              height={50}
              className="d-block d-sm-none"
            />
          </div>
          {data?.slice(0, 6).map((item) => (
            <Col xl={3} lg={5} sm={6} xs={11} className={`${style.box} `}>
              <Row className="d-flex justify-content-center  align-items-center p-0  relative">
                <Col xl={7} sm={8} xs={8}>
                  <div className="">
                    <h6>
                      <span className="text-muted">Name: </span>
                      {item.firstName} {item.lastName}
                    </h6>
                    <h6>
                      <span className="text-muted">Date of Birth: </span>
                      {item.birthDate}
                    </h6>
                    <h6 className={item.age < 30 ? style.red : style.normal}>
                      <span className="text-muted">Age: </span>
                      {item.age}
                    </h6>

                    <h6
                      className={`${
                        item.gender === "male" ? style.femalecolor : style.red
                      } text-capitalize `}
                    >
                      <span className="text-muted">Gender: </span>
                      {item.gender}
                    </h6>

                    <h6>
                      <span className="text-muted">Phone: </span>
                      {item.phone}
                    </h6>
                    <h6>
                      <span className="text-muted">Email: </span>
                      {/* {item.email} */}
                      {item.email.split("@")[0]}q
                    </h6>
                  </div>
                </Col>
                <Col xl={5} sm={4} xs={4}>
                  <div className=" ">
                    <Image src={item.image} width={80} height={80} />
                    <p className="me-2 mb-0">company</p>{" "}
                    <p className="me-2 mb-1">department</p>
                    <h6
                      className={
                        item.company.department === "Engineering"
                          ? style.text
                          : style.nontext
                      }
                    >
                      {/* {item.company.department || "No Department"} */}
                      {/* {item.company.department === "Engineering"
                        ? ""
                        : item.company.department || "No Department"} */}
                      {item.company.department === "Engineering"
                        ? "No Department"
                        : item.company.department || "No Department"}
                    </h6>
                  </div>
                </Col>
              </Row>
            </Col>
          ))}
        </Row>

        <Row
          className={`d-flex justify-content-center  align-items-center ${
            style.main
          } ${isMobile ? "gap-2" : "gap-3"} pb-5 mx-sm-0 mx-1 mt-5`}
        >
          <div
            className={`${style.adsbox} text-center text-uppercase d-flex flex-column align-items-center justify-content-center `}
          >
            advertisement 
            <Image
              src={"/assets/images/ads.png"}
              width={670}
              height={50}
              className="d-none d-sm-block "
            />
            <Image
              src={"/assets/images/ads_mobile.png"}
              width={300}
              height={50}
              className="d-block d-sm-none"
            />
          </div>
          {data?.slice(6).map((item) => (
            <Col xl={3} lg={5} sm={6} xs={11} className={`${style.box} `}>
              <Row className="d-flex justify-content-center  align-items-center p-0  relative">
                <Col xl={7} sm={8} xs={8}>
                  <div className="">
                    <h6>
                      <span className="text-muted">Name: </span>
                      {item.firstName} {item.lastName}
                    </h6>
                    <h6>
                      <span className="text-muted">Date of Birth: </span>
                      {item.birthDate}
                    </h6>
                    <h6 className={item.age < 30 ? style.red : style.normal}>
                      <span className="text-muted">Age: </span>
                      {item.age}
                    </h6>

                    <h6
                      className={`${
                        item.gender === "male" ? style.femalecolor : style.red
                      } text-capitalize `}
                    >
                      <span className="text-muted">Gender: </span>
                      {item.gender}
                    </h6>

                    <h6>
                      <span className="text-muted">Phone: </span>
                      {item.phone}
                    </h6>
                    <h6>
                      <span className="text-muted">Email: </span>
                      {/* {item.email} */}
                      {item.email.split("@")[0]}q
                    </h6>
                  </div>
                </Col>
                <Col xl={5} sm={4} xs={4}>
                  <div className=" ">
                    <Image src={item.image} width={80} height={80} />
                    <p className="me-2 mb-0">company</p>{" "}
                    <p className="me-2 mb-1">department</p>
                    <h6
                      className={
                        item.company.department === "Engineering"
                          ? style.text
                          : style.nontext
                      }
                    >
                      {/* {item.company.department || "No Department"} */}
                      {/* {item.company.department === "Engineering"
                        ? ""
                        : item.company.department || "No Department"} */}
                      {item.company.department === "Engineering"
                        ? "No Department"
                        : item.company.department || "No Department"}
                    </h6>
                  </div>
                </Col>
              </Row>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};
// export function generateMetadata({ params }) {
//   return {
//     title: "code optimization ",
//     description: " code optimization example",
//   };
// }
export default Home;
