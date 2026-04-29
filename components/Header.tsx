"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";

const navLinks = [
  { href: "/#how-it-works", label: "How It Works" },
  { href: "/teams", label: "For Teams" },
  { href: "/founders", label: "Founders" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={`sticky top-0 z-40 transition-all duration-200 ${
          scrolled
            ? "bg-infield/95 backdrop-blur-sm border-b border-cinder/10 shadow-sm"
            : "bg-infield border-b border-cinder/10"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Logo />

          <nav className="hidden md:flex items-center gap-7" aria-label="Main navigation">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/teams" && pathname === "/teams" ||
                link.href === "/founders" && pathname === "/founders" ||
                link.href === "/faq" && pathname === "/faq" ||
                link.href === "/contact" && pathname === "/contact";
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-xs font-medium uppercase tracking-widest transition-colors ${
                    isActive
                      ? "text-cinder"
                      : "text-steel hover:text-cinder"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              href="/teams"
              className="ml-1 px-5 py-2 bg-track text-chalk text-xs font-medium uppercase tracking-widest hover:bg-track/90 transition-colors"
            >
              Request Quote
            </Link>
          </nav>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden flex flex-col justify-center gap-[5px] p-2 -mr-1 w-10 h-10"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            <span
              className={`block h-[2px] w-6 bg-cinder origin-center transition-all duration-200 ${
                mobileOpen ? "rotate-45 translate-y-[7px]" : ""
              }`}
            />
            <span
              className={`block h-[2px] bg-cinder transition-all duration-200 ${
                mobileOpen ? "w-0 opacity-0" : "w-6 opacity-100"
              }`}
            />
            <span
              className={`block h-[2px] w-6 bg-cinder origin-center transition-all duration-200 ${
                mobileOpen ? "-rotate-45 -translate-y-[7px]" : ""
              }`}
            />
          </button>
        </div>
      </header>

      {mobileOpen && (
        <div className="fixed inset-0 z-30 bg-cinder md:hidden" aria-modal="true" role="dialog">
          <div className="flex flex-col h-full pt-16">
            <nav className="flex-1 px-6 py-10 flex flex-col gap-1" aria-label="Mobile navigation">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="py-4 text-2xl font-display font-bold text-chalk uppercase tracking-wide border-b border-chalk/10 hover:text-track transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/teams"
                onClick={() => setMobileOpen(false)}
                className="mt-8 px-6 py-4 bg-track text-chalk text-center text-sm font-medium uppercase tracking-widest hover:bg-track/90 transition-colors"
              >
                Request a Quote for Your Team
              </Link>
            </nav>
            <div className="px-6 pb-10 pt-4 border-t border-chalk/10">
              <p className="text-xs text-chalk/40 uppercase tracking-widest">
                Spike Slipper · Spring 2027
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
