import React, { useState, useEffect } from 'react';

interface SkillNode {
  id: string;
  x: number;
  y: number;
  label: string;
  type: 'technical' | 'conceptual';
}

const skillsData: SkillNode[] = [
  { id: 'react', x: 20, y: 30, label: 'React', type: 'technical' },
  { id: 'node', x: 40, y: 70, label: 'Node.js', type: 'technical' },
  { id: 'design', x: 60, y: 20, label: 'UI/UX Design', type: 'conceptual' },
  { id: 'agile', x: 80, y: 80, label: 'Agile', type: 'conceptual' },
  { id: 'typescript', x: 30, y: 50, label: 'TypeScript', type: 'technical' },
  { id: 'databases', x: 70, y: 40, label: 'Databases', type: 'technical' },
  { id: 'problemSolving', x: 50, y: 90, label: 'Problem Solving', type: 'conceptual' },
];

const SkillsMatrix: React.FC = () => {
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });
  const [isSkillsVisible, setIsSkillsVisible] = useState(false);
  const containerRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsSkillsVisible(true);
          } else {
            setIsSkillsVisible(false);
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
      setContainerSize({
        width: containerRef.current.offsetWidth,
        height: containerRef.current.offsetHeight,
      });
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const updateSize = () => {
      if (containerRef.current) {
        setContainerSize({
          width: containerRef.current.offsetWidth,
          height: containerRef.current.offsetHeight,
        });
      }
    };

    window.addEventListener('resize', updateSize);
    updateSize();

    return () => {
      window.removeEventListener('resize', updateSize);
    };
  }, []);

  return (
    <section id="skills" className="section portfolio-section bg-void-black dark:bg-static-white relative">
      <div className="container">
        <div className="mb-12">
          <span className="inline-block text-xs uppercase tracking-wider text-static-white/70 dark:text-quantum-gray mb-2">
            Expertise
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-static-white dark:text-void-black">
            Skills
          </h2>
        </div>

        <div className="relative w-full h-96 md:h-[32rem]" ref={containerRef}>
          {skillsData.map((skill) => (
            <div
              key={skill.id}
              className={`skills-node ${skill.type} ${isSkillsVisible ? 'opacity-100' : 'opacity-0'}`}
              style={{
                left: `${skill.x}%`,
                top: `${skill.y}%`,
                transition: 'all 0.5s ease-in-out',
                width: `${containerSize.width * 0.1 > 60 ? 60 : containerSize.width * 0.1}px`,
                height: `${containerSize.width * 0.1 > 60 ? 60 : containerSize.width * 0.1}px`,
                fontSize: `${containerSize.width * 0.01 > 12 ? 12 : containerSize.width * 0.01}px`,
              }}
            >
              {skill.label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsMatrix;
