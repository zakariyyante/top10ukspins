"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Brand } from "../data/brands";
import { useSearchParams } from "next/navigation";
import { track } from "@vercel/analytics";

interface MobileModalProps {
  brands: Brand[];
  gclidValue?: string;
  isMobileDevice?: boolean;
}

const MobileBrandCard = ({ brand, gclidValue, label }: { brand: Brand; gclidValue?: string; label?: string }) => {
  const buildUrl = (url: string, gclid?: string) => {
    if (!gclid) return url;
    return `${url}${gclid}`;
  };

  const finalUrl = buildUrl(brand.url, gclidValue);

  const handleCardClick = (source: string = "mobile_card_body") => {
    track("Unique Brand Click", { 
      brand: brand.name,
      location: "mobile_modal",
      click_source: source 
    });

    if (typeof window !== "undefined" && window.gtag_report_conversion) {
      window.gtag_report_conversion(finalUrl);
    } else {
      window.open(finalUrl, "_blank");
    }
  };

  return (
    <div 
      className="relative flex flex-col overflow-visible rounded-[2rem] bg-[#110625] border border-white/5 p-4 mb-4 shadow-2xl"
      onClick={() => handleCardClick("mobile_card_click")}
    >
      {/* Brand Badge */}
      {label && (
        <div className="absolute -left-1 -top-2.5 rounded-full bg-gradient-to-r from-[#00d2ff] to-[#00a3ff] px-4 py-1.5 text-[9px] font-black uppercase tracking-widest text-white z-20 shadow-lg shadow-[#00d2ff]/20">
          {label}
        </div>
      )}

      <div className="flex items-center mt-3">
        {/* Left Section: Logo + Rating */}
        <div className="flex flex-col items-center w-[35%] shrink-0">
          <div className="relative h-9 w-full mb-2">
            <Image
              src={brand.logo}
              alt={brand.name}
              fill
              className="object-contain"
            />
          </div>
          <div className="flex flex-col items-center leading-tight">
            <div className="flex gap-0.5 text-[#ffd700] mb-0.5">
              {[...Array(5)].map((_, i) => (
                <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={i < Math.floor(brand.rating / 2) ? "currentColor" : "none"} stroke="currentColor" strokeWidth={2.5} className="h-2.5 w-2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                </svg>
              ))}
            </div>
            <div className="flex items-baseline gap-0.5">
              <span className="text-2xl font-black text-white">{brand.rating.toFixed(1)}</span>
              <span className="text-[9px] font-bold text-white/20">/10</span>
            </div>
          </div>
        </div>

        {/* Right Section: Bonus Info */}
        <div className="flex-1 pl-3 text-center flex flex-col justify-center">
          <div className="inline-block mx-auto rounded-full bg-[#1c1135] px-3 py-1 mb-2 border border-white/5">
            <span className="text-[8px] font-black uppercase tracking-widest text-[#00d2ff]">Exclusive Bonus</span>
          </div>
          <div className="text-base font-black leading-tight text-white line-clamp-2">
            {brand.bonus}
          </div>
        </div>
      </div>

      {/* Button Section */}
      <div className="mt-3.5">
        <button 
          className="w-full rounded-xl bg-gradient-to-r from-[#00d2ff] via-[#3a7bd5] to-[#9d50bb] py-3.5 text-xs font-black uppercase tracking-widest text-white shadow-[0_0_15px_rgba(0,210,255,0.2)]"
          onClick={(e) => {
            e.stopPropagation();
            handleCardClick("mobile_cta_button");
          }}
        >
          Play At {brand.name}
        </button>
      </div>
    </div>
  );
};

