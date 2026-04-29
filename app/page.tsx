import type { Metadata } from "next";
import Link from "next/link";
import WaitlistForm from "@/components/WaitlistForm";

export const metadata: Metadata = {
  title: "Protect Your Spikes. Walk Anywhere.",
};

function ImagePlaceholder({
  label,
  className = "",
}: {
  label: string;
  className?: string;
}) {
  return (
    <div className={`relative bg-cinder/[0.06] overflow-hidden ${className}`}>
      <svg
        className="absolute inset-0 w-full h-full text-cinder/20"
        viewBox="0 0 400 300"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <line x1="0" y1="0" x2="400" y2="300" stroke="currentColor" strokeWidth="1" />
        <line x1="400" y1="0" x2="0" y2="300" stroke="currentColor" strokeWidth="1" />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-1 p-4">
        <span className="text-[10px] uppercase tracking-[0.2em] text-steel/70 text-center leading-loose whitespace-pre-line">
          {label}
        </span>
      </div>
    </div>
  );
}

const steps = [
  {
    n: "01",
    heading: "Slip It On",
    body: "Stretch the cover over your spike shoe in seconds. The proprietary material conforms to any spike plate geometry.",
  },
  {
    n: "02",
    heading: "Walk Anywhere",
    body: "Gym floors, hallways, parking lots, bleachers, turf. Your pins stay protected. Floors stay unmarked.",
  },
  {
    n: "03",
    heading: "Slip It Off",
    body: "At the start line, pull-tab removal is faster than unlacing. Back to full performance in under five seconds.",
  },
];

