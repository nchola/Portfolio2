
import React, { useState } from 'react';
import { cn } from '@/lib/utils';

interface Skill {
  id: string;
  name: string;
  type: 'technical';
  description: string;
  level: number; // 1-5, used for node size and progress bar
}

const skills: Skill[] = [
  { id: 'flutter', name: 'Flutter', type: 'technical', description: '80%', level: 5 },
  { id: 'dart', name: 'Dart', type: 'technical', description: '75%', level: 4 },
  { id: 'mongodb', name: 'MongoDB', type: 'technical', description: '70%', level: 4 },
  { id: 'mysql', name: 'MySQL', type: 'technical', description: '75%', level: 4 },
  { id: 'expressjs', name: 'ExpressJS', type: 'technical', description: '80%', level: 5 },
  { id: 'html', name: 'HTML', type: 'technical', description: '75%', level: 4 },
  { id: 'css', name: 'CSS', type: 'technical', description: '65%', level: 3 },
  { id: 'javascript', name: 'JavaScript', type: 'technical', description: '70%', level: 4 },
  { id: 'laravel', name: 'Laravel', type: 'technical', description: '70%', level: 4 },
  { id: 'nodejs', name: 'NodeJS', type: 'technical', description: '55%', level: 3 },
  { id: 'php', name: 'PHP', type: 'technical', description: '60%', level: 3 },
  { id: 'python', name: 'Python', type: 'technical', description: '70%', level: 4 },
];

const SkillsMatrix: React.FC = () => {
  const [activeSkill, setActiveSkill] = useState<Skill | null>(null);

  return (
    <section id="skills" className="section bg-void-black dark:bg-static-white pt-24">
      <div className="container">
        <div className="mb-12">
          <span className="inline-block text-xs uppercase tracking-wider text-static-white/70 dark:text-quantum-gray mb-2">
            Capabilities
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-static-white dark:text-void-black">
            Skills
          </h2>
          <p className="mt-4 text-lg text-static-white/80 dark:text-quantum-gray max-w-3xl">
            I have been learning programming since 2022. The main area of my expertise is Multi-Platform Developer.
            <br />
            Here are the technologies I have learned.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill) => (
            <div
              key={skill.id}
              className="bg-quantum-gray/10 dark:bg-static-white/10 rounded-md p-6 transition-all duration-300 hover:shadow-md hover:transform hover:scale-105"
              onMouseEnter={() => setActiveSkill(skill)}
              onMouseLeave={() => setActiveSkill(null)}
            >
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-xl font-bold text-static-white dark:text-void-black">{skill.name}</h4>
                <div className="w-12 h-12 rounded-full bg-gilded-parchment/20 flex items-center justify-center">
                  <span className="text-gilded-parchment font-bold">{skill.level}</span>
                </div>
              </div>
              
              <div className="w-full bg-static-white/10 dark:bg-quantum-gray/10 h-2 rounded-full overflow-hidden">
                <div 
                  className="bg-gilded-parchment h-full rounded-full" 
                  style={{ width: skill.description }}
                ></div>
              </div>
              <div className="text-right mt-2 text-static-white/60 dark:text-void-black/60 text-sm">
                {skill.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsMatrix;
