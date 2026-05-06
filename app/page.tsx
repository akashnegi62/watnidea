import React from "react";
// import Loader from "@/components/Loader";
import HeroPage from "@/components/HeroSec";
import AboutSec from "@/components/AboutSec";
import SectionSec from "@/components/SectionSec";
import WebuildSec from "@/components/WebuildSec";

function page() {
  return (
    <>
      {/* <Loader /> */}
      <HeroPage />
      <AboutSec />
      <SectionSec />
      <WebuildSec />
    </>
  );
}

export default page;
