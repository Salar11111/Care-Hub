import Link from "next/link";
import { HeartPulse } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-2xl flex-col items-center gap-6 px-4 py-28 text-center sm:px-6">
      <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-teal-50 text-teal-700 dark:bg-teal-950/50 dark:text-teal-300">
        <HeartPulse className="h-8 w-8" aria-hidden="true" />
      </span>
      <p className="font-display text-6xl font-bold text-teal-600 dark:text-teal-400">404</p>
      <h1 className="font-display text-3xl font-semibold tracking-tight">
        This page took the day off
      </h1>
      <p className="max-w-md text-foreground/65">
        We couldn&apos;t find what you were looking for. Let&apos;s get you back to
        somewhere calmer.
      </p>
      <div className="flex flex-wrap items-center justify-center gap-3">
        <ButtonLink href="/" variant="primary" size="md">
          Back to home
        </ButtonLink>
        <ButtonLink href="/departments" variant="outline" size="md">
          View departments
        </ButtonLink>
      </div>
      <Link href="/faq" className="text-sm font-semibold text-teal-600 underline-offset-4 hover:underline dark:text-teal-400">
        Need help? Visit the FAQ
      </Link>
    </div>
  );
}