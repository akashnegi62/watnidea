import React from "react";
// import Loader from "@/components/Loader";
import HeroPage from "@/components/HeroSec";
import AboutSec from "@/components/AboutSec";
import SectionSec from "@/components/ServiceSec";
import WebuildSec from "@/components/WebuildSec";
import StrategicSec from "@/components/StrategicSec";

function page() {
  return (
    <>
      {/* <Loader /> */}
      <HeroPage />
      <AboutSec />
      <SectionSec />
      <WebuildSec />
      <StrategicSec />
    </>
  );
}

export default page;
