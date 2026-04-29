"use client";

import { useState } from "react";

interface FormData {
  schoolProgram: string;
  role: string;
  sport: string;
  teamSize: string;
  season: string;
  customization: string;
  contactName: string;
  email: string;
  phone: string;
}

const initial: FormData = {
  schoolProgram: "",
  role: "",
  sport: "Track & Field",
  teamSize: "",
  season: "",
  customization: "",
  contactName: "",
  email: "",
  phone: "",
};

export default function TeamsForm() {
  const [form, setForm] = useState<FormData>(initial);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  function update(field: keyof FormData, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setError("");

    try {
      const res = await fetch("/api/teams-inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setSuccess(true);
      } else {
        setError("Something went wrong. Please try again or email us directly.");
      }
    } catch {
      setError("Something went wrong. Please try again or email us directly.");
    } finally {
      setSubmitting(false);
    }
  }

  if (success) {
    return (
      <div className="py-16 text-center">
        <div className="inline-block w-12 h-[3px] bg-track mb-6" />
        <h3 className="font-display font-bold text-3xl uppercase tracking-tight mb-3">
          Request received.
        </h3>
        <p className="text-steel text-base max-w-sm mx-auto leading-relaxed">
          Evan or Alex will follow up within 24 hours with volume pricing and
          customization options for your program.
        </p>
      </div>
    );
  }

  const fieldClass =
    "w-full px-4 py-3 bg-chalk border border-cinder/15 text-cinder placeholder:text-steel/50 focus:outline-none focus:border-track text-sm";
  const labelClass = "block text-xs uppercase tracking-widest text-steel mb-2 font-medium";
  const selectClass = `${fieldClass} appearance-none cursor-pointer`;

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && (
        <div className="p-4 border border-red-300 bg-red-50 text-red-700 text-sm" role="alert">
          {error}
        </div>
      )}

      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="schoolProgram" className={labelClass}>
            School / Program <span className="text-track">*</span>
          </label>
          <input
            id="schoolProgram"
            type="text"
            required
            value={form.schoolProgram}
            onChange={(e) => update("schoolProgram", e.target.value)}
            placeholder="e.g. Madison East High School Track"
            className={fieldClass}
          />
        </div>

        <div>
          <label htmlFor="role" className={labelClass}>
            Your Role <span className="text-track">*</span>
          </label>
          <select
            id="role"
            required
            value={form.role}
            onChange={(e) => update("role", e.target.value)}
            className={selectClass}
          >
            <option value="">Select your role</option>
            <option value="head-coach">Head Coach</option>
            <option value="assistant-coach">Assistant Coach</option>
            <option value="athletic-director">Athletic Director</option>
            <option value="trainer">Athletic Trainer</option>
            <option value="team-manager">Team Manager</option>
            <option value="parent-booster">Parent / Booster</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="sport" className={labelClass}>
            Sport
          </label>
          <input
            id="sport"
            type="text"
            value={form.sport}
            onChange={(e) => update("sport", e.target.value)}
            className={fieldClass}
          />
        </div>

        <div>
          <label htmlFor="teamSize" className={labelClass}>
            Team Size <span className="text-track">*</span>
          </label>
          <select
            id="teamSize"
            required
            value={form.teamSize}
            onChange={(e) => update("teamSize", e.target.value)}
            className={selectClass}
          >
            <option value="">Select team size</option>
            <option value="under-10">Under 10</option>
            <option value="10-25">10–25 athletes</option>
            <option value="26-50">26–50 athletes</option>
            <option value="51-100">51–100 athletes</option>
            <option value="100-plus">More than 100</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="season" className={labelClass}>
          Expected Season
        </label>
        <select
          id="season"
          value={form.season}
          onChange={(e) => update("season", e.target.value)}
          className={selectClass}
        >
          <option value="">Select season</option>
          <option value="spring-2027">Spring 2027 (Launch season)</option>
          <option value="fall-2027">Fall 2027</option>
          <option value="spring-2028">Spring 2028</option>
          <option value="other">Other / Ongoing</option>
        </select>
      </div>

      <div>
        <label htmlFor="customization" className={labelClass}>
          Customization Needs
        </label>
        <textarea
          id="customization"
          rows={3}
          value={form.customization}
          onChange={(e) => update("customization", e.target.value)}
          placeholder="e.g. School colors (red/white), logo on outer surface, specific sizing breakdown for the roster…"
          className={`${fieldClass} resize-none`}
        />
      </div>

      <div className="border-t border-cinder/10 pt-6">
        <p className={`${labelClass} mb-5`}>Contact Info</p>
        <div className="grid sm:grid-cols-2 gap-6">
          <div>
            <label htmlFor="contactName" className={labelClass}>
              Your Name <span className="text-track">*</span>
            </label>
            <input
              id="contactName"
              type="text"
              required
              value={form.contactName}
              onChange={(e) => update("contactName", e.target.value)}
              placeholder="Coach Smith"
              className={fieldClass}
            />
          </div>

          <div>
            <label htmlFor="email" className={labelClass}>
              Email <span className="text-track">*</span>
            </label>
            <input
              id="email"
              type="email"
              required
              value={form.email}
              onChange={(e) => update("email", e.target.value)}
              placeholder="coach@school.edu"
              className={fieldClass}
            />
          </div>
        </div>

        <div className="mt-6">
          <label htmlFor="phone" className={labelClass}>
            Phone <span className="text-steel/50 normal-case tracking-normal font-normal">(optional)</span>
          </label>
          <input
            id="phone"
            type="tel"
            value={form.phone}
            onChange={(e) => update("phone", e.target.value)}
            placeholder="(608) 555-0100"
            className={fieldClass}
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="w-full sm:w-auto px-10 py-4 bg-track text-chalk text-sm font-medium uppercase tracking-widest hover:bg-track/90 disabled:opacity-60 transition-colors"
      >
        {submitting ? "Sending…" : "Submit Request"}
      </button>

      <p className="text-xs text-steel/60">
        We respond within 24 hours on business days.
      </p>
    </form>
  );
}
