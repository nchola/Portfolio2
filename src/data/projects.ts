
export interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  technologies: string[];
  thumbnailSrc: string;
  gitMetadata: {
    commits: number;
    lastUpdated: string;
    contributors: number;
  };
}

export const projects: Project[] = [
  {
    id: 'project-1',
    title: 'Polyglotpath',
    description: 'A mobile-based forum application that allows users to learn languages through discussions and collaboration.',
    category: 'Mobile Application',
    technologies: ['Flutter', 'Firebase', 'Google Cloud Console'],
    thumbnailSrc: 'https://www.youtube.com/watch?v=K3Vq_peTSTI',
    gitMetadata: {
      commits: 47,
      lastUpdated: '2023-12-15',
      contributors: 2,
    },
  },
  {
    id: 'project-2',
    title: 'Architectural Visualization Tool',
    description: 'Real-time 3D visualization tool for architectural concepts',
    category: 'Web Application',
    technologies: ['Three.js', 'WebGL', 'React'],
    thumbnailSrc: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=1170&auto=format&fit=crop',
    gitMetadata: {
      commits: 92,
      lastUpdated: '2023-11-03',
      contributors: 3,
    },
  },
  {
    id: 'project-3',
    title: 'Monochromatic Photography Portfolio',
    description: 'Minimalist photography showcase with focus on composition',
    category: 'Photography',
    technologies: ['HTML', 'CSS Grid', 'Vanilla JS'],
    thumbnailSrc: 'https://images.unsplash.com/photo-1517821099606-cef63a9bcda6?q=80&w=1176&auto=format&fit=crop',
    gitMetadata: {
      commits: 24,
      lastUpdated: '2023-10-21',
      contributors: 1,
    },
  },
  {
    id: 'project-4',
    title: 'Brutalist Blog Theme',
    description: 'Content-focused blog design with brutalist principles',
    category: 'Web Design',
    technologies: ['React', 'Styled Components', 'GraphQL'],
    thumbnailSrc: 'https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?q=80&w=1170&auto=format&fit=crop',
    gitMetadata: {
      commits: 63,
      lastUpdated: '2023-09-14',
      contributors: 2,
    },
  },
  {
    id: 'project-5',
    title: 'Minimalist E-commerce System',
    description: 'Clean, conversion-focused e-commerce template',
    category: 'E-commerce',
    technologies: ['Next.js', 'Tailwind CSS', 'Stripe API'],
    thumbnailSrc: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1115&auto=format&fit=crop',
    gitMetadata: {
      commits: 118,
      lastUpdated: '2023-08-30',
      contributors: 4,
    },
  },
  {
    id: 'project-6',
    title: 'Geometric Data Visualization',
    description: 'Abstract geometric patterns representing complex datasets',
    category: 'Data Visualization',
    technologies: ['D3.js', 'SVG', 'TypeScript'],
    thumbnailSrc: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?q=80&w=1170&auto=format&fit=crop',
    gitMetadata: {
      commits: 51,
      lastUpdated: '2023-07-22',
      contributors: 2,
    },
  },
];
