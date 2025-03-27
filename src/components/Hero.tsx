
import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import { Github, Instagram, Linkedin, FileText, ExternalLink } from 'lucide-react';

interface HeroProps {
  title: string;
  subtitle: string;
}

const Hero: React.FC<HeroProps> = ({ title, subtitle }) => {
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
    <section id="hero" className="min-h-screen flex flex-col items-center justify-center relative bg-void-black">
      <div className="absolute inset-0 bg-[url('/images/dark-academia-bg.png')] opacity-10 bg-cover bg-center"></div>
      
      <div className="container relative z-10 mx-auto px-6 py-12 flex flex-col items-center text-center">
        <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tighter text-static-white">
          Muhammad Nanda
        </h1>
        
        <div className="h-12 mb-8">
          <p className="text-xl md:text-2xl text-static-white/90 font-serif">
            I'm <span className="text-gilded-parchment">{displayText}</span><span className="animate-pulse">|</span>
          </p>
        </div>
        
        <div className="social-links flex gap-6 mb-12">
          <a href="https://www.linkedin.com/in/mhmmdnanda/" target="_blank" rel="noopener noreferrer" 
             className="p-3 bg-quantum-gray/20 rounded-full hover:bg-gilded-parchment hover:text-void-black transition-all duration-300">
            <Linkedin size={22} />
          </a>
          <a href="https://github.com/nchola" target="_blank" rel="noopener noreferrer"
             className="p-3 bg-quantum-gray/20 rounded-full hover:bg-gilded-parchment hover:text-void-black transition-all duration-300">
            <Github size={22} />
          </a>
          <a href="https://www.instagram.com/nndncholaa/" target="_blank" rel="noopener noreferrer"
             className="p-3 bg-quantum-gray/20 rounded-full hover:bg-gilded-parchment hover:text-void-black transition-all duration-300">
            <Instagram size={22} />
          </a>
          <a href="https://wa.link/5dp8wb" target="_blank" rel="noopener noreferrer"
             className="p-3 bg-quantum-gray/20 rounded-full hover:bg-gilded-parchment hover:text-void-black transition-all duration-300">
            <ExternalLink size={22} />
          </a>
        </div>
        
        <div className="cv-links mt-8">
          <a 
            href="https://www.canva.com/design/DAGKGZpZdDY/iTF0vcbWF4rajEYJ4pQEFw/view" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border-2 border-gilded-parchment text-gilded-parchment px-8 py-4 transition-all duration-300 hover:bg-gilded-parchment hover:text-void-black"
          >
            <FileText size={20} />
            View My CV
          </a>
        </div>
        
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2">
          <a href="#about" className="animate-bounce text-static-white/70 hover:text-gilded-parchment transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 13l5 5 5-5M7 6l5 5 5-5"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
