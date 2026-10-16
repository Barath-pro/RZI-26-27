import React from 'react';

/**
 * BrandLogo Component for RZI 2027 Coimbatore
 * Primary Color: #06447b
 */
export default function BrandLogo({ light = false, className = '' }) {
  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Rotaract Cog & Flame Emblem Motif */}
      <div className="relative flex items-center justify-center w-11 h-11 rounded-xl bg-primary border border-gold/40 shadow-sm overflow-hidden flex-shrink-0 group">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-light via-primary to-primary-darkest opacity-90 pointer-events-none" />
        <svg
          viewBox="0 0 24 24"
          className="w-5 h-5 text-gold animate-spin-slow relative z-10"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.9"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="3" />
          <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
        </svg>
      </div>

      {/* Typography Label */}
      <div className="flex flex-col text-left">
        <div className="flex items-center gap-1.5">
          <span
            className={`font-display font-extrabold text-base tracking-wider leading-none uppercase ${
              light ? 'text-white' : 'text-primary'
            }`}
          >
            RZI 2027
          </span>
          <span className="text-[10px] uppercase font-bold tracking-widest text-gold bg-gold/15 px-1.5 py-0.5 rounded border border-gold/30">
            Coimbatore
          </span>
        </div>
        <span
          className={`text-[11px] font-semibold tracking-wider uppercase mt-0.5 ${
            light ? 'text-slate-300' : 'text-slate-text'
          }`}
        >
          Rotaract Zone Institute
        </span>
      </div>
    </div>
  );
}
