
import React from 'react';
import { Instagram, Linkedin, AtSign } from 'lucide-react';
import { cn } from '@/lib/utils';

const Footer: React.FC = () => {
  return (
    <footer id="footer" className="py-16 bg-static-white dark:bg-void-black border-t border-quantum-gray/10 dark:border-static-white/10">
      <div className="container mx-auto px-6">
        {/* Connect Section */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-quantum-gray dark:text-static-white mb-6">
            Let's connect!
          </h2>
          
          {/* Contact Information - Vertical Layout */}
          <div className="flex flex-col items-center justify-center space-y-4 mb-8">
            <a 
              href="https://www.instagram.com/nndncholaa/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-quantum-gray/80 dark:text-static-white/80 hover:text-gilded-parchment dark:hover:text-gilded-parchment transition-colors"
            >
              Instagram: @nndncholaa
            </a>
            
            <a 
              href="https://www.linkedin.com/in/mhmmdnanda/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-quantum-gray/80 dark:text-static-white/80 hover:text-gilded-parchment dark:hover:text-gilded-parchment transition-colors"
            >
              LinkedIn: mhmmdnanda
            </a>
            
            <a 
              href="mailto:nchola@mhs.mdp.ac.id" 
              className="text-quantum-gray/80 dark:text-static-white/80 hover:text-gilded-parchment dark:hover:text-gilded-parchment transition-colors"
            >
              Email: nchola@mhs.mdp.ac.id
            </a>
            
            <a 
              href="tel:+6285382581084" 
              className="text-quantum-gray/80 dark:text-static-white/80 hover:text-gilded-parchment dark:hover:text-gilded-parchment transition-colors"
            >
              Phone: (+62)85382581084
            </a>
            
            <p className="text-quantum-gray/80 dark:text-static-white/80">
              Location: Palembang, Indonesia
            </p>
          </div>
          
          <p className="text-quantum-gray/60 dark:text-static-white/60 text-sm">
            &copy; {new Date().getFullYear()} Muhammad Nanda. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
