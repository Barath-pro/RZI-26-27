import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Layers, Sparkles } from 'lucide-react';
import { eventData } from '../data/eventData';

const ICON_MAP = {
  Calendar,
  MapPin,
  Layers,
  Sparkles,
};

export default function EventInfo() {
  const { infoStrip } = eventData;

  return (
    <section className="relative z-20 -mt-10 sm:-mt-12 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-20px' }}
        transition={{ duration: 0.6 }}
        className="bg-white rounded-2xl shadow-card-hover border border-slate-200/80 p-4 sm:p-6 lg:p-7 backdrop-blur-sm"
      >
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:divide-x lg:divide-slate-200/80">
          {infoStrip.map((item, index) => {
            const IconComponent = ICON_MAP[item.icon] || Sparkles;
            return (
              <div
                key={item.id}
                className={`flex items-start gap-3.5 sm:gap-4 ${
                  index !== 0 ? 'lg:pl-6' : ''
                }`}
              >
                {/* Icon Badge */}
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-royal/10 border border-royal/15 flex items-center justify-center flex-shrink-0 text-royal">
                  <IconComponent className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-slate-400">
                      {item.label}
                    </span>
                    {item.isPlaceholder && (
                      <span className="text-[9px] font-bold uppercase tracking-wider text-amber-600 bg-amber-50 px-1 rounded border border-amber-200">
                        Placeholder
                      </span>
                    )}
                  </div>
                  <h3 className="font-display font-bold text-sm sm:text-base text-navy-900 mt-0.5 truncate">
                    {item.value}
                  </h3>
                  <p className="text-xs text-slate-text mt-0.5 truncate">
                    {item.subtext}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
