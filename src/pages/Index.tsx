
import React from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import ProjectGrid from '@/components/ProjectGrid';
import SkillsMatrix from '@/components/SkillsMatrix';
import DarkModeToggle from '@/components/DarkModeToggle';

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
          title="Minimal Portfolio" 
          subtitle="A clean, minimalist approach to showcasing creative work with a focus on typography, whitespace, and subtle interactions."
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
