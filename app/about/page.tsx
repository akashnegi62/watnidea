import Heading from "@/layout/Heading";
import AboutSec from "@/components/AboutSec";
import AboutIdentity from "@/components/about/AboutIdentity";

export default function AboutPage() {
  return (
    <>
      {/* <Loader /> */}
      <main className="bg-black">
        <Heading name="About" />
        <AboutSec />
        <AboutIdentity />
      </main>
    </>
  );
}
