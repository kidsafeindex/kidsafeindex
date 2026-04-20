"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const linkClass = (href: string) =>
  `transition-colors ${
    pathname === href
      ? "text-slate-900 underline decoration-orange-400 underline-offset-4"
      : "text-slate-600 hover:text-slate-900"
  }`;

  return (
    <header className="border-b border-slate-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center">
          <img
            src="/logo.png"
            alt="KidSafe Index"
            className="h-10 w-auto"
           />
        </Link>

        <nav className="flex items-center gap-6 text-sm font-medium">
          <Link href="/" className={linkClass("/")}>
            Home
          </Link>

          <Link href="/about" className={linkClass("/about")}>
            About
          </Link>

          <Link href="/mission" className={linkClass("/mission")}>
            Mission
          </Link>

          <Link href="/methodology" className={linkClass("/methodology")}>
            Methodology
          </Link>

          <Link href="/resources" className={linkClass("/resources")}>
            Resources
          </Link>

          <Link href="/harmful-accounts" className={linkClass("/harmful-accounts")}>
            Warning Signs
          </Link>

          <Link href="/updates"
           className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
          >
            Get Weekly Updates
          </Link>
        </nav>
      </div>
    </header>
  );
}