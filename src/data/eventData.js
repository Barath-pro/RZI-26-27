/**
 * Rotaract Zone Institute 2027 Coimbatore — Central Event Configuration
 * Primary Brand Color: #06447b
 * Source Details & Imagery: https://rotaractinstitute.com/
 * Live Checkout Portal: https://konfhub.com/checkout/rotaract-zone-institute-coimbatore-2027
 */

export const KONFHUB_CHECKOUT_URL = "https://konfhub.com/checkout/rotaract-zone-institute-coimbatore-2027";

export const eventData = {
  // Announcement Bar
  announcement: {
    enabled: true,
    text: "RZI 2027 COIMBATORE • 8, 9, 10 & 11 APRIL 2027 — REGISTRATIONS LIVE ON KONFHUB",
    highlightBadge: "RZI 2027",
    linkText: "Register on KonfHub",
    linkUrl: KONFHUB_CHECKOUT_URL,
    isExternal: true,
  },

  // Brand Identity
  brand: {
    name: "Rotaract Zone Institute 2027",
    edition: "Coimbatore 2027",
    subtext: "Zones 4, 5, 6, 7 & 8 (India, Sri Lanka, Maldives, Nepal, Bhutan)",
    tagline: "From the foothills of Western Ghats",
    logoAlt: "Rotaract Zone Institute 2027 Coimbatore Emblem",
  },

  // Hero Section Configuration
  hero: {
    eyebrow: "RZI 2027 · COIMBATORE",
    headlineLine1: "From the foothills",
    headlineLine2: "of ",
    headlineWordmark: "Western Ghats",
    supportingText:
      "Join for a leadership learning experience for District Rotaract Representatives, District Secretaries and Past District Representatives across Zones 4, 5, 6, 7 & 8 (India, Sri Lanka, Maldives, Nepal, Bhutan) hosted in Coimbatore, Tamil Nadu, INDIA.",
    eventDateDisplay: "8, 9, 10 & 11 April 2027",
    locationDisplay: "Coimbatore · Tamil Nadu, India",
    targetDate: "2027-04-08T09:00:00",
    primaryCta: {
      text: "Register for RZI 2027",
      url: KONFHUB_CHECKOUT_URL,
      isExternal: true,
    },
    secondaryCta: {
      text: "Explore the Institute",
      url: "#about",
      isExternal: false,
    },
    backgroundImage: "/images/rzi-hero.png",
    statueImage: "/images/adiyogi.png",
  },

  // Event Information Strip
  infoStrip: [
    {
      id: "date",
      icon: "Calendar",
      label: "Institute Dates",
      value: "8, 9, 10 & 11 April 2027",
      subtext: "4 Days of Immersive Leadership",
      isPlaceholder: false,
    },
    {
      id: "venue",
      icon: "MapPin",
      label: "Host City & Region",
      value: "Coimbatore, Tamil Nadu",
      subtext: "Foothills of the Western Ghats",
      isPlaceholder: false,
    },
    {
      id: "format",
      icon: "Layers",
      label: "Zones & Delegations",
      value: "Zones 4, 5, 6, 7 & 8",
      subtext: "India • Sri Lanka • Maldives • Nepal • Bhutan",
      isPlaceholder: false,
    },
    {
      id: "registration",
      icon: "Sparkles",
      label: "Registration Status",
      value: "Live on KonfHub",
      subtext: "Official Checkout Portal Open",
      isPlaceholder: false,
    },
  ],

  // About Section Configuration
  about: {
    eyebrow: "ROTARACT ZONE INSTITUTE 2027",
    heading: "The Hills, The Heritage, and",
    highlightText: "The Spirit of Kovai.",
    leadParagraph:
      "Rotaract Zone Institute 2027 comes home to Coimbatore. Nestled against the majestic Western Ghats, this signature conclave brings together DRRs, District Secretaries, and distinguished Past District Representatives across South Asia.",
    secondaryParagraph:
      "Designed as a benchmark leadership summit, RZI 2027 bridges international fellowship, strategic service governance, and transformative ideas across Rotary & Rotaract Zones 4, 5, 6, 7 & 8.",
    valueStatements: [
      {
        id: "v1",
        title: "Catalytic Zone Leadership",
        description:
          "High-impact masterclasses, governance protocols, and collaborative agendas crafted specifically for District Rotaract Representatives.",
        icon: "Compass",
      },
      {
        id: "v2",
        title: "South Asian Fellowship",
        description:
          "Forging unbreakable bonds and cross-border initiatives across India, Sri Lanka, Maldives, Nepal, and Bhutan.",
        icon: "Users",
      },
      {
        id: "v3",
        title: "Heritage & Enduring Impact",
        description:
          "Immersing in Coimbatore's hospitality, vibrant cultural heritage, and shared commitment to high-impact community service.",
        icon: "HeartHandshake",
      },
    ],
    image: "/images/about-movement.jpg",
    ctaText: "Discover the 4 Experience Pillars",
    ctaUrl: "#highlights",
  },

  // Registration Section CTA & Pricing Tiers
  registrationCta: {
    eyebrow: "SECURE YOUR PARTICIPATION",
    heading: "Register for RZI 2027 Coimbatore.",
    supportingText:
      "Select your delegation category below. You will be directed immediately to the secure KonfHub checkout to complete your registration.",
    primaryButton: {
      text: "Proceed to KonfHub Checkout",
      url: KONFHUB_CHECKOUT_URL,
      isExternal: true,
      isConfigured: true,
    },
    secondaryButton: {
      text: "View 4-Day Schedule",
      url: "#schedule",
      isExternal: false,
    },
    tiers: [
      {
        title: "DRR / District Secretary Pass",
        price: "Official Delegate",
        badge: "Official Delegation",
        perks: [
          "Full 4-day access to all RZI 2027 Plenaries",
          "Exclusive DRR & District Secretary Academies",
          "Official RZI Delegate Credentials & Welcome Kit",
          "All curated meals, high tea & banquets",
          "Entry to Grand Fellowship Cultural Gala",
        ],
        highlight: true,
        checkoutUrl: KONFHUB_CHECKOUT_URL,
      },
      {
        title: "Past District Representative (PDRR)",
        price: "Alumni Leader",
        badge: "Leadership Council",
        perks: [
          "Access to Institute Plenary Sessions & Roundtables",
          "PDRR Council & Advisory Networking Conclave",
          "Special RZI Coimbatore Commemorative Memento",
          "Official banquets, networking dinners & gala",
          "Zone Handover & Valedictory Plenary seating",
        ],
        highlight: false,
        checkoutUrl: KONFHUB_CHECKOUT_URL,
      },
      {
        title: "Rotaractor / Rotarian Observer",
        price: "Observer Pass",
        badge: "Open Registration",
        perks: [
          "Access to Open Keynotes & Panel Discussions",
          "Institute Expo & Innovation Showcase Entry",
          "Official RZI Coimbatore Observer Credentials",
          "Networking luncheon & evening fellowship sessions",
          "Certificate of Participation from RZI 2027",
        ],
        highlight: false,
        checkoutUrl: KONFHUB_CHECKOUT_URL,
      },
    ],
  },

  // Contact Details
  contact: {
    email: "contact@rotaractinstitute.com",
    phone: "+91 (0422) 245-2027",
    address: "Rotaract Zone Institute 2027 Secretariat, Coimbatore, Tamil Nadu, India",
    socialLinks: [
      { name: "Instagram", url: "https://instagram.com/rotaractcoimbatore", icon: "Instagram" },
      { name: "LinkedIn", url: "https://linkedin.com/company/rotaract-district-3201", icon: "Linkedin" },
      { name: "YouTube", url: "https://youtube.com/@rotaractcoimbatore", icon: "Youtube" },
      { name: "Facebook", url: "https://facebook.com/rotaractcoimbatore", icon: "Facebook" },
    ],
  },
};
