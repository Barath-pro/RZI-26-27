import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { highlightsData } from '../data/highlightsData';

export default function Highlights() {
  return (
    <section id="highlights" className="py-20 lg:py-28 bg-white relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <SectionHeading
          eyebrow="RZI 2027 PILLARS"
          title="Four Pillars."
          highlightText="One Defining Conclave."
          description="Every facet of Rotaract Zone Institute 2027 Coimbatore is designed to foster visionary leadership, cross-border fellowship, and regional service excellence across Zones 4, 5, 6, 7 & 8."
        />

        {/* 4 Highlights Grid */}
        <div className="mt-14 sm:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {highlightsData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className="group flex flex-col h-full rounded-2xl bg-offwhite border border-slate-200/90 overflow-hidden shadow-sm hover:shadow-card-hover transition-all duration-300"
            >
              {/* Card Image with Zoom effect */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-navy-950">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-center transform group-hover:scale-110 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-navy-950/20 to-transparent" />

                {/* Top Badge */}
                <div className="absolute top-3.5 left-3.5 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-navy-950/80 backdrop-blur-md border border-white/20 text-[10px] font-bold tracking-widest text-gold uppercase">
                  <Sparkles className="w-2.5 h-2.5" />
                  <span>{item.badge}</span>
                </div>

                {/* Bottom Stat pill */}
                <div className="absolute bottom-3 left-3.5 text-xs font-semibold text-white/90 bg-white/15 backdrop-blur-md px-2.5 py-0.5 rounded-md border border-white/20">
                  {item.stats}
                </div>
              </div>

              {/* Card Content Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="font-display font-extrabold text-xl text-navy-900 group-hover:text-royal transition-colors">
                      {item.title}
                    </h3>
                    <div className="w-8 h-8 rounded-full bg-royal/10 text-royal flex items-center justify-center transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:bg-royal group-hover:text-white transition-all duration-200">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>

                  <p className="mt-2 text-xs font-bold uppercase tracking-wider text-gold-hover">
                    {item.tagline}
                  </p>

                  <p className="mt-3 text-xs sm:text-sm text-slate-text leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-200/60 flex items-center justify-between text-xs font-semibold text-royal">
                  <span>Explore Track Sessions</span>
                  <span className="text-slate-400 group-hover:text-royal transition-colors">→</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
