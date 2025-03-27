
import React, { useRef, useEffect } from 'react';
import { Project } from '@/data/projects';
import { cn } from '@/lib/utils';

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

  return (
    <div 
      ref={cardRef}
      className={cn(
        "project-card group h-[350px] overflow-hidden shadow-md",
        className
      )}
    >
      <div className="h-full w-full relative">
        <img 
          src={project.thumbnailSrc}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
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
