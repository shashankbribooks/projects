import React from "react";
import styles from "./deals.module.css";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import SwiperNavButtons from "./SwiperNavButtons";
import Item from "../item/Item";
// import login from "@/pages/bristore/login";

const Deals = ({ top10selling, title, ...props }) => {
  const Imgurl =
    "https://youbooks-storage-5fd6173683748-webdev.s3.amazonaws.com/";
  return (
    <div className="container m-0 p-0">
      <Swiper
        spaceBetween={10}
        slidesPerView={6}
        className="my-2 slide d-flex flex-column-reverse"
        breakpoints={{
          425: {
            width: 424,
            slidesPerView: 2,
          },

          768: {
            width: 768,
            slidesPerView: 3,
            spaceBetween: 70,
          },
          1280: {
            width: 1280,
            slidesPerView: 5,
          },
        }}
      >
        <div className={`${styles.main} d-flex bd-highlight py-3`}>
          <div className={`${styles.head} me-auto my-2`}>
            <h1>{title}</h1>
          </div>
          <div>
            <SwiperNavButtons />
          </div>
        </div>
        {top10selling?.map((item) => (
          <SwiperSlide className="d-flex overflow-hidden m-0 ms-1 ">
            <Item
              key={item.id}
              image={Imgurl + "public/" + item.cover_image}
              writer={item.author_name}
              bookname={item.name}
              // cat={item.category}
              // price={item.price}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Deals;
