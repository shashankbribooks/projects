import React, { useState, useEffect } from "react";
import styles from "./bestselling.module.css";
import Item from "../item/Item";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Button, Nav } from "react-bootstrap";
import Link from "next/link";
import Deals from "../deals/Deals";
import Dealsday from "../deals/dealsday";

const Bestselling = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 8,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };
  const responsive10 = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 8,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };

  const [isbooks, setIsBooks] = useState([]);
  // console.log("result :", isbooks);
  const fetchBooks = async () => {
    try {
      const response = await fetch(
        "https://crm.dev.bribooks.com/api/getBooks",
        {
          method: "POST",
        }
      );
      const fetdata = await response.json();
      setIsBooks(fetdata);
    } catch (error) {}
  };
  useEffect(() => {
    fetchBooks();
  }, []);

  const categories = isbooks?.books?.reduce(function (values, item) {
    if (!values.includes(item.category)) {
      values.push(item.category);
    }
    return values;
  }, []);

  const [topsellingdata, setTopsellingdata] = useState();
  const filterItem = (category) => {
    const updatedList = isbooks?.books.filter((item) => {
      return item.category === category;
    });
    setTopsellingdata(updatedList);
  };

  return (
    <>
      {/* ---------------------- banner img----------------------------- */}
      <div>
        <img
          src="/assets/images/bristore/banner.svg"
          alt=""
          className={`${styles.banner} w-100`}
        />
      </div>
      {/* ---------------------- Top 100 ----------------------------- */}
      <div className={`${styles.container} container relative mt-3`}>
        <Deals
          top10selling={isbooks?.books}
          title="Top 100 Best Selling Authors "
        />
      </div>
      {/* ---------- Best selling authors books banner img ------------ */}
      <div>
        <img
          src="/assets/images/bristore/ADVERT.svg"
          alt=""
          className={`${styles.banner} w-100 mt-2`}
        />
      </div>
      {/* ----------- Top 50 Best Selling books section  --------- */}
      <div
        className={`${styles.container} container relative mt-4 overflow-hidden`}
      >
        <h1>Top 50 Best Selling Books </h1>
        <div className="main d-flex flex-nowrap row  p-0 m-0">
          <div className={`${styles.btn} col-2 `}>
            <Nav className="flex-column mt-4">
              {categories?.map((btn) => (
                <Nav.Link
                  onClick={() => filterItem(btn)}
                  className={`${styles.button} my-1`}
                >
                  {btn}
                </Nav.Link>
              ))}
            </Nav>
          </div>
          <div className={`${styles.carouselside} col-8 col-md-8 col-lg-9`}>
            <Deals top10selling={topsellingdata} />
          </div>
        </div>
      </div>

      {/* --------------------  Deals of the day  -------------------- */}
      <Dealsday />

      {/* ----------------  Top 10 Best Selling Authors ----------------- */}
      <div className={`${styles.container} container relative mt-4`}>
        <Deals
          top10selling={isbooks?.books}
          title="Top 10 Best Selling Authors "
        />
      </div>
    </>
  );
};

export default Bestselling;
