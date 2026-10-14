/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Language, ProductItem } from './data/content';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustStrip } from './components/TrustStrip';
import { AboutSection } from './components/AboutSection';
import { ProductShowcase } from './components/ProductShowcase';
import { WhyHomed } from './components/WhyHomed';
import { ManufacturingSection } from './components/ManufacturingSection';
import { PartnerSection } from './components/PartnerSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { NewsSection } from './components/NewsSection';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { DistributorModal } from './components/DistributorModal';
import { ProductModal } from './components/ProductModal';
import { CatalogueModal } from './components/CatalogueModal';

export default function App() {
  const [lang, setLang] = useState<Language>('en');
  const [isDistributorOpen, setIsDistributorOpen] = useState(false);
  const [isCatalogueOpen, setIsCatalogueOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);

  const toggleLang = () => {
    setLang((prev) => (prev === 'en' ? 'zh' : 'en'));
  };

  const handleExploreProducts = () => {
    const el = document.getElementById('products');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleExploreCapabilities = () => {
    const el = document.getElementById('manufacturing');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAFA] text-[#171A20] selection:bg-[#D80048] selection:text-white">
      {/* Navigation */}
      <Navbar
        lang={lang}
        onToggleLang={toggleLang}
        onOpenDistributor={() => setIsDistributorOpen(true)}
      />

      {/* Main Homepage Flow */}
      <main className="flex-1">
        {/* Section 01: Hero (Plumbzo inspired) */}
        <Hero
          lang={lang}
          onOpenDistributor={() => setIsDistributorOpen(true)}
          onExploreProducts={handleExploreProducts}
        />

        {/* Section 02: Trust / Credibility Strip */}
        <TrustStrip lang={lang} />

        {/* Section 03: About HOMED (Eldereelife inspired) */}
        <AboutSection
          lang={lang}
          onExploreCapabilities={handleExploreCapabilities}
        />

        {/* Section 04: Product Showcase (Solaris inspired) */}
        <ProductShowcase
          lang={lang}
          onSelectProduct={(p) => setSelectedProduct(p)}
        />

        {/* Section 05: Why HOMED */}
        <WhyHomed lang={lang} />

        {/* Section 06: Manufacturing & R&D */}
        <ManufacturingSection
          lang={lang}
          onOpenDistributor={() => setIsDistributorOpen(true)}
        />

        {/* Section 07: Partner with HOMED */}
        <PartnerSection
          lang={lang}
          onOpenDistributor={() => setIsDistributorOpen(true)}
          onOpenCatalogue={() => setIsCatalogueOpen(true)}
        />

        {/* Section 08: Reviews / Trust (Cleannix inspired) */}
        <TestimonialsSection lang={lang} />

        {/* Section 09: Clinical & Industry News (Freshbox blog inspired, from homedgroup.com) */}
        <NewsSection lang={lang} />

        {/* Section 10: Final CTA */}
        <FinalCTA
          lang={lang}
          onOpenDistributor={() => setIsDistributorOpen(true)}
          onOpenContact={() => setIsDistributorOpen(true)}
        />
      </main>

      {/* Footer (Fitty inspired) */}
      <Footer
        lang={lang}
        onToggleLang={toggleLang}
        onOpenDistributor={() => setIsDistributorOpen(true)}
        onOpenCatalogue={() => setIsCatalogueOpen(true)}
      />

      {/* Interactive Modals */}
      <DistributorModal
        isOpen={isDistributorOpen}
        onClose={() => setIsDistributorOpen(false)}
        lang={lang}
      />

      <ProductModal
        product={selectedProduct}
        isOpen={!!selectedProduct}
        onClose={() => setSelectedProduct(null)}
        lang={lang}
        onOpenDistributor={() => setIsDistributorOpen(true)}
      />

      <CatalogueModal
        isOpen={isCatalogueOpen}
        onClose={() => setIsCatalogueOpen(false)}
        lang={lang}
      />
    </div>
  );
}
