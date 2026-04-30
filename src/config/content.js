/**
 * CONTENT CONFIG
 * Измените тексты, ссылки, фото и данные здесь — всё обновится на странице.
 */
export const content = {
  // ─── META ───────────────────────────────────────────────────────────────────
  meta: {
    title: "Google Ad Grant Management for Nonprofits | .dgtl-house",
    description:
      "We manage your $10,000/month Google Ad Grant for just $250/month.",
  },

  // ─── HEADER / NAV ───────────────────────────────────────────────────────────
  header: {
    logo: {
      text: ".dgtl - house",
      subtitle: "Nonprofit Partnership Program",
      href: "/",
    },
    ctaButton: {
      text: "Contact us",
      href: "#contacts",
    },
  },

  // ─── HERO ───────────────────────────────────────────────────────────────────
  hero: {
    badges: ["program for nonprofits", "Google Ad Grant Management"],
    googlePartnerLogo:
      "https://nonprofit.dgtl-house.com/img/google-partner.png",
    title: "Google Ad Grant Management+",
    description:
      "With the Google Ad Grant, <strong>your nonprofit receives $10,000 every month in free Google Ads.</strong> This budget can generate tens of thousands of impressions and thousands of clicks from people actively searching for causes like yours.",
    ctaButton: {
      text: "Schedule call",
      href: "https://api.dgtl-house.com/widget/bookings/dgtlhouse-nonprofits",
    },
    // Замените путь на собственное изображение
    image: {
      src: "https://nonprofit.dgtl-house.com/img/home-img.webp",
      alt: "Nonprofit team managing Google Ad Grant campaigns to grow donations and volunteers",
    },
  },

  // ─── SERVICES ───────────────────────────────────────────────────────────────
  services: {
    tagline: "Support program from .dgtl - house",
    subtitle: "For nonprofits",
    title: "Services & what's included",
    badge: "We cover 80%",
    badgeNote: "What's included",
    items: [
      "Ad Grant Application & Approval",
      "Google Ads Campaign Setup, Management & Optimization",
      "SEO Optimization (2 Hours/mo) for Better Visibility",
      "Analytics & Conversion Tracking for Data-Driven Growth",
      "Ongoing Support & Monthly Strategy Calls",
    ],
    priceFull: "$1,250",
    priceDiscounted: "$250",
    ctaButton: {
      text: "Schedule Call",
      href: "https://api.dgtl-house.com/widget/bookings/dgtlhouse-nonprofits",
    },
  },

  // ─── CASE STUDIES ───────────────────────────────────────────────────────────
  caseStudies: {
    title: "Case Studies",
    description:
      "See how our nonprofit partners turned $10,000 per month in free Google Ads into real growth — and how you can too, for just $250/month.",
    items: [
      {
        id: 1,
        name: "Small Museum",
        image: "https://nonprofit.dgtl-house.com/img/slide/slide_1.webp",
        stats: [
          { label: "Website visitors", value: "over 40,000" },
          { label: "Raised monthly adoption applications", value: "102%" },
          { label: "Increase in website donations", value: "312%" },
          { label: "Increase in organic traffic", value: "53%" },
        ],
      },
      {
        id: 2,
        name: "The Animal Foundation",
        image: "https://nonprofit.dgtl-house.com/img/slide/slide_2.webp",
        stats: [
          { label: "Monthly website visitors", value: "120,000+" },
          { label: "Increase in adoptions", value: "85%" },
          { label: "Increase in donations", value: "210%" },
          { label: "Increase in organic traffic", value: "70%" },
        ],
      },
      {
        id: 3,
        name: "Heartland Animal Shelter",
        image: "https://nonprofit.dgtl-house.com/img/slide/slide_3.webp",
        stats: [
          { label: "Monthly website visitors", value: "35,000+" },
          { label: "Adoption rate increase", value: "95%" },
          { label: "Donation increase", value: "180%" },
          { label: "Organic traffic increase", value: "48%" },
        ],
      },
    ],
  },

  // ─── STATS ──────────────────────────────────────────────────────────────────
  stats: {
    title: "Why Nonprofits Choose Us",
    description:
      "Our Google Ad Grant program helps nonprofits grow faster — with more visibility, more donors, and more mission impact.",
    numbers: [
      { value: "900K", label: "Conversions" },
      { value: "12M", label: "Clicks" },
      { value: "440M", label: "Impressions" },
      { value: "$50M", label: "Spent on ads" },
    ],
    partnerImage: {
      src: "https://nonprofit.dgtl-house.com/img/partner-1.webp",
      alt: "Our nonprofit partner organizations",
    },
  },

  // ─── TESTIMONIALS ───────────────────────────────────────────────────────────
  testimonials: {
    title: "Hear from our customers",
    description: "Join 100+ nonprofits growing with Google Ads & SEO",
    items: [
      {
        id: 1,
        name: "Small Museum",
        role: "Marketing Specialist",
        avatar: "https://nonprofit.dgtl-house.com/img/reviews/small-museum.png",
        rating: 5,
        text: '"This program is unbelievable. For just $250/month, we able to spend $10,000/month through Google Ads. It helped us generate over 40,000 website visits and triple our donations compared to previous periods. The dgtl-house team is reliable, strategic, and genuinely committed to helping nonprofits succeed."',
        clutchUrl:
          "https://clutch.co/go-to-review/a2aa53e3-3af4-42ef-8a1b-4b77baadf3fe/373576",
      },
      {
        id: 2,
        name: "Heartland Animal Shelter",
        role: "Executive Director",
        avatar: "https://nonprofit.dgtl-house.com/img/reviews/heartland.png",
        rating: 5,
        text: '"Working with DGTL House has transformed our digital presence. The Google Ad Grant management has driven thousands of new visitors to our site every month, helping us increase adoptions and donations significantly."',
        clutchUrl:
          "https://clutch.co/go-to-review/a2aa53e3-3af4-42ef-8a1b-4b77baadf3fe/372045",
      },
      {
        id: 3,
        name: "GIVE Volunteers",
        role: "Program Director",
        avatar:
          "https://nonprofit.dgtl-house.com/img/reviews/give-volunteers.png",
        rating: 5,
        text: '"The team at DGTL House is incredibly knowledgeable and dedicated. They\'ve helped us maximize our Google Ad Grant and reach thousands of new volunteers each month. Highly recommend!"',
        clutchUrl:
          "https://clutch.co/go-to-review/a2aa53e3-3af4-42ef-8a1b-4b77baadf3fe/374380",
      },
      {
        id: 4,
        name: "United Planet",
        role: "Communications Manager",
        avatar:
          "https://nonprofit.dgtl-house.com/img/reviews/united-planet.png",
        rating: 5,
        text: '"DGTL House made the Google Ad Grant process seamless. From application to ongoing optimization, they handle everything. Our traffic and donor conversions have never been higher."',
        clutchUrl:
          "https://clutch.co/go-to-review/a2aa53e3-3af4-42ef-8a1b-4b77baadf3fe/374380",
      },
    ],
  },

  // ─── COMPARISON ─────────────────────────────────────────────────────────────
  comparison: {
    title: "Our program is bigger than just Google Ad Grant Mgmt",
    sayHello: {
      title: "Say hello to:",
      items: [
        "Optimized Google Ads Campaigns by Experts",
        "$10,000/mo Google Ad Grant",
        "Discounted Google Grant Management ($250/mo)",
        "Regular Meetings & Detailed Reports",
        "SEO optimization for your website (2 hours/mo)",
      ],
    },
    sayGoodbye: {
      title: "Say goodbye to:",
      items: [
        "Confusing Google Grant Rules & Compliance Issues",
        "Low Website Traffic & Missed Opportunities",
        "No Time to Focus on Marketing",
        "Wasted or Unused $10,000/mo Google Ad Grant",
      ],
    },
  },

  // ─── FEATURES ───────────────────────────────────────────────────────────────
  features: {
    title: "Focus on changing lives — we'll handle Google Ads & more",
    description:
      "With $10,000/month in free Google Ads, we'll help thousands of new people discover and support your mission.",
    items: [
      {
        title: "Generate 100,000+ annual ad impressions",
        description:
          "Unlock opportunities for exposure each year, getting your cause in front of a wide audience that cares.",
      },
      {
        title: "Reach qualified donors and volunteers",
        description:
          "Target the right people who are ready to support your mission with donations, time, or resources.",
      },
      {
        title: "Increase website traffic by up to 800%",
        description:
          "Drive a massive boost in website traffic, bringing more eyes to your cause and creating greater impact.",
      },
      {
        title: "Drive meaningful conversions and donations",
        description:
          "Turn clicks into real support, driving more donations, sign-ups, and engagement with your nonprofit's mission.",
      },
    ],
  },

  // ─── FAQ ────────────────────────────────────────────────────────────────────
  faq: {
    title: "Got questions? We've got answers",
    subtitle: "Frequently asked questions",
    items: [
      {
        question: "What is the Google Ad Grant, and how does it work?",
        answer:
          "Google Ad Grants provide eligible nonprofits with $10,000/month in free Google Ads to increase visibility, attract donors, and drive website traffic — all at no cost. However, Google has strict compliance rules that must be followed to keep the grant active.",
      },
      {
        question: "Am I eligible for the Google Ad Grant?",
        answer:
          "• Be a registered 501(c)(3) nonprofit (or equivalent in your country).\n• Have a fully functional website with valuable content (we can help develop it if needed).\n• Agree to follow Google's grant compliance rules (e.g., no commercial activities).",
      },
      {
        question: "Why do I need a management service for my Google Ad Grant?",
        answer:
          "Without expert management, many nonprofits lose their grant due to inactivity or rule violations. We provide ongoing campaign optimization, strict compliance monitoring, and keyword research & ad strategy to attract the right audience.",
      },
      {
        question: "How long does it take to get approved for the Google Grant?",
        answer:
          "Approval typically takes 2–4 weeks, depending on Google's review process and your website's eligibility.",
      },
      {
        question:
          "Can we run normal Google Ads alongside our Google Grant ads?",
        answer:
          "Yes! You can run paid Google Ads alongside Grant Ads. However, Grant Ads must follow separate compliance rules and will always appear below paid ads in search results.",
      },
      {
        question: "Why is the price so low? Are there hidden fees?",
        answer:
          "We understand this might seem too good to be true, but our DGTL-HOUSE Nonprofit Partnership Program was created to help nonprofits grow and make a real impact. No hidden fees. No upsells. Just a flat $250/month for full service — because we believe in supporting those who support the world.",
      },
    ],
  },

  // ─── FOOTER / CONTACTS ──────────────────────────────────────────────────────
  footer: {
    companyName: ".dgtl - house",
    tagline: "Digital Marketing agency",
    ctaButton: {
      text: "Book a free call",
      href: "https://api.dgtl-house.com/widget/bookings/dgtlhouse-nonprofits",
    },
    contacts: {
      email: "nonprofit@dgtl-house.com",
      phone: "1 (224) 584 8401",
      phoneHref: "tel:+12245848401",
      address: "1635 Eagle Grove Ct. Wheeling, IL 60090",
    },
    socials: [
      { name: "Instagram", href: "https://www.instagram.com/dgtl.house" },
      { name: "Facebook", href: "https://www.facebook.com/dgtlhouse" },
      {
        name: "LinkedIn",
        href: "https://www.linkedin.com/company/dgtl-house/about/",
      },
    ],
  },
};

export default content;
