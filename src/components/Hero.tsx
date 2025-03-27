
import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface HeroProps {
  title: string;
  subtitle: string;
}

const Hero: React.FC<HeroProps> = ({ title, subtitle }) => {
  const floatingElementsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Simple animation for floating elements
    const elements = floatingElementsRef.current?.querySelectorAll('.floating-element');
    if (!elements) return;

    elements.forEach((element, index) => {
      const htmlElement = element as HTMLElement;
      const delay = index * 0.2;
      htmlElement.style.animationDelay = `${delay}s`;
    });
  }, []);

  return (
    <section id="hero" className="min-h-screen flex flex-col md:flex-row">
      {/* Left panel (60%) */}
      <div className="w-full md:w-3/5 bg-void-black text-static-white relative flex items-center px-8 py-20 md:p-12">
        <div className="relative z-10 max-w-lg mx-auto md:mx-0 md:ml-auto md:mr-16">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tighter">
            {title}
          </h1>
          <p className="text-lg text-static-white/80 leading-relaxed">
            {subtitle}
          </p>
          <div className="mt-12">
            <a 
              href="#projects" 
              className="inline-block border border-gilded-parchment text-gilded-parchment px-6 py-3 transition-all duration-300 hover:bg-gilded-parchment hover:text-void-black"
            >
              View Projects
            </a>
          </div>
        </div>
        
        {/* Vertical line accent */}
        <div className="vertical-line"></div>
      </div>
      
      {/* Right panel (40%) */}
      <div className="w-full md:w-2/5 bg-static-white relative overflow-hidden">
        <div 
          ref={floatingElementsRef}
          className="absolute inset-0 flex items-center justify-center"
        >
          {/* Floating project thumbnails */}
          <div className="floating-element animate-float absolute top-[20%] left-[25%] w-32 h-40 bg-code-blue rounded-sm shadow-md"></div>
          <div className="floating-element animate-float absolute top-[50%] left-[60%] w-40 h-28 bg-gilded-parchment rounded-sm shadow-md"></div>
          <div className="floating-element animate-float absolute top-[70%] left-[30%] w-36 h-36 bg-quantum-gray rounded-sm shadow-md"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
