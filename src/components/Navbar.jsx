import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import BrandLogo from './BrandLogo';

const NAV_LINKS = [
  { id: 'home', label: 'Home', href: '#home' },
  { id: 'about', label: 'About', href: '#about' },
  { id: 'highlights', label: 'Highlights', href: '#highlights' },
  { id: 'schedule', label: 'Schedule', href: '#schedule' },
  { id: 'community', label: 'Community', href: '#community' },
  { id: 'team', label: 'Our Team', href: '#team' },
  { id: 'contact', label: 'Contact', href: '#contact' },
];

export default function Navbar({ activeSection = 'home' }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [mobileMenuOpen]);

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const topOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header
      className={`sticky top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-navy-950/95 backdrop-blur-md border-b border-navy-800/80 shadow-card-dark py-3'
          : 'bg-navy-950/85 backdrop-blur-md border-b border-white/10 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between gap-4">
          {/* Logo Brand Anchor */}
          <a
            href="#home"
            onClick={(e) => handleLinkClick(e, '#home')}
            className="focus:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded-lg group"
            aria-label="District Rotaract Coimbatore - Return to Home"
          >
            <BrandLogo light={true} />
          </a>

          {/* Desktop Navigation Links */}
          <ul className="hidden lg:flex items-center gap-1 xl:gap-2 bg-navy-900/60 backdrop-blur-sm border border-navy-700/60 px-3 py-1.5 rounded-full">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <li key={link.id}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className={`relative px-3.5 py-1.5 text-xs xl:text-sm font-medium rounded-full transition-all duration-200 block ${
                      isActive
                        ? 'text-white font-semibold'
                        : 'text-slate-300 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 bg-royal/80 border border-royal-light/40 rounded-full -z-10 shadow-sm"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Right Action / Register Button to KonfHub */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="https://konfhub.com/checkout/rotaract-zone-institute-coimbatore-2027"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-gold via-gold-light to-gold text-navy-950 font-bold text-xs uppercase tracking-wider px-5 py-2.5 rounded-full shadow-glow-gold hover:shadow-lg hover:brightness-105 active:scale-95 transition-all duration-200"
              id="navbar-register-desktop"
            >
              <span>Register Now</span>
              <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
            </a>
          </div>

          {/* Mobile Hamburger Toggle & Quick Register */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href="https://konfhub.com/checkout/rotaract-zone-institute-coimbatore-2027"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 bg-gold text-navy-950 font-bold text-[11px] uppercase tracking-wider px-3.5 py-1.5 rounded-full shadow-sm"
              id="navbar-register-mobile-top"
            >
              <span>Register</span>
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-navy-900/80 border border-navy-700 text-white hover:text-gold focus:outline-none focus:ring-2 focus:ring-gold"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-navy-950/98 border-b border-navy-800 backdrop-blur-xl px-4 pt-4 pb-6 mt-2"
          >
            <ul className="flex flex-col gap-2">
              {NAV_LINKS.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <li key={link.id}>
                    <a
                      href={link.href}
                      onClick={(e) => handleLinkClick(e, link.href)}
                      className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold transition-colors ${
                        isActive
                          ? 'bg-primary text-white'
                          : 'text-slate-200 hover:bg-navy-900 hover:text-gold'
                      }`}
                    >
                      <span>{link.label}</span>
                      {isActive && <span className="w-2 h-2 rounded-full bg-gold" />}
                    </a>
                  </li>
                );
              })}
              <li className="pt-3 mt-1 border-t border-navy-800">
                <a
                  href="https://konfhub.com/checkout/rotaract-zone-institute-coimbatore-2027"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-gold to-gold-light text-navy-950 font-bold text-sm uppercase tracking-wider py-3.5 rounded-xl shadow-glow-gold"
                  id="navbar-register-mobile-drawer"
                >
                  <span>Register on KonfHub</span>
                  <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
