import React from 'react';
import { motion } from 'framer-motion';
import { AlertCircle, Building2, UserCheck } from 'lucide-react';
import { LinkedinIcon } from './SocialIcons';
import SectionHeading from './SectionHeading';
import { teamConfig } from '../data/teamData';

export default function TeamSection() {
  return (
    <section id="team" className="py-20 lg:py-28 bg-offwhite relative overflow-hidden">
      {/* Background Grid Accent */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <SectionHeading
          eyebrow="RZI 2027 HOST COMMITTEE"
          title="Meet the"
          highlightText="Organizing Committee."
          description="Dedicated Rotaract leaders and host district office bearers bringing Rotaract Zone Institute 2027 to life in Coimbatore."
        />

        {/* Sample Notice Badge */}
        {teamConfig.isSampleData && (
          <div className="mt-6 mx-auto max-w-xl flex items-center justify-center gap-2 p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/25 text-amber-900 text-xs text-center">
            <AlertCircle className="w-4 h-4 text-amber-600 flex-shrink-0" />
            <span>{teamConfig.notice}</span>
          </div>
        )}

        {/* Team Cards Grid */}
        <div className="mt-14 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {teamConfig.members.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className="group flex flex-col h-full rounded-2xl bg-white border border-slate-200/90 overflow-hidden shadow-sm hover:shadow-card-hover transition-all duration-300"
            >
              {/* Portrait Image */}
              <div className="relative aspect-square w-full overflow-hidden bg-navy-950">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-500 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-transparent pointer-events-none" />

                {/* Role Badge */}
                {member.badge && (
                  <div className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full bg-navy-900/80 backdrop-blur-md border border-gold/30 text-[10px] font-bold text-gold uppercase tracking-wider">
                    {member.badge}
                  </div>
                )}

                {/* Placeholder Indicator */}
                {member.isPlaceholder && (
                  <div className="absolute top-3 right-3 px-2 py-0.5 rounded bg-amber-900/80 backdrop-blur-md text-amber-200 text-[9px] font-semibold uppercase tracking-wider">
                    Sample
                  </div>
                )}
              </div>

              {/* Card Body */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-display font-bold text-base sm:text-lg text-navy-900 group-hover:text-royal transition-colors">
                    {member.name}
                  </h3>

                  <p className="mt-1 text-xs font-semibold text-royal uppercase tracking-wider">
                    {member.role}
                  </p>

                  {member.club && (
                    <div className="mt-2.5 flex items-center gap-1.5 text-xs text-slate-text">
                      <Building2 className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
                      <span className="truncate">{member.club}</span>
                    </div>
                  )}

                  <p className="mt-3 text-xs text-slate-text leading-relaxed line-clamp-3">
                    {member.bio}
                  </p>
                </div>

                {/* Social Connect Link */}
                {member.linkedin && (
                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-[11px] font-medium text-slate-400">
                      Connect Profile
                    </span>
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-full bg-slate-100 text-slate-600 hover:bg-royal hover:text-white flex items-center justify-center transition-colors"
                      aria-label={`Connect with ${member.name} on LinkedIn`}
                    >
                      <LinkedinIcon className="w-4 h-4" />
                    </a>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
