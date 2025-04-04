
import React, { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { Skeleton } from '@/components/ui/skeleton';

interface Skill {
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'tools' | 'other';
}

interface Planet {
  name: string;
  color: string;
  size: number;
  orbitSize: number;
  speed: number;
  category: 'frontend' | 'backend' | 'tools' | 'other';
  level: number;
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

// Convert skills to planets for the solar system
const skillsToPlanets = (skills: Skill[]): Planet[] => {
  return skills.map((skill) => {
    const baseOrbitSize = 80; // Base size for orbit
    const orbitIncrease = 40; // How much each orbit increases
    
    // Calculate orbit size based on skill level and category
    let orbitMultiplier = 1;
    if (skill.category === 'backend') orbitMultiplier = 1.5;
    if (skill.category === 'tools') orbitMultiplier = 2;
    if (skill.category === 'other') orbitMultiplier = 2.5;
    
    // Calculate planet size based on skill level
    const size = 20 + (skill.level / 10);
    
    // Generate color based on category
    let color = '#C19A6B'; // Default (gilded-parchment)
    if (skill.category === 'frontend') color = '#3B82F6'; // blue-500
    if (skill.category === 'backend') color = '#10B981'; // emerald-500
    if (skill.category === 'tools') color = '#8B5CF6'; // violet-500
    if (skill.category === 'other') color = '#F59E0B'; // amber-500
    
    // Calculate orbit size and speed (higher skills are closer to center and move faster)
    const orbitSize = baseOrbitSize + ((4 - orbitMultiplier) * orbitIncrease);
    const speed = 20 + ((100 - skill.level) / 5); // Faster for higher skills

    return {
      name: skill.name,
      color,
      size,
      orbitSize,
      speed,
      category: skill.category,
      level: skill.level
    };
  });
};

const SkillsMatrix: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [hoveredPlanet, setHoveredPlanet] = useState<Planet | null>(null);
  const [loading, setLoading] = useState(true);
  const [planetPositions, setPlanetPositions] = useState<{[key: string]: {x: number, y: number}}>({});

  // Filter planets based on selected category
  const allPlanets = skillsToPlanets(skills);
  const filteredPlanets = selectedCategory === 'all' 
    ? allPlanets 
    : allPlanets.filter(planet => planet.category === selectedCategory);

  // Simulate loading state
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 600);
    return () => clearTimeout(timer);
  }, []);

  // Calculate positions for tooltip placement
  useEffect(() => {
    const interval = setInterval(() => {
      const newPositions: {[key: string]: {x: number, y: number}} = {};
      
      filteredPlanets.forEach(planet => {
        const planetElement = document.getElementById(`planet-${planet.name}`);
        if (planetElement) {
          const rect = planetElement.getBoundingClientRect();
          newPositions[planet.name] = {
            x: rect.left + rect.width / 2,
            y: rect.top + rect.height / 2
          };
        }
      });
      
      setPlanetPositions(newPositions);
    }, 100);
    
    return () => clearInterval(interval);
  }, [filteredPlanets]);

  return (
    <section id="skills" className="py-16 md:py-24 bg-static-white/50 dark:bg-void-black/50 relative overflow-hidden">
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

        {/* Solar System */}
        <div className="relative w-full mx-auto" style={{ height: '600px' }}>
          {loading ? (
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <Skeleton className="w-20 h-20 rounded-full" />
              {[120, 180, 240, 300, 360].map((size, index) => (
                <Skeleton 
                  key={index}
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-gray-200 dark:border-gray-800"
                  style={{
                    width: `${size}px`,
                    height: `${size}px`,
                    opacity: 0.3
                  }}
                />
              ))}
            </div>
          ) : (
            <>
              {/* Sun in the center */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-gilded-parchment z-10 shadow-lg shadow-gilded-parchment/40 flex items-center justify-center">
                <span className="text-void-black font-bold">Skills</span>
                <div className="absolute w-full h-full rounded-full animate-pulse opacity-70 bg-gilded-parchment"></div>
              </div>
              
              {/* Orbit paths */}
              {filteredPlanets.map((planet) => (
                <div
                  key={`orbit-${planet.name}`}
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border border-quantum-gray/10 dark:border-static-white/10 rounded-full"
                  style={{
                    width: `${planet.orbitSize * 2}px`,
                    height: `${planet.orbitSize * 2}px`,
                  }}
                ></div>
              ))}
              
              {/* Planets */}
              {filteredPlanets.map((planet) => (
                <Tooltip key={`tooltip-${planet.name}`}>
                  <TooltipTrigger asChild>
                    <div
                      id={`planet-${planet.name}`}
                      className="absolute left-1/2 top-1/2 rounded-full cursor-pointer z-20 hover:scale-110 transition-transform shadow-lg"
                      style={{
                        width: `${planet.size}px`,
                        height: `${planet.size}px`,
                        backgroundColor: planet.color,
                        boxShadow: `0 0 10px ${planet.color}80`,
                        transform: `translate(-50%, -50%) 
                          rotate(0deg) 
                          translateX(${planet.orbitSize}px) 
                          rotate(0deg)`,
                        animation: `orbit-${planet.name} ${planet.speed}s linear infinite`
                      }}
                      onMouseEnter={() => setHoveredPlanet(planet)}
                      onMouseLeave={() => setHoveredPlanet(null)}
                    >
                      <div className="absolute inset-0 rounded-full" style={{
                        backgroundImage: `radial-gradient(circle at 30% 30%, ${planet.color}dd 0%, ${planet.color}aa 70%, ${planet.color}55 100%)`,
                      }}></div>
                    </div>
                  </TooltipTrigger>
                  <TooltipContent 
                    className="bg-white/90 dark:bg-void-black/90 backdrop-blur-sm border border-quantum-gray/20 dark:border-static-white/20 p-3 shadow-lg"
                  >
                    <div className="text-quantum-gray dark:text-static-white font-medium">{planet.name}</div>
                    <div className="text-gilded-parchment text-sm">{planet.level}%</div>
                    <div className="text-xs text-quantum-gray/70 dark:text-static-white/70 mt-1 capitalize">
                      {planet.category}
                    </div>
                  </TooltipContent>
                </Tooltip>
              ))}
            </>
          )}
        </div>

        {/* Mobile Skill Listing (visible on smaller screens) */}
        <div className="md:hidden mt-12 grid grid-cols-1 gap-4">
          {filteredPlanets.map((planet) => (
            <Card 
              key={`mobile-${planet.name}`}
              className="p-4 border border-quantum-gray/10 dark:border-static-white/10 bg-static-white/50 dark:bg-void-black/50 backdrop-blur-sm"
            >
              <div className="mb-2 flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <div 
                    className="w-3 h-3 rounded-full" 
                    style={{backgroundColor: planet.color}}
                  ></div>
                  <h3 className="font-medium text-quantum-gray dark:text-static-white">{planet.name}</h3>
                </div>
                <span className="text-sm text-gilded-parchment font-semibold">{planet.level}%</span>
              </div>
              <div 
                className="h-2 w-full bg-quantum-gray/20 dark:bg-static-white/10 rounded-full overflow-hidden"
              >
                <div 
                  className="h-full rounded-full" 
                  style={{
                    width: `${planet.level}%`,
                    backgroundColor: planet.color
                  }}
                ></div>
              </div>
              <div className="h-1.5"></div>
              <span className="text-xs text-quantum-gray/60 dark:text-static-white/60 italic capitalize">
                {planet.category}
              </span>
            </Card>
          ))}
        </div>
      </div>

      {/* CSS for planet orbit animations */}
      <style>
        {filteredPlanets.map(planet => `
          @keyframes orbit-${planet.name} {
            from {
              transform: translate(-50%, -50%) rotate(0deg) translateX(${planet.orbitSize}px) rotate(0deg);
            }
            to {
              transform: translate(-50%, -50%) rotate(360deg) translateX(${planet.orbitSize}px) rotate(-360deg);
            }
          }
        `).join('\n')}
      </style>
    </section>
  );
};

export default SkillsMatrix;
