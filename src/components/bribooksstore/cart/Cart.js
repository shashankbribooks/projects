import React from "react";
import styles from "./cart.module.css";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import FavoriteIcon from "@mui/icons-material/Favorite";
const Cart = () => {
  return (
    <div className={`${styles.container} container my-4`}>
      <div className="row h-50">
        <div className="col-lg-3 col-sm-4   ">
          <div className="align-items-center vstack gap-4 ">
            <div style={{ width: "250px", height: "350px" }} className="">
              <img src="./assets/images/bristore/book dhairya.webp" alt="" />
            </div>
            <div className="hstack gap-2">
              <div className="hstack gap-0">
                <ThumbUpIcon />
                <ThumbUpIcon /> <FavoriteIcon />
                <small class="fw-normal"> 242 Appreciations</small>
              </div>
              <div>
                <button
                  className={`${styles.btn} border-0 text-black px-2 p-0 py-1 d-flex btn btn-primary`}
                >
                  <ThumbUpIcon />
                  Like
                </button>
              </div>
            </div>
            <div className=" text-center mx-auto ">
              <span className="hstack gap-2">
                <h1>⭐️</h1>
                <h1>⭐️</h1>
                <h1>⭐️</h1>
                <h1>⭐️</h1>
                <h1>⭐️</h1>
              </span>
              <span>4.8 Stars (299)</span>
            </div>
          </div>
        </div>
        <div className="col-lg-9 col-sm-8  mt-5">
          <div className="justify-content-between hstack  px-0">
            <div className=" ">
              <div className="mt-3 ">
                <h1>Savi Our Saviour</h1>
              </div>
              <span>Written by Dhairya Sudarshan</span>
            </div>
            <div className="text-end">
              <div>
                <h1 className="fs-6">Share with friends</h1>
              </div>
              <div>
                <div className="justify-content-end  hstack gap-3">
                  <a href="/">
                    <img src="./assets/images/bristore/whatsapp.webp" alt="" />
                  </a>
                  <a href="/">
                    <img src="./assets/images/bristore/fb.webp" alt="" />
                  </a>
                  <a href="/">
                    <img src="./assets/images/bristore/twitter.webp" alt="" />
                  </a>
                  <a href="/">
                    <img src="./assets/images/bristore/linkedin.webp" alt="" />
                  </a>
                </div>
              </div>
              <div>
                <button
                  type="button "
                  class="btn rounded rounded-5 btn-outline-success mt-2 mb-2"
                >
                  Copy Book Link
                </button>
              </div>
            </div>
          </div>
          <p className=" mt-4">
            One morning in a bustling street, there was a big traffic jam. A
            cycle looked around, and on its left, it saw a thick trail of black
            smoke which made it cough. It followed it to see a luxurious black
            ...
          </p>
          <div className="mt-4 hstack gap-5 ">
            <b>
              <span class="text-muted">Category:</span> Nature
            </b>
            <b>
              <span class="text-muted">Total Pages:</span> 31
            </b>
          </div>
          <div className="mt-4 text-center justify-content-sm-center justify-content-lg-start hstack gap-3  ">
            <a href="/">
              <div className="vstack gap-2 ">
                <button className="border-3 rounded-pill bg-white text-primary btn btn-outline-primary">
                  Book Preview
                </button>
                <b>
                  Free <small>sample</small>
                </b>
              </div>
            </a>

            <a href="/">
              <div className="vstack gap-2 ">
                <button className="border-3 rounded-pill text-primary btn text-white btn-success">
                  Buy Printed Copy
                </button>
                <b>
                  Free <small>sample</small>
                </b>
              </div>
            </a>

            <a href="/">
              <div className="vstack gap-2 ">
                <button className="bg-white border-3 rounded-pill text-dark btn btn-outline-dark">
                  Buy on Amazon
                </button>
                <b>Free sample</b>
              </div>
            </a>
          </div>
          <hr />
        </div>
      </div>
    </div>
  );
};

export default Cart;
