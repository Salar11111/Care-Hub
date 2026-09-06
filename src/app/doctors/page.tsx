import type { Metadata } from "next";
import { DoctorsBrowser } from "@/components/doctors/doctors-browser";
import { SectionHeading } from "@/components/ui/section-heading";

export const metadata: Metadata = {
  title: "Meet our doctors",
  description:
    "Meet 120+ specialists across 15 departments — every clinician shares one record and one warm, coordinated plan for you.",
};

export default function DoctorsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-24">
      <SectionHeading
        eyebrow="Our specialists"
        title="The people who'll look after you"
        description="Kindness is a clinical skill. Meet the doctors patients remember by name — filter by department and book directly."
      />
      <div className="mt-12">
        <DoctorsBrowser />
      </div>
    </div>
  );
}