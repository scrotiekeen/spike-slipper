import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with the Spike Slipper team. Questions about sizing, team orders, partnerships, or the product itself.",
};

export default function ContactPage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section className="bg-cinder text-chalk py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs uppercase tracking-[0.3em] text-track mb-6 font-medium">
            Contact
          </p>
          <div className="mb-4 w-12 h-[3px] bg-track" aria-hidden="true" />
          <h1 className="font-display font-bold text-5xl sm:text-6xl leading-[0.95] tracking-tight uppercase mb-6">
            Get in Touch
          </h1>
          <p className="text-chalk/60 text-lg max-w-md leading-relaxed">
            Evan and Alex answer their own email. If you&apos;re a coach, athletic
            director, or athlete with a question, expect a real reply — not a bot.
          </p>
        </div>
      </section>

      {/* ── Contact Content ──────────────────────────────────────── */}
      <section className="bg-infield py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20">

            {/* Left — Contact Options */}
            <div className="space-y-8">
              <div>
                <h2 className="font-display font-bold text-2xl uppercase tracking-tight mb-6">
                  How can we help?
                </h2>

                <div className="space-y-4">
                  {[
                    {
                      type: "Team or Bulk Orders",
                      desc: "Volume pricing, customization, roster sizing, and institutional inquiry.",
                      cta: "Use the Team Quote Form",
                      href: "/teams",
                    },
                    {
                      type: "Product Questions",
                      desc: "Sizing, compatibility, durability, or anything about how Spike Slipper works.",
                      cta: "Read the FAQ first",
                      href: "/faq",
                    },
                    {
                      type: "Press & Partnerships",
                      desc: "Media inquiries, athlete partnerships, or retail distribution interest.",
                      cta: null,
                      href: null,
                    },
                    {
                      type: "Everything Else",
                      desc: "General questions, feedback, or just want to say you ran a PR.",
                      cta: null,
                      href: null,
                    },
                  ].map((item) => (
                    <div
                      key={item.type}
                      className="p-5 bg-chalk border border-cinder/8"
                    >
                      <h3 className="font-display font-bold text-sm uppercase tracking-wide mb-1.5">
                        {item.type}
                      </h3>
                      <p className="text-sm text-steel leading-relaxed mb-3">{item.desc}</p>
                      {item.cta && item.href && (
                        <Link
                          href={item.href}
                          className="text-xs font-medium uppercase tracking-widest text-track hover:underline"
                        >
                          {item.cta} →
                        </Link>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right — Direct Contact */}
            <div>
              <h2 className="font-display font-bold text-2xl uppercase tracking-tight mb-6">
                Direct contact
              </h2>

              <div className="space-y-6">
                <div className="p-8 bg-cinder text-chalk">
                  <p className="text-xs uppercase tracking-[0.2em] text-chalk/40 mb-4 font-medium">
                    General Inquiries
                  </p>
                  <p className="font-display font-bold text-xl mb-1">
                    hello@spikeslipper.com
                  </p>
                  <p className="text-chalk/50 text-sm">
                    Inbox checked daily. Expect a reply within 24–48 hours.
                  </p>
                </div>

                <div className="p-8 bg-track text-chalk">
                  <p className="text-xs uppercase tracking-[0.2em] text-chalk/60 mb-4 font-medium">
                    Team &amp; Institutional Sales
                  </p>
                  <p className="font-display font-bold text-xl mb-1">
                    teams@spikeslipper.com
                  </p>
                  <p className="text-chalk/75 text-sm mb-5">
                    Or use the dedicated quote form for the fastest response.
                  </p>
                  <Link
                    href="/teams"
                    className="inline-flex items-center justify-center px-5 py-2.5 bg-chalk text-track text-xs font-medium uppercase tracking-widest hover:bg-chalk/90 transition-colors"
                  >
                    Team Quote Form →
                  </Link>
                </div>

                <div className="p-6 border border-cinder/10 bg-chalk">
                  <p className="text-xs uppercase tracking-widest text-steel mb-3 font-medium">
                    Based in
                  </p>
                  <p className="font-display font-bold text-base uppercase tracking-tight">
                    Madison, Wisconsin
                  </p>
                  <p className="text-sm text-steel mt-1">
                    Evan &amp; Alex Peterson — Spike Slipper Co.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
