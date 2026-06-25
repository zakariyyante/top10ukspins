import Hero from "./components/Hero";
import BrandCard from "./components/BrandCard";
import Disclaimer from "./components/Disclaimer";
import AboutSection from "./components/AboutSection";
import { brands } from "./data/brands";
import MobileModal from "./components/MobileModal";
import { Suspense } from "react";

interface PageProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function Home({ searchParams }: PageProps) {
  const params = await searchParams;
  const gclidValue = typeof params.gclid === "string" ? params.gclid : undefined;

  // Sort brands by rating descending
  const sortedBrands = [...brands].sort((a, b) => b.rating - a.rating);

  return (
    <div className="flex flex-col">
      <Hero />
      
      <section id="brands" className="py-12 bg-black/20">
        <div className="container mx-auto px-4">
          <div className="mb-8 flex flex-col items-center justify-between gap-4 md:flex-row">
            <h2 className="text-2xl font-bold text-white md:text-3xl">
              Top Rated <span className="text-[#ff8c00]">UK Casinos</span>
            </h2>
            <div className="flex items-center gap-2 text-sm text-white/40">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              Last updated: {new Date().toLocaleDateString('en-GB', { month: 'long', year: 'numeric' })}
            </div>
          </div>

          <div className="grid gap-6">
            {sortedBrands.map((brand, index) => (
              <BrandCard 
                key={brand.id} 
                brand={brand} 
                gclidValue={gclidValue} 
                rank={index + 1}
              />
            ))}
          </div>
        </div>
      </section>

      <Disclaimer />
      
      <AboutSection />

      {/* Mobile Popup Modal */}
      <Suspense fallback={null}>
        <MobileModal brands={brands} gclidValue={gclidValue} />
      </Suspense>
    </div>
  );
}
