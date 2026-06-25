import Link from "next/link";

export default function AboutSection() {
  return (
    <section className="py-24 bg-black/40">
      <div className="container mx-auto px-4">
        <h2 className="mb-16 text-center text-4xl font-black tracking-tighter text-white md:text-6xl">
          <span className="silver-text">HOW WE</span> <span className="gold-text">RATE SITES</span>
        </h2>
        
        <div className="grid gap-10 md:grid-cols-2">
          {/* Why Our Reviews Stand Out */}
          <div className="casino-gradient gold-border rounded-3xl p-10">
            <h3 className="mb-8 text-2xl font-black uppercase tracking-widest text-white">Our Selection Criteria</h3>
            <ul className="space-y-6">
              {[
                "Strict UKGC Licensing Verification",
                "Real-Money Withdrawal Speed Testing",
                "Bonus Wagering Requirement Analysis",
                "Mobile UI & App Performance Audits",
                "24/7 Support Responsiveness Checks"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-white/70">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#ffd700] text-[#15052d]">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
                      <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span className="text-lg font-bold">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Responsible Gambling */}
          <div className="casino-gradient border border-red-600/30 rounded-3xl p-10 relative overflow-hidden">
            <div className="absolute right-[-20px] top-[-20px] h-32 w-32 bg-red-600/10 blur-3xl rounded-full" />
            <h3 className="mb-8 text-2xl font-black uppercase tracking-widest text-white">Responsible Play</h3>
            <p className="mb-10 text-lg font-medium leading-relaxed text-white/60">
              Gambling should always be for entertainment. If you feel you are losing control, 
              we recommend using self-exclusion tools or contacting professional support.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              <Link 
                href="https://www.gamstop.co.uk" 
                target="_blank"
                className="flex items-center justify-center rounded-2xl bg-white/5 border border-white/10 p-4 text-sm font-black uppercase tracking-widest text-white transition-all hover:bg-white/10"
              >
                GAMSTOP
              </Link>
              <Link 
                href="https://www.gamcare.org.uk" 
                target="_blank"
                className="flex items-center justify-center rounded-2xl bg-white/5 border border-white/10 p-4 text-sm font-black uppercase tracking-widest text-white transition-all hover:bg-white/10"
              >
                GamCare
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
