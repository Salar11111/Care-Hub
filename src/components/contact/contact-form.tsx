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
      <div className="card flex flex-col items-center gap-4 px-8 py-16 text-center">
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-accent-soft text-accent-strong">
          <CheckCircle2 className="h-8 w-8" aria-hidden="true" />
        </span>
        <h2 className="font-display text-2xl font-semibold">Message received</h2>
        <p className="max-w-sm text-sm text-muted">
          Thanks for reaching out — someone from our care team will get back to you
          within one hour during opening hours.
        </p>
        <Button variant="secondary" size="sm" onClick={() => setSent(false)}>
          Send another message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="card flex flex-col gap-5 p-6 sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="c-name" className="field-label">Full name</label>
          <input
            id="c-name"
            required
            placeholder="Jane Smith"
            className="field-input"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="c-email" className="field-label">Email</label>
          <input
            id="c-email"
            type="email"
            required
            placeholder="jane@example.com"
            className="field-input"
          />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="c-subject" className="field-label">Topic</label>
        <select
          id="c-subject"
          defaultValue="General question"
          className="field-input"
        >
          <option>General question</option>
          <option>Appointments & referrals</option>
          <option>Insurance or billing</option>
          <option>Medical records</option>
          <option>Patient portal help</option>
        </select>
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="c-message" className="field-label">How can we help?</label>
        <textarea
          id="c-message"
          required
          rows={5}
          placeholder="Tell us a little about what you need…"
          className="field-input resize-none"
        />
      </div>
      <Button type="submit" variant="primary" size="md" className="self-start">
        <Send className="h-4 w-4" aria-hidden="true" />
        Send message
      </Button>
    </form>
  );
}
