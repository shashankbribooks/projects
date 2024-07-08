import React from "react";
import Image from "next/image";
import styles from "./home.module.css";
import { Row, Col } from "react-bootstrap";


const Home = () => {
  return (
    <>
      <div className="relative ">
        {/* home background images here. */}
        <div className={styles.container}>
          <img
            src="/assets/images/festival-website/sbwf-backgroud-d.svg" //public/assets/images/festival-website/sbwf-backgroud-d.svg
            // height={900}
            className={`${styles.bannerimg} img-fluid`}
            alt="cover img"
          />
          <img
            src="/assets/images/festival-website/sbwf-m-bg.svg"
            className={`${styles.bannerimgmobile} d-{md,lg,xl,xxl}-none `}
            alt="cover img for mobile"
          />
        </div>
        {/* home inside content images */}
        <div className="container">
          <div>
            <Col className={styles.bribologo}>
              <img
                src="/assets/images/festival-website/BriBooks.svg"
                alt="bribooks logo"
                className={styles.bribologosize}
              />
            </Col>
          </div>
          <div>
            <Col className={styles.logokido}>
              <img
                src="/assets/images/festival-website/the summer logo.svg"
                alt="bribook inter"
                className={styles.logokidosize}
              />
            </Col>
          </div>
          <div>
            <Col className={styles.worldlogo}>
              <img
                src="/assets/images/festival-website/world's largest.svg"
                className={styles.worldlogosize}
                alt="world's largest festival"
              />
            </Col>
          </div>
          <div>
            <Col className={styles.worldlogomobile}>
              <img
                src="/assets/images/festival-website/Group 1000001653 (4).svg"
                className={`${styles.worldlogomobilesize} world-img  d-md-none d-xl-none d-xxl-none`}
                alt="for mobile imges "
              />
            </Col>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
