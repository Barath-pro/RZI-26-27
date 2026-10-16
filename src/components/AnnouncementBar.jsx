import React, { useState } from 'react';
import { ArrowRight, Sparkles, X } from 'lucide-react';
import { eventData } from '../data/eventData';

export default function AnnouncementBar() {
  const [dismissed, setDismissed] = useState(false);
  const { announcement } = eventData;

  if (!announcement?.enabled || dismissed) return null;

  return (
    <aside aria-label="Announcement" className="relative z-50 bg-navy-950 text-white text-xs border-b border-navy-800/80 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 sm:py-2.5 flex items-center justify-between gap-3">
        {/* Left / Center content */}
        <div className="flex-1 flex items-center justify-center sm:justify-center gap-2.5 text-center flex-wrap">
          {announcement.highlightBadge && (
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-gold/20 text-gold font-bold text-[10px] tracking-wider uppercase border border-gold/30">
              <Sparkles className="w-2.5 h-2.5" />
              {announcement.highlightBadge}
            </span>
          )}
          <span className="font-medium text-slate-200 tracking-wide text-[11px] sm:text-xs">
            {announcement.text}
          </span>
          {announcement.linkText && (
            <a
              href={announcement.linkUrl}
              target={announcement.isExternal ? "_blank" : undefined}
              rel={announcement.isExternal ? "noopener noreferrer" : undefined}
              className="inline-flex items-center gap-1 font-bold text-gold hover:text-gold-light underline decoration-gold/40 hover:decoration-gold transition-colors text-[11px] sm:text-xs ml-1"
              id="announcement-register-link"
            >
              <span>{announcement.linkText}</span>
              <ArrowRight className="w-3 h-3" />
            </a>
          )}
        </div>

        {/* Dismiss Button */}
        <button
          onClick={() => setDismissed(true)}
          className="text-slate-400 hover:text-white p-1 rounded-md hover:bg-navy-800 transition-colors"
          aria-label="Dismiss announcement"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </aside>
  );
}
