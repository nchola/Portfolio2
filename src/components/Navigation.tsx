
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface NavigationProps {
  sections: {
    id: string;
    label: string;
  }[];
}

const Navigation: React.FC<NavigationProps> = ({ sections }) => {
  const [activeSection, setActiveSection] = useState(sections[0].id);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Update scrolled state for styling
      setIsScrolled(window.scrollY > 50);
      
      // Find the current section in view
      const sectionElements = sections.map(section => ({
        id: section.id,
        element: document.getElementById(section.id),
      })).filter(section => section.element !== null);
      
      const currentSection = sectionElements.find(section => {
        const rect = section.element?.getBoundingClientRect();
        return rect && rect.top <= 100 && rect.bottom >= 100;
      });
      
      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      isScrolled ? "bg-void-black/90 dark:bg-static-white/90 backdrop-blur-md" : "bg-transparent"
    )}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-center items-center">
          <div className="relative">
            <div className="inline-flex bg-quantum-gray/20 dark:bg-quantum-gray/10 backdrop-blur-sm p-1 rounded-full border border-gilded-parchment/30">
              {sections.map((section, index) => (
                <React.Fragment key={section.id}>
                  <button
                    onClick={() => scrollToSection(section.id)}
                    className={cn(
                      "px-4 py-2 rounded-full text-sm transition-all duration-300",
                      activeSection === section.id 
                        ? "bg-gilded-parchment text-void-black font-medium" 
                        : "text-static-white dark:text-void-black hover:bg-gilded-parchment/20"
                    )}
                  >
                    {section.label}
                  </button>
                  {index < sections.length - 1 && (
                    <div className="h-full w-px bg-gilded-parchment/20 mx-1"></div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
