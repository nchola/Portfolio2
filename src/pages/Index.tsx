
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

  // Section navigation
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
    <div className="min-h-screen bg-gradient-to-b from-static-white to-static-white/50 dark:from-void-black dark:to-void-black/90">
      <Navigation sections={sections} />
      
      <main className="relative">
        <Hero 
          title="Muhammad Nanda" 
          subtitle="I'm"
          typedItems={["A Software Developer", "A Computer Science Graduate", "A Technologies Enthusiast"]}
        />
        <About />
        <Experience />
        <Certificates />
        <ProjectGrid />
        <SkillsMatrix />
        <Footer />
      </main>
      
      <DarkModeToggle />
    </div>
  );
};

export default Index;
