import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 bg-[#0a0118] py-20">
      <div className="container mx-auto px-4">
        <div className="mb-16 flex flex-col items-center justify-center">
          <Link href="/" className="mb-10 block">
            <div className="relative h-16 w-64 md:h-20 md:w-80">
              <Image
                src="/logo.png"
                alt="Top10UKSpins"
                fill
                className="object-contain"
              />
            </div>
          </Link>
          
          <div className="grid grid-cols-2 gap-x-12 gap-y-10 md:grid-cols-4">
            <div className="flex flex-col gap-4">
              <h4 className="text-xs font-black uppercase tracking-[0.2em] text-[#ffd700]">Quick Links</h4>
              <Link href="/" className="text-sm font-medium text-white/40 transition-colors hover:text-white">Home</Link>
              <Link href="/#brands" className="text-sm font-medium text-white/40 transition-colors hover:text-white">Top Brands</Link>
              <Link href="/#guide" className="text-sm font-medium text-white/40 transition-colors hover:text-white">Casino Guide</Link>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="text-xs font-black uppercase tracking-[0.2em] text-[#ffd700]">Legal</h4>
              <Link href="/privacy" className="text-sm font-medium text-white/40 transition-colors hover:text-white">Privacy Policy</Link>
              <Link href="/terms" className="text-sm font-medium text-white/40 transition-colors hover:text-white">Terms of Service</Link>
              <Link href="/cookies" className="text-sm font-medium text-white/40 transition-colors hover:text-white">Cookie Policy</Link>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="text-xs font-black uppercase tracking-[0.2em] text-[#ffd700]">Company</h4>
              <Link href="/about" className="text-sm font-medium text-white/40 transition-colors hover:text-white">About Us</Link>
              <Link href="/contact" className="text-sm font-medium text-white/40 transition-colors hover:text-white">Contact Us</Link>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="text-xs font-black uppercase tracking-[0.2em] text-[#ffd700]">Support</h4>
              <Link href="https://www.begambleaware.org" target="_blank" className="text-sm font-medium text-white/40 transition-colors hover:text-white">BeGambleAware</Link>
              <Link href="https://www.gamstop.co.uk" target="_blank" className="text-sm font-medium text-white/40 transition-colors hover:text-white">GamStop</Link>
            </div>
          </div>
        </div>

        <div className="mb-12 border-t border-white/5 pt-12 text-center">
          <p className="mx-auto max-w-4xl text-[10px] font-medium leading-relaxed tracking-wider text-white/20 uppercase">
            Top10UKSpins.com is an independent comparison site for online casinos. 
            We are compensated by the brands we feature. All operators listed are licensed 
            by the UK Gambling Commission. Gambling is addictive. Please play responsibly. 18+ only.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8 opacity-20 grayscale transition-all hover:opacity-100 hover:grayscale-0">
          <Image src="/gamestop.png" alt="GamStop" width={100} height={40} className="h-10 w-auto object-contain" />
          <Image src="/gamcare.png" alt="GamCare" width={100} height={40} className="h-10 w-auto object-contain" />
          <Image src="/gambleaware.png" alt="BeGambleAware" width={120} height={40} className="h-10 w-auto object-contain" />
        </div>

        <div className="mt-12 text-center text-[10px] font-black tracking-[0.3em] text-white/10">
          © {currentYear} TOP10UKSPINS.COM. ALL RIGHTS RESERVED.
        </div>
      </div>
    </footer>
  );
}
