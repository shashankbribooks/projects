import React from "react";
import Image from "next/image";
import { Row, Col } from "react-bootstrap";
import styles from "./home.module.css";


const Home = () => {
  const logoimg = [
    {
      image: "/assets/images/inter-generational/Group 64053.svg",
    },
    {
      image: "/assets/images/inter-generational/Group 64054.svg",
    },
    {
      image: "/assets/images/inter-generational/Group 64055.svg",
    },
    {
      image: "/assets/images/inter-generational/Group 64056.svg",
    },
    {
      image: "/assets/images/inter-generational/Group 64057.svg",
    },
  ];
  return (
    <>
      {/* --------home section start -------- */}
      <div className="relative">
        {/* home background images here. */}
        <div>
          <img
            src="/assets/images/inter-generational/Group 1000001653 (2).svg"
            height={900}
            className={`${styles.bannerimg} img-fluid`}
            alt="cover img"
          />
          <img 
            src="/assets/images/inter-generational/interG-bwf-m.svg"
            className={`${styles.bannerimgmobile} d-{md,lg,xl,xxl}-none `}
            alt="cover img for mobile"
          />
        </div>
        {/* home inside content images */}
        <div >
        <div>
            <Col className={styles.bribologo}>
              <img
                src="/assets/images/inter-generational/BriBooks_white2.svg"
                alt="bribooks logo"
                className={styles.bribologosize}
              />
            </Col>
          </div>
          <div>
            <Col className={styles.logokido}>
              <img
                src="/assets/images/inter-generational/bribooks kidologo.svg"
                alt="bribook inter"
                className={styles.logokidosize}
              />
            </Col>
          </div>
          <div>
            <Col className={styles.worldlogo}>
              <img
                src="/assets/images/inter-generational/world's largestkido.svg"
                className={styles.worldlogosize}
                alt="world's largest festival"
              />
            </Col>
          </div>
          <div>
            <Col className={styles.worldlogomobile}>
              <img
                src="/assets/images/inter-generational/Group 1000001653 (4).svg"
                className={`${styles.worldlogomobilesize} world-img  d-md-none d-xl-none d-xxl-none`}
                alt="for mobile imges "
              />
            </Col>
          </div>
        </div>
      </div>
      {/* --------home section end -------- */}
      {/* --------Global Partners section start-------- */}
      <div className={`${styles.main} `}>
        <div className={styles.headtxt}>
          <h1 className={`${styles.para}`}>Global Partners:</h1>
        </div>
        <div class={`${styles.logos}`}>
          <div class={`${styles.logosslide}`}>
            {logoimg.map((items) => (
              <img src={items.image} />
            ))}
          </div>
          <div class={`${styles.logosslide}`}>
            {logoimg.map((items) => (
              <img src={items.image} />
            ))}
          </div>
        </div>
      </div>
      {/* --------Global Partners section end -------- */}
    </>
  );
};

export default Home;
