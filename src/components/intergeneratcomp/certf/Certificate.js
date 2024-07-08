import React from "react";
import styles from "./certificate.module.css";
const Certificate = () => {
  const awardData = [
    {
      id: 1,
      imagesrc: "/assets/images/inter-generational/fi_2490354.svg",
      paratxt: "Published Author Certificate",
    },
    {
      id: 2,
      imagesrc: "/assets/images/inter-generational/fi_2583365.svg",
      paratxt: "Shining Star Author",
    },
    {
      id: 3,
      imagesrc: "/assets/images/inter-generational/Icon.svg",
      paratxt: "Silver Star Author Award",
    },
    {
      id: 4,
      imagesrc: "/assets/images/inter-generational/Gold Star badge.svg",
      paratxt: " Gold Start Author",
    },
    {
      id: 5,
      imagesrc: "/assets/images/inter-generational/platinum badge.svg",
      paratxt: "Platinum Star Author",
    },
    {
      id: 6,
      imagesrc: "/assets/images/inter-generational/Group.svg",
      paratxt: "Diamond Star Author ",
    },
  ];
  return (
    <>
      <div className={`${styles.container} container `}>
        <h2 className={styles.h2}>
          <img src="/assets/images/inter-generational/left side.svg" alt="" />
          <span className={`${styles.heading}`}>Author Awards</span>
          <img src="/assets/images/inter-generational/right side.svg" alt="" />
        </h2>
        <div className="work">
          <div className="cmd row">
            {awardData.map((item, index) => (
              <div
                className={`${styles.row} col-6 col-sm-6 col-md-6 col-lg-4  `}
              >
                <div className={`${styles.card} `}>
                  <img src={item.imagesrc} alt="" />
                  <p className={`${styles.para}`}>{item.paratxt}</p>
                </div> 
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default Certificate;