import React from "react";
import styles from "./nav.module.scss";
const Nav = () => {
  return (
    <div className={`${styles.main}`}>
      <div className={`${styles.nav}`}>
        {/* <div className={`${styles.logo}`}>
          <img src="/assets/images/apple/Bribooks_icon_splash@1x.png" alt="" />
        </div>
        <div className={`${styles.crossbtn}`}>
          <img src="/assets/images/apple/Vector (1).svg" alt="" />
        </div> */}
      </div>
      {/* <div
        className={`${styles.congrt} d-flex align-item-center justify-content-center img-fluid `}
      >
        <img src="/assets/images/apple/Congratulations!.svg" alt="" />
      </div> */}
      {/* <div className="d-flex align-item-center justify-content-center text-center text-white fs-2 ">
        <p>
          You have successfully enrolled in the Early Access program of the
          <br />
          Summer Book Writing Festival
        </p>
      </div> */}

      <div className={styles.box}>
        <div className={styles.car1}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet,
            alias!
          </p>
        </div>
        <div className={styles.car2}>
          {abc(12)}
        </div>
        <div className={styles.car3}></div>
      </div>
    </div>
  );
};

export default Nav;
function abc(a) {
  console.log("whenever you want a car");
  console.log("first u want to choice a car");
  console.log("whenever u selected a car then booking ");
  console.log("pay full payment ");
  console.log("take delivery");
  console.log("ghar le jao");
  console.log(a);
}
