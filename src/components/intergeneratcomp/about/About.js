import React from "react";
import styles from "../about/about.module.css";

const About = (props) => {
  const img = [
    {
      image: "./assets/images/inter-generational/Group 1000004209.svg",
    },
    {
      image: "./assets/images/inter-generational/Group 1000004210.svg",
    },
    {
      image: "./assets/images/inter-generational/Group 1000004211.svg",
      heading: "text",
    },
  ];
  return (
    <> 
      <div className={`${styles.main} container `}>
        <div className={styles.headtext}>
          <h1 className={styles.htext}>What’s Bribooks?</h1>
          <p className={styles.paratext}>
            BriBooks is the world’s leading children's creative writing
            platform, enabling children of all ages to learn creative writing,
            publish their books online, and sell printed-on-demand books on
            BriBooks.com and Amazon.com in one click.
          </p>
        </div>
        <div
          className={`${styles.maindata}  d-flex justify-content-center flex-wrap `}
        >
          {img.map((images) => (
            <div className={styles.divsize}>
              <img src={images.image} className={styles.size} />
            </div>
          ))}
        </div>
      </div>

      {/* ------------InterGenerational start------------ */}
      <div className={`${styles.intermain} relative`}>
        <div className={styles.interheadtext}>
          <h1 className={styles.interhtext}>
            InterGenerational Book Writing Festival
          </h1>
          <p className={styles.interparatext}>
            Join Generations in Crafting Stories! Co-Author, Publish, and Share
            the Joy Globally at the Intergenerational Book Writing Festival.
          </p>
        </div>
        <div className="">
          <img src="./assets/images/inter-generational/Team-Jobs.svg" className="img-fluid" />
        </div>
      </div>
      {/* ------------InterGenerational end------------ */}

    </>
  );
};

export default About;
