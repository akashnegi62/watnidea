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

export default function ServiceLayout({ slug }: { slug: string }) {
  const data = SERVICES_DATA[slug];

  if (!data) return <div>Service not found</div>;

  return (
    <main className="font-sans antialiased selection:bg-white selection:text-black bg-black">
      <Hero data={data.hero} />
      <AboutService data={data.about} />
      <Services data={data.included} />
      <Process data={data.process} />
      <Results data={data.stats} />
      <WhyChooseUs />
      <Testimonials />
      <FAQ />
    </main>
  );
}
