import React from "react";
import styles from "./home.module.css";
import Link from "next/link";

const Home = () => {
  const carddata = [
    {
      id: 1,
      imgscr: "./assets/images/bripublish/email_icon.svg",
      head: "Check Your Email",
      para: "Your User ID & Password has been shared on the registered email ID",
    },
    {
      id: 2,
      imgscr: "./assets/images/bripublish/laptop_icon.svg",
      mobilscr: "./assets/images/bripublish/mobile_icon.svg",
      head: "Laptop/Desktop/Tablet",
      para: "You need to access the BriPublish platform on a Laptop/Desktop OR Full-Sized Tablet",
    },
    {
      id: 3,
      imgscr: "./assets/images/bripublish/writing_icon.svg",
      head: "Start writing",
      para: "Select your favorite theme and start writing!",
    },
  ];

  return (
    <div className={styles.container}>
      <img
        src="./assets/images/bripublish/bg_cover.svg "
        className={styles.image}
      />
      <navbar className={`${styles.content} container`}>
        <div class="position-absolute top-0 start-0 ">
          <img
            src="./assets/images/bripublish/LOGO (1).svg"
            className={styles.imglogo}
          />
        </div>
        <div class="position-absolute top-0 end-0 ">
          <img
            src="./assets/images/bripublish/cross_btn.svg"
            className={styles.imgcross}
          />
        </div>
      </navbar>
      <div className={`${styles.maincontent}`}>
        <h1>Congratulations</h1>
        <h3>Your registration has been successfully completed!</h3>
        <p>
          You are three steps away from becoming a Globally Published Author
        </p>
        <h2 className={styles.paratext}>How to get started?</h2>
        <h4 className={styles.headtext}>
          You are 3 steps away from becoming a Published Author
        </h4>
      </div>

      <div className={`${styles.carddiv} d-flex flex-wrap`}>
        {carddata.map((item) => (
          <div className="col-4 col-md-4">
            <div className={`${styles.card} `}>
              <div className={styles.cardbody}>
                <div className={styles.imgcard}>
                  <img
                    src={item.imgscr}
                    alt=""
                    className={`${styles.icon} d-md-block d-none`}
                  />
                  <img
                    src={item.mobilscr ?? item.imgscr}
                    alt=""
                    className={`${styles.icon} d-md-none`}
                  />
                </div>
                <div className={styles.text}>
                  <h3>{item.head}</h3>
                </div>
                <div className={styles.para}>
                  <p>{item.para}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className={`${styles.btndiv} `}>
        <Link href="/" className={`${styles.btn}`}>
          <h2>Start Writing</h2>
        </Link>
      </div>
    </div>
  );
};

export default Home;
