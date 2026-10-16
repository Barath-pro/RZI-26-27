import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Eye, X, Sparkles, MapPin, Heart } from 'lucide-react';
import SectionHeading from './SectionHeading';

const GALLERY_ITEMS = [
  {
    id: 1,
    title: 'Foothills of Western Ghats & Sacred Velliangiri',
    category: 'Institute Heritage',
    location: 'Coimbatore, Western Ghats',
    image: '/images/rzi-hero.png',
    caption:
      'Delegates will be welcomed against the timeless vistas of the Western Ghats mountain range flanking Coimbatore.',
    stats: 'Western Ghats Vistas',
  },
  {
    id: 2,
    title: 'Adiyogi Cultural Legacy & Kovai Serenity',
    category: 'Kovai Spirit',
    location: 'Foothills of Velliangiri',
    image: '/images/adiyogi.png',
    caption:
      'The iconic Adiyogi statue — symbolizing inner transformation, mindfulness, and the profound spiritual heritage of Kovai.',
    stats: '112-ft Iconic Landmark',
  },
  {
    id: 3,
    title: 'Zones 4, 5, 6, 7 & 8 Leadership Assembly',
    category: 'Leadership Conclave',
    location: 'Coimbatore Grand Auditorium',
    image: '/images/hero-conference.jpg',
    caption:
      'District Rotaract Representatives and District Secretaries converging for transformative strategy roundtables.',
    stats: '5 Nations • 40+ Districts',
  },
  {
    id: 4,
    title: 'South Asian Fellowship Gala & Cultural Night',
    category: 'International Fellowship',
    location: 'Royal Heritage Lawns',
    image: '/images/highlight-fellowship.jpg',
    caption:
      'Celebrating international bonds, music, and friendship connecting India, Sri Lanka, Maldives, Nepal, and Bhutan.',
    stats: 'International Gala Night',
  },
  {
    id: 5,
    title: 'Social Innovation & Sustainability Incubator',
    category: 'Youth Impact',
    location: 'Coimbatore Tech Corridor',
    image: '/images/highlight-inspiration.jpg',
    caption:
      'Empowering young changemakers to develop sustainable initiatives for literacy, clean environment, and healthcare.',
    stats: 'SDG Impact Frameworks',
  },
  {
    id: 6,
    title: 'Zone Executive Council & Strategic Dialogue',
    category: 'Zone Governance',
    location: 'RZI 2027 Executive Chamber',
    image: '/images/about-movement.jpg',
    caption:
      'Senior leaders, DRRs and past representatives formulating multi-year regional roadmaps and humanitarian agendas.',
    stats: 'Zones 4-8 Strategic Roadmap',
  },
];

export default function CommunityGallery() {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  return (
    <section id="community" className="py-20 lg:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <SectionHeading
          eyebrow="RZI 2027 VISUAL ARCHIVE"
          title="The Hills, Heritage &"
          highlightText="South Asian Fellowship."
          description="Glimpse the breathtaking Western Ghats landscape, iconic Kovai heritage, and unforgettable leadership gatherings uniting Zones 4, 5, 6, 7 & 8."
        />

        {/* Editorial Photo Grid */}
        <div className="mt-14 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {GALLERY_ITEMS.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group relative rounded-2xl overflow-hidden bg-navy-950 border border-slate-200/80 shadow-sm hover:shadow-card-hover transition-all duration-300 aspect-[4/3] cursor-pointer"
              onClick={() => setSelectedPhoto(item)}
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover object-center transform group-hover:scale-108 transition-transform duration-700 ease-out"
                loading="lazy"
              />

              {/* Gradient Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/30 to-transparent group-hover:via-navy-950/50 transition-colors duration-300" />

              {/* Top Category Badge */}
              <div className="absolute top-4 left-4">
                <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-navy-900/80 backdrop-blur-md text-gold border border-gold/30">
                  {item.category}
                </span>
              </div>

              {/* Hover Zoom Icon */}
              <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-200">
                <Eye className="w-4 h-4" />
              </div>

              {/* Bottom Details */}
              <div className="absolute bottom-4 inset-x-4">
                <div className="flex items-center gap-1.5 text-[11px] text-slate-300 mb-1">
                  <MapPin className="w-3 h-3 text-gold" />
                  <span>{item.location}</span>
                  <span className="text-slate-500">•</span>
                  <span className="text-gold font-semibold">{item.stats}</span>
                </div>
                <h4 className="font-display font-bold text-base sm:text-lg text-white group-hover:text-gold transition-colors line-clamp-2">
                  {item.title}
                </h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-navy-950/90 backdrop-blur-md p-4 sm:p-6"
            onClick={() => setSelectedPhoto(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-3xl w-full bg-navy-900 border border-slate-700 rounded-2xl overflow-hidden shadow-2xl"
            >
              {/* Close button */}
              <button
                onClick={() => setSelectedPhoto(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-navy-950/80 text-white hover:text-gold border border-white/20 transition-colors"
                aria-label="Close photo preview"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="aspect-[16/10] w-full overflow-hidden bg-black">
                <img
                  src={selectedPhoto.image}
                  alt={selectedPhoto.title}
                  className="w-full h-full object-cover object-center"
                />
              </div>

              <div className="p-6 text-white">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs uppercase font-bold tracking-wider text-gold px-2.5 py-0.5 rounded bg-gold/15 border border-gold/30">
                    {selectedPhoto.category}
                  </span>
                  <span className="text-xs text-slate-400">• {selectedPhoto.location}</span>
                </div>
                <h3 className="font-display font-bold text-xl sm:text-2xl text-white">
                  {selectedPhoto.title}
                </h3>
                <p className="mt-2 text-sm text-slate-300 leading-relaxed">
                  {selectedPhoto.caption}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
