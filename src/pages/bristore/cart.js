import React from "react";
import Head from "@/components/bribooksstore/head/Navbar";
import Footer from "@/components/bribooksstore/footer/Footer";
import Cart from "@/components/bribooksstore/cart/Cart";

const cart = () => {
  return (
    <>
      <Head />
      <Cart />
      <Footer />
    </>
  );  
};

export default cart;
