import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowUp,
  Mail,
  Phone,
  MapPin,
  Heart,
} from 'lucide-react';
import {
  InstagramIcon,
  LinkedinIcon,
  YoutubeIcon,
  FacebookIcon,
  TwitterIcon,
} from './SocialIcons';
import BrandLogo from './BrandLogo';
import { eventData } from '../data/eventData';

const SOCIAL_ICONS = {
  Instagram: InstagramIcon,
  Linkedin: LinkedinIcon,
  Youtube: YoutubeIcon,
  Facebook: FacebookIcon,
  Twitter: TwitterIcon,
};

export default function Footer() {
  const { brand, contact } = eventData;
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const topOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <footer id="contact" className="bg-navy-950 text-slate-300 border-t border-navy-800/80 pt-16 pb-12 relative overflow-hidden">
      {/* Decorative ambient gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-royal/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-navy-800/80">
          {/* Brand Info & Motto */}
          <div className="lg:col-span-5 space-y-4">
            <BrandLogo light={true} />
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm mt-3">
              Rotaract Zone Institute 2027 Coimbatore unites passionate youth leaders across Zones 4, 5, 6, 7 & 8 (India, Sri Lanka, Maldives, Nepal, Bhutan) to foster catalytic leadership, international fellowship, and lasting community impact.
            </p>
            <div className="text-xs text-gold/90 font-semibold tracking-wider uppercase pt-1">
              Rotary & Rotaract Zones 4, 5, 6, 7 & 8 • Coimbatore 2027
            </div>

            {/* Social Channels */}
            {contact.socialLinks && contact.socialLinks.length > 0 && (
              <div className="flex items-center gap-3 pt-3">
                {contact.socialLinks.map((item) => {
                  const Icon = SOCIAL_ICONS[item.icon] || Heart;
                  if (!item.url) return null;
                  return (
                    <a
                      key={item.name}
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 rounded-xl bg-navy-900 border border-navy-700/80 text-slate-300 hover:text-gold hover:border-gold/40 flex items-center justify-center transition-all duration-200"
                      aria-label={item.name}
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  );
                })}
              </div>
            )}
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a
                  href="#home"
                  onClick={(e) => handleLinkClick(e, '#home')}
                  className="text-slate-400 hover:text-gold transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  onClick={(e) => handleLinkClick(e, '#about')}
                  className="text-slate-400 hover:text-gold transition-colors"
                >
                  About the Conclave
                </a>
              </li>
              <li>
                <a
                  href="#highlights"
                  onClick={(e) => handleLinkClick(e, '#highlights')}
                  className="text-slate-400 hover:text-gold transition-colors"
                >
                  Four Core Pillars
                </a>
              </li>
              <li>
                <a
                  href="#schedule"
                  onClick={(e) => handleLinkClick(e, '#schedule')}
                  className="text-slate-400 hover:text-gold transition-colors"
                >
                  Event Schedule
                </a>
              </li>
              <li>
                <a
                  href="https://konfhub.com/checkout/rotaract-zone-institute-coimbatore-2027"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold font-semibold hover:text-gold-light transition-colors inline-flex items-center gap-1"
                >
                  <span>Register on KonfHub</span>
                  <span className="text-[10px]">↗</span>
                </a>
              </li>
              <li>
                <a
                  href="#team"
                  onClick={(e) => handleLinkClick(e, '#team')}
                  className="text-slate-400 hover:text-gold transition-colors"
                >
                  Organizing Committee
                </a>
              </li>
            </ul>
          </div>

          {/* Secretariat Contact Column */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider">
              Institute Secretariat
            </h4>
            <div className="space-y-3 text-xs sm:text-sm text-slate-400">
              {contact.email && (
                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                  <a
                    href={`mailto:${contact.email}`}
                    className="hover:text-gold transition-colors break-all"
                  >
                    {contact.email}
                  </a>
                </div>
              )}

              {contact.phone && (
                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                  <a href={`tel:${contact.phone}`} className="hover:text-gold transition-colors">
                    {contact.phone}
                  </a>
                </div>
              )}

              {contact.address && (
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{contact.address}</span>
                </div>
              )}
            </div>

            {/* Back to Top CTA */}
            <div className="pt-3">
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-navy-900 border border-navy-700 hover:border-gold/40 text-xs font-semibold text-slate-200 hover:text-gold transition-colors"
                aria-label="Scroll back to top"
              >
                <span>Back to Top</span>
                <ArrowUp className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Compliance */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {currentYear} Rotaract Zone Institute 2027 Coimbatore • Zones 4, 5, 6, 7 & 8. All rights reserved.
          </div>
          <div className="flex items-center gap-1 text-[11px] text-slate-500">
            <span>Official Leadership Institute of Rotary & Rotaract</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
