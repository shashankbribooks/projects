import React from "react";
import styles from "./hub.css";
import { HiArrowSmallLeft } from "react-icons/hi2";
import { HiArrowSmallRight } from "react-icons/hi2";
const Hub = () => {
  return (
    <div className="container-fluid hub ">
      <div className=" ">
        <h1 className="hub-txt">
          Discover Unforgettable Moments in Our Events Hub
        </h1>
        <div>
          <p className="hub-para-txt text-center">
            Dive into the vibrant festivities celebrating young authors and
            their remarkable book <br /> achievements, ushering in a world of
            creativity and recognition!
          </p>
        </div>
      </div>

      <div className="container d-flex overflow-hidden ">
        <div class="hub-card-two hub-card ">
          <img src="/images/logo@3x.svg" alt="..." className="img-one" />
        </div>

        <div class="hub-card-two-three me-2">
          <img src="/images/Group 64280.svg" alt="..." className="img-two-three" />
        </div>

        <div class="hub-card-two  me-2">
          <img src="/images/Group 64283 (1).svg" alt="..." className="" />
        </div>

        <div class="hub-card-two hub-card  me-2">
          <img src="/images/logo@3x.svg" alt="..." className="" />
        </div>
      </div>
      <div className="container bottom-btn">
      <img src="/images/Group 1000001652 (1).svg" alt="..." className=" bottom-btn-b " />
      </div>
    </div>
  );
};

export default Hub;
