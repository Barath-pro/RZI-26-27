import React from 'react';
import AnnouncementBar from './components/AnnouncementBar';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import EventInfo from './components/EventInfo';
import AboutSection from './components/AboutSection';
import Highlights from './components/Highlights';
import ScheduleSection from './components/ScheduleSection';
import CommunityGallery from './components/CommunityGallery';
import TeamSection from './components/TeamSection';
import RegistrationCTA from './components/RegistrationCTA';
import Footer from './components/Footer';
import { useActiveSection } from './hooks/useActiveSection';

const SECTION_IDS = [
  'home',
  'about',
  'highlights',
  'schedule',
  'community',
  'team',
  'register',
  'contact',
];

export default function App() {
  const activeSection = useActiveSection(SECTION_IDS, 140);

  return (
    <div className="min-h-screen flex flex-col bg-offwhite text-navy-900 selection:bg-gold selection:text-navy-950 font-sans">
      {/* Top Configurable Announcement Bar */}
      <AnnouncementBar />

      {/* Main Sticky Responsive Navbar */}
      <Navbar activeSection={activeSection} />

      {/* Main Content Flow */}
      <main className="flex-grow">
        {/* Section C: Hero Section — The Main Attraction */}
        <Hero />

        {/* Section D: Event Information Strip */}
        <EventInfo />

        {/* Section E: About the Event */}
        <AboutSection />

        {/* Section F: Experience and Highlights (4 Pillars) */}
        <Highlights />

        {/* Section G: Event Schedule / Program */}
        <ScheduleSection />

        {/* Section H: District Rotaract Community */}
        <CommunityGallery />

        {/* Section I: Meet the Team */}
        <TeamSection />

        {/* Section J: Registration CTA Closing */}
        <RegistrationCTA />
      </main>

      {/* Section K: Footer & Back to Top */}
      <Footer />
    </div>
  );
}
