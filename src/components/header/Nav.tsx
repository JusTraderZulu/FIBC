"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { NAV } from "@/lib/nav";
import { SITE } from "@/lib/site";
import { cn } from "@/lib/utils";

export default function Nav() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setOpenDropdown(null);
        setMobileMenuOpen(false);
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="sticky top-0 z-50 backdrop-blur-md bg-white/90 border-b border-black/5 shadow-sm">
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute left-2 top-2 z-[60] bg-[hsl(var(--brand))] text-white px-4 py-2 rounded-brand font-semibold shadow-lg">
        Skip to content
      </a>
      <div className="mx-auto max-w-7xl px-3 sm:px-4 lg:px-8 h-16 sm:h-18 flex items-center justify-between">
        {/* Logo - responsive sizing */}
        <Link href="/" className="text-lg sm:text-xl font-bold tracking-tight text-[hsl(var(--brand))] hover:text-[hsl(var(--brand))]/80 transition-colors flex-shrink-0">
          <span className="hidden sm:inline">{SITE.shortName}</span>
          <span className="sm:hidden text-base">FIBC</span>
        </Link>

        {/* Desktop Navigation */}
        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-1 xl:gap-2">
            {NAV.map((item) => {
              const isOpen = openDropdown === item.title;
              return (
                <li key={item.title} className="relative">
                  {item.children ? (
                    <>
                      <button
                        className="px-2 xl:px-4 py-2 rounded-brand text-[hsl(var(--ink))] text-sm xl:text-base font-medium hover:bg-[hsl(var(--brand))]/5 hover:text-[hsl(var(--brand))] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--accent))] transition-all duration-200"
                        aria-expanded={isOpen}
                        aria-haspopup="true"
                        onClick={() => setOpenDropdown(isOpen ? null : item.title)}
                      >
                        {item.title}
                      </button>
                      <div
                        ref={item.title === "Governance" ? menuRef : null}
                        className={cn(
                          "absolute left-0 mt-3 w-[500px] xl:w-[600px] max-w-[95vw] rounded-brand border border-black/5 bg-white shadow-xl ring-1 ring-black/5",
                          isOpen ? "animate-in fade-in-0 zoom-in-95 duration-200" : "hidden"
                        )}
                        role="menu"
                      >
                        <div className="grid grid-cols-2 gap-1 p-4">
                          {item.children.map((c) => (
                            <a
                              key={c.title}
                              className="block rounded-lg p-3 xl:p-4 hover:bg-[hsl(var(--brand))]/5 focus:outline-none focus:ring-2 focus:ring-[hsl(var(--accent))] text-[hsl(var(--ink))] hover:text-[hsl(var(--brand))] transition-all duration-200 group"
                              href={c.href}
                              role="menuitem"
                              onClick={() => setOpenDropdown(null)}
                            >
                              <div className="text-xs xl:text-sm font-semibold group-hover:translate-x-0.5 transition-transform">{c.title}</div>
                            </a>
                          ))}
                        </div>
                      </div>
                    </>
                  ) : (
                    <a className="px-2 xl:px-4 py-2 rounded-brand text-[hsl(var(--ink))] text-sm xl:text-base font-medium hover:bg-[hsl(var(--brand))]/5 hover:text-[hsl(var(--brand))] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--accent))] transition-all duration-200" href={item.href}>
                      <span className="hidden xl:inline">{item.title}</span>
                      <span className="xl:hidden">{item.title.split(' ')[0]}</span>
                    </a>
                  )}
                </li>
              );
            })}
            <li className="ml-2">
              <a
                href="/search"
                className="px-2 xl:px-3 py-2 rounded-brand text-[hsl(var(--ink))] hover:bg-[hsl(var(--brand))]/5 hover:text-[hsl(var(--brand))] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--accent))] transition-all duration-200"
                aria-label="Search"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </a>
            </li>
            <li className="ml-2 xl:ml-4">
              <a
                href="/give"
                className="inline-flex items-center rounded-brand bg-[hsl(var(--accent))] text-black px-4 xl:px-6 py-2 xl:py-2.5 text-sm xl:text-base font-bold shadow-md hover:shadow-lg hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[hsl(var(--accent))]/50 transition-all duration-200"
              >
                Give
              </a>
            </li>
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 rounded-brand text-[hsl(var(--ink))] hover:bg-[hsl(var(--brand))]/5 focus:outline-none focus:ring-2 focus:ring-[hsl(var(--accent))]"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          aria-label="Toggle navigation menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      {/* Mobile Menu - Smooth Slide-in */}
      <div
        className={cn(
          "lg:hidden border-t border-black/5 bg-white shadow-lg overflow-hidden transition-all duration-300 ease-in-out",
          mobileMenuOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="px-4 py-4 space-y-1 max-h-[500px] overflow-y-auto">
          {NAV.map((item) => (
            <div key={item.title}>
              {item.children ? (
                <div>
                  <a 
                    href={item.href} 
                    className="block px-4 py-2.5 text-base font-semibold text-[hsl(var(--ink))] hover:text-[hsl(var(--brand))] hover:bg-[hsl(var(--brand))]/5 rounded-lg transition-colors" 
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.title}
                  </a>
                  <div className="pl-4 space-y-0.5 mt-1 mb-2">
                    {item.children.map((child) => (
                      <a
                        key={child.title}
                        href={child.href}
                        className="block px-4 py-2 text-sm text-[hsl(var(--ink))]/70 hover:text-[hsl(var(--brand))] hover:bg-[hsl(var(--brand))]/5 rounded-lg transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        • {child.title}
                      </a>
                    ))}
                  </div>
                </div>
              ) : (
                <a
                  href={item.href}
                  className="block px-4 py-2.5 text-base font-semibold text-[hsl(var(--ink))] hover:text-[hsl(var(--brand))] hover:bg-[hsl(var(--brand))]/5 rounded-lg transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.title}
                </a>
              )}
            </div>
          ))}
          <div className="pt-3 mt-3 border-t border-black/5 flex gap-2">
            <a
              href="/search"
              className="flex-1 flex items-center justify-center px-4 py-2.5 text-sm font-medium text-[hsl(var(--ink))] hover:text-[hsl(var(--brand))] hover:bg-[hsl(var(--brand))]/5 rounded-lg transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              Search
            </a>
            <a
              href="/give"
              className="flex-1 text-center rounded-lg bg-[hsl(var(--accent))] text-black px-4 py-2.5 text-sm font-bold shadow-md hover:shadow-lg transition-all duration-200"
              onClick={() => setMobileMenuOpen(false)}
            >
              Give
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}



