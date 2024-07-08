import React from "react";
import styles from "./item.module.css";
import Link from "next/link";
import { Button } from "react-bootstrap";

const Item50 = (props) => {
  return (
    <>
      <div className={`${styles.item} m-0 p-0 `}>
        <div className={styles.imgdiv}>
          <img src={props.image} className={styles.img} />
        </div>
        <div className="">
          <div className={`${styles.content} d-flex flex-column bd-highlight`}>
            <div className="mb-auto ">
              <p>{props.writer}</p>
              <h4>{props.bookname}</h4>
              <h5>${props.price}</h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Item50;
