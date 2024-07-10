import Image from "next/image";
import React from "react";
import { Inter } from "next/font/google";
import styles from "./lib.module.css";

const inter = Inter({
  subsets: ["latin"],
  weight: "700",
  variable: "--font-inter",
});

const index = () => {
  return (
    <div className="" style={{ backgroundColor: "#FFFFFF" }}>
      <div className="container relative">
        <div className="logo mt-2">
          <Image
            src={"/assets/coloured-logo.svg"}
            width={150}
            height={45}
            alt="bribooks logo"
          />
        </div>
        <div
          className="d-flex justify-content-center "
          style={{ color: "#084481" }}
        >
          <h5 className={inter.className}>
            St. Xavier's High School, Gurugram, Haryana
          </h5>
        </div>
        <div className={`${styles.full_width_image} absolute text-center`}>
          <Image
            src="/assets/Group 1000004582.png"
            alt="Descriptive text"
            layout="responsive"
            width={1200}
            height={30}
            style={{ width: "100vw", height: "auto" }}
          />
          <h5 className={`${inter.className} mt-3 fw-normal`}>
            Books written by{" "}
            <span style={{ color: "#46A302" }}>young authors</span> for{" "}
            <span style={{ color: "#F99232" }}>young readers</span>
          </h5>
        </div>
        <div
          className={`${styles.searchbox} relative d-flex justify-content-center my-md-3 my-2`}
        >
          <input
            type="text"
            className={`${styles.search} form-control Signika border `}
            placeholder=" Search by author or book name"
            name="search"
            // onChange={(event) => setInput(event.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default index;
