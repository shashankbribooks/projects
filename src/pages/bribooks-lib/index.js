import Image from "next/image";
import React from "react";
import { Inter } from "next/font/google";
import styles from "./lib.module.css";
import Layout from "../../components/layout/Layout";
import Tags from "../../constants/tags";
import JuryData from "../../assets/data/india_jurry_awards.json";
const inter = Inter({
  subsets: ["latin"],
  weight: "700",
  variable: "--font-inter",
});

const index = () => {
  console.log(JuryData);
  return (
    <Layout
      title={Tags.libary.title}
      description={Tags.libary.description}
      theme="dark"
      header={false}
      footer={false}
    >
      <div className="" style={{ backgroundColor: "#FFFFFF" }}>
        <div className="container relative">
          <div className="logo mt-2 ">
            <Image
              src={"/assets/coloured-logo.svg"}
              width={150}
              height={45}
              alt="bribooks logo"
            />
          </div>
          <div
            className="d-flex justify-content-center m-3 text-center "
            style={{ color: "#084481" }}
          >
            <h5 className={inter.className}>
              St. Xavier's High School, Gurugram, Haryana
            </h5>
          </div>
          <div className={`${styles.full_width_image} absolute text-center`}>
            <Image
              src="/assets/images/libry/Group 1000004582.png"
              alt="Descriptive text"
              layout="responsive"
              width={1200}
              height={30}
              style={{ width: "100vw", height: "auto" }}
            />
            <h5 className={`${inter.className} m-3 fw-normal`}>
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
        <div
          className={`${styles.mainbox} container absolute d-flex flex-wrap justify-content-center border-top`}
        >
          {JuryData.map((item) => (
            <div className={`${styles.bookbox}  text-center mt-2 mx-2`}>
              <div className={`${styles.book_img}`}>
                <Image
                  src={item.cover_image}
                  width={145}
                  height={210}
                  alt="book img"
                />
              </div>
              <div className={`${styles.stag}`}>
                <Image
                  src={"/assets/images/libry/lives.png"}
                  width={210}
                  height={56}
                  alt="lives img"
                />
                <Image
                  src={"/assets/images/libry/stage.png"}
                  width={190}
                  height={15}
                  alt="stag img"
                />
              </div>

              <div className={`${styles.author_name}`}>
                <p>{item.author_name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default index;
