import React from 'react';
import { motion } from 'framer-motion';
import { Compass, Users, HeartHandshake, ArrowRight, Award } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { eventData } from '../data/eventData';

const ICONS = {
  Compass,
  Users,
  HeartHandshake,
};

export default function AboutSection() {
  const { about } = eventData;

  const scrollToHighlights = (e) => {
    e.preventDefault();
    const element = document.getElementById('highlights');
    if (element) {
      const topOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="py-20 lg:py-28 bg-offwhite relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern pointer-events-none opacity-60" />

      {/* Decorative Blur Circles */}
      <div className="absolute top-1/3 -left-32 w-80 h-80 bg-royal/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Editorial Photography with Frame Accent */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 order-2 lg:order-1"
          >
            <div className="relative">
              {/* Outer Glow & Background Offset Frame */}
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-royal/20 via-gold/20 to-transparent blur-xl -z-10" />
              <div className="absolute -bottom-4 -right-4 w-full h-full rounded-3xl border-2 border-royal/20 -z-10 hidden sm:block" />

              {/* Main Image Container */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/60 bg-white aspect-[4/3]">
                <img
                  src={about.image}
                  alt="Young leaders collaborating at District Rotaract conclave workshop"
                  className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 via-transparent to-transparent pointer-events-none" />
                
                {/* Floating Experience Badge */}
                <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-auto bg-navy-950/92 backdrop-blur-md border border-gold/30 p-4 rounded-xl text-white shadow-xl flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gold/20 border border-gold/40 flex items-center justify-center text-gold flex-shrink-0">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-display font-bold text-sm text-gold">
                      RZI 2027 Coimbatore
                    </div>
                    <div className="text-xs text-slate-300">
                      Rotaract Zones 4, 5, 6, 7 & 8 • South Asia
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Editorial Text & 3 Values */}
          <div className="lg:col-span-6 order-1 lg:order-2">
            <SectionHeading
              align="left"
              eyebrow={about.eyebrow}
              title={about.heading}
              highlightText={about.highlightText}
              description={about.leadParagraph}
            />

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="mt-4 text-sm sm:text-base text-slate-text leading-relaxed"
            >
              {about.secondaryParagraph}
            </motion.p>

            {/* Three Concise Value Statements */}
            <div className="mt-8 space-y-4 sm:space-y-5">
              {about.valueStatements.map((val, idx) => {
                const IconComp = ICONS[val.icon] || Compass;
                return (
                  <motion.div
                    key={val.id}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 + idx * 0.1 }}
                    className="flex items-start gap-4 p-3.5 rounded-xl bg-white border border-slate-200/80 shadow-sm hover:border-royal/30 hover:shadow-md transition-all duration-200"
                  >
                    <div className="w-10 h-10 rounded-lg bg-royal/10 text-royal flex items-center justify-center flex-shrink-0 mt-0.5">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-navy-900 text-sm sm:text-base">
                        {val.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-text mt-0.5 leading-relaxed">
                        {val.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* CTA Button to Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-8 pt-2"
            >
              <a
                href={about.ctaUrl}
                onClick={scrollToHighlights}
                className="inline-flex items-center gap-2.5 text-royal font-bold text-sm tracking-wide group hover:text-royal-hover transition-colors"
              >
                <span>{about.ctaText}</span>
                <span className="w-7 h-7 rounded-full bg-royal/10 flex items-center justify-center group-hover:bg-royal group-hover:text-white transition-all">
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-0.5 transition-transform" />
                </span>
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
