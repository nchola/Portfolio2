import React from 'react';
import { projects } from '@/data/projects';
import ProjectCard from './ProjectCard';

const ProjectGrid: React.FC = () => {
  return (
    <section id="projects" className="section portfolio-section bg-static-white dark:bg-void-black">
      <div className="container">
        <div className="mb-12">
          <span className="inline-block text-xs uppercase tracking-wider text-quantum-gray dark:text-static-white/70 mb-2">
            Selected Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-void-black dark:text-static-white">
            Projects
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-asymmetric gap-6">
          {projects.map((project) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectGrid;
