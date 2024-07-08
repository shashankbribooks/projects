import React from "react";
import styles from "./Awards.module.css";

const Awards = () => {
  const imagedata = [
    {
      id: 1,
      imagesrc: "/assets/images/festival-website/Group 1000004090.svg",
    },
    {
      id: 2,
      imagesrc: "/assets/images/festival-website/Group 1000004091.svg",
    },
    {
      id: 3,
      imagesrc: "/assets/images/festival-website/Group 1000004092.svg",
    },
    {
      id: 4,
      imagesrc: "/assets/images/festival-website/Group 1000004093.svg",
    },
  ];
  return (
    <>
      <div className={`${styles} container `}>
        <div className={styles.textall}>
          <h1 className={styles.awtxt}>
            <img src="/assets/images/festival-website/left side.svg" /> Awards & Recognitions
            <img src="/assets/images/festival-website/right side.svg" />
          </h1>
          <p className={styles.awparatxt}>
            A humble showcase of our global and national awards, celebrating the
            BriBooks <br /> community's collective achievements!
          </p>
        </div>
        <div className={`${styles.row} row`}>
          {imagedata.map((item) => (
            <div className={`${styles.awbg} `}>
              <div className="d-flex  ">
                <img src={item.imagesrc} className={styles.onelogo} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Awards;
