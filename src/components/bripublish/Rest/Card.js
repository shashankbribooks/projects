import React from "react";
import styles from "./Resturant.module.css";
import Link from "next/link";
import { Button } from "react-bootstrap";

const Card = ({ menuData }) => {
//   console.log(menuData);
  return (
    <>
      {menuData.map((curElem) => {
        const { id, image, writer, bookname, price } = curElem;
        return (
          <div className={`${styles.item} me-3`} key={id}>
            <img src={image} className={styles.img} />
            <p>{writer}</p>
            <h4>{bookname}</h4>
            <h5>${price}</h5>
            <div className={`${styles.cartbtn} `}>
              <Link href="/">
                <Button variant="success">Add to Cart → </Button>
              </Link>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Card;
