export interface SkillGroup {
  label: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    label: 'Mobile',
    skills: ['Flutter / Dart', 'Swift / Xcode', 'iOS & Android'],
  },
  {
    label: 'Frontend',
    skills: ['React', 'HTML / CSS', 'UI/UX · Figma'],
  },
  {
    label: 'Backend',
    skills: ['Python', 'SQL · Firebase', 'AWS S3 · APIs', 'Azure'],
  },
  {
    label: 'Tools & More',
    skills: ['Power BI', 'HubSpot · Monday.com', 'Twilio', 'GitHub · Agile'],
  },
];
