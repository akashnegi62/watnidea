import { SERVICES_DATA } from "@/data/services";
import ServiceLayout from "@/components/ServiceLayout"; // Your template component
import { notFound } from "next/navigation";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const serviceData = SERVICES_DATA[slug];
  if (!serviceData) {
    notFound();
  }

  return <ServiceLayout data={serviceData} />;
}
