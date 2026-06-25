"use client";

import Image from "next/image";
import { Brand } from "../data/brands";
import { track } from "@vercel/analytics";

interface BrandCardProps {
  brand: Brand;
  gclidValue?: string;
  rank?: number;
}

declare global {
  interface Window {
    gtag_report_conversion?: (url: string) => void;
  }
}

export default function BrandCard({ brand, gclidValue, rank }: BrandCardProps) {
  const buildUrl = (url: string, gclid?: string) => {
    if (!gclid) return url;
    return `${url}${gclid}`;
  };

  const finalUrl = buildUrl(brand.url, gclidValue);

  const handleCardClick = () => {
    track("Brand Click", { brand: brand.name });

    if (typeof window !== "undefined" && window.gtag_report_conversion) {
      window.gtag_report_conversion(finalUrl);
    } else {
      window.open(finalUrl, "_blank");
    }
  };

  const getRankStyle = (rank?: number) => {
    if (rank === 1) return { label: "1ST PLACE", color: "from-[#fff7ad] to-[#ffd700]", text: "text-[#15052d]" };
    if (rank === 2) return { label: "2ND PLACE", color: "from-[#ffffff] to-[#c0c0c0]", text: "text-[#15052d]" };
    if (rank === 3) return { label: "3RD PLACE", color: "from-[#cd7f32] to-[#8b4513]", text: "text-white" };
    return null;
  };

  const rankInfo = getRankStyle(rank);

  return (
    <div 
      className="casino-gradient gold-border purple-glow relative flex flex-col overflow-hidden rounded-3xl p-8 transition-all hover:translate-y-[-4px] md:flex-row md:items-center"
      onClick={handleCardClick}
    >
      {/* Rank Badge */}
      {rankInfo && (
        <div className={`absolute left-0 top-0 rounded-br-2xl bg-gradient-to-r ${rankInfo.color} px-5 py-2 text-[10px] font-black uppercase tracking-widest ${rankInfo.text}`}>
          {rankInfo.label}
        </div>
      )}

      {/* Left Column: Logo + Rating */}
      <div className="flex flex-col items-center justify-center border-white/5 pb-8 md:w-1/4 md:border-r md:pb-0 md:pr-8">
        <div className="relative mb-6 h-20 w-40 transition-transform hover:scale-110">
          <Image
            src={brand.logo}
            alt={`${brand.name} logo`}
            fill
            className="object-contain"
          />
        </div>
        <div className="flex flex-col items-center">
          <div className="mb-1 flex items-baseline gap-1">
            <span className="text-4xl font-black text-white">{brand.rating.toFixed(1)}</span>
            <span className="text-xs font-bold text-white/40">/10</span>
          </div>
          <div className="flex gap-1 text-[#ffd700]">
            {[...Array(5)].map((_, i) => (
              <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={i < Math.floor(brand.rating / 2) ? "currentColor" : "none"} stroke="currentColor" strokeWidth={2} className="h-4 w-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
              </svg>
            ))}
          </div>
          <span className="mt-2 text-[9px] font-black uppercase tracking-[0.2em] text-white/30">{brand.votes.toLocaleString()} USER VOTES</span>
        </div>
      </div>

      {/* Middle Column: Bonus Details */}
      <div className="flex flex-1 flex-col justify-center py-8 text-center md:px-10 md:py-0 md:text-left">
        <div className="mb-2 flex items-center justify-center gap-2 md:justify-start">
          <span className="h-1 w-8 rounded-full bg-[#ffd700]" />
          <h3 className="text-xs font-black uppercase tracking-[0.3em] text-[#ffd700]">Exclusive Welcome Offer</h3>
        </div>
        <p className="text-2xl font-black leading-tight text-white md:text-4xl">
          {brand.bonus}
        </p>
        <div className="mt-4 flex flex-wrap justify-center gap-3 md:justify-start">
          <span className="rounded-md bg-white/5 px-3 py-1 text-[10px] font-bold text-white/60">Fast Payouts</span>
          <span className="rounded-md bg-white/5 px-3 py-1 text-[10px] font-bold text-white/60">UKGC Licensed</span>
          <span className="rounded-md bg-white/5 px-3 py-1 text-[10px] font-bold text-white/60">Mobile Ready</span>
        </div>
      </div>

      {/* Right Column: CTA */}
      <div className="flex flex-col items-center justify-center md:w-1/4">
        <button 
          className="metallic-button shimmer-effect w-full rounded-2xl py-5 text-xl font-black uppercase tracking-tighter text-[#15052d] transition-all hover:scale-105 active:scale-95"
          onClick={(e) => {
            e.stopPropagation();
            handleCardClick();
          }}
        >
          Claim Now
        </button>
        <p className="mt-3 text-[10px] font-bold text-white/30 uppercase tracking-widest">T&Cs Apply | 18+</p>
      </div>
    </div>
  );
}
