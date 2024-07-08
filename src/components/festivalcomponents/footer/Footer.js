import React from "react";
import styles from "./footer.module.css";
import Link from "next/link";

const Footer = () => {
  const btn = [
    {
      id: 1,
      name: "About YouBooks",
      path: "/",
    },
    {
      id: 2,
      name: "Pricing & Royalty",
      path: "/",
    },
    {
      id: 3,
      name: "Contact Us",
      path: "/",
    },
    {
      id: 4,
      name: "Login/Signup",
      path: "/",
    },
    {
      id: 5,
      name: "FAQs",
      path: "/",
    },
    {
      id: 6,
      name: " Blogs",
      path: "/",
    },
  ];
  const btn2 = [
    {
      id: 1,
      name: "Media & News",
      path: "/",
    },
    {
      id: 2,
      name: "Writing Best Practices",
      path: "/",
    },
    {
      id: 3,
      name: "Young Authors Fair",
      path: "/",
    },
    {
      id: 4,
      name: "Promote your book",
    },
    {
      id: 5,
      name: "Authors Fair Awards",
      path: "/",
    },
  ];
  const btn3 = [
    {
      id: 1,
      name: "Terms & Conditions",
      path: "/about_page",
    },
    {
      id: 2,
      name: "End-User License",
      path: "/about_page",
    },
    {
      id: 3,
      name: "Agreement",
      path: "/about_page",
    },
    {
      id: 4,
      name: "Privacy Policy",
      path: "/about_page",
    },
    {
      id: 5,
      name: " Refund & Cancellation",
      path: "/about_page",
    },
    {
      id: 6,
      name: "Shipping Policys",
      path: "/about_page",
    },
  ];

console.log(typeof btn);
  return (
    <>
      {/* ------------- download app content start  ------------- */}
      <div
        className={`${styles.cont} container d-flex flex-wrap justify-content-center`}
      >
        <div className={`${styles.downloaddiv}`}>
          <div className="row">
            <div className="col col-sm-6 col-md-5  ">
              <img
                src="./assets/images/festival-website/Ellipse 33.svg"
                className={`${styles.circleimg}`}
              />
              <h4 className={`${styles.downloadtxt}`}>Download The App Now</h4>
              <p className={`${styles.downloadpara}`}>
                Unleash endless possibilities with just a tap. 
              </p>
              <img
                src="./assets/images/festival-website/image 158.svg"
                className={`${styles.downloadplay} justify-content-center`}
              />
            </div>
            <div
              className={`${styles.mobileimg} col col-sm-6 col-md-5 d-flex flex-wrap`}
            >
              <img
                src="./assets/images/festival-website/home illustration Mask.svg"
                className={`${styles.mobilimg}`}
              />
            </div>
          </div>
        </div>
      </div>
      {/* ------------- download app content end  ------------- */}

      {/* ------------- footer  content start  ------------- */}

      <div className={`${styles.imgback} container-fluid  d-flex`}>
        <div className="row ">
          <div
            className={`${styles.footerlogocontent} col-12 col-sm-4 col-md-6  col-xl-4 `}
          >
            <img
              src="./assets/images/festival-website/BriBooks.svg"
              className={`${styles.footerlogo}`}
            />
            <p className={`${styles.footerpara}`}>
              BriBooks is the world’s leading children creative writing
              platform, enabling children of all ages to learn creative writing,
              publish their books online, and sell printed-on-demand books on
              <span> BriBooks.com </span>
              and
              <span> Amazon.com </span>
              in one click.
            </p>
            <div className={`${styles.footerplaystore}`}>
              <img
                src="./assets/images/festival-website/image 97.svg"
                className={`${styles.playstore}`}
              />
              <img src="./assets/images/festival-website/image 98.svg" />
            </div>
          </div>

          <div
            className={`${styles.menubutton} col-12 col-sm-2 col-md-3  col-xl-2   `}
          >
            <h1 className={`${styles.menutxt}`}>MENU </h1>
            <div className={`${styles.applecontent}`}>
              <div className={`${styles.divapple}`}>
                {btn.map((item) => (
                  <Link
                    href="/Inter_Generational"
                    className={`${styles.apple}`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className={`${styles.menumid} col-sm-2  col-lg-2 `}>
            <div className={`${styles.applecontent}`}>
              <div className={`${styles.divapple} `}>
                {btn2.map((item) => (
                  <Link href="/" className={`${styles.apple}`}>
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
                  <Link href={item.path} className={`${styles.apple}`}>
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr className={styles.hr} />
      <div
        className={`${styles.social} container-fluid  d-flex flex-wrap justify-content-between `}
      >
        <div className={`${styles.bookmark}`}>
          <p className={`${styles.parasocial} `}>
            © 2022 - YouBooks. All rights reserved
          </p>
        </div>
        <div className={`${styles.socialfooterlogo}`}>
          <div className="d-flex">
            <p className={`${styles.parasocial2} text-white`}>Follow us on</p>
            <div>
              <img
                src="./assets/images/festival-website/317727_facebook_social media_social_icon.svg"
                width={23.562}
                height={23.563}
                className={`${styles.logofb}`}
              />
            </div>

            <div>
              <img
                src="./assets/images/festival-website/317723_social media_tweet_twitter_social_icon.svg"
                width={23.562}
                height={23.563}
                className={`${styles.logofb}`}
              />
            </div>

            <div>
              <img
                src="./assets/images/festival-website/_x37__stroke.svg"
                width={23.562}
                height={23.563}
                className={`${styles.logofb}`}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
