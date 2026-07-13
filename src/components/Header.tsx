"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { btnPress, primaryBtn } from "@/lib/theme";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Programs", href: "/programs" },
  { label: "Store", href: "/store" },
  { label: "Admission", href: "/admission" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  const goToAdmission = () => {
    setMenuOpen(false);
    router.push("/admission");
  };

  return (
    <motion.div
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="w-full bg-white border-b border-gray-200 sticky top-0 z-50"
    >
      <header className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between gap-6">
        <Link href="/" className="flex items-center flex-shrink-0" onClick={() => setMenuOpen(false)}>
          <img
            src="/images/logo-nav.png"
            alt="WiserKids"
            className="h-8 sm:h-10 w-auto object-contain"
          />
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-bold transition-colors ${
                  isActive ? "text-[#192A4B]" : "text-[#606F72] hover:text-[#192A4B]"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <motion.button
          {...btnPress}
          onClick={() => router.push("/admission")}
          className={`hidden md:inline-flex ${primaryBtn} text-xs sm:text-sm px-4 sm:px-6 py-2 sm:py-2.5 flex-shrink-0`}
        >
          Start Your Wiser Journey
        </motion.button>

        {/* Mobile hamburger toggle */}
        <button
          type="button"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          className="md:hidden flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
        >
          <div className="w-5 flex flex-col gap-[5px]">
            <motion.span
              animate={menuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.2 }}
              className="block h-0.5 w-full bg-[#192A4B] rounded-full origin-center"
            />
            <motion.span
              animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.15 }}
              className="block h-0.5 w-full bg-[#192A4B] rounded-full"
            />
            <motion.span
              animate={menuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.2 }}
              className="block h-0.5 w-full bg-[#192A4B] rounded-full origin-center"
            />
          </div>
        </button>
      </header>

      {/* Mobile menu panel */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden overflow-hidden border-t border-gray-100"
          >
            <nav className="px-4 sm:px-6 py-4 flex flex-col gap-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className={`text-sm font-bold py-3 px-3 rounded-lg transition-colors ${
                      isActive ? "text-[#192A4B] bg-[#192A4B]/5" : "text-[#606F72] hover:text-[#192A4B] hover:bg-gray-50"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <button
                onClick={goToAdmission}
                className={`${primaryBtn} text-sm px-6 py-3 mt-2 w-full`}
              >
                Start Your Wiser Journey
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
