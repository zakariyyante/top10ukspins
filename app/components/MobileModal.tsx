"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Brand } from "../data/brands";
import BrandCard from "./BrandCard";
import { useSearchParams } from "next/navigation";

interface MobileModalProps {
  brands: Brand[];
  gclidValue?: string;
}

export default function MobileModal({ brands, gclidValue }: MobileModalProps) {
  const searchParams = useSearchParams();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const gclid = searchParams.get("gclid");
    const hasMobileBrands = brands.some(b => b.isMobile);
    
    if (gclid && hasMobileBrands) {
      setTimeout(() => {
        setIsOpen(true);
        document.body.style.overflow = "hidden";
      }, 0);
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [searchParams, brands]);

  if (!isOpen) return null;

  const mobileBrands = brands.filter(b => b.isMobile);

  return (
    <div className="fixed inset-0 z-[100] flex flex-col bg-[#0a0118] roulette-bg">
      {/* Modal Header */}
      <div className="flex items-center justify-between border-b border-white/10 p-6 bg-[#15052d]">
        <div className="relative h-10 w-40">
          <Image
            src="/logo.png"
            alt="Top10UKSpins"
            fill
            className="object-contain"
          />
        </div>
        <button 
          onClick={() => {
            setIsOpen(false);
            document.body.style.overflow = "unset";
          }}
          className="rounded-full bg-white/10 p-2 text-white transition-all hover:bg-white/20"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-6 w-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* Modal Content */}
      <div className="flex-1 overflow-y-auto p-6">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-black tracking-tighter text-white uppercase">
            <span className="gold-text">Exclusive</span> Mobile Offers
          </h2>
          <p className="mt-2 text-sm font-bold text-white/40 uppercase tracking-widest">Hand-picked for UK Players</p>
        </div>

        <div className="grid gap-6">
          {mobileBrands.map((brand, index) => (
            <BrandCard 
              key={brand.id} 
              brand={brand} 
              gclidValue={gclidValue} 
              rank={index + 1}
            />
          ))}
        </div>

        <div className="mt-12 rounded-3xl bg-white/5 p-6 text-center">
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-white/20 leading-relaxed">
            18+ | Please gamble responsibly | BeGambleAware.org
          </p>
        </div>
      </div>
    </div>
  );
}
