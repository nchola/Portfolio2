import React, { useState, useEffect } from 'react';
import { Instagram, Linkedin, AtSign, Phone, MapPin, Github } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Card } from './ui/card';

interface ContactItemProps {
  icon: React.ElementType;
  label: string;
  value: string;
  link: string;
  color?: string;
}

// Redesigned contact item for better space utilization on mobile
const ContactItem: React.FC<ContactItemProps> = ({ icon: Icon, label, value, link, color }) => {
  return (
    <a 
      href={link}
      target="_blank" 
      rel="noopener noreferrer"
      className="group block transition-all duration-500 ease-in-out"
    >
      <div className="flex items-center gap-2 p-2 md:p-3 bg-quantum-gray/10 dark:bg-void-black/30 rounded-lg border border-transparent hover:border-gilded-parchment/30 transition-all duration-500">
        <div className="flex-shrink-0">
          <Icon className="w-4 h-4 md:w-5 md:h-5 text-quantum-gray/70 dark:text-static-white/70 group-hover:text-gilded-parchment transition-colors duration-500 ease-in-out" style={color ? { color } : {}} />
        </div>
        <div className="flex flex-col">
          <span className="text-xs text-quantum-gray/60 dark:text-static-white/60">{label}</span>
          <span className="text-xs md:text-sm font-medium text-quantum-gray dark:text-static-white/80 group-hover:text-gilded-parchment transition-colors duration-500 relative truncate">
            {value}
            <span className="absolute left-0 bottom-0 w-0 h-px bg-gilded-parchment group-hover:w-full transition-all duration-500 ease-in-out"></span>
          </span>
        </div>
      </div>
    </a>
  );
};

const Footer: React.FC = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  
  // Handle custom cursor
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <footer 
      id="footer" 
      className="relative py-8 md:py-16 bg-static-white dark:bg-void-black border-t border-quantum-gray/10 dark:border-static-white/10 overflow-hidden"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Parallax Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <div 
            key={i}
            className="cosmic-star"
            style={{
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 10 + 5}s`
            }}
          ></div>
        ))}
      </div>

      {/* Custom Cursor - Only visible on desktop */}
      <div 
        className={cn(
          "fixed w-6 h-6 rounded-full pointer-events-none z-50 mix-blend-difference transition-transform duration-300 ease-out hidden md:block",
          isHovering ? "bg-static-white/40 scale-150" : "bg-static-white/20 scale-100"
        )}
        style={{ 
          transform: `translate(${cursorPosition.x - 12}px, ${cursorPosition.y - 12}px)`,
          backdropFilter: "blur(2px)"
        }}
      ></div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 gap-6">          
          {/* Contact Grid Section - Improved for mobile */}
          <div>
            <Card className="bg-static-white/50 dark:bg-void-black/50 border border-quantum-gray/10 dark:border-static-white/10 backdrop-blur-sm overflow-hidden">
              <div className="p-3 md:p-4">
                <h2 className="text-xl md:text-2xl font-cormorant font-bold text-quantum-gray dark:text-static-white mb-3 md:mb-4 text-center">
                  Let's connect!
                </h2>
                
                {/* Improved grid for mobile - 2 columns on mobile, 3 on larger screens */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3">
                  <ContactItem 
                    icon={Instagram}
                    label="Instagram"
                    value="@nndncholaa"
                    link="https://www.instagram.com/nndncholaa/"
                    color="#E1306C"
                  />
                  
                  <ContactItem 
                    icon={Linkedin}
                    label="LinkedIn"
                    value="mhmmdnanda"
                    link="https://www.linkedin.com/in/mhmmdnanda/"
                    color="#0A66C2"
                  />
                  
                  <ContactItem 
                    icon={Github}
                    label="GitHub"
                    value="nchola"
                    link="https://github.com/nchola"
                  />
                  
                  <ContactItem 
                    icon={AtSign}
                    label="Email"
                    value="nchola@mhs.mdp.ac.id"
                    link="mailto:nchola@mhs.mdp.ac.id"
                  />
                  
                  <ContactItem 
                    icon={Phone}
                    label="Phone"
                    value="(+62)85382581084"
                    link="https://wa.link/5dp8wb"
                  />
                  
                  <ContactItem 
                    icon={MapPin}
                    label="Location"
                    value="Palembang, ID"
                    link="https://maps.google.com/?q=Palembang,Indonesia"
                    color="#EA4335"
                  />
                </div>
              </div>

              {/* Footer Bottom - Simplified for mobile */}
              <div className="py-3 md:py-4 px-4 md:px-6 border-t border-quantum-gray/10 dark:border-static-white/10 flex flex-col md:flex-row items-center justify-between bg-quantum-gray/5 dark:bg-static-white/5">
                <p className="text-quantum-gray/60 dark:text-static-white/60 text-xs md:text-sm">
                  &copy; {new Date().getFullYear()} Muhammad Nanda
                </p>
                
                {/* Geolocation Badge - Simpler on mobile */}
                <div className="mt-1 md:mt-0 flex items-center text-xs text-quantum-gray/50 dark:text-static-white/50">
                  <span className="inline-block w-2 h-2 rounded-full bg-gilded-parchment mr-1 animate-pulse"></span>
                  <span className="font-medium">Palembang, ID</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
      
      {/* Mobile Floating Action Button */}
      <a
        href="mailto:nchola@mhs.mdp.ac.id"
        className="md:hidden fixed bottom-6 right-6 w-12 h-12 rounded-full bg-gilded-parchment flex items-center justify-center shadow-lg z-20"
      >
        <AtSign className="text-void-black w-5 h-5" />
        <span className="absolute inset-0 rounded-full bg-gilded-parchment animate-ping opacity-30"></span>
      </a>
    </footer>
  );
};

export default Footer;