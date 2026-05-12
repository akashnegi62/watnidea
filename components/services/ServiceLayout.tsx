"use client";
import React from "react";
import AboutService from "./AboutService";
import { SERVICES_DATA } from "@/data/services";
import Hero from "./Hero";
import { Services } from "./Services";
import { Process } from "./Process";
import Results from "./Results";
import WhyChooseUs from "./WhyChooseUs";
import Testimonials from "./Testimonials";
import FAQ from "./FAQ";
import BookBannerSec from "../BookBannerSec";

export default function ServiceLayout({ slug }: { slug: string }) {
  const data = SERVICES_DATA[slug];

  if (!data) return <div>Service not found</div>;

  return (
    <main className="font-sans antialiased selection:bg-white selection:text-black bg-black">
      <Hero data={data.hero} />
      <AboutService data={data.about} />
      <Services data={data.included} title={data.about.title} />
      <Process
        data={data.process}
        title={data.processHeader?.title}
        description={data.processHeader?.description}
      />
      <Results data={data.stats} />
      <WhyChooseUs data={data.whyChooseUs} />
      <Testimonials />
      <FAQ data={data.faq} />
      <BookBannerSec />
    </main>
  );
}
