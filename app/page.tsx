import React from "react";
import HeroPage from "@/components/HeroSec";
import AboutSec from "@/components/AboutSec";
import SectionSec from "@/components/SectionSec";
import WebuildSec from "@/components/WebuildSec";
function page() {
  return (
    <>
      <HeroPage />
      <AboutSec />
      <SectionSec />
      <WebuildSec />
    </>
  );
}

export default page;
