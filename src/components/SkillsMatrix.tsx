
import React, { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import { cn } from '@/lib/utils';
import { Progress } from '@/components/ui/progress';
import { Star, Info } from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider
} from '@/components/ui/tooltip';

interface Skill {
  id: string;
  name: string;
  type: 'technical' | 'conceptual';
  description: string;
  level: number; // 1-5
  orbitRadius: number; // Base radius of orbit path
  orbitSpeed: number; // Speed of rotation
  size: number; // Size of the planet
}

const skills: Skill[] = [
  // Technical skills
  { id: 'flutter', name: 'Flutter', type: 'technical', description: '80%', level: 4, orbitRadius: 120, orbitSpeed: 0.0015, size: 25 },
  { id: 'dart', name: 'Dart', type: 'technical', description: '75%', level: 4, orbitRadius: 160, orbitSpeed: 0.002, size: 20 },
  { id: 'mongodb', name: 'MongoDB', type: 'technical', description: '70%', level: 3, orbitRadius: 200, orbitSpeed: 0.0018, size: 22 },
  { id: 'mysql', name: 'MySQL', type: 'technical', description: '75%', level: 4, orbitRadius: 240, orbitSpeed: 0.0016, size: 24 },
  { id: 'expressjs', name: 'ExpressJS', type: 'technical', description: '80%', level: 4, orbitRadius: 280, orbitSpeed: 0.0014, size: 25 },
  { id: 'html', name: 'HTML', type: 'technical', description: '75%', level: 4, orbitRadius: 320, orbitSpeed: 0.0012, size: 22 },
  { id: 'css', name: 'CSS', type: 'technical', description: '65%', level: 3, orbitRadius: 360, orbitSpeed: 0.001, size: 20 },
  { id: 'javascript', name: 'JavaScript', type: 'conceptual', description: '70%', level: 3, orbitRadius: 400, orbitSpeed: 0.0008, size: 26 },
  { id: 'laravel', name: 'Laravel', type: 'conceptual', description: '70%', level: 3, orbitRadius: 440, orbitSpeed: 0.0006, size: 21 },
  { id: 'nodejs', name: 'NodeJS', type: 'conceptual', description: '55%', level: 3, orbitRadius: 480, orbitSpeed: 0.0004, size: 23 },
  { id: 'php', name: 'PHP', type: 'conceptual', description: '60%', level: 3, orbitRadius: 520, orbitSpeed: 0.0002, size: 19 },
  { id: 'python', name: 'Python', type: 'conceptual', description: '70%', level: 3, orbitRadius: 560, orbitSpeed: 0.00018, size: 24 },
];

// Generate blinking stars data
const generateStars = (count: number) => {
  return Array.from({ length: count }).map((_, i) => ({
    id: `star-${i}`,
    size: Math.random() * 2 + 1,
    top: Math.random() * 100,
    left: Math.random() * 100,
    opacity: Math.random() * 0.7 + 0.3,
    animationDuration: Math.random() * 5 + 3,
    delay: Math.random() * 5,
  }));
};

const stars = generateStars(70);

