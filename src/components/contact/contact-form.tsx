"use client";

import { useState } from "react";
import { CheckCircle2, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  if (sent) {
    return (
      <div className="flex flex-col items-center gap-4 rounded-3xl border border-foreground/10 bg-background px-8 py-16 text-center">
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-teal-50 text-teal-600 dark:bg-teal-950/50 dark:text-teal-300">
          <CheckCircle2 className="h-8 w-8" aria-hidden="true" />
        </span>
        <h2 className="font-display text-2xl font-semibold">Message received</h2>
        <p className="max-w-sm text-sm text-foreground/65">
          Thanks for reaching out — someone from our care team will get back to you
          within one hour during opening hours.
        </p>
        <Button variant="outline" size="sm" onClick={() => setSent(false)}>
          Send another message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="c-name" className="text-sm font-semibold">Full name</label>
          <input
            id="c-name"
            required
            placeholder="Jane Smith"
            className="rounded-2xl border border-foreground/15 bg-background px-5 py-3.5 text-sm outline-none transition-colors focus:border-teal-600 focus:ring-2 focus:ring-teal-600/20"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="c-email" className="text-sm font-semibold">Email</label>
          <input
            id="c-email"
            type="email"
            required
            placeholder="jane@example.com"
            className="rounded-2xl border border-foreground/15 bg-background px-5 py-3.5 text-sm outline-none transition-colors focus:border-teal-600 focus:ring-2 focus:ring-teal-600/20"
          />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="c-subject" className="text-sm font-semibold">Topic</label>
        <select
          id="c-subject"
          defaultValue="General question"
          className="rounded-2xl border border-foreground/15 bg-background px-5 py-3.5 text-sm outline-none transition-colors focus:border-teal-600 focus:ring-2 focus:ring-teal-600/20"
        >
          <option>General question</option>
          <option>Appointments & referrals</option>
          <option>Insurance or billing</option>
          <option>Medical records</option>
          <option>Patient portal help</option>
        </select>
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="c-message" className="text-sm font-semibold">How can we help?</label>
        <textarea
          id="c-message"
          required
          rows={5}
          placeholder="Tell us a little about what you need…"
          className="resize-none rounded-2xl border border-foreground/15 bg-background px-5 py-3.5 text-sm outline-none transition-colors focus:border-teal-600 focus:ring-2 focus:ring-teal-600/20"
        />
      </div>
      <Button type="submit" variant="primary" size="md" className="self-start">
        <Send className="h-4 w-4" aria-hidden="true" />
        Send message
      </Button>
    </form>
  );
}