import React from "react";
import styles from "./Achievements.module.css";
import Card from "react-bootstrap/Card";
// import Cardinfo from "./Cardinfo";

const Achievements = () => {
  return (
    <>
    <div
      className={`${styles} container-fluid p-0 m-0 justify-content-center `}
    >
      <div className={styles.test}>
        <h1 className={styles.headtxt}>
          What is The Summer Book Writing Festival?
        </h1>
        <p className={styles.paratxt}>
          The Summer Book Writing Festival is the biggest online Free summer
          camp event for school <br /> students to learn about writing,
          publishing, and promotion from experts around the world.
        </p>
      </div>

      <div
        className={`${styles.cardcontainer} container-fluid  d-flex  justify-content-center`}
      >
        <div class={styles.card}>
          <img src="./assets/images/festival-website/image 43.png" class={styles.cardimg} alt="..." />
          <div class={styles.cardbody}>
            <h1 className={styles.headtext}>Writing Books</h1>
            <p class={styles.cardtext}>
              Students will write their books on an AI-enabled writing platform
              to become globally published authors.
            </p> 
          </div>
        </div>
        <div class={styles.card}>
          <img src="./assets/images/festival-website/podium 1.png" class={styles.cardimg} alt="..." />
          <div class={styles.cardbody}>
            <h1 className={styles.headtext}>Achievements</h1>
            <p class={styles.cardtext2}>
              The schools will improve their National and Global Literary
              ranking and win awards.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div className="container">
        <div className="">
          <h1 className={styles.festivaltxt}>Summer Book Writing Festival 2023</h1>
          <div className="">
            <p className= {`${styles.festivalparatxt} text-center`}>
              BriBooks celebrates and honors young, globally published authors
              for their remarkable  achievements in the Summer Book
              Writing Festival
            </p>
          </div>
        </div>
      </div>
      <div className="container-fluid m-0 p-0">
        <img src="./assets/images/festival-website/Team-Jobs.svg" className="logo-img img-fluid" />
      </div>
    </>
  );
};

export default Achievements;
