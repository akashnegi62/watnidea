import Heading from "@/layout/Heading";
import AboutSec from "@/components/AboutSec";

export default function AboutPage() {
  return (
    <>
      {/* <Loader /> */}
      <main className="bg-black">
        <Heading name="About" />
        <AboutSec />
      </main>
    </>
  );
}
