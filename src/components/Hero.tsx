
import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import { Github, Instagram, Linkedin, FileText, ExternalLink } from 'lucide-react';

interface HeroProps {
  title: string;
  subtitle: string;
}

const Hero: React.FC<HeroProps> = ({ title, subtitle }) => {
  const floatingElementsRef = useRef<HTMLDivElement>(null);
  const [currentTypeIndex, setCurrentTypeIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  
  const typedItems = [
    "A Multi Platform Developer",
    "A Software Developer", 
    "A Computer Science Graduate", 
    "A Technologies Enthusiast"
  ];

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

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    
    const currentText = typedItems[currentTypeIndex];
    const updateText = () => {
      if (!isDeleting) {
        setDisplayText(currentText.substring(0, displayText.length + 1));
        
        if (displayText.length === currentText.length) {
          // Pause at the end of typing
          timeout = setTimeout(() => setIsDeleting(true), 1500);
          return;
        }
      } else {
        setDisplayText(currentText.substring(0, displayText.length - 1));
        
        if (displayText.length === 0) {
          setIsDeleting(false);
          setCurrentTypeIndex((currentTypeIndex + 1) % typedItems.length);
          return;
        }
      }
      
      // Speed - faster when deleting
      const typingSpeed = isDeleting ? 50 : 100;
      timeout = setTimeout(updateText, typingSpeed);
    };
    
    timeout = setTimeout(updateText, 100);
    
    return () => clearTimeout(timeout);
  }, [displayText, currentTypeIndex, isDeleting, typedItems]);

  return (
    <section id="hero" className="min-h-screen flex flex-col md:flex-row">
      {/* Left panel (60%) */}
      <div className="w-full md:w-3/5 bg-void-black text-static-white relative flex items-center px-8 py-20 md:p-12">
        <div className="relative z-10 max-w-lg mx-auto md:mx-0 md:ml-auto md:mr-16">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tighter">
            Muhammad Nanda
          </h1>
          <p className="text-lg text-static-white/80 leading-relaxed mb-6">
            I'm <span className="text-gilded-parchment">{displayText}</span><span className="animate-pulse">|</span>
          </p>
          
          <div className="social-links flex gap-4 mb-8">
            <a href="https://www.linkedin.com/in/mhmmdnanda/" target="_blank" rel="noopener noreferrer" className="p-2 bg-quantum-gray/30 rounded-full hover:bg-gilded-parchment hover:text-void-black transition-all duration-300">
              <Linkedin size={20} />
            </a>
            <a href="https://github.com/nchola" target="_blank" rel="noopener noreferrer" className="p-2 bg-quantum-gray/30 rounded-full hover:bg-gilded-parchment hover:text-void-black transition-all duration-300">
              <Github size={20} />
            </a>
            <a href="https://www.instagram.com/nndncholaa/" target="_blank" rel="noopener noreferrer" className="p-2 bg-quantum-gray/30 rounded-full hover:bg-gilded-parchment hover:text-void-black transition-all duration-300">
              <Instagram size={20} />
            </a>
            <a href="https://wa.link/5dp8wb" target="_blank" rel="noopener noreferrer" className="p-2 bg-quantum-gray/30 rounded-full hover:bg-gilded-parchment hover:text-void-black transition-all duration-300">
              <ExternalLink size={20} />
            </a>
          </div>
          
          <div className="mt-12 flex gap-4">
            <a 
              href="https://www.canva.com/design/DAGKGZpZdDY/iTF0vcbWF4rajEYJ4pQEFw/view" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-gilded-parchment text-gilded-parchment px-6 py-3 transition-all duration-300 hover:bg-gilded-parchment hover:text-void-black"
            >
              <FileText size={18} />
              View My CV
            </a>
            <a 
              href="#projects" 
              className="inline-block border border-static-white/30 text-static-white px-6 py-3 transition-all duration-300 hover:bg-static-white hover:text-void-black"
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
