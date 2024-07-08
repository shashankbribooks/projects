import React from "react";
import styles from "./hub.module.css";
import Carousel from "react-multi-carousel";


const Eventhub = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1024 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 1024, min: 800 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 800, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  const cardData = [
    {
      id: 1,
      imagesrc: "/assets/images/inter-generational/nyaf2023.png",
      head: "Registration",
      paratxt:
        "Parents can easily register their child as an author for the event on the BriBooks Platform. Simply log in using the credentials or your email address. ",
    },
    {
      id: 2,
      imagesrc: "/assets/images/inter-generational/summer-bwf.png",
      head: "Writing Book",
      paratxt:
        "Begin your co-authoring journey on the AI-Enabled platform, choosing from a variety of thrilling themes and backgrounds to craft your book. ",
    },
    {
      id: 3,
      imagesrc: "/assets/images/inter-generational/NYAfair.svg",
      head: "Promote your book",
      paratxt:
        "Share your creative story and utilize this promotional period to expand the reach of your amazing book worldwide, attracting a broader readership and engaging a global audience. ",
    },
    {
      id: 4,
      imagesrc: "/assets/images/inter-generational/inter-G-bwf.png",
      head: "Promote your book",
      paratxt:
        "Share your creative story and utilize this promotional period to expand the reach of your amazing book worldwide, attracting a broader readership and engaging a global audience. ",
    },
    {
      id: 5,
      imagesrc: "/assets/images/inter-generational/nyaf-uae.png",
      head: "Promote your book",
      paratxt:
        "Share your creative story and utilize this promotional period to expand the reach of your amazing book worldwide, attracting a broader readership and engaging a global audience. ",
    },
  ];
  return (
    <>
      <div className={`${styles.mainbg} container-fluid  `}>
        <div className="container">
          <div className={`${styles.head}`}>
            <h1>Discover Unforgettable Moments in Our Events Hub</h1>
          </div>
          <div className={`${styles.para}`}>
            <p className={styles.paratxt}>
              Dive into the vibrant festivities celebrating young authors and
              their remarkable book achievements, ushering in a world of
              creativity and recognition!
            </p>
          </div>

      {/* ---------------Carousel css start -------------- */ }
          <div className={`${styles.container} `}>
            <Carousel
              className={styles.Carousel}
              infinite={true}
              responsive={responsive}
            >
              {cardData.map((item) => (
                <div className={styles.card}>
                  <img src={item.imagesrc} className={`${styles.logoimg} `} />
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </>
  );
};

export default Eventhub;
