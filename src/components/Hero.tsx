
import React, { useEffect, useRef, useState } from 'react';

interface HeroProps {
  title: string;
  subtitle: string;
  typedItems?: string[];
}

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
        // Deleting text
        setTypedText(prev => prev.substring(0, prev.length - 1));
        setTypingSpeed(50); // Faster when deleting
        
        if (typedText === '') {
          setIsDeleting(false);
          setCurrentItemIndex((prev) => (prev + 1) % typedItems.length);
          setTypingSpeed(500); // Pause before typing next word
        }
      } else {
        // Typing text
        setTypedText(prev => currentItem.substring(0, prev.length + 1));
        setTypingSpeed(150); // Normal typing speed
        
        if (typedText === currentItem) {
          setTypingSpeed(2000); // Pause at the end of word
          setIsDeleting(true);
        }
      }
    };
    
    const timer = setTimeout(type, typingSpeed);
    return () => clearTimeout(timer);
  }, [typedText, currentItemIndex, isDeleting, typingSpeed, typedItems]);
  
  return (
    <section id="hero" className="h-screen flex flex-col justify-center items-center bg-void-black dark:bg-static-white relative overflow-hidden">
      <div className="container mx-auto px-6 z-10">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-static-white dark:text-void-black mb-6 tracking-tighter">
            {title}
          </h1>
          
          <div className="text-xl md:text-2xl text-static-white/80 dark:text-void-black/80 mb-12 min-h-16">
            <p>{subtitle} <span className="text-gilded-parchment">{typedText}</span><span className="animate-pulse">|</span></p>
          </div>
          
          <div className="flex justify-center space-x-6">
            <a 
              href="https://www.linkedin.com/in/mhmmdnanda/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-static-white dark:text-void-black hover:text-gilded-parchment dark:hover:text-gilded-parchment transition-colors">
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
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-static-white dark:text-void-black hover:text-gilded-parchment dark:hover:text-gilded-parchment transition-colors">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </a>
            <a 
              href="https://www.instagram.com/nndncholaa/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-static-white dark:text-void-black hover:text-gilded-parchment dark:hover:text-gilded-parchment transition-colors">
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
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-static-white dark:text-void-black hover:text-gilded-parchment dark:hover:text-gilded-parchment transition-colors">
                <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21"></path>
                <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1zm0 0a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1"></path>
              </svg>
            </a>
          </div>
          
          <div className="mt-12">
            <a 
              href="#about" 
              className="inline-block animate-bounce"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-static-white dark:text-void-black">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </a>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 30 }).map((_, i) => (
          <div 
            key={`star-${i}`}
            className="absolute bg-static-white dark:bg-void-black rounded-full animate-pulse"
            style={{
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.7 + 0.3,
              animationDuration: `${Math.random() * 3 + 2}s`,
            }}
          />
        ))}
      </div>
      
      {/* Add some decorative elements */}
      <div className="absolute top-0 left-0 w-1/4 h-1/4 border-t border-l border-gilded-parchment/20"></div>
      <div className="absolute bottom-0 right-0 w-1/4 h-1/4 border-b border-r border-gilded-parchment/20"></div>
    </section>
  );
};

export default Hero;
