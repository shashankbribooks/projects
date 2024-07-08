import { useEffect, useState } from "react";

import React from "react";
import Logo from "./Logo";
import Link from "next/link";
import Button from "./Button";

const Navbar = () => {
  const [showButton, setShowButton] = useState(false);
  const changeNavButton = () => {
    if (window.scrollY >= 400 && window.innerWidth < 768) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", changeNavButton);
  }, []);
  return (
    <>
      <div className="w-full h-20 bg-emerald-800 sticky top-0">
        <div className="container mx-auto px-4 h-full">
          <div className="flex justify-between items-center h-full">
            <Logo />
            <ul className="hidden md:flex gap-x-6 text-white">
              <li>
                <Link href="/about">
                  <p>About Us</p>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <p>Services</p>
                </Link>
              </li>
              <li>
                <Link href="/contacts">
                  <p>Contacts</p>
                </Link>
              </li>
            </ul>
            <div style={{ display: showButton ? "block" : "none" }}>
              <Button />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
