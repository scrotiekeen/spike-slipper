import Link from "next/link";
import Logo from "./Logo";

const links = {
  Product: [
    { href: "/#how-it-works", label: "How It Works" },
    { href: "/#durability", label: "Durability & Safety" },
    { href: "/#waitlist", label: "Join Waitlist" },
  ],
  Programs: [
    { href: "/teams", label: "For Teams" },
    { href: "/teams#pricing", label: "Volume Pricing" },
    { href: "/teams#customize", label: "Custom Orders" },
  ],
  Company: [
    { href: "/founders", label: "Our Story" },
    { href: "/faq", label: "FAQ" },
    { href: "/contact", label: "Contact" },
  ],
};

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-cinder text-chalk/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-14 grid grid-cols-2 md:grid-cols-4 gap-10">
          <div className="col-span-2 md:col-span-1">
            <Logo variant="light" />
            <p className="mt-4 text-sm leading-relaxed text-chalk/50 max-w-[220px]">
              Slip-on protection for track & field spike shoes.{" "}
              <span className="text-chalk/70">Spring 2027.</span>
            </p>
            <p className="mt-3 text-xs text-chalk/40 uppercase tracking-widest">
              Wisconsin-Built
            </p>
          </div>

          {Object.entries(links).map(([section, items]) => (
            <div key={section}>
              <h3 className="text-xs font-medium uppercase tracking-widest text-chalk/40 mb-4">
                {section}
              </h3>
              <ul className="space-y-2.5">
                {items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-chalk/60 hover:text-chalk transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-chalk/10 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-chalk/40">
            &copy; {year} Spike Slipper. All rights reserved.
          </p>
          <p className="text-xs text-chalk/30 uppercase tracking-widest">
            Evan & Alex Peterson · Madison, WI
          </p>
        </div>
      </div>
    </footer>
  );
}
