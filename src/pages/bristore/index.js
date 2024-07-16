import React from "react";
import Head from "../../components/bribooksstore/head/Navbar";
import Footer from "../../components/bribooksstore/footer/Footer";
import Cart from "../../components/bribooksstore/cart/Cart";
import Bestselling from "../../components/bribooksstore/bestselling/Bestselling";

const index = () => {
  return (
    <>
      <Head />
      {/* <Cart /> */}
      <Bestselling />
      <Footer />
    </>
  );  
};

export default index;
