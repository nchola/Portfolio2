
import React from 'react';
import { MapPin, Mail, Phone, Instagram, Linkedin, AtSign } from 'lucide-react';
import { cn } from '@/lib/utils';

const Footer: React.FC = () => {
  return (
    <footer id="footer" className="py-16 bg-static-white dark:bg-void-black border-t border-quantum-gray/10 dark:border-static-white/10">
      <div className="container mx-auto px-6">
        {/* Contact Info Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
          {/* Location */}
          <div className="flex flex-col items-center text-center">
            <div className="mb-4 p-3 rounded-full bg-gilded-parchment/10 text-gilded-parchment">
              <MapPin size={24} />
            </div>
            <h3 className="text-lg font-medium text-quantum-gray dark:text-static-white mb-2">
              Location:
            </h3>
            <p className="text-quantum-gray/80 dark:text-static-white/80">
              Palembang, Indonesia
            </p>
          </div>
          
          {/* Email */}
          <div className="flex flex-col items-center text-center">
            <div className="mb-4 p-3 rounded-full bg-gilded-parchment/10 text-gilded-parchment">
              <Mail size={24} />
            </div>
            <h3 className="text-lg font-medium text-quantum-gray dark:text-static-white mb-2">
              Email:
            </h3>
            <a 
              href="mailto:nchola@mhs.mdp.ac.id" 
              className="text-quantum-gray/80 dark:text-static-white/80 hover:text-gilded-parchment dark:hover:text-gilded-parchment transition-colors"
            >
              nchola@mhs.mdp.ac.id
            </a>
          </div>
          
          {/* Phone */}
          <div className="flex flex-col items-center text-center">
            <div className="mb-4 p-3 rounded-full bg-gilded-parchment/10 text-gilded-parchment">
              <Phone size={24} />
            </div>
            <h3 className="text-lg font-medium text-quantum-gray dark:text-static-white mb-2">
              Phone:
            </h3>
            <a 
              href="tel:+6285382581084" 
              className="text-quantum-gray/80 dark:text-static-white/80 hover:text-gilded-parchment dark:hover:text-gilded-parchment transition-colors"
            >
              (+62)85382581084
            </a>
          </div>
        </div>
        
        {/* Connect Section */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-quantum-gray dark:text-static-white mb-6">
            Let's connect!
          </h2>
          
          <div className="flex justify-center space-x-6">
            <a 
              href="https://www.instagram.com/nndncholaa/" 
              target="_blank" 
              rel="noopener noreferrer"
              className={cn(
                "p-3 rounded-full transition-all duration-300",
                "bg-quantum-gray/10 dark:bg-static-white/5 hover:bg-gilded-parchment/20"
              )}
              aria-label="Instagram"
            >
              <Instagram className="text-quantum-gray dark:text-static-white" size={20} />
            </a>
            <a 
              href="https://www.linkedin.com/in/mhmmdnanda/" 
              target="_blank" 
              rel="noopener noreferrer"
              className={cn(
                "p-3 rounded-full transition-all duration-300",
                "bg-quantum-gray/10 dark:bg-static-white/5 hover:bg-gilded-parchment/20"
              )}
              aria-label="LinkedIn"
            >
              <Linkedin className="text-quantum-gray dark:text-static-white" size={20} />
            </a>
            <a 
              href="mailto:nchola@mhs.mdp.ac.id" 
              className={cn(
                "p-3 rounded-full transition-all duration-300",
                "bg-quantum-gray/10 dark:bg-static-white/5 hover:bg-gilded-parchment/20"
              )}
              aria-label="Email"
            >
              <AtSign className="text-quantum-gray dark:text-static-white" size={20} />
            </a>
          </div>
          
          <p className="mt-8 text-quantum-gray/60 dark:text-static-white/60 text-sm">
            &copy; {new Date().getFullYear()} Muhammad Nanda. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
