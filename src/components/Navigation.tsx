
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { ChevronLeft, ChevronRight, Menu, X } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

interface NavigationProps {
  sections: {
    id: string;
    label: string;
  }[];
}

const Navigation: React.FC<NavigationProps> = ({ sections }) => {
  const [activeSection, setActiveSection] = useState(sections[0].id);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();

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
    
    // Close mobile menu after navigation
    if (mobileMenuOpen) {
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      isScrolled 
        ? "bg-static-white/90 dark:bg-void-black/90 backdrop-blur-md border-b border-quantum-gray/10 dark:border-static-white/10" 
        : "bg-transparent"
    )}>
      <div className="container mx-auto px-4 py-4">
        {isMobile ? (
          <div className="flex justify-between items-center">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-quantum-gray dark:text-static-white"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            
            <span className="text-lg font-medium text-quantum-gray dark:text-static-white">
              {sections.find(s => s.id === activeSection)?.label}
            </span>
          </div>
        ) : (
          <div className="flex justify-center items-center">
            <div className="relative">
              <div className="inline-flex bg-quantum-gray/10 dark:bg-quantum-gray/20 backdrop-blur-sm p-1 rounded-full border border-gilded-parchment/30">
                {sections.map((section, index) => (
                  <React.Fragment key={section.id}>
                    <button
                      onClick={() => scrollToSection(section.id)}
                      className={cn(
                        "px-4 py-2 rounded-full text-sm transition-all duration-300",
                        activeSection === section.id 
                          ? "bg-gilded-parchment text-void-black font-medium" 
                          : "text-quantum-gray dark:text-static-white hover:bg-gilded-parchment/20"
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
        )}
        
        {/* Mobile full-screen menu */}
        {isMobile && mobileMenuOpen && (
          <div className="fixed inset-0 bg-static-white dark:bg-void-black z-50 pt-20">
            <div className="container mx-auto px-6">
              <ul className="flex flex-col space-y-4">
                {sections.map((section) => (
                  <li key={section.id} className="border-b border-quantum-gray/10 dark:border-static-white/10 pb-2">
                    <button
                      onClick={() => scrollToSection(section.id)}
                      className={cn(
                        "w-full text-left py-3 px-4 rounded-md text-lg font-medium transition-all",
                        activeSection === section.id
                          ? "bg-gilded-parchment/20 text-gilded-parchment"
                          : "text-quantum-gray dark:text-static-white"
                      )}
                    >
                      {section.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
