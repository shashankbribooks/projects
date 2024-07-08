import React from "react";
import styles from "./footer.module.css";
import Link from "next/link";
import { Col, Row } from "react-bootstrap";

const Footer = () => {
  const btn = [
    {
      id: 1,
      name: "About YouBooks",
    },
    {
      id: 2,
      name: "Pricing & Royalty",
    },
    {
      id: 3,
      name: "Contact Us",
    },
    {
      id: 4,
      name: "Login/Signup",
    },
    {
      id: 5,
      name: "FAQs",
    },
    {
      id: 6,
      name: " Blogs",
    },
  ];
  const btn2 = [
    {
      id: 1,
      name: "Media & News",
    },
    {
      id: 2,
      name: "Writing Best Practices",
    },
    {
      id: 3,
      name: "Young Authors Fair",
    },
    {
      id: 4,
      name: "Promote your book",
    },
  ];
  const btn3 = [
    {
      id: 1,
      name: "Terms & Conditions",
    },
    {
      id: 2,
      name: "End-User License",
    },

    {
      id: 3,
      name: "Privacy Policy",
    },
    {
      id: 4,
      name: " Refund & Cancellation",
    },
    {
      id: 5,
      name: "Shipping Policys",
    },
  ];
  return (
    <>
      <div className={`${styles.delivery} `}>
        <div className="container w-100 py-4 text-center">
          <img
            src="./assets/images/bristore/STAT.svg"
            alt=""
            className={`${styles.deliveryimg}   my-3`}
          />
          <img
            src="./assets/images/bristore/STAT (1).svg"
            alt=""
            className={`${styles.deliveryimg}   my-3`}
          />
          <img
            src="./assets/images/bristore/STAT (2).svg"
            alt=""
            className={`${styles.deliveryimg}   my-3`}
          />
          <img
            src="./assets/images/bristore/STAT (3).svg"
            alt=""
            className={`${styles.deliveryimg}  my-3`}
          />
        </div>
      </div>
      <div className={`${styles.imgback} container-fluid  d-flex`}>
        <div className="row ">
          <div
            className={`${styles.footerlogocontent} col-12 col-sm-4 col-md-6  col-xl-4 `}
          >
            <img
              src="./assets/images/festival-website/BriBooks.svg"
              className={`${styles.footerlogo}`}
            />
            <p className={`${styles.footerpara} text-black`}>
              BriBooks is the world’s leading children creative writing
              platform, enabling children of all ages to learn creative writing,
              publish their books online, and sell printed-on-demand books on
              <span> BriBooks.com </span>
              and
              <span> Amazon.com </span>
              in one click.
            </p>
          </div>

          <div
            className={`${styles.menubutton} col-12 col-sm-2 col-md-3  col-xl-2 `}
          >
            <h1 className={`${styles.menutxt}`}>MENU </h1>
            <div className={`${styles.applecontent}`}>
              <div className={`${styles.divapple}`}>
                {btn.map((item) => (
                  <Link
                    href="/Inter_Generational"
                    key={item.id}
                    className={`${styles.apple} text-black`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className={`${styles.menumid} col-sm-2  col-lg-2`}>
            <div className={`${styles.applecontent}`}>
              <div className={`${styles.divapple} `}>
                {btn2.map((item) => (
                  <Link
                    href="/"
                    key={item.id}
                    className={`${styles.apple} text-black`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div
            className={`${styles.menubuttontxt} col-12 col-sm-2 col-md-3  col-xl-3  `}
          >
            <h1 className={`${styles.menutxt}`}>QUICK LINKS </h1>
            <div className={`${styles.applecontent}`}>
              <div className={`${styles.divapple}`}>
                {btn3.map((item) => (
                  <Link
                    href="/"
                    key={item.id}
                    className={`${styles.apple} text-black`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid footerlogo w-100 border mt-3 d-flex flex-wrap">
        <div className="container ">
          <Row className={`${styles.row} d-flex flex-wrap`}>
            <Col className="text-center border py-4 col-12 col-md-4">
              <h2>Follow Us</h2>
              <img
                src="./assets/images/bristore/SOCIAL.svg"
                className="px-1 py-3"
                alt=""
              />
              <img
                src="./assets/images/bristore/SOCIAL (1).svg"
                className="px-1"
                alt=""
              />
              <img
                src="./assets/images/bristore/SOCIAL (2).svg"
                className="px-1"
                alt=""
              />
              <img
                src="./assets/images/bristore/SOCIAL (3).svg"
                className="px-1"
                alt=""
              />
            </Col>
            <Col className="text-center border py-4 col-12 col-md-4">
              <h2>Download Application</h2>
              <img
                src="./assets/images/bristore/playstore.svg"
                alt=""
                className="px-1 py-3"
              />
              <img src="./assets/images/bristore/apple store.svg" alt="" />
            </Col>
            <Col className="text-center border py-4 col-12 col-md-4">
              <h2>We Accept</h2>
            </Col>
          </Row>
        </div>
      </div>
      <div className={`${styles.right} container text-center `}>
        <h2 className="my-3">
          © 2023 - Youbooks Edtech Pte. Ltd. All rights reserved
        </h2>
      </div>
    </>
  );
};

export default Footer;
