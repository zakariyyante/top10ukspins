export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-20">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-12 text-center text-5xl font-black tracking-tighter text-white md:text-7xl">
          <span className="silver-text">ABOUT</span> <span className="gold-text">US</span>
        </h1>
        
        <div className="casino-gradient gold-border rounded-3xl p-8 md:p-12 space-y-8">
          <section>
            <h2 className="text-2xl font-black uppercase tracking-widest text-[#ffd700] mb-4">Who We Are</h2>
            <p className="text-lg font-medium leading-relaxed text-white/70">
              Top10UKSpins.com is the UK&apos;s leading authority on online casino reviews and comparisons. 
              Our team of industry experts has over 20 years of combined experience in the gambling sector, 
              providing you with transparent, data-driven insights into the best places to play.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black uppercase tracking-widest text-[#ffd700] mb-4">Our Mission</h2>
            <p className="text-lg font-medium leading-relaxed text-white/70">
              Our mission is simple: to help UK players find safe, licensed, and rewarding casino experiences. 
              We cut through the marketing noise to bring you the facts about bonuses, payout speeds, 
              and game selection.
            </p>
          </section>

          <div className="grid gap-6 md:grid-cols-3 pt-8">
            <div className="bg-white/5 rounded-2xl p-6 text-center border border-white/10">
              <div className="text-3xl font-black text-white mb-2">500+</div>
              <div className="text-[10px] font-black uppercase tracking-widest text-white/40">Sites Reviewed</div>
            </div>
            <div className="bg-white/5 rounded-2xl p-6 text-center border border-white/10">
              <div className="text-3xl font-black text-white mb-2">100%</div>
              <div className="text-[10px] font-black uppercase tracking-widest text-white/40">UKGC Licensed</div>
            </div>
            <div className="bg-white/5 rounded-2xl p-6 text-center border border-white/10">
              <div className="text-3xl font-black text-white mb-2">24/7</div>
              <div className="text-[10px] font-black uppercase tracking-widest text-white/40">Expert Support</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
