
import React, { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';

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
  return skills.map((skill, index) => {
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
  const [planetPositions, setPlanetPositions] = useState<{[key: string]: {x: number, y: number}}>({});
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

  // Filter planets based on selected category
  const allPlanets = skillsToPlanets(skills);
  const filteredPlanets = selectedCategory === 'all' 
    ? allPlanets 
    : allPlanets.filter(planet => planet.category === selectedCategory);

  // Update window width on resize
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
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
          {/* Sun in the center */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-gilded-parchment z-10 shadow-lg shadow-gilded-parchment/40 flex items-center justify-center">
            <span className="text-void-black font-bold">Skills</span>
            <div className="absolute w-full h-full rounded-full animate-pulse opacity-70 bg-gilded-parchment"></div>
          </div>
          
          {/* Orbit paths */}
          {filteredPlanets.map((planet, index) => (
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
          {filteredPlanets.map((planet, index) => (
            <div
              id={`planet-${planet.name}`}
              key={`planet-${planet.name}`}
              className="absolute left-1/2 top-1/2 rounded-full flex items-center justify-center cursor-pointer z-20 hover:scale-110 transition-transform"
              style={{
                width: `${planet.size}px`,
                height: `${planet.size}px`,
                backgroundColor: planet.color,
                transform: 'translate(-50%, -50%)',
                animation: `orbit ${planet.speed}s linear infinite`,
                transformOrigin: 'center center',
                boxShadow: `0 0 10px ${planet.color}80`,
              }}
              onMouseEnter={() => setHoveredPlanet(planet)}
              onMouseLeave={() => setHoveredPlanet(null)}
            ></div>
          ))}
          
          {/* Skill tooltip */}
          {hoveredPlanet && (
            <div
              className="absolute z-30 bg-static-white dark:bg-void-black border border-quantum-gray/20 dark:border-static-white/20 p-3 rounded-lg shadow-lg transform -translate-x-1/2 -translate-y-full"
              style={{
                left: planetPositions[hoveredPlanet.name]?.x || '50%',
                top: (planetPositions[hoveredPlanet.name]?.y || 0) - 15,
                maxWidth: '200px',
                opacity: planetPositions[hoveredPlanet.name] ? 1 : 0,
              }}
            >
              <div className="text-quantum-gray dark:text-static-white font-medium">{hoveredPlanet.name}</div>
              <div className="text-gilded-parchment text-sm">{hoveredPlanet.level}%</div>
              <div className="text-xs text-quantum-gray/70 dark:text-static-white/70 mt-1 capitalize">
                {hoveredPlanet.category}
              </div>
            </div>
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

      {/* Add animations for planet orbit */}
      <style jsx>{`
        @keyframes orbit {
          from {
            transform: translate(-50%, -50%) rotate(0deg) translateX(var(--orbit-size)) rotate(0deg);
          }
          to {
            transform: translate(-50%, -50%) rotate(360deg) translateX(var(--orbit-size)) rotate(-360deg);
          }
        }
        
        #planet-React {
          --orbit-size: ${filteredPlanets.find(p => p.name === 'React')?.orbitSize || 80}px;
        }
        #planet-TypeScript {
          --orbit-size: ${filteredPlanets.find(p => p.name === 'TypeScript')?.orbitSize || 90}px;
        }
        #planet-HTML\/CSS {
          --orbit-size: ${filteredPlanets.find(p => p.name === 'HTML/CSS')?.orbitSize || 100}px;
        }
        #planet-JavaScript {
          --orbit-size: ${filteredPlanets.find(p => p.name === 'JavaScript')?.orbitSize || 110}px;
        }
        #planet-Tailwind\ CSS {
          --orbit-size: ${filteredPlanets.find(p => p.name === 'Tailwind CSS')?.orbitSize || 120}px;
        }
        #planet-Next\.js {
          --orbit-size: ${filteredPlanets.find(p => p.name === 'Next.js')?.orbitSize || 130}px;
        }
        #planet-Node\.js {
          --orbit-size: ${filteredPlanets.find(p => p.name === 'Node.js')?.orbitSize || 140}px;
        }
        #planet-Express {
          --orbit-size: ${filteredPlanets.find(p => p.name === 'Express')?.orbitSize || 150}px;
        }
        #planet-MongoDB {
          --orbit-size: ${filteredPlanets.find(p => p.name === 'MongoDB')?.orbitSize || 160}px;
        }
        #planet-PostgreSQL {
          --orbit-size: ${filteredPlanets.find(p => p.name === 'PostgreSQL')?.orbitSize || 170}px;
        }
        #planet-RESTful\ API {
          --orbit-size: ${filteredPlanets.find(p => p.name === 'RESTful API')?.orbitSize || 180}px;
        }
        #planet-Git {
          --orbit-size: ${filteredPlanets.find(p => p.name === 'Git')?.orbitSize || 190}px;
        }
        #planet-Docker {
          --orbit-size: ${filteredPlanets.find(p => p.name === 'Docker')?.orbitSize || 200}px;
        }
        #planet-CI\/CD {
          --orbit-size: ${filteredPlanets.find(p => p.name === 'CI/CD')?.orbitSize || 210}px;
        }
        #planet-Figma {
          --orbit-size: ${filteredPlanets.find(p => p.name === 'Figma')?.orbitSize || 220}px;
        }
        #planet-Agile {
          --orbit-size: ${filteredPlanets.find(p => p.name === 'Agile')?.orbitSize || 230}px;
        }
        #planet-Problem\ Solving {
          --orbit-size: ${filteredPlanets.find(p => p.name === 'Problem Solving')?.orbitSize || 240}px;
        }
        #planet-Team\ Collaboration {
          --orbit-size: ${filteredPlanets.find(p => p.name === 'Team Collaboration')?.orbitSize || 250}px;
        }
      `}</style>
    </section>
  );
};

export default SkillsMatrix;
