
import React, { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { cn } from '@/lib/utils';

interface Skill {
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'tools' | 'other';
}

const skills: Skill[] = [
  // Frontend skills
  { name: 'React', level: 85, category: 'frontend' },
  { name: 'TypeScript', level: 80, category: 'frontend' },
  { name: 'HTML/CSS', level: 90, category: 'frontend' },
  { name: 'JavaScript', level: 85, category: 'frontend' },
  { name: 'Tailwind CSS', level: 90, category: 'frontend' },
  { name: 'Next.js', level: 75, category: 'frontend' },
  
  // Backend skills
  { name: 'Node.js', level: 75, category: 'backend' },
  { name: 'Express', level: 70, category: 'backend' },
  { name: 'MongoDB', level: 65, category: 'backend' },
  { name: 'PostgreSQL', level: 60, category: 'backend' },
  { name: 'RESTful API', level: 80, category: 'backend' },
  
  // Tools and others
  { name: 'Git', level: 85, category: 'tools' },
  { name: 'Docker', level: 60, category: 'tools' },
  { name: 'CI/CD', level: 65, category: 'tools' },
  { name: 'Figma', level: 70, category: 'tools' },
  { name: 'Agile', level: 75, category: 'other' },
  { name: 'Problem Solving', level: 85, category: 'other' },
  { name: 'Team Collaboration', level: 90, category: 'other' },
];

const SkillsMatrix: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredSkills = selectedCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === selectedCategory);

  return (
    <section id="skills" className="py-16 md:py-24 bg-static-white/50 dark:bg-void-black/50 relative">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-cormorant font-bold text-quantum-gray dark:text-static-white mb-8 text-center">
          Technical Skills
        </h2>

        {/* Category Filter */}
        <div className="flex justify-center mb-12 flex-wrap gap-2">
          {['all', 'frontend', 'backend', 'tools', 'other'].map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={cn(
                "px-4 py-2 rounded-full text-sm transition-all duration-300",
                selectedCategory === category
                  ? "bg-gilded-parchment text-void-black font-medium"
                  : "bg-quantum-gray/10 dark:bg-quantum-gray/20 text-quantum-gray dark:text-static-white hover:bg-gilded-parchment/20"
              )}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {filteredSkills.map((skill, index) => (
            <Card 
              key={index}
              className="p-4 border border-quantum-gray/10 dark:border-static-white/10 bg-static-white/50 dark:bg-void-black/50 backdrop-blur-sm"
            >
              <div className="mb-2 flex justify-between items-center">
                <h3 className="font-medium text-quantum-gray dark:text-static-white">{skill.name}</h3>
                <span className="text-sm text-gilded-parchment font-semibold">{skill.level}%</span>
              </div>
              <Progress 
                value={skill.level} 
                className="h-2 bg-quantum-gray/20 dark:bg-static-white/10"
              />
              <div className="h-1.5" />
              <span className="text-xs text-quantum-gray/60 dark:text-static-white/60 italic">
                {skill.category.charAt(0).toUpperCase() + skill.category.slice(1)}
              </span>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsMatrix;
