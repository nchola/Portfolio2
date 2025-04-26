export interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  technologies: string[];
  thumbnailSrc: string;
  images?: string[];
  mediaType: 'youtube' | 'image' | 'website';
  viewUrl?: string;
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
    thumbnailSrc: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1632&auto=format&fit=crop',
    images: [
      "/projects/polyglotpath/Loginscreen.png",
      "/projects/polyglotpath/SignupScreen.png",
      "/projects/polyglotpath/Homescreen.png",
      "/projects/polyglotpath/Favoritescreen.png",
      "/projects/polyglotpath/Communityforum.png",
      "/projects/polyglotpath/ForumPageScreen.png",
      "/projects/polyglotpath/ForumDetailScreen.png",
      "/projects/polyglotpath/detailScreen1-levelScreen.png",
      "/projects/polyglotpath/detailScreen2-lessonScreen.png",
      "/projects/polyglotpath/GeminiAI-ChatScreen.png",
      "/projects/polyglotpath/Profilescreen.png",
      "/projects/polyglotpath/EditProfilescreen.png"
    ],
    mediaType: 'youtube',
    viewUrl: 'https://www.youtube.com/watch?v=K3Vq_peTSTI',
    gitMetadata: {
      commits: 70,
      lastUpdated: '2024-06-15',
      contributors: 1,
    },
  },
  {
    id: 'project-2',
    title: 'Frontend Anime Catalog',
    description: 'A modern cyberpunk-themed anime catalog with a focus on performance and user experience.',
    category: 'Web Application',
    technologies: ['React', 'Typescript', 'Tailwind CSS','Shadcn UI','Supabase'],
    thumbnailSrc: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=1170&auto=format&fit=crop',
    images: [
      "/projects/anime-cyber-hub/loading.png",
      "/projects/anime-cyber-hub/home.png",
      "/projects/anime-cyber-hub/signin.png",
      "/projects/anime-cyber-hub/animelist.png",
      "/projects/anime-cyber-hub/animedetail.png",
      "/projects/anime-cyber-hub/trailermodal.png",
      "/projects/anime-cyber-hub/searchsuggestion.png",
      "/projects/anime-cyber-hub/manga.png",
      "/projects/anime-cyber-hub/mangadetail.png",
      "/projects/anime-cyber-hub/footer&genre.png",
    ],
    mediaType: 'website',
    viewUrl: 'https://anime-cyber-hub.vercel.app/',
    gitMetadata: {
      commits: 96,
      lastUpdated: '2025-04-11',
      contributors: 2,
    },
  },
  {
    id: 'project-3',
    title: 'codeScale',
    description: 'Transforming ideas into high-performance web applications with modern design and clean code.',
    category: 'Web Application',
    technologies: ['React', 'Typescript', 'Tailwind CSS','Shadcn UI','Supabase','Midtrans'],
    thumbnailSrc: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=1170&auto=format&fit=crop',  
    mediaType: 'website',
    viewUrl: 'https://codescale.vercel.app/',
    images: [
      "/projects/codeScale/topsection.png",
      "/projects/codeScale/projectshwcs.png",
      "/projects/codeScale/brief.png",
      "/projects/codeScale/prjctcl.png",
    ],
    gitMetadata: {
      commits: 100,
      lastUpdated: '2025-04-11',
      contributors: 2,
    },

  },
  {
    id: 'project-4',
    title: 'codeScale',
    description: 'Transforming ideas into high-performance web applications with modern design and clean code.',
    category: 'Web Application',
    technologies: ['React', 'Typescript', 'Tailwind CSS','Radix UI','Supabase','NextJs'],
    thumbnailSrc: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=1170&auto=format&fit=crop',  
    mediaType: 'website',
    viewUrl: 'https://jengjangkarir.vercel.app/',
    images: [
      "/projects/jengjangkarir/image.png",
      "/projects/jengjangkarir/image1.png",
      "/projects/jengjangkarir/image2.png",
      "/projects/jengjangkarir/image3.png",
      "/projects/jengjangkarir/image4.png",
      "/projects/jengjangkarir/image5.png",
      "/projects/jengjangkarir/image6.png",
      "/projects/jengjangkarir/image7.png"

    ],
    gitMetadata: {
      commits: 112,
      lastUpdated: '2025-04-15',
      contributors: 1,
    },
  },
  {
    id: 'project-5',
    title: 'shadowarchetype',
    description: ' IMMERSIVE 3D EXPERIENCES AND VISUAL STORYTELLING',
    category: 'Web Application',
    technologies: ['React', 'Typescript', 'Tailwind CSS','Vite','Framer Motion','Sketchfab','React Virtual + Custom Optimization Strategies'],
    thumbnailSrc: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=1170&auto=format&fit=crop',  
    mediaType: 'website',
    viewUrl: 'https://shadowarchetype.vercel.app/',
    images: [
      "/projects/shadow-archetype/image.png",
      "/projects/shadow-archetype/image1.png",
      "/projects/shadow-archetype/image2.png",
      "/projects/shadow-archetype/image3.png",
      "/projects/shadow-archetype/image4.png",
    ],
    gitMetadata: {
      commits: 35,
      lastUpdated: '2025-04-124',
      contributors: 1
    }
  },
  {
    id: 'project-6',
    title: 'Pixel Bistro',
    description: 'A modern and stylish restaurant website that showcases the best of local cuisine.',
    category: 'Web Application',
    technologies: ['React', 'Typescript', 'Tailwind CSS','Lottie'],
    thumbnailSrc: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=1170&auto=format&fit=crop',  
    mediaType: 'website',
    viewUrl: 'https://pixel-bistro.vercel.app/',
    images: [
      "/projects/pixel-bistro/image1.png",
      "/projects/pixel-bistro/image2.png",
      "/projects/pixel-bistro/image3.png",
      "/projects/pixel-bistro/image4.png",
      "/projects/pixel-bistro/image5.png",
      "/projects/pixel-bistro/image6.png",
      "/projects/pixel-bistro/image7.png",
      "/projects/pixel-bistro/image8.png",
      "/projects/pixel-bistro/image9.png",
      "/projects/pixel-bistro/image10.png",
      "/projects/pixel-bistro/image11.png",
      "/projects/pixel-bistro/image12.png",
      
    ],
    gitMetadata: {
      commits: 200,
      lastUpdated: '2025-04-11',
      contributors: 1,
    },
  }
];
