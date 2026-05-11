import Heading from "@/layout/Heading";
import ServiceSec from "@/components/ServiceSec";
import StrategicSec from "@/components/StrategicSec";
import BookBannerSec from "@/components/BookBannerSec";

export default function ServicesPage() {
  return (
    <>
      <main className="bg-black">
        <Heading name="Services" />
        <ServiceSec />
        <StrategicSec/>
        <BookBannerSec/>
      </main>
    </>
  );
}
