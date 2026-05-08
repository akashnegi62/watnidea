import Loader from "@/Ui/Loader";
import FloatingNav from "@/Ui/FloatingNav";
import HeroPage from "@/components/HeroSec";
import AboutSec from "@/components/AboutSec";
import SectionSec from "@/components/ServiceSec";
import WebuildSec from "@/components/WebuildSec";
import StrategicSec from "@/components/StrategicSec";
import IdentitySec from "@/components/IdentitySec";
import BannerSec from "@/components/BannerSec";
import FAQSec from "@/components/FAQSec";
import PricingSec from "@/components/PricingSec";
import ResultSec from "@/components/ResultSec";

function page() {
  return (
    <>
      {/* <Loader /> */}
      <ResultSec />
      <PricingSec />
      <FloatingNav />
      <HeroPage />
      <AboutSec />
      <SectionSec />
      <WebuildSec />
      <StrategicSec />
      <IdentitySec />
      <BannerSec />
      <FAQSec />
    </>
  );
}

export default page;
