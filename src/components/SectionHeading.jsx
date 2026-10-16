import React from 'react';
import { motion } from 'framer-motion';

/**
 * Reusable Section Heading Component
 * Consistent hierarchy: Eyebrow Badge -> Strong Headline -> Supporting Text
 */
export default function SectionHeading({
  eyebrow,
  title,
  highlightText,
  description,
  align = 'center',
  light = false,
  className = '',
}) {
  const isCenter = align === 'center';

  return (
    <div
      className={`max-w-3xl ${isCenter ? 'mx-auto text-center' : 'text-left'} ${className}`}
    >
      {/* Eyebrow Pill */}
      {eyebrow && (
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
          className={`inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold tracking-wider uppercase mb-3.5 ${
            light
              ? 'bg-gold/15 text-gold border border-gold/30'
              : 'bg-navy-900/5 text-royal border border-royal/15'
          }`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-gold" />
          {eyebrow}
        </motion.div>
      )}

      {/* Main Title */}
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className={`font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight ${
          light ? 'text-white' : 'text-navy-900'
        }`}
      >
        {title}{' '}
        {highlightText && (
          <span className={light ? 'gold-gradient-text' : 'text-royal'}>
            {highlightText}
          </span>
        )}
      </motion.h2>

      {/* Supporting Description */}
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className={`mt-4 text-base sm:text-lg leading-relaxed ${
            light ? 'text-slate-muted' : 'text-slate-text'
          }`}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
