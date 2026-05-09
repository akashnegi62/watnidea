import Heading from "@/layout/Heading";
import AboutSec from "@/components/AboutSec";
import AboutIdentity from "@/components/about/AboutIdentity";
import AboutStrategic from "@/components/about/AboutStrategic";
import AboutBanner from "@/components/about/AboutBanner";
import ResultSec from "@/components/ResultSec";
import AboutFAQ from "@/components/about/AboutFAQ";
import BookBannerSec from "@/components/BookBannerSec";

export default function AboutPage() {
  return (
    <>
      <main className="bg-black">
        <Heading name="About" />
        <AboutSec />
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
