
import React from 'react';
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
  return (
    <>
      <Navigation sections={sections} />
      
      <main className="min-h-screen">
        <Hero 
          title="Muhammad Nanda" 
          subtitle="I'm"
          typedItems={["A Software Developer", "A Computer Science Graduate", "A Technologies Enthusiast"]}
        />
        <About />
        <Experience />
        <Certificates />
        <ProjectGrid />
        
        {/* Properly separate Skills and Footer with correct z-index and overflow */}
        <div className="relative">
          <SkillsMatrix />
        </div>
        <Footer />
      </main>
      
      <DarkModeToggle />
    </>
  );
};

export default Index;
