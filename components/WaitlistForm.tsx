"use client";

import { useState } from "react";

export default function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setSubmitting(true);
    setError("");

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (res.ok) {
        setSuccess(true);
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  if (success) {
    return (
      <div className="text-center py-4">
        <p className="text-2xl font-display font-bold text-chalk mb-2">
          You&apos;re on the list.
        </p>
        <p className="text-chalk/60 text-sm">
          We&apos;ll reach out before Spring 2027 launch.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto">
      <div className="flex flex-col sm:flex-row gap-3">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.com"
          className="flex-1 px-4 py-3 bg-chalk/10 border border-chalk/20 text-chalk placeholder:text-chalk/40 focus:outline-none focus:border-track text-sm"
          aria-label="Email address"
        />
        <button
          type="submit"
          disabled={submitting}
          className="px-6 py-3 bg-track text-chalk text-sm font-medium uppercase tracking-widest hover:bg-track/90 disabled:opacity-60 transition-colors whitespace-nowrap"
        >
          {submitting ? "Joining…" : "Join Waitlist"}
        </button>
      </div>
      {error && (
        <p className="mt-2 text-sm text-red-400" role="alert">
          {error}
        </p>
      )}
      <p className="mt-3 text-xs text-chalk/40 text-center sm:text-left">
        No spam. Launch updates only.
      </p>
    </form>
  );
}
