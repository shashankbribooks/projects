import Blog from "@/components/cartapi/Firstapi";
import Firstapi from "@/components/cartapi/Firstapi";
import Link from "next/link";
import React from "react";

const index = () => {
  return (
    <main>
      <h1> Fetching api from server </h1>
      {/* <Blog /> */}
      <Firstapi />    
      
    </main>
  );
};

export default index;
