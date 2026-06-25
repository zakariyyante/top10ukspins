import Link from "next/link";

export default function Disclaimer() {
  return (
    <div className="bg-[#0a0118] py-10 border-y border-white/5">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center gap-6 text-center md:flex-row md:text-left">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-red-600 font-black text-red-600 text-lg">
            18+
          </div>
          <div className="max-w-4xl text-[11px] font-bold uppercase tracking-widest text-white/40 leading-relaxed">
            <span className="text-white">Strictly for adults 18+ only.</span> Gambling involves risk. 
            Top10UKSpins.com is an affiliate site; we may earn commissions from featured brands. 
            This does not influence our ratings. For support, visit{" "}
            <Link href="https://www.begambleaware.org" target="_blank" className="text-[#ffd700] hover:underline">
              BeGambleAware.org
            </Link>{" "}
            or call 0808 8020 133.
          </div>
        </div>
      </div>
    </div>
  );
}
