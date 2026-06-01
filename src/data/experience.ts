export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string;
  tags: string[];
  featured: boolean;
  highlight?: string;
}

export const experiences: Experience[] = [
  {
    id: 'roshal',
    company: 'Roshal Health',
    role: 'Software Engineer · IT Department',
    period: 'Nov 2024 – Present',
    description:
      'Building web client and admin portals, REST APIs, mobile apps for iOS and Android, database architecture, and automated reporting dashboards for clinical and operational departments. Integrated HubSpot and Monday.com workflows and built Power BI dashboards across teams.',
    tags: ['Flutter', 'React', 'SQL', 'Power BI', 'HubSpot', 'Monday.com', 'Twilio', 'Azure', 'iOS', 'Android', 'APIs'],
    featured: true,
  },
  {
    id: 'suros',
    company: 'Suros Logic Systems LLC',
    role: 'Co-Founder · Full Stack Developer',
    period: 'Dec 2025 – Present',
    description:
      'AI-powered bid creation platform for contractors. Designed and built the entire software from the ground up — architecture, frontend, backend, and UI/UX. Co-founded with Caleb Combs.',
    tags: ['AI', 'React', 'SaaS', 'Full Stack', 'UI/UX'],
    featured: true,
  },
  {
    id: 'waves',
    company: 'The Waves App LLC',
    role: 'Co-Founder · Co-CTO',
    period: 'Nov 2022 – Present',
    description:
      'Cross-platform film community platform for iOS and Android. Built the full stack — Flutter/Dart frontend, Firebase + AWS S3 + BunnyCDN backend, RevenueCat subscriptions. Led all mobile development, UI/UX design, algorithm design, and financial planning.',
    tags: ['Flutter/Dart', 'Firebase', 'AWS S3', 'BunnyCDN', 'RevenueCat', 'iOS', 'Android'],
    featured: true,
    highlight: '$50K raised · $1.5M valuation · 3,500+ users',
  },
  {
    id: 'gladful',
    company: 'Gladful Inc.',
    role: 'Co-Founder · Lead App Developer',
    period: 'May 2021 – Present',
    description:
      'Mental health peer support app. Led full-stack Flutter/Dart development and UI/UX design. Executed Beta launches on App Store and Google Play. Developed pitch video for consideration by Jillian Michaels.',
    tags: ['Flutter/Dart', 'Firebase', 'Figma', 'iOS', 'Android'],
    featured: true,
  },
  {
    id: 'msoft',
    company: 'M Soft LLC',
    role: 'Contract Lead App Developer',
    period: 'Nov 2023 – Dec 2024',
    description:
      'Contract lead developer on a social app for iOS and Android built with Flutter/Dart. Managed Beta launches and the overall development lifecycle using Agile methodology.',
    tags: ['Flutter/Dart', 'iOS', 'Android', 'Agile'],
    featured: false,
  },
  {
    id: 'jetage',
    company: 'Jet Age Fuel, Inc.',
    role: 'Contract Lead App Developer',
    period: 'May – Sep 2022',
    description:
      'Solely developed a document scanning app using Flutter/Dart. Designed and implemented the full UI/UX. Deployed via Apple Business Manager and Hexnode MDM.',
    tags: ['Flutter/Dart', 'Apple Business Manager', 'Hexnode MDM', 'iOS'],
    featured: false,
  },
  {
    id: 'g4c',
    company: 'G4C Cross-Cultural Game Jam',
    role: 'Game Leader',
    period: 'Nov 2022',
    description:
      'Led a team during a week-long challenge against 100+ students worldwide, designing and developing a mental health-inspired game using Unity. Won the Visual Excellence Award.',
    tags: ['Unity', 'C#', 'Game Design'],
    featured: false,
    highlight: 'Visual Excellence Award',
  },
];
