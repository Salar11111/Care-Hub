import type { Metadata } from "next";
import { Suspense } from "react";
import { PortalMock } from "@/components/portal/portal-mock";

export const metadata: Metadata = {
  title: "Patient portal",
  description:
    "Sign in to see appointments, records, messages and billing — all in one secure, warm place.",
};

export default function PortalPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-24">
      <Suspense
        fallback={
          <div className="mx-auto max-w-5xl">
            <div className="h-10 w-2/3 rounded-xl bg-foreground/5" />
            <div className="mt-8 h-96 rounded-[2rem] bg-foreground/5" />
          </div>
        }
      >
        <PortalMock />
      </Suspense>
    </div>
  );
}