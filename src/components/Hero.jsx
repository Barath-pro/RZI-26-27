import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowDown, MapPin, Calendar, Globe, Sparkles } from 'lucide-react';
import { eventData, KONFHUB_CHECKOUT_URL } from '../data/eventData';

export default function Hero() {
  const { hero } = eventData;
  const heroRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  // Parallax mouse tracker
  useEffect(() => {
    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 2;
      const y = (e.clientY / innerHeight - 0.5) * 2;
      setMousePos({ x, y });
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => {
      setIsHovering(false);
      setMousePos({ x: 0, y: 0 });
    };

    const element = heroRef.current;
    if (element) {
      window.addEventListener('mousemove', handleMouseMove, { passive: true });
      element.addEventListener('mouseenter', handleMouseEnter);
      element.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (element) {
        element.removeEventListener('mouseenter', handleMouseEnter);
        element.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  const scrollToAbout = (e) => {
    e.preventDefault();
    const element = document.getElementById('about');
    if (element) {
      const topOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  // Generate 24 floating ember particles
  const embers = Array.from({ length: 24 }).map((_, i) => ({
    id: i,
    left: `${(i * 4.2 + (i % 3) * 2) % 100}%`,
    size: 2.5 + (i % 4) * 1.5,
    duration: 12 + (i % 5) * 2.5,
    delay: -(i * 1.8),
    isBrass: i % 3 === 0,
  }));

  // Parallax offsets
  const bgTranslateX = isHovering ? -mousePos.x * 18 : 0;
  const bgTranslateY = isHovering ? -mousePos.y * 12 : 0;

  const statueTranslateX = isHovering ? -mousePos.x * 32 : 0;
  const statueTranslateY = isHovering ? -mousePos.y * 20 : 0;

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative min-h-[92vh] lg:min-h-[94vh] flex items-center overflow-hidden bg-navy-950 py-12 sm:py-16 lg:py-20 select-none"
    >
      {/* ===== LAYER 1: Mountain Backdrop with Parallax ===== */}
      <div className="absolute inset-[-6%] w-[112%] h-[112%] overflow-hidden pointer-events-none z-0">
        <div
          className="w-full h-full bg-cover bg-center transition-transform duration-700 ease-out"
          style={{
            backgroundImage: `url(${hero.backgroundImage})`,
            transform: `translate3d(${bgTranslateX}px, ${bgTranslateY}px, 0) scale(1.08)`,
            filter: 'brightness(0.55) contrast(1.1)',
          }}
        />
      </div>

      {/* ===== LAYER 2: Atmospheric Scrim & Brand Color Overlay (#06447b) ===== */}
      <div
        className="absolute inset-0 pointer-events-none z-[1]"
        style={{
          background: `
            radial-gradient(ellipse at 75% 85%, rgba(245, 158, 11, 0.22) 0%, rgba(245, 158, 11, 0) 45%),
            radial-gradient(ellipse at 25% 45%, rgba(6, 68, 123, 0.65) 0%, rgba(3, 20, 39, 0.85) 75%),
            linear-gradient(180deg, 
              rgba(3, 20, 39, 0.85) 0%, 
              rgba(6, 68, 123, 0.35) 30%, 
              rgba(6, 68, 123, 0.25) 60%, 
              rgba(3, 20, 39, 0.95) 100%
            )
          `,
        }}
      />

      {/* ===== LAYER 3: Adiyogi Foreground Statue Layer ===== */}
      <div className="absolute inset-0 pointer-events-none z-[2] overflow-hidden flex items-end justify-end">
        <div
          className="relative w-full h-[65%] sm:h-[80%] lg:h-[92%] transition-transform duration-500 ease-out"
          style={{
            transform: `translate3d(${statueTranslateX}px, ${statueTranslateY}px, 0)`,
          }}
        >
          <img
            src={hero.statueImage}
            alt="Adiyogi statue Coimbatore"
            className="absolute bottom-0 right-[-10%] sm:right-[-4%] lg:right-[3%] h-full w-auto object-contain object-bottom filter drop-shadow-[0_20px_50px_rgba(0,0,0,0.85)]"
            style={{
              WebkitMaskImage:
                'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.45) 8%, black 20%, black 100%)',
              maskImage:
                'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.45) 8%, black 20%, black 100%)',
            }}
          />
        </div>
      </div>

      {/* ===== LAYER 4: Glowing Floating Embers ===== */}
      <div className="absolute inset-0 pointer-events-none z-[3] overflow-hidden">
        {embers.map((ember) => (
          <span
            key={ember.id}
            className="ember"
            style={{
              left: ember.left,
              width: `${ember.size}px`,
              height: `${ember.size}px`,
              animationDuration: `${ember.duration}s`,
              animationDelay: `${ember.delay}s`,
              background: ember.isBrass
                ? 'radial-gradient(circle, rgba(212,165,116,0.95) 0%, rgba(212,165,116,0) 70%)'
                : 'radial-gradient(circle, rgba(245,158,11,0.95) 0%, rgba(245,158,11,0) 70%)',
            }}
          />
        ))}
      </div>

      {/* ===== LAYER 5: Hero Content (Text & Actions) ===== */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12">
        <div className="max-w-2xl lg:max-w-3xl">
          {/* Eyebrow Badge */}
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-gold/40 bg-gold/10 backdrop-blur-md mb-6 shadow-glow-gold/25"
          >
            <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
            <span className="text-[11px] sm:text-xs font-bold tracking-[0.25em] uppercase text-gold">
              {hero.eyebrow}
            </span>
          </motion.div>

          {/* Master Headline with Fraunces Serif & Gradient Wordmark */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-display font-light text-4xl sm:text-6xl lg:text-7xl xl:text-[5.25rem] text-white tracking-tight leading-[1.02] drop-shadow-[0_8px_40px_rgba(0,0,0,0.8)]"
          >
            {hero.headlineLine1}
            <br />
            {hero.headlineLine2}
            <span className="wordmark italic font-semibold">
              {hero.headlineWordmark}
            </span>
          </motion.h1>

          {/* Supporting Copy */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-6 text-base sm:text-lg lg:text-xl text-slate-200/90 leading-relaxed font-normal max-w-xl drop-shadow-[0_2px_20px_rgba(0,0,0,0.6)]"
          >
            {hero.supportingText}
          </motion.p>

          {/* Primary Action Button linking directly to KonfHub Checkout */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-9 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto"
          >
            <a
              href={KONFHUB_CHECKOUT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 bg-gradient-ember text-white px-8 py-4 rounded-full font-bold text-sm sm:text-base tracking-wide shadow-glow-ember hover:shadow-[0_14px_50px_rgba(234,88,12,0.65)] transform hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
              id="hero-register-button"
            >
              <span>{hero.primaryCta.text}</span>
              <ArrowRight className="w-4 h-4 stroke-[2.5]" />
            </a>

            <a
              href={hero.secondaryCta.url}
              onClick={scrollToAbout}
              className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-white/10 hover:bg-white/15 text-white font-semibold text-sm sm:text-base border border-white/20 backdrop-blur-md transition-all duration-200 hover:border-gold/50"
              id="hero-explore-button"
            >
              <span>{hero.secondaryCta.text}</span>
            </a>
          </motion.div>

          {/* Location & Dates Strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-11 flex flex-wrap items-center gap-x-7 gap-y-3 text-xs sm:text-sm text-slate-200/85 font-medium"
          >
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-gold flex-shrink-0" />
              <span>{hero.locationDisplay}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-sky-400 flex-shrink-0" />
              <span>{hero.eventDateDisplay}</span>
            </div>
            <div className="flex items-center gap-2 text-slate-300">
              <Globe className="w-4 h-4 text-amber-400 flex-shrink-0" />
              <span>Zones 4, 5, 6, 7 & 8</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Animated Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.8 }}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-1.5 pointer-events-none z-10"
      >
        <span className="text-[10px] uppercase font-bold tracking-widest text-slate-400">
          Explore Below
        </span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
          className="w-6 h-6 rounded-full border border-slate-500/50 flex items-center justify-center text-gold"
        >
          <ArrowDown className="w-3 h-3" />
        </motion.div>
      </motion.div>
    </section>
  );
}
