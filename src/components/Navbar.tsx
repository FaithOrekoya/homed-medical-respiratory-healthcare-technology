import React, { useState, useEffect } from 'react';
import { Menu, X, Globe, ChevronRight } from 'lucide-react';
import { Language, siteContent } from '../data/content';

interface NavbarProps {
  lang: Language;
  onToggleLang: () => void;
  onOpenDistributor: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  lang,
  onToggleLang,
  onOpenDistributor,
}) => {
  const t = siteContent[lang].nav;
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: t.home, href: '#hero' },
    { label: t.about, href: '#about' },
    { label: t.products, href: '#products' },
    { label: t.manufacturing, href: '#manufacturing' },
    { label: siteContent[lang].whyHomed.label, href: '#why-homed' },
    { label: t.partners, href: '#partners' },
    { label: t.news, href: '#news' },
  ];

  const hasBackground = isScrolled || mobileMenuOpen;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        hasBackground
          ? 'bg-white/95 backdrop-blur-md shadow-xs border-b border-neutral-200/80 py-3.5'
          : 'bg-transparent border-b border-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Zone 1: Brand logo */}
        <a 
          href="#hero" 
          className="flex items-center hover:opacity-90 transition-opacity shrink-0 py-0.5"
          aria-label="HOMED Medical Homepage"
        >
          <img
            src="https://res.cloudinary.com/hbstqwkk/image/upload/v1791474453/82e9cf6969e217fc_kbi9rz.png"
            alt="HOMED Medical"
            className={`h-8 md:h-9 w-auto object-contain transition-all duration-300 ${
              hasBackground ? '' : 'brightness-0 invert'
            }`}
            referrerPolicy="no-referrer"
          />
        </a>

        {/* Zone 2: 4–6 nav links, 1–2 word labels, single-line */}
        <nav
          className={`hidden lg:flex items-center gap-7 text-sm font-medium transition-colors duration-300 ${
            hasBackground ? 'text-neutral-600' : 'text-neutral-200'
          }`}
        >
          {navLinks.map((item, idx) => (
            <a
              key={idx}
              href={item.href}
              className={`whitespace-nowrap transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#D80048] hover:after:w-full after:transition-all after:duration-200 ${
                hasBackground ? 'hover:text-[#D80048]' : 'hover:text-white'
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: 1–2 primary actions + Language switcher */}
        <div className="flex items-center gap-3">
          {/* Language Switcher */}
          <button
            onClick={onToggleLang}
            className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-white bg-[#D80048] hover:bg-black rounded-full transition-colors cursor-pointer shadow-xs active:scale-98"
            title="Switch Language / 切换语言"
            aria-label="Toggle language between English and Chinese"
          >
            <Globe className="w-3.5 h-3.5 text-white" />
            <span className="font-mono uppercase tracking-wider">{lang === 'en' ? '中文' : 'EN'}</span>
          </button>

          {/* Primary CTA */}
          <button
            onClick={onOpenDistributor}
            className="hidden sm:inline-flex items-center justify-center px-5 py-2 text-xs font-semibold text-white bg-[#D80048] hover:bg-black rounded-full transition-colors whitespace-nowrap shadow-xs cursor-pointer active:scale-98"
          >
            {t.distributorCta}
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`lg:hidden p-2 rounded-full transition-colors ${
              hasBackground
                ? 'text-neutral-700 hover:text-[#171A20] hover:bg-neutral-100'
                : 'text-white hover:text-white hover:bg-white/10'
            }`}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-neutral-200 px-6 py-5 shadow-lg animate-in slide-in-from-top-2 duration-200">
          <div className="flex items-center justify-between pb-3.5 mb-2 border-b border-neutral-100">
            <img
              src="https://res.cloudinary.com/hbstqwkk/image/upload/v1791474453/82e9cf6969e217fc_kbi9rz.png"
              alt="HOMED Medical"
              className="h-7 w-auto object-contain"
              referrerPolicy="no-referrer"
            />
          </div>
          <nav className="flex flex-col gap-3">
            {navLinks.map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between py-2 text-sm font-medium text-neutral-800 hover:text-[#D80048] border-b border-neutral-100 last:border-0"
              >
                <span>{item.label}</span>
                <ChevronRight className="w-4 h-4 text-neutral-400" />
              </a>
            ))}
            <div className="pt-3 flex flex-col gap-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenDistributor();
                }}
                className="w-full py-2.5 text-xs font-semibold text-white bg-[#D80048] hover:bg-black rounded-full transition-colors text-center cursor-pointer"
              >
                {t.distributorCta}
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