const specs = [
  {
    category: "Spike Protection",
    stat: "2-layer",
    detail:
      "Proprietary compound absorbs impact on pin tips — no bending, no blunting, no cracking.",
  },
  {
    category: "Floor Protection",
    stat: "Zero marks",
    detail:
      "Non-marring outer surface meets gym floor standards coaches and facility managers require.",
  },
  {
    category: "Injury Prevention",
    stat: "Grip-rated",
    detail:
      "Textured sole maintains safe traction on all surfaces. No slip. No trip. No ankle-roll on stairs.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section className="bg-cinder text-chalk min-h-[92vh] flex flex-col justify-center relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <p className="text-xs uppercase tracking-[0.3em] text-track mb-6 font-medium">
            Coming Spring 2027
          </p>

          <div className="mb-4 w-12 h-[3px] bg-track" aria-hidden="true" />

          <h1 className="font-display font-bold text-5xl sm:text-7xl lg:text-[5.5rem] leading-[0.95] tracking-tight uppercase mb-8 max-w-3xl">
            Protect
            <br />
            Your Spikes.
            <br />
            <span className="text-track">Walk Anywhere.</span>
          </h1>

          <p className="text-chalk/60 text-lg sm:text-xl max-w-xl mb-10 leading-relaxed">
            The slip-on protective cover for track &amp; field spike shoes. Designed
            by distance runners who got tired of choosing between their pins and the
            floor.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#waitlist"
              className="inline-flex items-center justify-center px-8 py-4 bg-track text-chalk text-sm font-medium uppercase tracking-widest hover:bg-track/90 transition-colors"
            >
              Join the Waitlist
            </a>
            <Link
              href="/teams"
              className="inline-flex items-center justify-center px-8 py-4 border border-chalk/30 text-chalk text-sm font-medium uppercase tracking-widest hover:border-chalk/70 transition-colors"
            >
              For Teams &amp; Programs →
            </Link>
          </div>

          <div className="mt-16 grid grid-cols-3 gap-6 max-w-sm border-t border-chalk/10 pt-10">
            {(
              [
                ["$15–$40", "vs. $40–$80 competitors"],
                ["2-layer", "material system"],
                ["2027", "spring launch"],
              ] as [string, string][]
            ).map(([stat, label]) => (
              <div key={stat}>
                <p className="font-display font-bold text-2xl sm:text-3xl text-chalk">
                  {stat}
                </p>
                <p className="text-[10px] uppercase tracking-widest text-chalk/40 mt-0.5 leading-snug">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Problem Statement ────────────────────────────────────── */}
      <section className="bg-infield py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs uppercase tracking-[0.3em] text-track mb-8 font-medium">
            The Problem
          </p>

          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div>
              <h2 className="font-display font-bold text-4xl md:text-5xl leading-tight tracking-tight uppercase mb-8">
                Spike pins
                <br />
                aren&apos;t made for
                <br />
                parking lots.
              </h2>

              <p className="text-steel text-base leading-relaxed mb-6 max-w-md">
                Every track athlete knows the moment: you finish a race, walk back to
                the tent, cross a gym floor, or climb into a car — and you&apos;re
                either wrecking your pins on concrete or tiptoe-walking in a way that
                looks absurd.
              </p>
              <p className="text-steel text-base leading-relaxed max-w-md">
                No good solution existed. You either babied the shoes, bought a cheap
                cover that fell apart, or paid $70 for a competitor product with half
                the durability.
              </p>
            </div>

            <div className="space-y-5">
              {[
                {
                  heading: "Pin damage",
                  body: "Hard surfaces blunt and bend spike pins. Replacements add up. Performance drops.",
                },
                {
                  heading: "Floor damage",
                  body: "Spike marks on gym floors prompt bans. Athletes get kicked out of venues before their event.",
                },
                {
                  heading: "Injury risk",
                  body: "Walking on spike pins off-track is a fall waiting to happen — especially on stairs and wet surfaces.",
                },
              ].map((item, i) => (
                <div
                  key={item.heading}
                  className="flex gap-5 p-5 bg-chalk/50 border-l-[3px] border-track"
                >
                  <span className="font-display font-bold text-3xl text-track/30 leading-none mt-1 select-none">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-display font-bold text-sm uppercase tracking-wide mb-1.5">
                      {item.heading}
                    </h3>
                    <p className="text-sm text-steel leading-relaxed">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── How It Works ─────────────────────────────────────────── */}
      <section id="how-it-works" className="bg-cinder text-chalk py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs uppercase tracking-[0.3em] text-track mb-12 font-medium">
            How It Works
          </p>

          <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-chalk/10 border border-chalk/10">
            {steps.map((step) => (
              <div
                key={step.n}
                className="p-8 md:p-10 flex flex-col gap-6"
              >
                <span className="font-display font-bold text-6xl md:text-7xl text-track leading-none">
                  {step.n}
                </span>
                <div>
                  <h3 className="font-display font-bold text-lg uppercase tracking-wide mb-3 text-chalk">
                    {step.heading}
                  </h3>
                  <p className="text-chalk/55 text-sm leading-relaxed">
                    {step.body}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <ImagePlaceholder
              label={
                "Prototype on athlete — multiple surfaces\n(photography scheduled pre-launch)"
              }
              className="w-full aspect-video md:aspect-[21/7]"
            />
          </div>
        </div>
      </section>

      {/* ── Founders ─────────────────────────────────────────────── */}
      <section className="bg-infield py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-track mb-8 font-medium">
                Built by Athletes
              </p>
              <h2 className="font-display font-bold text-4xl md:text-5xl leading-tight tracking-tight uppercase mb-6">
                We built the
                <br />
                thing we needed.
              </h2>
              <blockquote className="border-l-[3px] border-track pl-5 mb-8 italic text-steel text-lg leading-relaxed">
                &ldquo;We were always the guys tiptoe-walking across the gym in our
                spikes. There had to be something better — so we built it.&rdquo;
              </blockquote>
              <p className="text-steel text-base leading-relaxed mb-6">
                Evan and Alex Peterson are twin brothers from Wisconsin, both
                competitive distance runners. They designed Spike Slipper to solve a
                problem every track athlete experiences and no one had adequately fixed.
              </p>
              <Link
                href="/founders"
                className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-widest text-track hover:gap-3 transition-all"
              >
                Read the full story →
              </Link>
            </div>

            <div className="relative">
              <ImagePlaceholder
                label={
                  "Evan & Alex Peterson\nWisconsin — at the track\n(portrait photography TK)"
                }
                className="w-full aspect-[4/5]"
              />
              <div className="bg-cinder text-chalk px-5 py-4">
                <p className="font-display font-bold text-sm uppercase tracking-wide">
                  Evan &amp; Alex Peterson
                </p>
                <p className="text-xs text-chalk/50 mt-1 uppercase tracking-widest">
                  Co-Founders · Distance Runners · Wisconsin
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Durability & Safety ──────────────────────────────────── */}
      <section id="durability" className="bg-cinder text-chalk py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs uppercase tracking-[0.3em] text-track mb-4 font-medium">
            Durability &amp; Safety
          </p>
          <h2 className="font-display font-bold text-3xl md:text-4xl leading-tight tracking-tight uppercase mb-12 max-w-lg">
            Engineered for the wear —
            <br />
            not just the race.
          </h2>

          <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-chalk/10 border border-chalk/10">
            {specs.map((spec) => (
              <div key={spec.category} className="p-8">
                <p className="text-xs uppercase tracking-[0.2em] text-chalk/40 mb-4">
                  {spec.category}
                </p>
                <p className="font-display font-bold text-3xl text-track mb-4">
                  {spec.stat}
                </p>
                <p className="text-sm text-chalk/55 leading-relaxed">{spec.detail}</p>
              </div>
            ))}
          </div>

          <p className="mt-8 text-xs text-chalk/30 uppercase tracking-widest">
            Full wear-test data published pre-launch — Spring 2027
          </p>
        </div>
      </section>

      {/* ── Waitlist ─────────────────────────────────────────────── */}
      <section
        id="waitlist"
        className="bg-cinder text-chalk py-20 md:py-28 border-t border-chalk/10"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-track mb-6 font-medium">
            Spring 2027
          </p>
          <h2 className="font-display font-bold text-4xl md:text-6xl leading-tight tracking-tight uppercase mb-4">
            Be First.
          </h2>
          <p className="text-chalk/55 text-base md:text-lg mb-10 max-w-md mx-auto leading-relaxed">
            Get early-access pricing and launch updates. We&apos;ll email you when
            Spike Slipper is ready to ship.
          </p>
          <WaitlistForm />
        </div>
      </section>

      {/* ── Teams CTA ────────────────────────────────────────────── */}
      <section className="bg-track text-chalk py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-chalk/60 mb-4 font-medium">
                Institutional Sales
              </p>
              <h2 className="font-display font-bold text-3xl md:text-4xl leading-tight tracking-tight uppercase mb-3">
                For Coaches.
                <br className="md:hidden" /> For Programs.
              </h2>
              <p className="text-chalk/75 text-base max-w-md leading-relaxed">
                Volume pricing tiers, school color customization, and team logo
                branding. Purpose-built for athletic programs that outfit entire rosters.
              </p>
            </div>
            <div className="flex-shrink-0">
              <Link
                href="/teams"
                className="inline-flex items-center justify-center px-8 py-4 bg-chalk text-track text-sm font-medium uppercase tracking-widest hover:bg-chalk/90 transition-colors"
              >
                Request a Team Quote →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
