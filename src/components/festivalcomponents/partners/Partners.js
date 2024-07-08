import React from "react";
import styles from "./Partners.module.css";
import Image from "next/image";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Partners = () => {
  const dataimg = [
    {
      id: 1,
      imagesrc: "/assets/images/festival-website/Group 1000001665.svg",
    },
    {
      id: 2,
      imagesrc: "/assets/images/festival-website/Group 1000001666.svg",
    },
    {
      id: 3,
      imagesrc: "/assets/images/festival-website/Group 1000001667.svg",
    },
    {
      id: 4,
      imagesrc: "/assets/images/festival-website/Group 1000004096.svg",
    },
  ]; // {`${styles}`}
  return (
    <div className={`${styles.cont} container-fluid m-0 p-0`}>
      <div className="container">
      <div className={`${styles.soft} `}>
        <h1 className={`${(styles.partnertxt, styles.textp)}`}>
          Global Partners:
        </h1>
      </div>
      <div className={styles.img}>
        {dataimg.map((item) => (
          <img src={item.imagesrc} className={styles.imgsize} />
        ))}
      </div>
      </div>
    </div>
  );
};

export default Partners;
