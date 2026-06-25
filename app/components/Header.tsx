"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-[#0a0118]/90 backdrop-blur-xl">
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <div className="relative h-12 w-48 md:h-14 md:w-56">
            <Image
              src="/logo.png"
              alt="Top10UKSpins"
              fill
              className="object-contain"
              priority
            />
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex lg:items-center lg:gap-10">
          <Link href="/" className="text-sm font-bold uppercase tracking-widest text-white/70 transition-all hover:text-[#ffd700] hover:silver-text">Home</Link>
          <Link href="/#brands" className="text-sm font-bold uppercase tracking-widest text-white/70 transition-all hover:text-[#ffd700] hover:silver-text">Top Brands</Link>
          <Link href="/#guide" className="text-sm font-bold uppercase tracking-widest text-white/70 transition-all hover:text-[#ffd700] hover:silver-text">Guide</Link>
          <Link href="/about" className="text-sm font-bold uppercase tracking-widest text-white/70 transition-all hover:text-[#ffd700] hover:silver-text">About</Link>
          <Link href="/contact" className="text-sm font-bold uppercase tracking-widest text-white/70 transition-all hover:text-[#ffd700] hover:silver-text">Contact</Link>
        </nav>

        {/* CTA in Header */}
        <div className="hidden md:block">
          <Link 
            href="/#brands" 
            className="metallic-button rounded-full px-6 py-2.5 text-xs font-black uppercase tracking-tighter text-[#15052d]"
          >
            Claim Bonus
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="flex h-10 w-10 items-center justify-center text-white lg:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-7 w-7"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"}
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute left-0 top-20 w-full border-b border-white/10 bg-[#15052d] p-6 lg:hidden">
          <nav className="flex flex-col gap-6">
            <Link href="/" className="text-xl font-black uppercase tracking-widest text-white" onClick={() => setIsMenuOpen(false)}>Home</Link>
            <Link href="/#brands" className="text-xl font-black uppercase tracking-widest text-white" onClick={() => setIsMenuOpen(false)}>Top Brands</Link>
            <Link href="/#guide" className="text-xl font-black uppercase tracking-widest text-white" onClick={() => setIsMenuOpen(false)}>Guide</Link>
            <Link href="/about" className="text-xl font-black uppercase tracking-widest text-white" onClick={() => setIsMenuOpen(false)}>About Us</Link>
            <Link href="/contact" className="text-xl font-black uppercase tracking-widest text-white" onClick={() => setIsMenuOpen(false)}>Contact Us</Link>
          </nav>
        </div>
      )}
    </header>
  );
}
