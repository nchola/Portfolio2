
import React from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import ProjectGrid from '@/components/ProjectGrid';
import SkillsMatrix from '@/components/SkillsMatrix';
import DarkModeToggle from '@/components/DarkModeToggle';
import About from '@/components/About';

const sections = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
];

const Index: React.FC = () => {
  return (
    <>
      <Navigation sections={sections} />
      
      <main className="min-h-screen">
        <Hero 
          title="Muhammad Nanda" 
          subtitle="I'm a Multi Platform Developer"
          typedItems={["A Software Developer", "A Computer Science Graduate", "A Technologies Enthusiast"]}
        />
        <About />
        <ProjectGrid />
        <SkillsMatrix />
      </main>
      
      <DarkModeToggle />
    </>
  );
};

export default Index;
