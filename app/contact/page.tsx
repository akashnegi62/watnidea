import Heading from "@/layout/Heading";
import ContactSec from "@/components/contact/ContactSec";
import BookBannerSec from "@/components/BookBannerSec";

export default function ContactPage() {
  return (
    <>
      <main className="bg-black">
        <Heading name="Contact" />
        <ContactSec />
        <BookBannerSec />
      </main>
    </>
  );
}
