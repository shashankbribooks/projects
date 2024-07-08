import React from "react";
import styles from "./deals.module.css";
import { useSwiper } from "swiper/react";

const SwiperNavButtons = () => {
  const swiper = useSwiper();

  return (
    <div className={`${styles.main} d-flex bd-highlight`}>
      <div className={`${styles.swipernavbtns} `}>
        <button
          onClick={() => swiper.slidePrev()}
          className="btn rounded-circle me-3"
        >
          <span className={styles.arrow}>←</span>
        </button>
        <button
          onClick={() => swiper.slideNext()}
          className="btn rounded-circle  "
        >
          <span className={styles.arrow}>→</span>
        </button>
      </div>
    </div>
  );
};

export default SwiperNavButtons;
