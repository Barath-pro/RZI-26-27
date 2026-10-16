import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, MapPin, Tag, AlertCircle, ChevronDown, ChevronUp, Calendar } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { scheduleConfig } from '../data/scheduleData';

const CATEGORY_COLORS = {
  Registration: 'bg-slate-100 text-slate-700 border-slate-300',
  Plenary: 'bg-navy-900/10 text-navy-900 border-navy-900/20 font-bold',
  Keynote: 'bg-royal/10 text-royal border-royal/25 font-bold',
  Fellowship: 'bg-amber-100/80 text-amber-900 border-amber-300',
  Workshop: 'bg-emerald-100/80 text-emerald-900 border-emerald-300',
  Panel: 'bg-purple-100/80 text-purple-900 border-purple-300',
  Hackathon: 'bg-rose-100/80 text-rose-900 border-rose-300',
  'Gala Night': 'bg-gold/20 text-navy-950 border-gold/40 font-bold',
  Showcase: 'bg-teal-100/80 text-teal-900 border-teal-300',
  Awards: 'bg-gold/25 text-amber-950 border-gold/50 font-bold',
};

export default function ScheduleSection() {
  const [selectedDayId, setSelectedDayId] = useState(scheduleConfig.days[0].id);
  const [expandedSessionId, setExpandedSessionId] = useState(null);

  const currentDay = scheduleConfig.days.find((d) => d.id === selectedDayId) || scheduleConfig.days[0];

  const toggleSession = (id) => {
    setExpandedSessionId(expandedSessionId === id ? null : id);
  };

  return (
    <section id="schedule" className="py-20 lg:py-28 bg-offwhite relative overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <SectionHeading
          eyebrow="4-DAY INSTITUTE SCHEDULE"
          title="Plan Your"
          highlightText="RZI 2027 Experience."
          description="8, 9, 10 & 11 April 2027 • An itinerary packed with DRR Academies, zone strategic roundtables, cultural galas, and valedictory honors across Zones 4, 5, 6, 7 & 8."
        />

        {/* Sample Notice Badge */}
        {scheduleConfig.isSampleData && (
          <div className="mt-6 mx-auto max-w-xl flex items-center justify-center gap-2 p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/25 text-amber-900 text-xs text-center">
            <AlertCircle className="w-4 h-4 text-amber-600 flex-shrink-0" />
            <span>{scheduleConfig.sampleNotice}</span>
          </div>
        )}

        {/* Day Selector Tabs */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          {scheduleConfig.days.map((day) => {
            const isSelected = selectedDayId === day.id;
            return (
              <button
                key={day.id}
                onClick={() => setSelectedDayId(day.id)}
                className={`relative px-5 py-3 rounded-2xl text-left transition-all duration-200 border ${
                  isSelected
                    ? 'bg-navy-900 text-white border-navy-900 shadow-md scale-102'
                    : 'bg-white text-navy-900 border-slate-200/80 hover:border-royal/30 hover:bg-slate-50'
                }`}
                aria-selected={isSelected}
                role="tab"
              >
                <div className="flex items-center gap-2">
                  <span
                    className={`text-xs font-bold uppercase tracking-wider ${
                      isSelected ? 'text-gold' : 'text-royal'
                    }`}
                  >
                    {day.dayNumber}
                  </span>
                  <span className="text-[11px] text-slate-400 font-medium">
                    • {day.dateLabel}
                  </span>
                </div>
                <div
                  className={`text-sm sm:text-base font-display font-bold mt-0.5 ${
                    isSelected ? 'text-white' : 'text-navy-900'
                  }`}
                >
                  {day.theme}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Day Description Strip */}
        <div className="mt-8 text-center text-xs sm:text-sm text-slate-text max-w-xl mx-auto flex items-center justify-center gap-2">
          <Calendar className="w-4 h-4 text-royal" />
          <span>{currentDay.description}</span>
        </div>

        {/* Animated Sessions Timeline */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentDay.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35 }}
            className="mt-8 space-y-4"
          >
            {currentDay.sessions.map((session, index) => {
              const categoryBadgeStyle =
                CATEGORY_COLORS[session.category] || 'bg-slate-100 text-slate-800 border-slate-300';
              const isExpanded = expandedSessionId === session.id;

              return (
                <div
                  key={session.id}
                  className="rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-card-hover transition-all duration-200 overflow-hidden"
                >
                  <div
                    onClick={() => toggleSession(session.id)}
                    className="p-5 sm:p-6 cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-4"
                  >
                    {/* Time & Venue Column */}
                    <div className="md:w-64 flex-shrink-0 space-y-1.5">
                      <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-royal">
                        <Clock className="w-4 h-4" />
                        <span>{session.time}</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-xs text-slate-text">
                        <MapPin className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
                        <span className="truncate">{session.venue}</span>
                      </div>
                    </div>

                    {/* Title & Tag Column */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                        <span
                          className={`text-[11px] uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${categoryBadgeStyle}`}
                        >
                          {session.category}
                        </span>
                      </div>
                      <h4 className="font-display font-bold text-base sm:text-lg text-navy-900 group-hover:text-royal transition-colors">
                        {session.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-text mt-1 line-clamp-2 md:line-clamp-1">
                        {session.description}
                      </p>
                    </div>

                    {/* Expand/Collapse Chevron */}
                    <div className="flex items-center justify-end md:pl-4">
                      <button
                        className="p-1.5 rounded-lg text-slate-400 hover:text-navy-900 hover:bg-slate-100 transition-colors"
                        aria-label={isExpanded ? 'Collapse session' : 'Expand session'}
                      >
                        {isExpanded ? (
                          <ChevronUp className="w-5 h-5 text-royal" />
                        ) : (
                          <ChevronDown className="w-5 h-5" />
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Expandable Extra Details */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25 }}
                        className="px-5 sm:px-6 pb-5 pt-2 border-t border-slate-100 bg-slate-50/60"
                      >
                        <p className="text-xs sm:text-sm text-slate-dark leading-relaxed">
                          {session.description}
                        </p>
                        <div className="mt-3 flex items-center gap-4 text-xs text-slate-text">
                          <span className="font-medium text-navy-900">Hall Location:</span>
                          <span>{session.venue}</span>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
