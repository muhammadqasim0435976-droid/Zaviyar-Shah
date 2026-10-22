export interface Project {
  id: string;
  name: string;
  url: string;
  category: string;
  title: string;
  description: string;
  badge: string;
  analysisFocus: string[];
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  focusAreas: string[];
}

export interface SkillCategory {
  id: string;
  name: string;
  items: string[];
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

export const PORTFOLIO_DATA = {
  personal: {
    fullName: 'Muhammad Qasim',
    brandName: 'QASIM',
    title: 'SEO Specialist',
    headlineSub: 'INDEPENDENT SEO SPECIALIST',
    location: 'Pakistan',
    experienceYears: '1.5 Years',
    experienceSummary: 'Approximately 1.5 years of combined practical and ongoing experience, including around one year of SEO-related work across different offices and six months in another role.',
    specialization: 'Search Engine Optimization (SEO), keyword research, on-page optimization, technical SEO, content strategy, and organic search performance.',
    email: 'muhammadqasim0435976@gmail.com',
    linkedin: 'https://www.linkedin.com/in/muhammad-qasim-waheed/',
    tagline: 'STRATEGY. CONTENT. ORGANIC GROWTH.',
    trustStatement: 'RESEARCH-DRIVEN SEO. RELEVANT CONTENT. SUSTAINABLE GROWTH.',
    aboutHeading: 'SEO WITH PURPOSE. GROWTH WITH STRATEGY.',
    aboutParagraphs: [
      "I'm Muhammad Qasim, an SEO Specialist from Pakistan with practical experience in SEO-related work across different office environments.",
      "My focus is understanding search intent, researching valuable keywords, optimizing website content, identifying technical SEO issues, and analyzing organic search performance.",
      "I believe effective SEO starts with understanding users and combines relevant content, sound technical foundations, and consistent measurement. I'm committed to developing my skills and helping websites improve their search visibility through structured, data-informed optimization.",
    ],
  },

  heroStats: [
    { value: '1.5 YEARS', label: 'EXPERIENCE', detail: 'Combined practical & ongoing work' },
    { value: 'SEO FOCUSED', label: 'SPECIALIZATION', detail: 'Search visibility & architecture' },
    { value: '6 WEBSITES', label: 'PORTFOLIO WEBSITES', detail: 'Selected website portfolio entries' },
    { value: 'DATA-DRIVEN', label: 'APPROACH', detail: 'Research & optimization focus' },
  ],

  approachSteps: [
    {
      step: '01',
      title: 'DISCOVER',
      description: 'Understand the website, target audience, business goals, and existing search visibility.',
    },
    {
      step: '02',
      title: 'RESEARCH',
      description: 'Analyze keywords, search intent, competing content, and opportunities for improvement.',
    },
    {
      step: '03',
      title: 'OPTIMIZE',
      description: 'Improve relevant page elements, content quality, internal linking, and technical SEO foundations.',
    },
    {
      step: '04',
      title: 'MEASURE',
      description: 'Review available analytics, monitor search performance, and identify the next optimization priorities.',
    },
  ] as ProcessStep[],

  skillsCategories: [
    {
      id: 'keyword-research',
      name: 'KEYWORD RESEARCH AND ANALYSIS',
      items: [
        'Keyword Research',
        'Search Intent Analysis',
        'Competitor Keyword Analysis',
        'Keyword Mapping',
        'Content Gap Analysis',
        'Topic Research',
      ],
    },
    {
      id: 'on-page-seo',
      name: 'ON-PAGE SEO',
      items: [
        'Title Tag Optimization',
        'Meta Description Optimization',
        'Heading Structure',
        'Internal Linking',
        'URL Optimization',
        'Image SEO',
        'Content Optimization',
      ],
    },
    {
      id: 'technical-seo',
      name: 'TECHNICAL SEO',
      items: [
        'Website SEO Audits',
        'Crawling and Indexing Analysis',
        'XML Sitemap Checks',
        'Robots.txt Review',
        'Canonical Tag Checks',
        'Redirect and Broken-Link Analysis',
        'Mobile SEO',
        'Page Speed and Core Web Vitals Fundamentals',
        'Structured Data Fundamentals',
      ],
    },
    {
      id: 'content-seo',
      name: 'CONTENT SEO',
      items: [
        'SEO Content Writing',
        'Content Planning',
        'Content Optimization',
        'Content Refreshing',
        'Search Intent Alignment',
        'SEO-Friendly Content Structure',
      ],
    },
    {
      id: 'analytics-reporting',
      name: 'ANALYTICS AND REPORTING',
      items: [
        'Organic Traffic Analysis',
        'Google Search Console',
        'Google Analytics 4',
        'Clicks and Impressions Analysis',
        'CTR Analysis',
        'Landing Page Performance',
        'SEO Reporting',
        'Performance Monitoring',
      ],
    },
  ] as SkillCategory[],

  services: [
    {
      id: 'keyword-research',
      number: '01',
      title: 'KEYWORD RESEARCH',
      description: 'Discover relevant search terms and search intent to guide content and optimization priorities.',
      focusAreas: ['Search Intent Mapping', 'Search Volume Assessment', 'Keyword Opportunity Clusters'],
    },
    {
      id: 'on-page-seo',
      number: '02',
      title: 'ON-PAGE SEO',
      description: 'Improve titles, meta descriptions, headings, internal links, and page content.',
      focusAreas: ['Title & Meta Refinement', 'Heading Organization (H1–H6)', 'Internal Link Equity'],
    },
    {
      id: 'technical-seo',
      number: '03',
      title: 'TECHNICAL SEO',
      description: 'Identify crawlability, indexing, sitemap, canonical, redirect, and website structure issues.',
      focusAreas: ['Crawl Error Checks', 'Indexation Directives', 'Sitemap & Robots.txt Review'],
    },
    {
      id: 'seo-content-writing',
      number: '04',
      title: 'SEO CONTENT WRITING',
      description: 'Plan and optimize useful content aligned with search intent and relevant topics.',
      focusAreas: ['User-Focused Writing', 'Search Intent Alignment', 'Content Readability'],
    },
    {
      id: 'competitor-analysis',
      number: '05',
      title: 'COMPETITOR ANALYSIS',
      description: 'Review competing content and identify potential opportunities for better search visibility.',
      focusAreas: ['SERP Competitor Benchmarks', 'Content Gap Discovery', 'Search Opportunity Finding'],
    },
    {
      id: 'website-seo-audits',
      number: '06',
      title: 'WEBSITE SEO AUDITS',
      description: 'Review website pages and technical signals to identify issues and prioritize improvements.',
      focusAreas: ['On-Site Technical Health', 'Mobile Usability Signals', 'Page Speed Checks'],
    },
    {
      id: 'organic-traffic-growth',
      number: '07',
      title: 'ORGANIC TRAFFIC GROWTH',
      description: 'Combine keyword research, content improvements, and technical recommendations into a sustainable SEO workflow.',
      focusAreas: ['Systematic Optimization', 'Sustainable Practices', 'Continuous Refinement'],
    },
    {
      id: 'seo-analytics-reporting',
      number: '08',
      title: 'SEO ANALYTICS AND REPORTING',
      description: 'Analyze available search performance data to understand trends and guide optimization decisions.',
      focusAreas: ['Search Console Metrics', 'GA4 Traffic Insights', 'Keyword Trend Monitoring'],
    },
  ] as ServiceItem[],

  projects: [
    {
      id: 'twenty47-logistics',
      name: 'Twenty47 Logistics',
      url: 'https://twenty47logistics.com/',
      category: 'Logistics',
      title: 'Twenty47 Logistics Website',
      badge: 'LOGISTICS',
      description: 'A logistics website featured in my portfolio, representing opportunities to examine content relevance, site structure, search visibility, and user experience.',
      analysisFocus: [
        'Logistics & Freight Keyword Mapping Opportunities',
        'Site Architecture & Service Category Navigation',
        'Title Tag & Meta Description Optimization',
        'Mobile Usability & Technical Crawlability Checks',
      ],
    },
    {
      id: 'royal-cosmetic-surgery',
      name: 'Royal Cosmetic Surgery',
      url: 'https://www.royalcosmeticsurgery.com.pk/',
      category: 'Cosmetic Surgery / Healthcare',
      title: 'Royal Cosmetic Surgery Website',
      badge: 'HEALTHCARE / COSMETICS',
      description: 'A healthcare website featured in my portfolio, highlighting the importance of relevant content, search intent, on-page SEO, and technical website health.',
      analysisFocus: [
        'Healthcare Search Intent Alignment',
        'Procedure Page Hierarchy & Content Depth',
        'Local Search Considerations & Regional Queries',
        'Informational Query Organization & User Trust Signals',
      ],
    },
    {
      id: 'revline-medical-solutions',
      name: 'Revline Medical Solutions',
      url: 'https://revlinemedicalsolutions.com/',
      category: 'Medical Solutions',
      title: 'Revline Medical Solutions Website',
      badge: 'MEDICAL SOLUTIONS',
      description: 'A medical solutions website included in my portfolio for showcasing SEO considerations, content structure, and organic search visibility opportunities.',
      analysisFocus: [
        'Medical Equipment & Service Page Architecture',
        'Search Intent Alignment for Professional B2B Solutions',
        'Technical SEO, Indexing Directives, and Sitemap Structure',
        'Call-To-Action Placement and Inquiry Pathways',
      ],
    },
    {
      id: 'es-connect',
      name: 'ES Connect',
      url: 'https://esconnect.co.uk/',
      category: 'Business Website',
      title: 'ES Connect UK Website',
      badge: 'BUSINESS SERVICES',
      description: 'A business website featured in my portfolio, offering a context for evaluating search relevance, page structure, content optimization, and technical SEO considerations.',
      analysisFocus: [
        'UK Business Service Search Relevance',
        'Page Structure, Hierarchy, and Internal Linking',
        'Content Optimization & Value Proposition Visibility',
        'Technical SEO Considerations & Fast Loading Experience',
      ],
    },
    {
      id: 'hair-transplant-islamabad',
      name: 'Hair Transplant in Islamabad',
      url: 'https://hairtransplantinislamabad.com/',
      category: 'Hair Restoration / Healthcare',
      title: 'Hair Transplant Islamabad Website',
      badge: 'LOCAL HEALTHCARE',
      description: 'A specialized healthcare website featured in my portfolio, relevant to local search intent, service-page optimization, content relevance, and local SEO considerations.',
      analysisFocus: [
        'Local SEO Signals for Islamabad & Surrounding Regions',
        'High-Intent Consultation Search Terms',
        'Service-Page Content Relevance & FAQ Formatting',
        'On-Page Metadata, Heading Hierarchy, and Image Alt Attributes',
      ],
    },
    {
      id: 'dental-clinic-islamabad',
      name: 'Dental Clinic Islamabad',
      url: 'https://dentalclinicislamabad.com/',
      category: 'Dental / Healthcare',
      title: 'Dental Clinic Islamabad Website',
      badge: 'DENTAL HEALTHCARE',
      description: 'A dental services website featured in my portfolio, highlighting local search visibility, service-page content, on-page optimization, and technical SEO considerations.',
      analysisFocus: [
        'Dental Practice Local Search Intent & Map Alignment',
        'Service-Page Optimization (Treatments, Emergency Care, Consultations)',
        'Technical SEO Audits & Mobile Accessibility',
        'User Journey from Search Result to Appointment Inquiry',
      ],
    },
  ] as Project[],

  tools: [
    'Google Search Console',
    'Google Analytics 4',
    'Screaming Frog SEO Spider (Audits)',
    'PageSpeed Insights & Core Web Vitals',
    'Keyword Research Tools',
    'XML Sitemap & Robots.txt Analyzers',
    'SERP Competitor Analysis',
    'Schema Structured Data Testing',
  ],

  resumeData: {
    summary: 'SEO Specialist based in Pakistan with approximately 1.5 years of combined practical and ongoing experience across office environments. Focused on sustainable organic search growth through methodical keyword research, on-page optimization, technical site audits, content planning, and performance analysis via Google Search Console and GA4.',
    experience: [
      {
        role: 'SEO Specialist — Organic Search & Optimization',
        company: 'Office & Professional Engagements',
        period: '2025 – Present (~1 Year Practical SEO Experience)',
        location: 'Pakistan',
        bullets: [
          'Conducted keyword research and search intent mapping to identify organic search visibility opportunities.',
          'Optimized on-page elements including title tags, meta descriptions, heading structures (H1–H6), internal links, and image alt text.',
          'Evaluated technical crawlability, indexation directives, XML sitemaps, and robots.txt files using audit tools.',
          'Developed content outlines aligned with search intent and topical relevance to support organic visibility.',
          'Monitored impressions, clicks, CTR, and keyword rankings using Google Search Console and Google Analytics 4.',
        ],
      },
      {
        role: 'Digital Operations & Search Support',
        company: 'Professional Office Engagement',
        period: '6 Months Practical Experience',
        location: 'Pakistan',
        bullets: [
          'Assisted with website content auditing, structural link checks, and mobile-friendliness reviews.',
          'Analyzed user navigation paths and search-focused content formatting to support on-page engagement.',
          'Collaborated with operational teams on reporting keyword trends and search performance metrics.',
        ],
      },
    ],
    coreCompetencies: [
      'Keyword Research & Intent Mapping',
      'On-Page SEO & Metadata Optimization',
      'Technical SEO (Crawlability, Robots.txt, XML Sitemaps)',
      'Google Search Console & GA4 Performance Analysis',
      'SEO Content Writing & Content Planning',
      'Competitor Keyword & SERP Gap Analysis',
    ],
  },
};
