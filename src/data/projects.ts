export interface Project {
  id: string;
  name: string;
  description: string;
  tags: string[];
  badge: string;
  thumbClass: string;
  image?: string;
  imageFit?: 'cover' | 'contain';
  link?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: 'suros',
    name: 'Suros Logic Systems',
    description:
      'AI-powered bid creation platform for contractors. Designed and built the entire product from concept to launch — full stack, UI/UX, and infrastructure. Co-founded with Caleb Combs.',
    tags: ['AI', 'React', 'SaaS', 'Full Stack'],
    badge: 'AI · Bid Automation',
    thumbClass: 'project-thumb--suros',
    image: '/suros-logo.png',
    imageFit: 'cover',
    link: 'https://suroslogic.com',
    featured: true,
  },
  {
    id: 'waves',
    name: 'The Waves App',
    description:
      'Cross-platform film community platform for iOS and Android. Raised $50,000 at a $1.5M valuation. Full-stack build: Flutter/Dart frontend, Firebase + AWS S3 + BunnyCDN backend, RevenueCat subscriptions.',
    tags: ['Flutter', 'Firebase', 'AWS S3', 'iOS', 'Android'],
    badge: '$50K Raised · 3,500+ Users',
    thumbClass: 'project-thumb--waves',
    image: '/waves-logo.jpg',
    imageFit: 'cover',
    link: 'https://onlywave.tv/',
    featured: true,
  },
  {
    id: 'gladful',
    name: 'Gladful',
    description:
      'Peer support mental health app. Co-founded, built, and pitched to Jillian Michaels. Led full UI/UX design and cross-platform Flutter/Dart development.',
    tags: ['Flutter', 'Firebase', 'Figma'],
    badge: 'Mental Health',
    thumbClass: 'project-thumb--gladful',
    image: '/gladful_logo_desc_white.png',
    imageFit: 'contain',
    link: 'https://gladful.com',
    featured: false,
  },
  {
    id: 'spiral',
    name: 'Internal Spiral',
    description:
      'Mental health–inspired Unity game. Won Visual Excellence Award at G4C Cross-Cultural Game Jam, competing against 100+ students worldwide.',
    tags: ['Unity', 'C#', 'Game Design'],
    badge: '🏆 Visual Excellence Award',
    thumbClass: 'project-thumb--spiral',
    image: '/internal_spiral.jpeg',
    imageFit: 'cover',
    link: 'https://play.unity.com/mg/other/internal-spiral',
    featured: false,
  },
];