const SkillsMatrix: React.FC = () => {
  const [activeSkill, setActiveSkill] = useState<Skill | null>(null);
  const [orbits, setOrbits] = useState<{[key: string]: { x: number, y: number }}>({}); 
  const [containerDimensions, setContainerDimensions] = useState({ width: 0, height: 0 });
  const [isLoaded, setIsLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Calculate container dimensions and update on resize with perfect square aspect ratio
  useEffect(() => {
    const updateDimensions = () => {
      if (!containerRef.current) return;
      
      const container = containerRef.current;
      const containerParent = container.parentElement;
      if (!containerParent) return;
      
      const parentWidth = containerParent.clientWidth;
      // Make the container larger to ensure orbits aren't cut off
      const maxSize = parentWidth > 768 ? Math.min(700, parentWidth) : Math.min(360, parentWidth);
      
      setContainerDimensions({
        width: maxSize,
        height: maxSize // Force square aspect ratio
      });
      
      // Add small delay to ensure dimensions are applied before animations start
      setTimeout(() => setIsLoaded(true), 100);
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    
    return () => {
      window.removeEventListener('resize', updateDimensions);
    };
  }, []);

  // Calculate adjusted orbit radius based on container size
  const getAdjustedOrbit = useCallback((baseRadius: number) => {
    // Allow larger orbits relative to container size (0.48 instead of 0.4)
    const maxRadius = containerDimensions.width * 0.48;
    return Math.min(baseRadius, maxRadius);
  }, [containerDimensions.width]);

  // Calculate planet positions with improved 3D transformations
  useEffect(() => {
    if (!isLoaded) return;

    let animationFrameId: number;
    // Position center point for orbits - exactly 50% for perfect centering
    const centerX = containerDimensions.width / 2;
    const centerY = containerDimensions.height / 2;
    
    const updatePositions = (timestamp: number) => {
      const newPositions: {[key: string]: { x: number, y: number }} = {};
      
      skills.forEach(skill => {
        const orbitRadius = getAdjustedOrbit(skill.orbitRadius);
        const angle = timestamp * skill.orbitSpeed;
        
        // Calculate positions relative to center
        const x = centerX + Math.cos(angle) * orbitRadius;
        const y = centerY + Math.sin(angle) * orbitRadius;
        
        newPositions[skill.id] = { x, y };
      });
      
      setOrbits(newPositions);
      animationFrameId = requestAnimationFrame(updatePositions);
    };
    
    animationFrameId = requestAnimationFrame(updatePositions);
    
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [containerDimensions, isLoaded, getAdjustedOrbit]);

  // Function to determine color based on skill type
  const getSkillColor = (type: 'technical' | 'conceptual') => {
    return type === 'technical' ? 'bg-quantum-gray text-static-white' : 'bg-gilded-parchment text-void-black';
  };

  // Calculate 3D transform for planets
  const getPlanetTransform = useCallback((skillId: string) => {
    const position = orbits[skillId];
    if (!position) return 'translate(0px, 0px)';
    
    // Use standard transform instead of translate3d for better compatibility
    return `translate(${position.x}px, ${position.y}px)`;
  }, [orbits]);

  return (
    <section id="skills" className="section py-12 md:py-24 bg-void-black dark:bg-static-white relative overflow-hidden">
      <div className="container relative z-10 px-0 md:px-6">
        <div className="mb-8 md:mb-12 px-4">
          <span className="inline-block text-xs uppercase tracking-wider text-static-white/70 dark:text-quantum-gray mb-2">
            Capabilities
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-static-white dark:text-void-black mb-6">
            Skills
          </h2>
          <p className="text-lg text-static-white/80 dark:text-void-black/80 max-w-2xl mx-auto">
            I have been learning programming since 2022. The main area of my expertise is Multi-Platform Development.
            <br />
            Here are the technologies I have learned.
          </p>
        </div>
        
        {/* Solar System Container with proper centering */}
        <div className="flex justify-center items-center mx-auto w-full">
          <div 
            ref={containerRef}
            className={cn(
              "relative mx-auto mb-16",
              isLoaded ? "opacity-100" : "opacity-0"
            )}
            style={{ 
              width: `${containerDimensions.width}px`, 
              height: `${containerDimensions.height}px`,
              transformStyle: 'preserve-3d',
              transition: 'opacity 0.5s ease-in-out',
            }}
          >
            {/* Orbit Paths - Centered using 53% */}
            {skills.map((skill) => {
              const orbitRadius = getAdjustedOrbit(skill.orbitRadius);
              return (
                <div 
                  key={`orbit-${skill.id}`}
                  className="absolute border border-gilded-parchment/20 rounded-full" 
                  style={{
                    width: `${orbitRadius * 2}px`,
                    height: `${orbitRadius * 2}px`,
                    left: '53%',
                    top: '53%',
                    transform: 'translate(-53%, -53%)',
                  }}
                />
              );
            })}
            
            {/* Sun/Center */}
            <div 
              className="absolute w-16 h-16 bg-gilded-parchment rounded-full z-20 flex items-center justify-center animate-pulse shadow-[0_0_30px_rgba(193,154,107,0.6)]"
              style={{
                left: '53%',
                top: '53%',
                transform: 'translate(-53%, -53%)',
              }}
            >
              <span className="text-void-black font-bold text-xs">Skills</span>
            </div>
            
            {/* Planets/Skills */}
            {skills.map((skill) => (
              <TooltipProvider key={skill.id}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div
                      className={cn(
                        "absolute rounded-full flex items-center justify-center cursor-pointer z-10",
                        getSkillColor(skill.type),
                        activeSkill?.id === skill.id ? "ring-2 ring-gilded-parchment scale-110 z-30" : ""
                      )}
                      style={{
                        width: `${skill.size * 2}px`,
                        height: `${skill.size * 2}px`,
                        transformStyle: 'preserve-3d',
                        position: 'absolute',
                        transform: getPlanetTransform(skill.id),
                        transition: activeSkill?.id === skill.id ? 'all 0.3s ease' : 'none',
                        boxShadow: `0 0 ${skill.size/2}px rgba(${skill.type === 'technical' ? '74, 74, 74' : '193, 154, 107'}, 0.5)`,
                      }}
                      onMouseEnter={() => setActiveSkill(skill)}
                      onMouseLeave={() => setActiveSkill(null)}
                    >
                      <span className="text-xs font-medium">{skill.name}</span>
                    </div>
                  </TooltipTrigger>
                  <TooltipContent side="top" className="bg-void-black/90 dark:bg-static-white/90 border-gilded-parchment">
                    <div className="flex flex-col items-center">
                      <span className="font-bold mb-1">{skill.name}</span>
                      <Progress value={parseInt(skill.description)} className="w-20 h-2" />
                      <span className="mt-1 text-xs">{skill.description}</span>
                    </div>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            ))}
            
            {/* Mobile fallback for skill list - shown only on very small screens */}
            <div className="md:hidden absolute bottom-0 left-0 w-full bg-void-black/70 dark:bg-static-white/70 backdrop-blur-sm p-4 rounded-t-lg">
              <div className="text-static-white dark:text-void-black text-xs font-bold mb-2">All Skills:</div>
              <div className="flex flex-wrap gap-2">
                {skills.map(skill => (
                  <span key={`mobile-${skill.id}`} className={cn(
                    "px-2 py-1 rounded-full text-xs",
                    skill.type === 'technical' ? 'bg-quantum-gray/80 text-static-white' : 'bg-gilded-parchment/80 text-void-black'
                  )}>
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Loading state before animation starts */}
        {!isLoaded && (
          <div className="flex justify-center items-center h-60">
            <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-gilded-parchment"></div>
          </div>
        )}
      </div>
      
      {/* Blinking stars background */}
      <div className="absolute inset-0 overflow-hidden">
        {stars.map((star) => (
          <div 
            key={star.id} 
            className="absolute"
            style={{
              top: `${star.top}%`,
              left: `${star.left}%`,
              opacity: 0,
              animation: `starBlink ${star.animationDuration}s ease-in-out infinite ${star.delay}s`,
            }}
          >
            <Star 
              size={star.size} 
              className="text-static-white dark:text-void-black" 
              fill="currentColor"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsMatrix;
