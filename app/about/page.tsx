import Heading from "@/layout/Heading";
import AboutIdentity from "@/components/about/AboutIdentity";
import AboutStrategic from "@/components/about/AboutStrategic";
import AboutBanner from "@/components/about/AboutBanner";
import ResultSec from "@/components/ResultSec";
import AboutFAQ from "@/components/about/AboutFAQ";
import BookBannerSec from "@/components/BookBannerSec";
import About from "@/components/about/About";

export default function AboutPage() {
  return (
    <>
      <main className="bg-black">
        <Heading name="About" />
        <About/>
        <AboutIdentity />
        <AboutStrategic />
        <AboutBanner />
        <ResultSec />
        <AboutFAQ />
        <BookBannerSec />
      </main>
    </>
  );
}
