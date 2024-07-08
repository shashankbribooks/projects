import React from "react";
import styles from "./work.module.css";

const Work = () => {
  const workData = [
    {
      id: 1,
      imagesrc: "./assets/images/inter-generational/register.svg",
      head: "Registration",
      paratxt:
        "Parents can easily register their child as an author for the event on the BriBooks Platform. Simply log in using the credentials or your email address. ",
    },
    {
      id: 2,
      imagesrc: "./assets/images/inter-generational/Group 1000004108.svg",
      head: "Writing Book",
      paratxt:
        "Begin your co-authoring journey on the AI-Enabled platform, choosing from a variety of thrilling themes and backgrounds to craft your book. ",
    },
    {
      id: 3,
      imagesrc: "./assets/images/inter-generational/Group 1000004109.svg",
      head: "Promote your book",
      paratxt:
        "Share your creative story and utilize this promotional period to expand the reach of your amazing book worldwide, attracting a broader readership and engaging a global audience. ",
    },
  ];
  return (
    <>
      <div className={`${styles.main} container `}>
        <div className={`${styles.headtext} `}>
          <h1 className={styles.htext}>How does it work?</h1>
          <p className={styles.paratext}>
            Craft Together, Create Forever! Join Parents, Grandparents, and Kids
            at the Intergenerational Book Writing Festival. Publish Your
            Treasured Stories for Lifetimes to Share.
          </p>
        </div>
        
        <div className="container d-flex flex-wrap">
          {workData.map((item) => (
            <div className={styles.card}>
              <img src={item.imagesrc} className={`${styles.logoimg} `} />
              <h2 className={styles.heading}>{item.head}</h2>
              <p className={styles.para}>{item.paratxt}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Work;
