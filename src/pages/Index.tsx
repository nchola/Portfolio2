
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import ProjectGrid from '@/components/ProjectGrid';
import SkillsMatrix from '@/components/SkillsMatrix';
import DarkModeToggle from '@/components/DarkModeToggle';
import About from '@/components/About';
import Certificates from '@/components/Certificates';
import Experience from '@/components/Experience';
import Footer from '@/components/Footer';
import GlitchText from '@/Animations/GlitchText/GlitchText';

const sections = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'certificates', label: 'Certificates' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'footer', label: 'Contact' },
];

const Index: React.FC = () => {
  const location = useLocation();

  // Handle navigation to section from URL hash
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.substring(1);
      const element = document.getElementById(id);
      
      if (element) {
        setTimeout(() => {
          window.scrollTo({
            top: element.offsetTop - 80, // Adjust for header height
            behavior: 'smooth'
          });
        }, 100);
      }
    }
  }, [location]);

  return (
    <>
      <Navigation sections={sections} />
      
      <main className="min-h-screen">
        <Hero 
          title="Muhammad Nanda" 
          subtitle="I'm"
          typedItems={["Muhammad Nanda","a Full-Stack Developer", "a Computer Science Graduate", "a Technologies Enthusiast"]}
        />
        
        <section id="about" className="section bg-static-white dark:bg-void-black">
          <div className="container">
            <div className="mb-12 text-center">
              <span className="inline-block text-xs uppercase tracking-wider text-void-black/70 dark:text-static-white/70 mb-2">
                About
              </span>
              <div className="flex justify-center">
                <GlitchText
                  className="text-4xl md:text-5xl font-bold text-void-black dark:text-static-white"
                  speed={0.3}
                  enableShadows={true}
                  enableOnHover={true}
                >
                  About Me
                </GlitchText>
              </div>
            </div>
            <About />
          </div>
        </section>

        <Experience />
        
        <section id="certificates" className="section bg-static-white dark:bg-void-black">
          <div className="container">
            <div className="mb-12 text-center">
              <span className="inline-block text-xs uppercase tracking-wider text-void-black/70 dark:text-static-white/70 mb-2">
                Achievements
              </span>
              <div className="flex justify-center">
                <GlitchText
                  className="text-4xl md:text-5xl font-bold text-void-black dark:text-static-white"
                  speed={0.3}
                  enableShadows={true}
                  enableOnHover={true}
                >
                  Certificates
                </GlitchText>
              </div>
            </div>
            <Certificates />
          </div>
        </section>
        
        <section id="projects" className="section bg-static-white dark:bg-void-black">
          <div className="container">
            <div className="mb-12 text-center">
              <span className="inline-block text-xs uppercase tracking-wider text-void-black/70 dark:text-static-white/70 mb-2">
                Portfolio
              </span>
              <div className="flex justify-center">
                <GlitchText
                  className="text-4xl md:text-5xl font-bold text-void-black dark:text-static-white"
                  speed={0.3}
                  enableShadows={true}
                  enableOnHover={true}
                >
                  Projects
                </GlitchText>
              </div>
            </div>
            <ProjectGrid />
          </div>
        </section>
        
        <section id="skills" className="section bg-static-white dark:bg-void-black">
          <div className="container">
            <div className="mb-12 text-center">
              <span className="inline-block text-xs uppercase tracking-wider text-void-black/70 dark:text-static-white/70 mb-2">
                Expertise
              </span>
              <div className="flex justify-center">
                <GlitchText
                  className="text-4xl md:text-5xl font-bold text-void-black dark:text-static-white"
                  speed={0.3}
                  enableShadows={true}
                  enableOnHover={true}
                >
                  Skills
                </GlitchText>
              </div>
            </div>
            <SkillsMatrix />
          </div>
        </section>
        
        <Footer />
      </main>
      
      <DarkModeToggle />
    </>
  );
};

export default Index;
