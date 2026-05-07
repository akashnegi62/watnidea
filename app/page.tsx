import Loader from "@/Ui/Loader";
import FloatingNav from "@/Ui/FloatingNav";
import HeroPage from "@/components/HeroSec";
import AboutSec from "@/components/AboutSec";
import SectionSec from "@/components/ServiceSec";
import WebuildSec from "@/components/WebuildSec";
import StrategicSec from "@/components/StrategicSec";
import IdentitySec from "@/components/IdentitySec";

function page() {
  return (
    <>
      <Loader />
      <FloatingNav />
      <HeroPage />
      <AboutSec />
      <SectionSec />
      <WebuildSec />
      <StrategicSec />
      <IdentitySec />
    </>
  );
}

export default page;
