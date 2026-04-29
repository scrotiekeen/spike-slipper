import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Story",
  description:
    "Spike Slipper was built by twin brothers Evan and Alex Peterson — competitive distance runners from Wisconsin who got tired of choosing between their pins and the floor.",
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
      <div className="absolute inset-0 flex items-center justify-center p-4">
        <span className="text-[10px] uppercase tracking-[0.2em] text-steel/70 text-center leading-loose whitespace-pre-line">
          {label}
        </span>
      </div>
    </div>
  );
}

export default function FoundersPage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section className="bg-cinder text-chalk py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs uppercase tracking-[0.3em] text-track mb-6 font-medium">
            Our Story
          </p>
          <div className="mb-4 w-12 h-[3px] bg-track" aria-hidden="true" />
          <h1 className="font-display font-bold text-5xl sm:text-6xl lg:text-7xl leading-[0.95] tracking-tight uppercase mb-6 max-w-2xl">
            Built by athletes.<br />
            <span className="text-track">For athletes.</span>
          </h1>
          <p className="text-chalk/60 text-lg max-w-xl leading-relaxed">
            Evan and Alex Peterson are twin brothers from Wisconsin, both competitive
            distance runners. They built Spike Slipper because the problem it solves
            was one they lived with every season.
          </p>
        </div>
      </section>

      {/* ── The Moment ───────────────────────────────────────────── */}
      <section className="bg-infield py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-track mb-8 font-medium">
                The Moment
              </p>
              <h2 className="font-display font-bold text-3xl md:text-4xl leading-tight tracking-tight uppercase mb-8">
                Every track athlete<br />knows the walk.
              </h2>
              <p className="text-steel text-base leading-relaxed mb-6">
                You&apos;ve done it. Finished a race, walked back across a gym floor with
                your spikes on, felt that slow-motion dread of every step marking the
                floor — or watched a pin bend on a parking lot seam.
              </p>
              <p className="text-steel text-base leading-relaxed mb-6">
                For Evan and Alex Peterson, that moment happened enough times that
                it stopped being a nuisance and started being an engineering problem.
                So they sat down and solved it.
              </p>
              <p className="text-steel text-base leading-relaxed">
                The result is Spike Slipper: two layers of purpose-engineered material,
                a design that actually stays on during a full warmup walk, and a
                price point that makes sense for athletes and programs alike.
              </p>
            </div>

            <ImagePlaceholder
              label={"Evan & Alex at practice\nWisconsin — Track season\n(photography TK)"}
              className="w-full aspect-[4/5]"
            />
          </div>
        </div>
      </section>

      {/* ── The Build ────────────────────────────────────────────── */}
      <section className="bg-cinder text-chalk py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            <ImagePlaceholder
              label={"Early prototype\nMaterial testing\n(photography TK)"}
              className="w-full aspect-video order-2 md:order-1"
            />

            <div className="order-1 md:order-2">
              <p className="text-xs uppercase tracking-[0.3em] text-track mb-8 font-medium">
                The Build
              </p>
              <h2 className="font-display font-bold text-3xl md:text-4xl leading-tight tracking-tight uppercase mb-8">
                Two layers. One<br />real solution.
              </h2>
              <p className="text-chalk/60 text-base leading-relaxed mb-6">
                The existing products either fall off mid-walk, wear out after a
                season, or cost more than the spikes they&apos;re protecting. Evan and
                Alex tested every competitor product they could find. Then they
                designed something from scratch.
              </p>
              <p className="text-chalk/60 text-base leading-relaxed mb-6">
                The Spike Slipper uses a proprietary two-layer compound: an inner
                layer engineered to conform to spike plate geometry and hold securely,
                and an outer layer that protects pin tips and leaves zero marks on
                any surface.
              </p>
              <p className="text-chalk/60 text-base leading-relaxed">
                At $15–$40, it lands half the price of the competitive field — without
                compromising the only thing that matters: durability through a full
                season of hard use.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Credentials ──────────────────────────────────────────── */}
      <section className="bg-infield py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs uppercase tracking-[0.3em] text-track mb-12 font-medium">
            The Founders
          </p>

          <div className="grid md:grid-cols-2 gap-10">
            {[
              {
                name: "Evan Peterson",
                role: "Co-Founder",
                bio: "Competitive distance runner. Focused on product engineering, material sourcing, and manufacturing partnerships. Wisconsin native, grew up running cross country and track at the high school and collegiate level.",
              },
              {
                name: "Alex Peterson",
                role: "Co-Founder",
                bio: "Competitive distance runner. Focused on sales, institutional relationships, and brand strategy. Wisconsin native, same background as Evan — same problem, same drive to fix it.",
              },
            ].map((founder) => (
              <div
                key={founder.name}
                className="p-8 border border-cinder/10 bg-chalk"
              >
                <ImagePlaceholder
                  label={`${founder.name}\n(portrait photography TK)`}
                  className="w-full aspect-video mb-6"
                />
                <p className="text-xs uppercase tracking-widest text-track mb-2 font-medium">
                  {founder.role}
                </p>
                <h3 className="font-display font-bold text-2xl uppercase tracking-tight mb-4">
                  {founder.name}
                </h3>
                <p className="text-steel text-sm leading-relaxed">{founder.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────── */}
      <section className="bg-track text-chalk py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <h2 className="font-display font-bold text-2xl md:text-3xl uppercase tracking-tight mb-2">
              Ready to get Spike Slipper for your team?
            </h2>
            <p className="text-chalk/70 text-sm">
              Launching Spring 2027. Join the waitlist or request a team quote.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 flex-shrink-0">
            <a
              href="/#waitlist"
              className="inline-flex items-center justify-center px-6 py-3 bg-chalk text-track text-xs font-medium uppercase tracking-widest hover:bg-chalk/90 transition-colors"
            >
              Join Waitlist
            </a>
            <Link
              href="/teams"
              className="inline-flex items-center justify-center px-6 py-3 border border-chalk/40 text-chalk text-xs font-medium uppercase tracking-widest hover:border-chalk/80 transition-colors"
            >
              For Teams →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
