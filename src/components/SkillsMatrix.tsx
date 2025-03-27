
import React, { useState } from 'react';
import { cn } from '@/lib/utils';

interface Skill {
  id: string;
  name: string;
  type: 'technical' | 'conceptual';
  description: string;
  level: number; // 1-5
  position: { x: number; y: number }; // percentage values for positioning
}

const skills: Skill[] = [
  // Technical skills
  { id: 'skill-1', name: 'JavaScript', type: 'technical', description: 'Advanced', level: 5, position: { x: 30, y: 40 } },
  { id: 'skill-2', name: 'React', type: 'technical', description: 'Advanced', level: 5, position: { x: 65, y: 25 } },
  { id: 'skill-3', name: 'CSS/SCSS', type: 'technical', description: 'Advanced', level: 5, position: { x: 45, y: 65 } },
  { id: 'skill-4', name: 'TypeScript', type: 'technical', description: 'Intermediate', level: 4, position: { x: 22, y: 70 } },
  { id: 'skill-5', name: 'Node.js', type: 'technical', description: 'Intermediate', level: 3, position: { x: 75, y: 55 } },
  { id: 'skill-6', name: 'Three.js', type: 'technical', description: 'Intermediate', level: 3, position: { x: 85, y: 75 } },
  { id: 'skill-7', name: 'GraphQL', type: 'technical', description: 'Beginner', level: 2, position: { x: 15, y: 30 } },
  
  // Conceptual skills
  { id: 'skill-8', name: 'UX Design', type: 'conceptual', description: 'Advanced', level: 5, position: { x: 55, y: 35 } },
  { id: 'skill-9', name: 'Typography', type: 'conceptual', description: 'Advanced', level: 5, position: { x: 40, y: 20 } },
  { id: 'skill-10', name: 'Visual Design', type: 'conceptual', description: 'Advanced', level: 4, position: { x: 70, y: 40 } },
  { id: 'skill-11', name: 'Information Architecture', type: 'conceptual', description: 'Intermediate', level: 3, position: { x: 25, y: 50 } },
  { id: 'skill-12', name: 'Motion Design', type: 'conceptual', description: 'Intermediate', level: 3, position: { x: 60, y: 80 } },
];

const SkillsMatrix: React.FC = () => {
  const [activeSkill, setActiveSkill] = useState<Skill | null>(null);

  const getNodeSize = (level: number) => {
    const baseSize = 40;
    return baseSize + (level * 6);
  };

  return (
    <section id="skills" className="section bg-void-black dark:bg-static-white">
      <div className="container">
        <div className="mb-12">
          <span className="inline-block text-xs uppercase tracking-wider text-static-white/70 dark:text-quantum-gray mb-2">
            Capabilities
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-static-white dark:text-void-black">
            Skills
          </h2>
        </div>
        
        <div className="relative h-[500px] md:h-[600px] mx-auto max-w-3xl border border-gilded-parchment/30 rounded-full">
          {skills.map((skill) => (
            <div
              key={skill.id}
              className={cn(
                "skills-node",
                skill.type,
                activeSkill?.id === skill.id ? "ring-2 ring-gilded-parchment scale-110" : ""
              )}
              style={{
                width: `${getNodeSize(skill.level)}px`,
                height: `${getNodeSize(skill.level)}px`,
                left: `${skill.position.x}%`,
                top: `${skill.position.y}%`,
                zIndex: activeSkill?.id === skill.id ? 10 : 1,
              }}
              onMouseEnter={() => setActiveSkill(skill)}
              onMouseLeave={() => setActiveSkill(null)}
            >
              <span className="text-xs font-medium">{skill.name}</span>
              
              {activeSkill?.id === skill.id && (
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-void-black dark:bg-static-white text-static-white dark:text-void-black px-3 py-1 rounded text-xs whitespace-nowrap z-20">
                  {skill.description}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsMatrix;
