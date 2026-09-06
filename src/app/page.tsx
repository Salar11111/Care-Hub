import { Hero } from "@/components/home/hero";
import { Stats } from "@/components/home/stats";
import { DepartmentsPreview } from "@/components/home/departments-preview";
import { Journey } from "@/components/home/journey";
import { HomeTestimonials } from "@/components/home/home-testimonials";
import { CtaBand } from "@/components/home/cta-band";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <DepartmentsPreview />
      <Journey />
      <HomeTestimonials />
      <CtaBand />
    </>
  );
}