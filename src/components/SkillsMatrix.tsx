
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Progress } from '@/components/ui/progress';
import { Star } from 'lucide-react';

interface Skill {
  id: string;
  name: string;
  type: 'technical' | 'conceptual';
  description: string;
  level: number; // 1-5
  orbitRadius: number; // Radius of orbit path
  orbitSpeed: number; // Speed of rotation
  size: number; // Size of the planet
}

const skills: Skill[] = [
  // Technical skills
  { id: 'flutter', name: 'Flutter', type: 'technical', description: '80%', level: 4, orbitRadius: 120, orbitSpeed: 0.0015, size: 40 },
  { id: 'dart', name: 'Dart', type: 'technical', description: '75%', level: 4, orbitRadius: 160, orbitSpeed: 0.002, size: 40 },
  { id: 'mongodb', name: 'MongoDB', type: 'technical', description: '70%', level: 3, orbitRadius: 200, orbitSpeed: 0.0018, size: 40 },
  { id: 'mysql', name: 'MySQL', type: 'technical', description: '75%', level: 4, orbitRadius: 240, orbitSpeed: 0.0016, size: 45 },
  { id: 'expressjs', name: 'ExpressJS', type: 'technical', description: '80%', level: 4, orbitRadius: 280, orbitSpeed: 0.0014, size: 45 },
  { id: 'html', name: 'HTML', type: 'technical', description: '75%', level: 4, orbitRadius: 320, orbitSpeed: 0.0012, size: 60 },
  { id: 'css', name: 'CSS', type: 'technical', description: '65%', level: 3, orbitRadius: 360, orbitSpeed: 0.001, size: 60 },
  { id: 'javascript', name: 'JavaScript', type: 'conceptual', description: '70%', level: 3, orbitRadius: 400, orbitSpeed: 0.0008, size: 60 },
  { id: 'laravel', name: 'Laravel', type: 'conceptual', description: '70%', level: 3, orbitRadius: 440, orbitSpeed: 0.0006, size: 55 },
  { id: 'nodejs', name: 'NodeJS', type: 'conceptual', description: '55%', level: 3, orbitRadius: 480, orbitSpeed: 0.0004, size: 55 },
  { id: 'php', name: 'PHP', type: 'conceptual', description: '60%', level: 3, orbitRadius: 520, orbitSpeed: 0.0002, size: 55 },
  { id: 'python', name: 'Python', type: 'conceptual', description: '70%', level: 3, orbitRadius: 560, orbitSpeed: 0.00018, size: 35 },
];

// Generate blinking stars data
const generateStars = (count: number) => {
  return Array.from({ length: count }).map((_, i) => ({
    id: `star-${i}`,
    size: Math.random() * 4 + 1,
    top: Math.random() * 100,
    left: Math.random() * 100,
    opacity: Math.random() * 1,
    animationDuration: Math.random() * 5 ,
    delay: Math.random() * 5,
  }));
};

const stars = generateStars(70);

