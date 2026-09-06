import type { Metadata } from "next";
import { Suspense } from "react";
import { BookingWizard } from "@/components/book/booking-wizard";

export const metadata: Metadata = {
  title: "Book an appointment",
  description:
    "Book your visit in under two minutes — choose a department, pick a specialist and time, and confirm with your details.",
};

export default function BookPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:py-20">
      <Suspense
        fallback={
          <div className="mx-auto max-w-4xl">
            <div className="h-2 w-full rounded-full bg-foreground/10" />
            <div className="mt-12 h-10 w-2/3 rounded-xl bg-foreground/5" />
            <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {Array.from({ length: 6 }, (_, i) => (
                <div key={i} className="h-20 rounded-2xl bg-foreground/5" />
              ))}
            </div>
          </div>
        }
      >
        <BookingWizard />
      </Suspense>
    </div>
  );
}