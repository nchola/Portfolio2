
import React, { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { Progress } from '@/components/ui/progress';
import { Star } from 'lucide-react';
import anime from 'animejs';

interface Skill {
  id: string;
  name: string;
  type: 'technical' | 'conceptual';
  description: string;
  level: number; // 1-5
  size: number; // Size of the planet
}

const skills: Skill[] = [
  // Technical skills
  { id: 'flutter', name: 'Flutter', type: 'technical', description: '80%', level: 4, size: 40 },
  { id: 'dart', name: 'Dart', type: 'technical', description: '75%', level: 4, size: 38 },
  { id: 'mongodb', name: 'MongoDB', type: 'technical', description: '70%', level: 3, size: 36 },
  { id: 'mysql', name: 'MySQL', type: 'technical', description: '75%', level: 4, size: 42 },
  { id: 'expressjs', name: 'ExpressJS', type: 'technical', description: '80%', level: 4, size: 44 },
  { id: 'html', name: 'HTML', type: 'technical', description: '75%', level: 4, size: 46 },
  { id: 'css', name: 'CSS', type: 'technical', description: '65%', level: 3, size: 40 },
  { id: 'javascript', name: 'JavaScript', type: 'conceptual', description: '70%', level: 3, size: 44 },
  { id: 'laravel', name: 'Laravel', type: 'conceptual', description: '70%', level: 3, size: 42 },
  { id: 'nodejs', name: 'NodeJS', type: 'conceptual', description: '55%', level: 3, size: 40 },
  { id: 'php', name: 'PHP', type: 'conceptual', description: '60%', level: 3, size: 38 },
  { id: 'python', name: 'Python', type: 'conceptual', description: '70%', level: 3, size: 36 },
];

// Generate blinking stars data
const generateStars = (count: number) => {
  return Array.from({ length: count }).map((_, i) => ({
    id: `star-${i}`,
    size: Math.random() * 3 + 1,
    top: Math.random() * 100,
    left: Math.random() * 100,
    opacity: Math.random() * 1,
    delay: Math.random() * 5,
  }));
};

const stars = generateStars(50);

const SkillsMatrix: React.FC = () => {
  const [activeSkill, setActiveSkill] = useState<Skill | null>(null);
  const [containerDimensions, setContainerDimensions] = useState({ width: 0, height: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const skillElementsRef = useRef<{[key: string]: HTMLDivElement | null}>({});
  const animationRef = useRef<anime.AnimeInstance | null>(null);

  // Calculate container dimensions and update on resize
  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setContainerDimensions({
          width: rect.width,
          height: Math.min(rect.width, window.innerHeight * 0.7) // Keep aspect ratio reasonable
        });
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    
    return () => {
      window.removeEventListener('resize', updateDimensions);
    };
  }, []);

  // Setup anime.js animation
  useEffect(() => {
    if (containerDimensions.width === 0 || Object.keys(skillElementsRef.current).length < skills.length) {
      return;
    }

    // Clear previous animation
    if (animationRef.current) {
      animationRef.current.pause();
    }

    const centerX = containerDimensions.width / 2;
    const centerY = containerDimensions.height / 2;
    const maxRadius = Math.min(centerX, centerY) * 0.85; // Keep within bounds

    // Create orbit animation
    const timeline = anime.timeline({
      duration: 30000,
      easing: 'linear',
      loop: true
    });

    skills.forEach((skill, index) => {
      const element = skillElementsRef.current[skill.id];
      if (!element) return;

      // Calculate a unique path for each skill
      const angle = (index / skills.length) * Math.PI * 2;
      const radius = maxRadius * (0.4 + (index % 3) * 0.2); // Vary orbit radius
      const offsetX = Math.cos(angle) * radius;
      const offsetY = Math.sin(angle) * radius;

      // Apply initial position
      element.style.transform = 'translate(-50%, -50%)';
      
      // Create a unique timeline for each skill
      timeline.add({
        targets: element,
        translateX: [
          { value: centerX + offsetX, duration: 0 },
          { 
            value: function() {
              // Create an orbit animation in 3D space
              return function(t: number) {
                const progress = (t + index * (30000 / skills.length)) % 30000 / 30000;
                const orbit = Math.PI * 2 * progress;
                return centerX + Math.cos(orbit) * radius;
              };
            }
          }
        ],
        translateY: [
          { value: centerY + offsetY, duration: 0 },
          { 
            value: function() {
              return function(t: number) {
                const progress = (t + index * (30000 / skills.length)) % 30000 / 30000;
                const orbit = Math.PI * 2 * progress;
                return centerY + Math.sin(orbit) * radius;
              };
            }
          }
        ],
        scale: [
          { value: 1, duration: 0 },
          { value: 1.1, duration: 15000, easing: 'easeInOutSine' },
          { value: 1, duration: 15000, easing: 'easeInOutSine' }
        ],
        delay: 0,
        endDelay: 0,
      }, 0);
    });

    animationRef.current = timeline;

    return () => {
      if (animationRef.current) {
        animationRef.current.pause();
      }
    };
  }, [containerDimensions, skills]);

  // Star blinking animation
  useEffect(() => {
    const starElements = document.querySelectorAll('.star-element');
    
    anime({
      targets: starElements,
      opacity: [
        { value: 0.2, duration: 0 },
        { value: 1, duration: 1500 },
        { value: 0.2, duration: 1500 },
      ],
      scale: [
        { value: 0.8, duration: 0 },
        { value: 1, duration: 1500 },
        { value: 0.8, duration: 1500 },
      ],
      delay: anime.stagger(200, {from: 'random'}),
      loop: true,
      easing: 'easeInOutSine'
    });
  }, []);

  // Function to determine color based on skill type
  const getSkillColor = (type: 'technical' | 'conceptual') => {
    return type === 'technical' ? 'bg-quantum-gray text-static-white' : 'bg-gilded-parchment text-void-black';
  };

  return (
    <section id="skills" className="section py-12 md:py-24 bg-void-black dark:bg-static-white relative overflow-hidden">
      <div className="container relative z-10">
        <div className="mb-8 md:mb-12">
          <span className="inline-block text-xs uppercase tracking-wider text-static-white/70 dark:text-quantum-gray mb-2">
            Capabilities
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-static-white dark:text-void-black mb-6">
            Skills
          </h2>
          <p className="text-lg text-static-white/80 dark:text-void-black/80 max-w-2xl">
            I have been learning programming since 2022. The main area of my expertise is Multi-Platform Development.
            <br />
            Here are the technologies I have learned.
          </p>
        </div>
        
        {/* Skills Universe Container */}
        <div 
          ref={containerRef}
          className="relative mx-auto mb-12 overflow-visible"
          style={{ 
            height: `${containerDimensions.height}px`, 
            width: '100%',
            maxWidth: '800px',
            position: 'relative'
          }}
        >
          {/* Center/Sun */}
          <div 
            className="absolute bg-gilded-parchment rounded-full z-20 flex items-center justify-center shadow-[0_0_30px_rgba(193,154,107,0.6)]"
            style={{
              width: '40px', 
              height: '40px',
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)'
            }}
          >
            <span className="text-void-black font-bold text-xs">Skills</span>
          </div>
          
          {/* Skills */}
          {skills.map((skill) => (
            <div
              key={skill.id}
              ref={(el) => skillElementsRef.current[skill.id] = el}
              className={cn(
                "absolute rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer z-10",
                getSkillColor(skill.type),
                activeSkill?.id === skill.id ? "ring-2 ring-gilded-parchment scale-110 z-30" : ""
              )}
              style={{
                width: `${skill.size}px`,
                height: `${skill.size}px`,
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)'
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
          ))}
        </div>
      </div>
      
      {/* Blinking stars background */}
      <div className="absolute inset-0 overflow-hidden z-0">
        {stars.map((star) => (
          <div 
            key={star.id} 
            className="absolute star-element"
            style={{
              top: `${star.top}%`,
              left: `${star.left}%`,
              opacity: 0.2,
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
      
      {/* Add space to prevent overlap with footer */}
      <div className="h-20"></div>
    </section>
  );
};

export default SkillsMatrix;
