export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-20">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-12 text-center text-5xl font-black tracking-tighter text-white md:text-7xl">
          <span className="silver-text">GET IN</span> <span className="gold-text">TOUCH</span>
        </h1>
        
        <div className="grid gap-10 md:grid-cols-2">
          <div className="casino-gradient gold-border rounded-3xl p-8 md:p-10">
            <h2 className="text-2xl font-black uppercase tracking-widest text-white mb-6">Contact Info</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#ffd700] text-[#15052d]">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-5 w-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs font-black uppercase tracking-widest text-white/40 mb-1">Email Us</div>
                  <div className="text-lg font-bold text-white">support@top10ukspins.com</div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#ffd700] text-[#15052d]">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-5 w-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs font-black uppercase tracking-widest text-white/40 mb-1">Office</div>
                  <div className="text-lg font-bold text-white">London, United Kingdom</div>
                </div>
              </div>
            </div>
          </div>

          <div className="casino-gradient gold-border rounded-3xl p-8 md:p-10">
            <h2 className="text-2xl font-black uppercase tracking-widest text-white mb-6">Business Inquiries</h2>
            <p className="text-white/60 font-medium leading-relaxed mb-8">
              Are you a licensed UK operator looking to be featured on our site? 
              Reach out to our partnership team.
            </p>
            <button className="metallic-button w-full rounded-2xl py-4 text-sm font-black uppercase tracking-widest text-[#15052d]">
              Partner With Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
