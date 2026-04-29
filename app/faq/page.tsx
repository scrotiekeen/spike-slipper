import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Common questions about Spike Slipper — shipping, sizing, durability, cleaning, returns, and bulk pricing.",
};

const faqs = [
  {
    category: "Launch & Availability",
    items: [
      {
        q: "When does Spike Slipper ship?",
        a: "Spring 2027. We're in final material testing and manufacturing setup now. Join the waitlist and you'll be the first to know when orders open — and you'll get early-access pricing.",
      },
      {
        q: "Where can I buy Spike Slipper?",
        a: "At launch, directly through this site. We're exploring select retail partnerships for Fall 2027 and beyond. Sign up for the waitlist to stay updated.",
      },
    ],
  },
  {
    category: "Sizing",
    items: [
      {
        q: "What sizes do you offer?",
        a: "Spike Slipper will be available in sizes covering youth, men's, and women's track spikes — from youth size 4 through men's 15. Exact size chart published pre-launch. For team orders, you can specify your exact roster sizing breakdown.",
      },
      {
        q: "Will it fit my specific spike brand and model?",
        a: "Yes. The inner layer is designed to conform to standard track spike plate geometry across all major brands — Nike, Adidas, New Balance, ASICS, Brooks, and others. If you have an unusual plate shape, reach out and we'll verify compatibility.",
      },
    ],
  },
  {
    category: "Durability & Use",
    items: [
      {
        q: "How durable is Spike Slipper?",
        a: "Built for daily team use across a full competitive season. The two-layer material system is engineered to resist surface abrasion, UV degradation, and the repeated stretch-and-release of daily on/off cycles. Full wear-test data published pre-launch.",
      },
      {
        q: "How do I clean it?",
        a: "Wipe down with a damp cloth after use. The outer material resists dirt and rubber transfer. For deeper cleaning, rinse under cold water and air dry. Do not machine wash or use harsh solvents.",
      },
    ],
  },
  {
    category: "Orders & Returns",
    items: [
      {
        q: "What's your return policy?",
        a: "Once we launch, we offer a 30-day return window on all orders — unused product in original condition. For team/bulk orders, returns are handled case-by-case. Contact us within 30 days of delivery and we'll make it right.",
      },
      {
        q: "What are the bulk pricing tiers?",
        a: "Volume pricing kicks in at 10+ units. The more you order, the less you pay per pair. Exact tier pricing will be confirmed at launch. Institutional buyers can request a quote now — we'll honor quoted pricing for 30 days from inquiry.",
      },
    ],
  },
];

export default function FaqPage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section className="bg-cinder text-chalk py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs uppercase tracking-[0.3em] text-track mb-6 font-medium">
            FAQ
          </p>
          <div className="mb-4 w-12 h-[3px] bg-track" aria-hidden="true" />
          <h1 className="font-display font-bold text-5xl sm:text-6xl leading-[0.95] tracking-tight uppercase">
            Common Questions
          </h1>
        </div>
      </section>

      {/* ── FAQ Content ──────────────────────────────────────────── */}
      <section className="bg-infield py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-14">
            {faqs.map((group) => (
              <div key={group.category}>
                <h2 className="text-xs uppercase tracking-[0.3em] text-track font-medium mb-8 pb-4 border-b border-cinder/10">
                  {group.category}
                </h2>
                <div className="space-y-8">
                  {group.items.map((item) => (
                    <div key={item.q} className="grid md:grid-cols-[2fr_3fr] gap-6 md:gap-12">
                      <div>
                        <h3 className="font-display font-bold text-base md:text-lg uppercase tracking-tight text-cinder leading-tight">
                          {item.q}
                        </h3>
                      </div>
                      <div>
                        <p className="text-steel text-sm md:text-base leading-relaxed">{item.a}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 p-8 bg-chalk border border-cinder/10">
            <p className="text-xs uppercase tracking-widest text-track mb-3 font-medium">
              Still have questions?
            </p>
            <p className="text-steel text-sm leading-relaxed mb-5">
              Reach out directly — Evan and Alex answer their own email.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-widest text-track hover:gap-3 transition-all"
            >
              Contact us →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
