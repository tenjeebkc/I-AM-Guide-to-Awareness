"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/learn", label: "Understand" },
  { href: "/questions", label: "Questions" },
  { href: "/about", label: "About" },
];

export function SiteNav() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="border-b border-black/5">
      <nav className="relative mx-auto max-w-6xl px-5 py-4 sm:px-6 sm:py-6">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="text-lg font-semibold tracking-tight sm:text-xl"
          >
            I AM
          </Link>

          <div className="hidden items-center gap-8 text-sm text-black/60 md:flex">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={
                  pathname === link.href
                    ? "text-black"
                    : "transition hover:text-black"
                }
              >
                {link.label}
              </Link>
            ))}
          </div>

          <button
            type="button"
            className="flex h-11 w-11 items-center justify-center rounded-full text-black/60 transition hover:bg-black/5 hover:text-black md:hidden"
            aria-label={
              isOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsOpen((open) => !open)}
          >
            <span className="relative block h-5.5 w-5.5">
              <Menu
                size={22}
                strokeWidth={1.8}
                className={`absolute inset-0 transition-all duration-200 ease-out motion-reduce:transition-none ${
                  isOpen
                    ? "rotate-90 scale-90 opacity-0"
                    : "rotate-0 scale-100 opacity-100"
                }`}
              />

              <X
                size={22}
                strokeWidth={1.8}
                className={`absolute inset-0 transition-all duration-200 ease-out motion-reduce:transition-none ${
                  isOpen
                    ? "rotate-0 scale-100 opacity-100"
                    : "-rotate-90 scale-90 opacity-0"
                }`}
              />
            </span>
          </button>
        </div>

        <div
          id="mobile-navigation"
          className={`absolute right-4 top-full z-50 flex w-[min(14rem,calc(100vw-2rem))] origin-top-right flex-col gap-1 rounded-xl border border-black/5 bg-[#f7f7f3] p-2 shadow-lg transition-[opacity,transform,visibility] ease-out motion-reduce:transition-none sm:right-6 md:hidden ${
            isOpen
              ? "visible translate-y-2 scale-100 opacity-100 duration-300"
              : "pointer-events-none invisible -translate-y-1 scale-[0.98] opacity-0 duration-200"
          }`}
          aria-hidden={!isOpen}
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              tabIndex={isOpen ? 0 : -1}
              className={`rounded-lg px-3 py-3 text-sm transition-colors duration-150 ${
                pathname === link.href
                  ? "text-black"
                  : "text-black/60 hover:text-black"
              }`}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}