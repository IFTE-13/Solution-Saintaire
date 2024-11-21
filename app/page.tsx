import CTA from "@/components/cta/CTA";
import { Hero } from "@/components/home/Hero";
import { Reviews } from "@/components/home/Reviews";
import Industries from "@/components/industries/industries";
import Services from "@/components/services/Services";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero />
      <Reviews />
      <Industries />
      <Services />
      <CTA />
    </>
  );
}
