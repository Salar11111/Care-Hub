import type { Metadata } from "next";
import { DepartmentsBrowser } from "@/components/departments/departments-browser";
import { SectionHeading } from "@/components/ui/section-heading";

export const metadata: Metadata = {
  title: "Departments",
  description:
    "Explore 15 specialties under one roof — from cardiology to mental health, every department shares one record, one team and one promise.",
};

export default function DepartmentsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-24">
      <SectionHeading
        eyebrow="Our departments"
        title="Care for every chapter of life"
        description="Every department shares one connected record and one kind, coordinated team. Search across 15 specialties or jump straight in from the core ones below."
      />
      <div className="mt-12">
        <DepartmentsBrowser />
      </div>
    </div>
  );
}