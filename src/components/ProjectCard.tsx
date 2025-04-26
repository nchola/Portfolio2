import React, { useRef, useEffect, useState } from 'react';
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
  // State for current image index in carousel
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // For this to work, we need to modify the Project interface to include multiple images
  // This assumes project has an 'images' array containing image URLs
  const images = project.images || [project.thumbnailSrc];

  // Auto-cycle through images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds
    
    return () => clearInterval(interval);
  }, [images.length]);

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
        "project-card group h-[350px] md:h-[350px] overflow-hidden shadow-md",
        className
      )}
    >
      <div className="h-full w-full relative">
        <AspectRatio ratio={16/9} className="w-full h-[220px] md:h-[260px] lg:h-[300px] bg-gray-100 dark:bg-void-black/30 rounded-t-md overflow-hidden">
          <div className="relative w-full h-full bg-void-black/30">
            {/* Images for carousel */}
            {images.map((imgSrc, index) => (
              <img 
                key={index}
                src={imgSrc}
                alt={`${project.title} - ${index + 1}`}
                className={cn(
                  "absolute top-0 left-0 w-full h-full object-contain md:object-contain transition-opacity duration-500",
                  index === currentImageIndex ? "opacity-100" : "opacity-0"
                )}
                style={{
                  minHeight: '250px',
                  maxHeight: '100%',
                  width: '100%',
                  background: '#222'
                }}
              />
            ))}
          </div>
        </AspectRatio>
        
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-60 dark:from-void-black dark:opacity-70"></div>
        
        <div className="project-overlay p-4 md:p-6 flex flex-col justify-between">
          <div>
            <span className="text-xs uppercase tracking-wider bg-void-black/80 text-static-white px-3 py-1 rounded-full">
              {project.category}
            </span>
            <h3 className="mt-3 md:mt-4 text-xl md:text-2xl font-bold text-static-white">
              {project.title}
            </h3>
            <p className="mt-2 text-sm text-static-white/90 line-clamp-2 md:line-clamp-none">
              {project.description}
            </p>
          </div>
          
          <div className="mt-auto">
            <div className="flex flex-wrap gap-2 mt-3 md:mt-4">
              {project.technologies.map((tech, index) => (
                <span 
                  key={index}
                  className="text-[10px] md:text-xs bg-void-black/70 text-static-white px-2 py-1 rounded"
                >
                  {tech}
                </span>
              ))}
            </div>
            
            {/* Image carousel indicators */}
            {images.length > 1 && (
              <div className="flex gap-1 mt-2 md:mt-3 justify-center">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={cn(
                      "w-1.5 h-1.5 md:w-2 md:h-2 rounded-full transition-all",
                      index === currentImageIndex 
                        ? "bg-gilded-parchment" 
                        : "bg-static-white/40"
                    )}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>
            )}
            
            {/* Media link/preview */}
            {(project.viewUrl || project.mediaType === 'image') && (
              <div className="mt-3 md:mt-4">
                <Button 
                  variant="outline" 
                  size="sm"
                  className="w-full md:w-auto bg-gilded-parchment/20 border-gilded-parchment/40 hover:bg-gilded-parchment/30 text-static-white text-sm md:text-base py-2 md:py-2.5"
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
              </div>
            )}
            
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;