import React from "react";
import Home from "@/components/intergeneratcomp/Home/Home";
import About from '@/components/intergeneratcomp/about/About'
import Certificate from "@/components/intergeneratcomp/certf/Certificate";
import Footer from "@/components/intergeneratcomp/footer/Footer";
import Work from "@/components/intergeneratcomp/work/Work";
import Eventhub from "@/components/intergeneratcomp/eventhub/Eventhub";

const InterGenerational = () => {
  return (
    <>
      <Home />
      <About />
      <Work />
      <Eventhub />
      <Certificate />
      <Footer />
    </>
  );
};

export default InterGenerational;
