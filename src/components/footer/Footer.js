import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "./Logo";
import Menu from "./Menu";
import CopyRight from "./CopyRight";
import { useAppState } from "../../context/AppProvider";

import { Container, Row, Col } from "react-bootstrap";

const Footer = (props) => {
  //   const { user, userLocale } = useAppState();
  //   const [countryCode, setCountryCode] = useState("usa");
  //   useEffect(() => {
  //     setCountryCode(userLocale?.user_country_code ?? "us");
  //   }, [userLocale]);

  const menus = [
    {
      heading: "Menu",
      menus: [
        {
          name: "About BriBooks",
          href: "https://www.bribooks.com/about",
        },
        {
          name: "Pricing & Royalty",
          href: "https://www.bribooks.com/pricing/newpricing",
        },
        {
          name: "Contact us",
          href: "https://www.bribooks.com/contact",
        },
        {
          name: "Login/Signup",
          href: "https://www.bribooks.com/login",
        },
        {
          name: "FAQs",
          href: "https://www.bribooks.com/faqs",
        },
        {
          name: "Blogs",
          href: "https://www.bribooks.com/blog",
        },
      ],
    },
    {
      heading: " ",
      menus: [
        {
          name: "Media & News",
          href: "https://www.bribooks.com/medianews",
        },
        {
          name: "Writing Best Practices",
          href: "https://www.bribooks.com/bestpractices",
        },
        {
          name: "Young Authors Fair",
          href: "https://www.yaf.bribooks.com/",
        },
        // {
        // 	name:'Young Authors Fair In News',
        // 	href:'/yafnews'
        // },
        {
          name: "Promote your book",
          href: "/promote-your-book",
        },
        // countryCode == "in" ?
        // 	{
        // 		name:'',
        // 	    href:''
        // 	}:{
        // 		name:'Authors Fair Awards',
        // 		href:'/israel/awards'
        // 	},
      ],
    },
    {
      heading: "Quick Links",
      menus: [
        {
          name: "Terms & Conditions",
          href: "https://www.bribooks.com/terms",
        },
        {
          name: "End-User License Agreement",
          href: "/eula",
        },
        {
          name: "Privacy Policy",
          href: "https://www.bribooks.com/privacy",
        },
        {
          name: "Refund & Cancellation",
          href: "https://www.bribooks.com/refund",
        },
        // {
        // 	name: 'Sitemap',
        // 	href: 'https://www.bribooks.com/comingsoon',
        // },
        {
          name: "Shipping Policy",
          href: "https://www.bribooks.com/shipping",
        },
      ],
    },
  ];

  return (
    <footer>
      <Container>
        <Row>
          <Col sm={4}>
            <Logo />
            <p className="mt-2" style={{ textAlign: "justify" }}>
              BriBooks is the world’s leading children creative writing
              platform, enabling children of all ages to learn creative writing,
              publish their books online, and sell printed-on-demand books on{" "}
              <Link legacyBehavior href="/" passHref>
                <a target="_blank" rel="noopener noreferrer">
                  BriBooks.com
                </a>
              </Link>{" "}
              and{" "}
              <Link legacyBehavior href="https://www.amazon.com/" passHref>
                <a target="_blank" rel="noopener noreferrer">
                  Amazon.com
                </a>
              </Link>{" "}
              in one click.
            </p>
            <div className="d-flex mb-4">
              <Link
                href="https://play.google.com/store/apps/details?id=com.bribooks"
                legacyBehavior
              >
                <span target="_blank" style={{ cursor: "pointer" }}>
                  <Image
                    src="/assets/images/googleplay.png"
                    width={118}
                    height={39}
                    alt="googleplay"
                  />
                </span>
              </Link>
              <div className="ms-5">
                <Link
                  href="https://apps.apple.com/us/app/bribooks/id6448090977"
                  legacyBehavior
                >
                  <span target="_blank" style={{ cursor: "pointer" }}>
                    <Image
                      src="/assets/images/applestore23.png"
                      width={112}
                      height={39}
                      alt="applestore"
                    />
                  </span>
                </Link>
              </div>
            </div>
          </Col>
          <Col sm={2}></Col>
          <Col sm={2}>
            <Menu heading={menus[0].heading} menus={menus[0].menus} />
          </Col>
          <Col sm={2}>
            <Menu heading={menus[1].heading} menus={menus[1].menus} />
          </Col>
          <Col sm={2}>
            <Menu heading={menus[2].heading} menus={menus[2].menus} />
          </Col>
        </Row>
      </Container>
      <CopyRight />
    </footer>
  );
};

export default Footer;
