import React from "react";
import styles from "./index.module.scss";

const Card = () => {
  return (
    <div className={`${styles.card} border mb-5  bg-info me-3 m-2 `}>
      <div className="d-flex">
        <div className={`${styles.authorimg}`}>
          <img
            src="/assets/images/Ae/Group 1597881569.svg"
            alt="..."
            class="rounded-circle"
          />
        </div>
        <div className={`${styles.author}`}>
          <h3 className="my-3 text-uppercase pt-2 fs-5 fw-bold Poppins-Regular">
            Shreya Sharma
          </h3>
          <h4 className={`${styles.authof} fw-bold fs-6 Poppins-Regular`}>
            Author of
          </h4>
          <h5 className="fs-6 fw-bold Poppins-Regular">
            Pitter Patter and the Tiger
          </h5>
        </div>
      </div>
      <hr class={`${styles.horizline} mx-3`}></hr>
      <div className="d-flex  ">
        <div className={`${styles.bookimg} my-2 mx-3`}>
          <img src="/assets/images/Ae/Group 1000004241.svg" alt="" />
        </div>
        <div className={`${styles.booktext} my-auto`}>
          <div className="fs-6 d-flex Poppins-Regular">
            <span className="me-2 ms-0">
              <img src="/assets/images/Ae/Group (4).svg" alt="" />
            </span>
            <p>Grade: 5</p>
          </div>
          <div className=" d-flex fs-6 Poppins-Regular ">
            <span className="me-2 ms-0">
              <img src="/assets/images/Ae/Group 1000001664.svg" alt="" />
            </span>
            <p>Grammar School Dubai</p>
          </div>
          <div className=" d-flex  fs-6 Poppins-Regular">
            <span className="me-2 ms-0">
              <img src="/assets/images/Ae/Group (5).svg" alt="" />
            </span>
            <p>Emirate: Dubai</p>
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default Card;


