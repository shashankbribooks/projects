import React, { useState } from "react";
import styles from "./toprated.module.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Button, Nav } from "react-bootstrap";

const Toprated = () => {
  const deal_data = [
    {
      id: 1,
      image: "/assets/images/bristore/Rectangle 4186.svg",
      bookname: "New Release",
      color: "rgba(219, 45, 49, 1)",
    },
    {
      id: 2,
      image: "/assets/images/bristore/Rectangle 4186 (1).svg",
      bookname: "Top Selling",
      color: "rgba(116, 173, 82, 1)",
    },
    {
      id: 3,
      image: "/assets/images/bristore/Rectangle 4186 (2).svg",
      bookname: "Top Rated",
      color: "rgba(21, 62, 118, 1)",
    },
  ];
  return (
    <div className="container overflow-hidden d-flex main">
      {deal_data.map((deal) => (
        <div 
        key={deal.id}
          style={{ background: deal.color }}
          className={`${styles.card} mx-3 my-5 d-flex `}
        >
          <div key={deal.image} className={`${styles.bgcolor} text py-5 px-4`}>
            <h4>{deal.bookname}</h4>
            <Button  className="mt-5">
              Shop Now
            </Button>
          </div>
          <div className={styles.image}>
            <img src={deal.image} className={styles.img} alt="" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Toprated;
