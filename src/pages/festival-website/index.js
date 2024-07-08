import Partners from "@/components/festivalcomponents/partners/Partners";
import Home from "@/components/festivalcomponents/home/Home";
import React from "react";
import Achievements from "@/components/festivalcomponents/achievements/Achievements";
import Newsfeed from "@/components/festivalcomponents/newsfeed/Newsfeed";
import Eventhub from "@/components/festivalcomponents/eventhub/Eventhub";
import Awards from "@/components/festivalcomponents/awards/Awards";
import Footer from "@/components/festivalcomponents/footer/Footer";

const Festival = () => {
  return (
    <>
      <Home />
      <Partners />
      <Achievements />
      <Newsfeed />
      <Eventhub />
      <Awards />
      <Footer />
    </>
  );
};

export default Festival;
