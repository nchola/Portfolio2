import React, { useEffect, useState } from 'react';
import { Atom, BrainCircuit, Code, CircuitBoard, Infinity as InfinityIcon, Zap, Hexagon } from 'lucide-react';

interface HeroProps {
  title: string;
  subtitle: string;
  typedItems?: string[];
}

// SplineViewer component
const SplineViewer = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'module';
    script.src = 'https://unpkg.com/@splinetool/viewer@1.9.89/build/spline-viewer.js';
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return React.createElement('spline-viewer', {
    url: 'https://prod.spline.design/fwa-MxP4g-yP3psn/scene.splinecode',
    className: 'w-full h-full',
    'loading-anim-type': 'spinner-small-dark',
  });
};

const Hero: React.FC<HeroProps> = ({ title, subtitle, typedItems = [] }) => {
  const [typedText, setTypedText] = useState('');
  const [currentItemIndex, setCurrentItemIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    if (typedItems.length === 0) return;
    const currentItem = typedItems[currentItemIndex];
    const type = () => {
      if (isDeleting) {
        setTypedText(prev => prev.substring(0, prev.length - 1));
        setTypingSpeed(50);
        if (typedText === '') {
          setIsDeleting(false);
          setCurrentItemIndex((prev) => (prev + 1) % typedItems.length);
          setTypingSpeed(500);
        }
      } else {
        setTypedText(prev => currentItem.substring(0, prev.length + 1));
        setTypingSpeed(150);
        if (typedText === currentItem) {
          setTypingSpeed(2000);
          setIsDeleting(true);
        }
      }
    };
    const timer = setTimeout(type, typingSpeed);
    return () => clearTimeout(timer);
  }, [typedText, currentItemIndex, isDeleting, typingSpeed, typedItems]);

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden">
      {/* Spline 3D Background */}
      <div className="absolute inset-0 z-0">
        <SplineViewer />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80 pointer-events-none" />
      </div>
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center px-6 py-24">
        <h1 className="text-4xl md:text-6xl font-bold text-white text-center drop-shadow-lg">
          Muhammad Nanda
        </h1>
        <div className="text-xl md:text-2xl mb-12 min-h-16 text-center backdrop-blur-sm p-4 z-10">
          <p>
            <span className="text-void-black dark:text-static-white font-semibold">{subtitle} </span>
            <span className="text-gilded-parchment dark:text-gilded-parchment font-semibold">{typedText}</span>
            <span className="animate-pulse text-void-black dark:text-static-white">|</span>
          </p>
        </div>
        <div className="flex justify-center space-x-6 z-10">
          <a 
            href="https://www.linkedin.com/in/mhmmdnanda/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-link"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-static-white dark:text-static-white hover:text-gilded-parchment transition-colors">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect x="2" y="9" width="4" height="12"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
          </a>
          <a 
            href="https://github.com/nchola" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-link"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-static-white dark:text-static-white hover:text-gilded-parchment transition-colors">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
          </a>
          <a 
            href="https://www.instagram.com/nndncholaa/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-link"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-static-white dark:text-static-white hover:text-gilded-parchment transition-colors">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </a>
          <a 
            href="https://wa.link/5dp8wb" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-link"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-static-white dark:text-static-white hover:text-gilded-parchment transition-colors">
              <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21"></path>
              <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1zm0 0a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1"></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
