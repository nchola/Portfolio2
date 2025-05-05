
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
        <About />
        <Experience />
        <Certificates />
        <ProjectGrid />
        <div className="relative">
          <SkillsMatrix />
          <Footer />
        </div>
      </main>
      
      <DarkModeToggle />
    </>
  );
};

export default Index;
