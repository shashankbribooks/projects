import React from "react";
import styles from "./newsfeed.module.css";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

const Newsfeed = () => {
  const imagesdata = [
    {
      id: 1,
      imagesrc: "./assets/images/festival-website/image 691.png",
      caption: "Read article",
    },
    {
      id: 2,
      imagesrc: "./assets/images/festival-website/image 676.png",
      caption: "Read article",
    },
    {
      id: 3,
      imagesrc: "./assets/images/festival-website/Group 1000001638.svg",
      caption: "Read article",
    },
    {
      id: 4,
      imagesrc: "./assets/images/festival-website/image 692.png",
      caption: "Read article",
    },
    {
      id: 5,
      imagesrc: "./assets/images/festival-website/image 679.png",
      caption: "Read article",
    },
    {
      id: 6,
      imagesrc: "./assets/images/festival-website/image 680.png",
      caption: "Read article",
    },
  ];
  return (
    <div className={`${styles.newsfeed} container`}>
      <h1 className={styles.festivalnewstxt}>
        Summer Book Writing Festival In News
      </h1>
      <div className={`${styles.cardsize} row `}>
        <div className={`${styles.backimg}`}></div>
        {imagesdata.map((item) => (
          <div className="col-6 col-md-6 col-xl-4 ">
            <div class={styles.newscard}>
              <img src={item.imagesrc} class={styles.newscardimgtop} />
              <div class={styles.newscardbody}>
                <Link href="/" className={styles.link}>
                  {item.caption} <FaArrowRight className={styles.iconarrow} />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Newsfeed;
