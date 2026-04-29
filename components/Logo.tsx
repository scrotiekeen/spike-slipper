import Link from "next/link";

interface LogoProps {
  variant?: "dark" | "light";
  className?: string;
}

export default function Logo({ variant = "dark", className = "" }: LogoProps) {
  const textColor = variant === "light" ? "text-chalk" : "text-cinder";

  return (
    <Link
      href="/"
      className={`inline-flex flex-col leading-none group ${className}`}
      aria-label="Spike Slipper — home"
    >
      <span
        className={`font-display font-bold text-sm tracking-[0.15em] uppercase ${textColor}`}
      >
        Spike Slipper
      </span>
      <span className="block h-[2px] bg-track w-full mt-1 group-hover:w-[110%] transition-all duration-200" />
    </Link>
  );
}