export default function MobileModal({ brands, gclidValue, isMobileDevice }: MobileModalProps) {
  const searchParams = useSearchParams();
  const [isOpen, setIsOpen] = useState(false);
  const currentDate = new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'long', year: 'numeric' }).toUpperCase();

  useEffect(() => {
    const gclid = searchParams.get("gclid");
    const hasMobileBrands = brands.some(b => b.isMobile);
    
    // Only open if on mobile device AND has gclid AND has mobile-specific brands
    if (isMobileDevice && gclid && hasMobileBrands) {
      setTimeout(() => {
        setIsOpen(true);
        document.body.style.overflow = "hidden";
      }, 0);
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [searchParams, brands, isMobileDevice]);

  if (!isOpen) return null;

  const mobileBrands = brands.filter(b => b.isMobile);

  const trustBadges = [
    { id: 'instant', label: 'INSTANT WITHDRAWAL', icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5 text-green-500">
        <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z" clipRule="evenodd" />
      </svg>
    )},
    { id: 'sameday', label: 'SAME DAY PAYOUT', icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5 text-blue-500">
        <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z" clipRule="evenodd" />
      </svg>
    )},
    { id: 'new', label: 'NEW CASINOS', icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5 text-yellow-500">
        <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
      </svg>
    )},
    { id: 'european', label: 'EUROPEAN CASINOS', icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5 text-[#00d2ff]">
        <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM6.262 6.072a8.25 8.25 0 1010.562-.766 4.5 4.5 0 01-1.318 1.357L14.25 7.5l.165.33a.75.75 0 010 .67l-.6 1.2a.75.75 0 01-1.207.193L12 9.25a.75.75 0 01-.22-.53V7.5a.75.75 0 00-.75-.75H9a.75.75 0 00-.75.75v.515c0 .307.156.593.414.764L9.75 9.5a.75.75 0 01.293.98l-1.5 3a.75.75 0 01-1.1.285l-.538-.358a.75.75 0 00-.832 1.248l.538.358a2.25 2.25 0 003.3-.855l1.5-3a.75.75 0 00-.293-.98l-1.086-.724V7.5a2.25 2.25 0 012.25-2.25h1.25c.348 0 .684.081.986.236a8.232 8.232 0 00-6.196-1.114z" clipRule="evenodd" />
      </svg>
    )},
    { id: 'best', label: 'BEST CASINOS', icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5 text-purple-500">
        <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
      </svg>
    )}
  ];

  return (
    <div className="fixed inset-0 z-[100] flex flex-col bg-[#050110] overflow-hidden">
      {/* Modal Header */}
      <div className="flex items-center justify-between p-5 pb-1">
        <div className="relative h-7 w-28">
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
          className="text-white/40 hover:text-white transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-7 w-7">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* Modal Content */}
      <div className="flex-1 overflow-y-auto px-5 pb-8">
        <div className="flex flex-col items-center text-center mb-4">
          {/* Pill Badge */}
          <div className="mb-3 rounded-full bg-[#00d2ff]/10 border border-[#00d2ff]/20 px-4 py-1.2 text-[9px] font-black uppercase tracking-widest text-[#00d2ff]">
            Elite Mobile Access
          </div>

          <h2 className="mb-3 text-3xl font-black tracking-tighter text-white uppercase leading-none">
            The Best <span className="text-[#00d2ff]">Mobile Casinos</span>
          </h2>

          <div className="mb-4 text-[8px] font-bold text-white/30 uppercase tracking-[0.2em]">
            Editorially Updated - {currentDate}
          </div>

          {/* Floating Horizontal Trust Badges */}
          <div className="relative w-screen -mx-5 overflow-hidden mb-6">
            <div className="flex animate-scroll-badges-modal gap-2 whitespace-nowrap py-1 px-5">
              {[...trustBadges, ...trustBadges].map((badge, i) => (
                <div 
                  key={i} 
                  className="flex h-9 items-center gap-1.5 rounded-full bg-white/5 border border-white/10 px-4 text-[9px] font-black uppercase shrink-0"
                >
                  {badge.icon}
                  <span className="text-white/80">{badge.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Brands List */}
        <div className="flex flex-col pt-1">
          {mobileBrands.map((brand, index) => (
            <MobileBrandCard 
              key={brand.id} 
              brand={brand} 
              gclidValue={gclidValue} 
              label={index === 0 ? "Fast Payouts" : index === 1 ? "New Casino" : "Top Rated"}
            />
          ))}
        </div>

        {/* Modal Footer */}
        <div className="mt-4 pt-6 border-t border-white/5 text-center">
          <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-white/10 leading-relaxed">
            18+ | Please gamble responsibly | BeGambleAware.org
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-badges-modal {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-50% - 4px)); }
        }
        .animate-scroll-badges-modal {
          animation: scroll-badges-modal 20s linear infinite;
        }
      `}</style>
    </div>
  );
}