const SkillsMatrix: React.FC = () => {
  const [activeSkill, setActiveSkill] = useState<Skill | null>(null);
  const [orbits, setOrbits] = useState<{[key: string]: { x: number, y: number }}>({}); 
  const [containerDimensions, setContainerDimensions] = useState({ width: 0, height: 0 });
  const [isMounted, setIsMounted] = useState(false);

  // Calculate container dimensions and update on resize
  useEffect(() => {
    setIsMounted(true);
    
    const updateDimensions = () => {
      const viewportWidth = Math.min(window.innerWidth, document.documentElement.clientWidth);
      // Use a more conservative approach for container sizing
      const containerSize = viewportWidth > 768 
        ? Math.min(600, viewportWidth - 40) 
        : Math.min(viewportWidth - 40, 400);
      
      setContainerDimensions({
        width: containerSize,
        height: containerSize // Keep height same as width for circular orbits
      });
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    
    return () => {
      window.removeEventListener('resize', updateDimensions);
    };
  }, []);

  // Calculate planet positions with improved mathematical precision
  useEffect(() => {
    if (!isMounted) return;
    
    let animationFrameId: number;
    
    // Define center with precision
    const centerX = containerDimensions.width / 2;
    const centerY = containerDimensions.height / 2;
    
    const updatePositions = (timestamp: number) => {
      const newPositions: {[key: string]: { x: number, y: number }} = {};
      
      skills.forEach(skill => {
        // Use consistent transformation
        const angle = timestamp * skill.orbitSpeed;
        
        // Calculate exact position using trigonometric functions
        // Scale radius to fit within container
        const scaleFactor = Math.min(1, (containerDimensions.width / 600) * 0.8);
        const scaledRadius = skill.orbitRadius * scaleFactor;
        
        const x = centerX + Math.cos(angle) * scaledRadius;
        const y = centerY + Math.sin(angle) * scaledRadius;
        
        newPositions[skill.id] = { x, y };
      });
      
      setOrbits(newPositions);
      animationFrameId = requestAnimationFrame(updatePositions);
    };
    
    if (containerDimensions.width > 0) {
      animationFrameId = requestAnimationFrame(updatePositions);
    }
    
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [containerDimensions, isMounted]);

  // Function to determine color based on skill type
  const getSkillColor = (type: 'technical' | 'conceptual') => {
    return type === 'technical' ? 'bg-quantum-gray text-static-white' : 'bg-gilded-parchment text-void-black';
  };
  
  // Function to calculate scaled size based on container
  const getScaledSize = (size: number) => {
    const scale = containerDimensions.width / 600;
    return Math.max(size * scale, 20); // Enforce minimum size for visibility
  };

  return (
    <section id="skills" className="section py-12 md:py-24 bg-void-black dark:bg-static-white relative overflow-hidden">
      <div className="container relative z-10 overflow-hidden">
        <div className="mb-8 md:mb-12">
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
        
        {/* Solar System Container - Fixed aspect ratio and position */}
        <div 
          className="relative mx-auto mb-24 overflow-hidden"
          style={{ 
            height: `${containerDimensions.height}px`, 
            width: `${containerDimensions.width}px`,
            maxWidth: '100%', // Ensure it never exceeds the viewport width
            position: 'relative',
            margin: '0 auto' // Center horizontally
          }}
        >
          {/* Orbit Paths - Using the requested positioning with 53% */}
          {skills.map((skill) => {
            // Scale radius based on container size
            const scaledRadius = skill.orbitRadius * (containerDimensions.width / 600);
            
            return (
              <div 
                key={`orbit-${skill.id}`}
                className="absolute border border-gilded-parchment/20 rounded-full" 
                style={{
                  width: `${scaledRadius * 2}px`,
                  height: `${scaledRadius * 2}px`,
                  left: '53%',
                  top: '53%',
                  transform: 'translate(-53%, -52%)'
                }}
              />
            );
          })}
          
          {/* Sun/Center - Using the requested positioning with 53% */}
          <div 
            className="absolute bg-gilded-parchment rounded-full z-20 flex items-center justify-center animate-pulse shadow-[0_0_30px_rgba(193,154,107,0.6)]"
            style={{
              width: `${getScaledSize(32)}px`, 
              height: `${getScaledSize(32)}px`,
              left: '53%',
              top: '53%',
              transform: 'translate(-53%, -52%)'
            }}
          >
            <span className="text-void-black font-bold text-xs">Skills</span>
          </div>
          
          {/* Planets/Skills with adjusted positions */}
          {skills.map((skill) => {
            // Scale size based on container size
            const scaledSize = getScaledSize(skill.size);
            
            // Get the position from orbits state or use fallback
            const position = orbits[skill.id] || { 
              x: containerDimensions.width / 2, 
              y: containerDimensions.height / 2 
            };
            
            return (
              <div
                key={skill.id}
                className={cn(
                  "absolute rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer z-10",
                  getSkillColor(skill.type),
                  activeSkill?.id === skill.id ? "ring-2 ring-gilded-parchment scale-110 z-30" : ""
                )}
                style={{
                  width: `${scaledSize}px`,
                  height: `${scaledSize}px`,
                  left: `${position.x}px`,
                  top: `${position.y}px`,
                  transform: 'translate(-50%, -50%)', // Ensure consistent transformation
                  transition: activeSkill?.id === skill.id ? 'all 0.3s ease' : 'none',
                }}
                onMouseEnter={() => setActiveSkill(skill)}
                onMouseLeave={() => setActiveSkill(null)}
              >
                <span className="text-xs font-medium whitespace-nowrap">{skill.name}</span>
                
                {activeSkill?.id === skill.id && (
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-3 bg-void-black dark:bg-static-white text-static-white dark:text-void-black px-3 py-2 rounded-md text-xs whitespace-nowrap z-40 flex flex-col items-center">
                    <span className="font-bold mb-1">{skill.name}</span>
                    <Progress value={parseInt(skill.description)} className="w-20 h-2" />
                    <span className="mt-1">{skill.description}</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
      
      {/* Blinking stars background - proper z-index */}
      <div className="absolute inset-0 overflow-hidden z-0">
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
      
      {/* Add spacing to avoid overlap with footer */}
      <div className="h-20"></div>
    </section>
  );
};

export default SkillsMatrix;
