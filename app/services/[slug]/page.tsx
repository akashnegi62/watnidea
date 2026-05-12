// app/services/[slug]/page.tsx
import ServiceLayout from "@/components/services/ServiceLayout";
import { notFound } from "next/navigation";
import { SERVICES_DATA } from "@/data/services";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  // Verify the service exists before moving to the layout
  if (!SERVICES_DATA[slug]) {
    notFound();
  }

  // ONLY pass the slug string here
  return <ServiceLayout slug={slug} />;
}
