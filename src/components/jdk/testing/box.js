import React from "react";
import styles from "./box.module.css";
import Carousel from "react-multi-carousel";
import data from "@/assets/data/top50_aue_author.json";

const Box = (props) => {
  return (
    <>
      <div className={`${styles.box} `}>
        <div className={styles.boxChild}>
          <div className="row ">
            <div className="col-xxl-4 col-xs-12 d-flex ">
              <div className={`${styles.authorimg} ms-2 `}>
                <img
                  src="/assets/images/Ae/schoolslogo/shri-img.png"
                  alt="..."
                  class={`${styles.authorimage} rounded-circle`}
                ></img>
              </div>
            </div>
            <div className="col-8">
              <div className={`${styles.author} ms-2`}>
                <p
                  className={`${styles.myheading} pb-0 mb-1 text-uppercase fw-bold Poppins-Regular`}
                >
                  javed
                </p>
                <div class="ms-0">
                  <h6 class={`${styles.authorhead} mb-0 Poppins-Regular`}>
                    Author of
                  </h6>
                  <p class={`${styles.para} mb-0 Poppins-Regular`}>
                    <b>Zayed Abdulmajeed Zayed Abdulmajeed</b>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-4">
              <div className={`${styles.bookimg} ms-1`}>
                <img src="/assets/images/Ae/schoolslogo/book.png" alt="" />
              </div>
            </div>
            <div className="col-8">
              <div className={`${styles.booktext}`}>
                <div className="fs-6 d-flex Poppins-Regular">
                  <span className="me-2">
                    <img src="/assets/images/Ae/Group (4).svg" alt="" />
                  </span>
                  <p>Grade: 2</p>
                </div>
                <div className=" d-flex fs-6 Poppins-Regular ">
                  <span className="me-2">
                    <img src="/assets/images/Ae/Group 1000001664.svg" alt="" />
                  </span>
                  <p>gd goenka university gurgaon</p>
                </div>
                <div className="d-flex fs-6 Poppins-Regular">
                  <span className="me-2">
                    <img src="/assets/images/Ae/Group (5).svg" alt="" />
                  </span>
                  <p>gurgaon</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Box;
