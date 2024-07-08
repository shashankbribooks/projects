import React from "react";
import styles from "./item.module.css";
import Link from "next/link";
import { Button } from "react-bootstrap";

const Item = (props) => {
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
              {/* <h4>{props.cat}</h4> */}
              <h5>${props.price}</h5>
            </div>
            <div className={`${styles.cartbtn} bd-highlight `}>
              <Link href="/">
                <Button className={styles.btncolor}>
                  <span>Add to Cart → </span>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Item;
