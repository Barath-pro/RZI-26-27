import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, ShieldCheck, Sparkles, ExternalLink } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { eventData, KONFHUB_CHECKOUT_URL } from '../data/eventData';

export default function RegistrationCTA() {
  const { registrationCta } = eventData;

  const handleRegisterClick = (url) => {
    const destination = url || KONFHUB_CHECKOUT_URL;
    window.open(destination, '_blank', 'noopener,noreferrer');
  };

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

  return (
    <section id="register" className="py-20 lg:py-28 bg-navy-950 text-white relative overflow-hidden">
      {/* Ambient background glows with primary #06447b & warm saffron gold */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-primary/30 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute -bottom-20 right-1/4 w-[350px] h-[350px] bg-gold/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern-dark pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <SectionHeading
          light={true}
          eyebrow={registrationCta.eyebrow}
          title={registrationCta.heading}
          highlightText=""
          description={registrationCta.supportingText}
        />

        {/* Pricing & Delegate Tiers */}
        <div className="mt-14 sm:mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {registrationCta.tiers.map((tier, index) => {
            const isHighlight = tier.highlight;
            return (
              <motion.div
                key={tier.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -6 }}
                className={`relative rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 ${
                  isHighlight
                    ? 'bg-gradient-to-b from-primary-dark via-primary to-navy-950 border-2 border-gold shadow-glow-gold'
                    : 'bg-navy-900/80 border border-primary-light/30 hover:border-gold/50'
                }`}
              >
                {/* Badge if highlight */}
                {tier.badge && (
                  <div
                    className={`absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                      isHighlight
                        ? 'bg-gold text-navy-950 shadow-md'
                        : 'bg-navy-800 text-slate-300 border border-slate-600'
                    }`}
                  >
                    {tier.badge}
                  </div>
                )}

                <div>
                  <h3 className="font-display font-extrabold text-xl text-white">
                    {tier.title}
                  </h3>
                  <div className="mt-4 flex items-baseline gap-1.5">
                    <span className="font-display text-2xl sm:text-3xl font-extrabold text-white">
                      {tier.price}
                    </span>
                    <span className="text-xs text-slate-400 font-medium">/ KonfHub Pass</span>
                  </div>

                  <ul className="mt-6 space-y-3 pt-6 border-t border-white/10">
                    {tier.perks.map((perk, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                        <CheckCircle2
                          className={`w-4 h-4 flex-shrink-0 mt-0.5 ${
                            isHighlight ? 'text-gold' : 'text-primary-lighter'
                          }`}
                        />
                        <span>{perk}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-4">
                  <a
                    href={KONFHUB_CHECKOUT_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full py-3.5 rounded-full font-bold text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2 transition-all duration-200 ${
                      isHighlight
                        ? 'bg-gradient-to-r from-gold via-gold-light to-gold text-navy-950 shadow-glow-gold hover:brightness-105 active:scale-98'
                        : 'bg-white/10 hover:bg-white/15 text-white border border-white/20 active:scale-98'
                    }`}
                    id={`register-tier-${index}`}
                  >
                    <span>Register on KonfHub</span>
                    <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Closing Action Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-14 p-6 sm:p-8 rounded-3xl bg-navy-900/80 border border-primary/40 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-gold/15 border border-gold/30 flex items-center justify-center text-gold flex-shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-display font-bold text-base sm:text-lg text-white">
                Official KonfHub Secure Checkout
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 mt-0.5">
                Instant digital receipt, barcoded delegate pass, and official confirmation for Rotaract Zone Institute 2027.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="#about"
              onClick={scrollToAbout}
              className="px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider text-slate-300 hover:text-white border border-slate-700 hover:border-slate-500 transition-colors"
            >
              Learn More
            </a>
            <a
              href={KONFHUB_CHECKOUT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider bg-gold text-navy-950 hover:bg-gold-light transition-colors shadow-glow-gold"
              id="register-cta-banner-button"
            >
              <span>Go to Checkout</span>
              <ExternalLink className="w-3.5 h-3.5 stroke-[2.5]" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
