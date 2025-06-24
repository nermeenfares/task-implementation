"use client";

import { navLinks } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-transparent relative ">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-end sm:justify-center items-center">
        <ul className="hidden md:flex justify-center gap-8 text-[16px] font-medium">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className={`${
                  pathname === link.href
                    ? "text-[#373737] font-normal"
                    : "text-[#9a9a9a] font-medium"
                } hover:text-black transition-colors duration-200 text-[16px]`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-[#373737]"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {menuOpen && (
        <ul className="md:hidden flex flex-col gap-4 px-4 pb-4 text-[16px] font-medium">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className={`block ${
                  pathname === link.href
                    ? "text-[#373737] font-normal"
                    : "text-[#9a9a9a] font-medium"
                } hover:text-black transition-colors duration-200`}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
