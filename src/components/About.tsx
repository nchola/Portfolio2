
import React from 'react';
import { ChevronRight } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="section bg-static-white dark:bg-void-black">
      <div className="container">
        <div className="mb-12">
          <span className="inline-block text-xs uppercase tracking-wider text-quantum-gray dark:text-static-white/70 mb-2">
            Who I Am
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-void-black dark:text-static-white">
            About Me
          </h2>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="w-full md:w-1/3 flex justify-center">
            {/* Placeholder for profile image - using a colored circle for now */}
            <div className="w-64 h-64 rounded-full bg-gilded-parchment/20 border-4 border-gilded-parchment flex items-center justify-center text-4xl font-bold text-gilded-parchment">
              MN
            </div>
          </div>
          
          <div className="w-full md:w-2/3">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-void-black dark:text-static-white">
              Muhammad Nanda
            </h3>
            <p className="text-lg italic mb-6 text-quantum-gray dark:text-static-white/80">
              Software Developer with 2 years experience working on several projects.
              <br />I have an interest in a career as a Programmer. I'm a fast learner and self-taught.
              <br />I have learned a lot of new technologies in the past few years by myself on the Internet.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-start">
                <ChevronRight className="mt-1 text-gilded-parchment" size={16} />
                <div className="ml-2">
                  <span className="font-bold text-void-black dark:text-static-white">Email:</span>
                  <span className="ml-2 text-quantum-gray dark:text-static-white/80">nchola@mhs.mdp.ac.id</span>
                </div>
              </div>
              
              <div className="flex items-start">
                <ChevronRight className="mt-1 text-gilded-parchment" size={16} />
                <div className="ml-2">
                  <span className="font-bold text-void-black dark:text-static-white">City:</span>
                  <span className="ml-2 text-quantum-gray dark:text-static-white/80">Palembang, Indonesia</span>
                </div>
              </div>
              
              <div className="flex items-start">
                <ChevronRight className="mt-1 text-gilded-parchment" size={16} />
                <div className="ml-2">
                  <span className="font-bold text-void-black dark:text-static-white">Freelance:</span>
                  <span className="ml-2 text-quantum-gray dark:text-static-white/80">Available</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
