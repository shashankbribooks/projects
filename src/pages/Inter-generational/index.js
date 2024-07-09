import React from "react";

import { HiMiniClipboardDocumentList } from "react-icons/hi2";
import Homed from "../../components/intergeneratcomp/Home/Home";
import Aboutcompt from "../../components/intergeneratcomp/about/About";
import Work from "../../components/intergeneratcomp/work/Work";
import Eventhub from "../../components/intergeneratcomp/eventhub/Eventhub";
import Certificate from "../../components/intergeneratcomp/certf/Certificate";
import Footer from "../../components/bribooksstore/footer/Footer";
import Home from "../../components/intergeneratcomp/Home/Home";
import About from "../../components/intergeneratcomp/about/About";

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
