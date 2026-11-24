import { featuredDepartments } from "@/lib/data";
import { DepartmentCard } from "@/components/departments/department-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { ButtonLink } from "@/components/ui/button";

export function DepartmentsPreview() {
  return (
    <section id="departments" className="section mx-auto max-w-7xl scroll-mt-24 px-4 sm:px-6">
      <Reveal>
        <SectionHeading
          eyebrow="Our departments"
          title="Care for every chapter of life"
          description="Six specialties under one roof — from first check-ups to complex care, every department shares one record, one team and one promise."
        />
      </Reveal>
      <div className="mt-12 grid gap-[var(--s-5)] sm:grid-cols-2 lg:grid-cols-3">
        {featuredDepartments.map((dept, i) => (
          <Reveal key={dept.slug} delay={i * 60}>
            <DepartmentCard department={dept} />
          </Reveal>
        ))}
      </div>
      <div className="mt-10 flex justify-center">
        <ButtonLink href="/departments" variant="secondary" size="md">
          View all 15 departments
        </ButtonLink>
      </div>
    </section>
  );
}