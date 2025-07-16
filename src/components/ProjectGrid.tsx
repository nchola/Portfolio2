
import React from 'react';
import { projects } from '@/data/projects';
import ProjectCard from './ProjectCard';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import ProjectImageModal from './ProjectImageModal';
import GlitchText from '@/Animations/GlitchText/GlitchText';
import GridMotion from '@/Animations/GridMotion/GridMotion';

const ProjectGrid: React.FC = () => {
  // Separate projects by media type for potential filtering
  const youtubeProjects = projects.filter(p => p.mediaType === 'youtube');
  const websiteProjects = projects.filter(p => p.mediaType === 'website');
  const imageProjects = projects.filter(p => p.mediaType === 'image');
  
  // Modal state
  const [modalProject, setModalProject] = React.useState<null | typeof projects[0]>(null);

  // Handler for card click
  const handleCardClick = (project: typeof projects[0]) => {
    setModalProject(project);
  };

  // Handler for closing modal
  const handleCloseModal = () => setModalProject(null);

  // CDN images for testing
  const gridImages = [
    'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
    'https://images.unsplash.com/photo-1465101046530-73398c7f28ca',
    'https://images.unsplash.com/photo-1519125323398-675f0ddb6308',
    'https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1',
    'https://images.unsplash.com/photo-1519985176271-adb1088fa94c',
    'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e',
    'https://images.unsplash.com/photo-1465101178521-c1a9136a3b99',
    'https://images.unsplash.com/photo-1465101046530-73398c7f28ca',
    'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
    'https://images.unsplash.com/photo-1519125323398-675f0ddb6308',
    'https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1',
    'https://images.unsplash.com/photo-1519985176271-adb1088fa94c',
    'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e',
    'https://images.unsplash.com/photo-1465101178521-c1a9136a3b99',
    'https://images.unsplash.com/photo-1465101046530-73398c7f28ca',
    'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
    'https://images.unsplash.com/photo-1519125323398-675f0ddb6308',
    'https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1',
    'https://images.unsplash.com/photo-1519985176271-adb1088fa94c',
    'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e',
    'https://images.unsplash.com/photo-1465101178521-c1a9136a3b99',
    'https://images.unsplash.com/photo-1465101046530-73398c7f28ca',
    'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
    'https://images.unsplash.com/photo-1519125323398-675f0ddb6308',
    'https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1',
    'https://images.unsplash.com/photo-1519985176271-adb1088fa94c',
    'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e',
    'https://images.unsplash.com/photo-1465101178521-c1a9136a3b99',
  ];
  return (
    <section id="projects" className="relative w-full max-w-none overflow-hidden min-h-[120vh] bg-static-white dark:bg-void-black mb-[20vh]">
      {/* GridMotion background fullbleed */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
        <GridMotion items={gridImages} gradientColor="#222" />
      </div>
      <div className="relative z-10">
        {/* Header (centered, pakai container atau px-4) */}
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-12">
            <span className="inline-block text-xs uppercase tracking-wider text-quantum-gray dark:text-static-white/70 mb-2">
              Selected Work
            </span>
            <GlitchText
              speed={0.3}
              enableShadows={true}
              enableOnHover={false}
              className="text-4xl md:text-5xl font-cormorant font-bold text-void-black dark:text-static-white"
            >
              Projects
            </GlitchText>
          </div>
        </div>
        {/* Mobile Carousel View */}
        <div className="block md:hidden px-2">
          <Carousel className="w-full">
            <CarouselContent>
              {projects.map((project) => (
                <CarouselItem key={project.id}>
                  <ProjectCard project={project} onViewImages={() => handleCardClick(project)} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-2 mt-4">
              <CarouselPrevious className="static transform-none" />
              <CarouselNext className="static transform-none" />
            </div>
          </Carousel>
        </div>
        {/* Desktop Grid View fullbleed */}
        <div className="hidden md:grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-2 md:px-8">
          {projects.map((project) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              onViewImages={() => handleCardClick(project)}
            />
          ))}
          
        </div>
        
      </div>
      
      {/* Project Image Modal */}
      {modalProject && (
        <ProjectImageModal
          open={!!modalProject}
          onClose={handleCloseModal}
          images={modalProject.images || [modalProject.thumbnailSrc]}
          title={modalProject.title}
        />
      )}
    </section>
  );
};

export default ProjectGrid;
