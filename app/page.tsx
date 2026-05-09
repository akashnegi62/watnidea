import Loader from "@/layout/Loader";
import HeroPage from "@/components/HeroSec";
import AboutSec from "@/components/AboutSec";
import SectionSec from "@/components/ServiceSec";
import WebuildSec from "@/components/WebuildSec";
import StrategicSec from "@/components/StrategicSec";
import IdentitySec from "@/components/IdentitySec";
import BannerSec from "@/components/BannerSec";
import PricingSec from "@/components/PricingSec";
import StepsSec from "@/components/StepsSec";
import ResultSec from "@/components/ResultSec";
import FAQSec from "@/components/FAQSec";
import BookBannerSec from "@/components/BookBannerSec";
function page() {
  return (
    <>
      {/* <Loader /> */}
      <HeroPage />
      <AboutSec />
      <SectionSec />
      <WebuildSec />
      <StrategicSec />
      <IdentitySec />
      <BannerSec />
      <PricingSec />
      <StepsSec />
      <ResultSec />
      <FAQSec />
      <BookBannerSec />
    </>
  );
}

export default page;
