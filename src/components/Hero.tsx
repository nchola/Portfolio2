import React, { useEffect, useState } from 'react';
import { Atom, BrainCircuit, Code, CircuitBoard, Infinity, Zap, Hexagon } from 'lucide-react';

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
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
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
  
  // Handle mouse movement for parallax effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const x = (clientX / window.innerWidth - 0.5) * 20; // -10 to 10
      const y = (clientY / window.innerHeight - 0.5) * 20; // -10 to 10
      
      setMousePosition({ x, y });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  
  return (
    <section id="hero" className="h-screen flex flex-col justify-center items-center relative overflow-hidden">
      {/* Cosmic Background with Parallax Effect */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center transform transition-transform duration-100 ease-out z-0"
          style={{ 
            backgroundImage: 'url(/lovable-uploads/aba76126-7f32-41b2-93f1-c9cf917452ae.png)',
            transform: `scale(1.1) translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`,
            filter: 'brightness(0.7)'
          }}
        />
        
        {/* Void/Black Hole Animation */}
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-64 h-64 md:w-96 md:h-96 rounded-full bg-transparent border-2 border-gilded-parchment/30 animate-[spin_30s_linear_infinite] opacity-40"></div>
          <div className="absolute left-1/2 top-1/2 w-40 h-40 md:w-64 md:h-64 rounded-full bg-transparent border-2 border-gilded-parchment/20 animate-[spin_20s_linear_infinite_reverse] -translate-x-1/2 -translate-y-1/2 opacity-30"></div>
          <div className="absolute left-1/2 top-1/2 w-20 h-20 md:w-40 md:h-40 rounded-full bg-void-black/60 border border-gilded-parchment/10 animate-[spin_15s_linear_infinite] -translate-x-1/2 -translate-y-1/2"></div>
        </div>
        
        {/* Abstract Logo: Infinity Loop */}
        <div className="absolute top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2 opacity-40 z-10">
          <Infinity 
            size={80} 
            className="text-gilded-parchment animate-[spin_20s_linear_infinite]" 
            strokeWidth={1} 
          />
        </div>
        
        {/* Abstract Logo: Void Collapse (Atom) */}
        <div className="absolute top-3/4 left-1/5 transform -translate-x-1/2 -translate-y-1/2 opacity-30 z-10">
          <Atom 
            size={70} 
            className="text-static-white animate-pulse" 
            strokeWidth={1} 
          />
        </div>
        
        {/* Abstract Logo: Cyberpunk Circuit */}
        <div className="absolute top-2/3 right-1/4 transform translate-x-1/2 -translate-y-1/2 opacity-30 z-10">
          <CircuitBoard 
            size={60} 
            className="text-gilded-parchment/70" 
            strokeWidth={1}
          />
        </div>
        
        {/* Abstract Logo: To The Infinity (Brain) */}
        <div className="absolute top-1/3 right-1/5 transform translate-x-1/2 -translate-y-1/2 opacity-40 z-10">
          <BrainCircuit 
            size={65} 
            className="text-static-white/60 animate-float" 
            strokeWidth={1} 
          />
        </div>
        
        {/* Abstract Logo: Cyberpunk Code Symbol */}
        <div className="absolute top-1/2 right-1/3 transform translate-x-1/2 -translate-y-1/2 opacity-30 z-10">
          <Code 
            size={55} 
            className="text-gilded-parchment/80" 
            strokeWidth={1} 
          />
        </div>
        
        {/* Abstract Logo: Cyberpunk Hexagon */}
        <div className="absolute bottom-1/4 right-1/4 transform translate-x-1/2 translate-y-1/2 opacity-35 z-10">
          <Hexagon 
            size={75} 
            className="text-static-white/70" 
            strokeWidth={1} 
          />
        </div>
        
        {/* Abstract Logo: Electric Symbol */}
        <div className="absolute top-2/5 left-1/3 transform -translate-x-1/2 -translate-y-1/2 opacity-40 z-10">
          <Zap 
            size={65} 
            className="text-gilded-parchment animate-pulse" 
            strokeWidth={1}
          />
        </div>
        
        {/* Animated Stars */}
        <div className="absolute inset-0">
          {Array.from({ length: 50 }).map((_, i) => (
            <div 
              key={`cosmic-star-${i}`}
              className="absolute rounded-full bg-static-white animate-pulse"
              style={{
                width: `${Math.random() * 3 + 1}px`,
                height: `${Math.random() * 3 + 1}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.9 + 0.1,
                animationDuration: `${Math.random() * 5 + 2}s`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            />
          ))}
        </div>
        
        {/* Infinity Symbol Animation */}
        <div 
          className="absolute left-1/2 top-3/4 transform -translate-x-1/2 -translate-y-1/2 opacity-20 text-gilded-parchment dark:text-gilded-parchment/70 text-8xl animate-float"
          style={{ fontSize: '200px' }}
        >
          ∞
        </div>
      </div>
      
      {/* Content - No Container Div */}
      <div className="container mx-auto px-4 sm:px-6 z-10 relative max-w-full">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-static-white dark:text-static-white mb-6 tracking-tighter text-shadow-lg text-center">
          {title}
        </h1>
        
        <div className="text-xl md:text-2xl text-static-white dark:text-static-white mb-12 min-h-16 text-center backdrop-blur-sm p-4">
          <p>{subtitle} <span className="text-gilded-parchment dark:text-gilded-parchment">{typedText}</span><span className="animate-pulse text-static-white dark:text-static-white">|</span></p>
        </div>
        
        <div className="flex justify-center space-x-6">
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
