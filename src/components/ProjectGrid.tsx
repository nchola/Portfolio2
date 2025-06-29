import React from 'react';
import { projects } from '@/data/projects';
import ProjectCard from './ProjectCard';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import ProjectImageModal from './ProjectImageModal';

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

  return (
    <section id="projects" className="section bg-static-white dark:bg-void-black">
      <div className="container">
        <div className="mb-12">
          <span className="inline-block text-xs uppercase tracking-wider text-quantum-gray dark:text-static-white/70 mb-2">
            Selected Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-void-black dark:text-static-white">
            Projects
          </h2>
        </div>
        
        {/* Mobile Carousel View */}
        <div className="block md:hidden">
          <Carousel className="w-full">
            <CarouselContent>
              {projects.map((project) => (
                <CarouselItem key={project.id}>
                  <ProjectCard 
                    project={project} 
                    onImageClick={() => handleCardClick(project)}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-2 mt-4">
              <CarouselPrevious className="static transform-none" />
              <CarouselNext className="static transform-none" />
            </div>
          </Carousel>
        </div>
        
        {/* Desktop Grid View */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              onClick={() => handleCardClick(project)}
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
