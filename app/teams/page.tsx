import type { Metadata } from "next";
import TeamsForm from "@/components/TeamsForm";

export const metadata: Metadata = {
  title: "For Teams & Programs",
  description:
    "Volume pricing, team customization, and bulk orders for coaches and athletic programs. Request a quote for your roster.",
};

const tiers = [
  {
    label: "Starter",
    qty: "10–24 units",
    note: "Perfect for sprint groups, jumpers, or a single event team.",
    highlight: false,
  },
  {
    label: "Program",
    qty: "25–99 units",
    note: "Full team coverage. Includes school color customization.",
    highlight: true,
  },
  {
    label: "District",
    qty: "100+ units",
    note: "Multi-team pricing, logo branding, bulk delivery.",
    highlight: false,
  },
];

export default function TeamsPage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section className="bg-cinder text-chalk py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs uppercase tracking-[0.3em] text-track mb-6 font-medium">
            Institutional Sales
          </p>
          <div className="mb-4 w-12 h-[3px] bg-track" aria-hidden="true" />
          <h1 className="font-display font-bold text-5xl sm:text-6xl lg:text-7xl leading-[0.95] tracking-tight uppercase mb-6 max-w-2xl">
            For Coaches.
            <br />
            For Programs.
          </h1>
          <p className="text-chalk/60 text-lg max-w-xl leading-relaxed">
            Outfit your entire roster with Spike Slipper. Volume pricing tiers, school
            color customization, and team logo branding — purpose-built for athletic
            programs that need gear that actually lasts.
          </p>
        </div>
      </section>

      {/* ── Volume Pricing ───────────────────────────────────────── */}
      <section id="pricing" className="bg-infield py-16 md:py-24 border-b border-cinder/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs uppercase tracking-[0.3em] text-track mb-8 font-medium">
            Volume Pricing
          </p>
          <h2 className="font-display font-bold text-3xl md:text-4xl uppercase tracking-tight mb-12">
            The more you order, the less you pay.
          </h2>

          <div className="grid md:grid-cols-3 gap-px bg-cinder/10 border border-cinder/10">
            {tiers.map((tier) => (
              <div
                key={tier.label}
                className={`p-8 md:p-10 ${
                  tier.highlight ? "bg-track text-chalk" : "bg-chalk"
                }`}
              >
                {tier.highlight && (
                  <span className="inline-block text-[10px] uppercase tracking-widest bg-chalk text-track px-2 py-1 mb-4 font-medium">
                    Most Popular
                  </span>
                )}
                <p
                  className={`text-xs uppercase tracking-[0.2em] mb-3 font-medium ${
                    tier.highlight ? "text-chalk/60" : "text-steel"
                  }`}
                >
                  {tier.label}
                </p>
                <p
                  className={`font-display font-bold text-2xl mb-4 ${
                    tier.highlight ? "text-chalk" : "text-cinder"
                  }`}
                >
                  {tier.qty}
                </p>
                <p
                  className={`text-sm leading-relaxed ${
                    tier.highlight ? "text-chalk/75" : "text-steel"
                  }`}
                >
                  {tier.note}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-6 text-xs text-steel uppercase tracking-widest">
            Exact per-unit pricing confirmed at launch — Spring 2027. Quoted pricing
            locked for 30 days.
          </p>
        </div>
      </section>

      {/* ── Customization ────────────────────────────────────────── */}
      <section id="customize" className="bg-infield py-16 md:py-24 border-b border-cinder/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs uppercase tracking-[0.3em] text-track mb-8 font-medium">
            Custom Orders
          </p>
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div>
              <h2 className="font-display font-bold text-3xl md:text-4xl uppercase tracking-tight mb-6">
                Your colors.
                <br />
                Your logo.
                <br />
                Your program.
              </h2>
              <p className="text-steel text-base leading-relaxed mb-8">
                Institutional orders of 25+ units qualify for custom color matching
                and logo application. Send your brand guide and we&apos;ll spec it out.
                Minimum lead time 8 weeks from order confirmation.
              </p>
            </div>
            <div className="space-y-4">
              {[
                ["School color matching", "Outer material dyed to your primary and secondary school colors."],
                ["Logo application", "Screen-printed or heat-transfer logo on the outer surface."],
                ["Custom sizing mix", "Specify the exact size breakdown for your roster — we ship the right quantities."],
                ["Bulk delivery", "Single shipment to the athletic office, or split to multiple locations."],
              ].map(([feature, desc]) => (
                <div key={feature} className="flex gap-4 items-start p-4 bg-chalk border border-cinder/8">
                  <span className="mt-1 w-2 h-2 bg-track flex-shrink-0" aria-hidden="true" />
                  <div>
                    <p className="text-sm font-medium text-cinder mb-0.5">{feature}</p>
                    <p className="text-xs text-steel leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Inquiry Form ─────────────────────────────────────────── */}
      <section className="bg-infield py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs uppercase tracking-[0.3em] text-track mb-6 font-medium">
            Get a Quote
          </p>
          <h2 className="font-display font-bold text-3xl md:text-4xl uppercase tracking-tight mb-3">
            Tell us about your program.
          </h2>
          <p className="text-steel text-base leading-relaxed mb-10">
            Fill out the form below. Evan or Alex will respond within 24 hours with
            pricing, sizing guidance, and customization options.
          </p>

          <TeamsForm />
        </div>
      </section>
    </>
  );
}
