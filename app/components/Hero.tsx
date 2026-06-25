export default function Hero() {
  const currentYear = new Date().getFullYear();

  return (
    <section className="relative overflow-hidden py-20 md:py-32 roulette-bg">
      {/* Background Decor */}
      <div className="absolute left-1/2 top-1/2 -z-10 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#9d50bb]/10 blur-[120px]" />
      
      <div className="container mx-auto px-4 text-center">
        {/* Badge Pill */}
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#ffd700]/30 bg-[#ffd700]/5 px-5 py-2 text-xs font-black uppercase tracking-[0.2em] text-[#ffd700]">
          <span className="h-2 w-2 rounded-full bg-[#ffd700] shadow-[0_0_8px_#ffd700]" />
          UK&apos;s Elite Casino Selection {currentYear}
        </div>

        {/* H1 */}
        <h1 className="mb-8 text-5xl font-black tracking-tighter text-white md:text-8xl">
          <span className="silver-text">THE BEST</span> <br />
          <span className="gold-text">UK CASINO SPINS</span>
        </h1>

        {/* Subtitle */}
        <p className="mx-auto mb-12 max-w-3xl text-lg font-medium leading-relaxed text-white/60 md:text-2xl">
          We&apos;ve analyzed hundreds of licensed UK operators to bring you the 
          <span className="text-white"> absolute top 10 </span> 
          with the highest payouts and biggest bonuses.
        </p>

        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-10">
          {[
            { label: "UKGC LICENSED", icon: "M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" },
            { label: "EXPERT VERIFIED", icon: "M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" },
            { label: "INSTANT PAYOUTS", icon: "M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" }
          ].map((badge, i) => (
            <div key={i} className="flex items-center gap-3 rounded-2xl bg-white/5 px-6 py-3 border border-white/10 backdrop-blur-md transition-all hover:bg-white/10">
              <div className="text-[#ffd700]">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-6 w-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d={badge.icon} />
                </svg>
              </div>
              <span className="text-xs font-black uppercase tracking-widest text-white/90">{badge.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
