
import React, { useRef, useEffect } from 'react';
import { Project } from '@/data/projects';
import { cn } from '@/lib/utils';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Youtube, Image as ImageIcon } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  className?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, className }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const tiltX = (y - centerY) / 10;
      const tiltY = (centerX - x) / 10;
      
      card.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(1.02, 1.02, 1.02)`;
    };
    
    const handleMouseLeave = () => {
      card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
    };
    
    card.addEventListener('mousemove', handleMouseMove);
    card.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      card.removeEventListener('mousemove', handleMouseMove);
      card.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  // Get appropriate media icon based on project type
  const getMediaIcon = () => {
    switch (project.mediaType) {
      case 'youtube':
        return <Youtube className="mr-2" size={16} />;
      case 'website':
        return <ExternalLink className="mr-2" size={16} />;
      case 'image':
      default:
        return <ImageIcon className="mr-2" size={16} />;
    }
  };

  // Get appropriate media action text
  const getMediaActionText = () => {
    switch (project.mediaType) {
      case 'youtube':
        return 'Watch Demo';
      case 'website':
        return 'Visit Site';
      case 'image':
      default:
        return 'View Project';
    }
  };

  return (
    <div 
      ref={cardRef}
      className={cn(
        "project-card group h-[350px] overflow-hidden shadow-md",
        className
      )}
    >
      <div className="h-full w-full relative">
        <AspectRatio ratio={16/9} className="h-full">
          <img 
            src={project.thumbnailSrc}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </AspectRatio>
        
        <div className="absolute inset-0 bg-gradient-to-t from-void-black to-transparent opacity-70"></div>
        
        <div className="project-overlay p-6 flex flex-col justify-between">
          <div>
            <span className="text-xs uppercase tracking-wider bg-void-black/80 text-static-white px-3 py-1 rounded-full">
              {project.category}
            </span>
            <h3 className="mt-4 text-2xl font-bold text-static-white">
              {project.title}
            </h3>
            <p className="mt-2 text-sm text-static-white/90">
              {project.description}
            </p>
          </div>
          
          <div className="mt-auto">
            <div className="flex flex-wrap gap-2 mt-4">
              {project.technologies.map((tech, index) => (
                <span 
                  key={index}
                  className="text-xs bg-void-black/70 text-static-white px-2 py-1 rounded"
                >
                  {tech}
                </span>
              ))}
            </div>
            
            {/* Media link/preview */}
            {(project.viewUrl || project.mediaType === 'image') && (
              <div className="mt-4">
                <HoverCard>
                  <HoverCardTrigger asChild>
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="bg-gilded-parchment/20 border-gilded-parchment/40 hover:bg-gilded-parchment/30 text-static-white"
                      onClick={(e) => {
                        e.preventDefault();
                        if (project.viewUrl) {
                          window.open(project.viewUrl, '_blank');
                        }
                      }}
                    >
                      {getMediaIcon()}
                      {getMediaActionText()}
                    </Button>
                  </HoverCardTrigger>
                  <HoverCardContent side="top" className="w-80 p-0">
                    <div className="rounded-md overflow-hidden">
                      {project.mediaType === 'youtube' ? (
                        <AspectRatio ratio={16/9}>
                          <div className="bg-void-black/20 w-full h-full flex items-center justify-center">
                            <Youtube className="text-gilded-parchment" size={40} />
                            <span className="ml-2 text-sm text-static-white">YouTube Preview</span>
                          </div>
                        </AspectRatio>
                      ) : (
                        <AspectRatio ratio={16/9}>
                          <img 
                            src={project.thumbnailSrc} 
                            alt={project.title}
                            className="w-full h-full object-cover" 
                          />
                        </AspectRatio>
                      )}
                    </div>
                  </HoverCardContent>
                </HoverCard>
              </div>
            )}
            
            <div className="mt-4 text-xs text-static-white/80 flex items-center space-x-4">
              <span>
                {project.gitMetadata.commits} commits
              </span>
              <span>
                Updated: {project.gitMetadata.lastUpdated}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
