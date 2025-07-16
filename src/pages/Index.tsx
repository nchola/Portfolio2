
import React, { useEffect, Suspense, lazy } from 'react';
import { useLocation } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import DarkModeToggle from '@/components/DarkModeToggle';

// Lazy load components for better performance
const About = lazy(() => import('@/components/About'));
const Experience = lazy(() => import('@/components/Experience'));
const Certificates = lazy(() => import('@/components/Certificates'));
const ProjectGrid = lazy(() => import('@/components/ProjectGrid'));
const SkillsMatrix = lazy(() => import('@/components/SkillsMatrix'));
const Footer = lazy(() => import('@/components/Footer'));

const sections = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'certificates', label: 'Certificates' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'footer', label: 'Contact' },
];

// Loading component
const SectionLoader = () => (
  <div className="section flex items-center justify-center">
    <div className="animate-pulse flex space-x-4">
      <div className="rounded-full bg-quantum-gray/20 h-12 w-12"></div>
      <div className="flex-1 space-y-2 py-1">
        <div className="h-4 bg-quantum-gray/20 rounded w-3/4"></div>
        <div className="h-4 bg-quantum-gray/20 rounded w-1/2"></div>
      </div>
    </div>
  </div>
);

const Index: React.FC = () => {
  const location = useLocation();

  // Handle navigation to section from URL hash
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.substring(1);
      const element = document.getElementById(id);
      
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }, 100);
      }
    }
  }, [location]);

  // Preload critical resources
  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = '/hero.png';
    link.as = 'image';
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <>
      <Navigation sections={sections} />
      
      <main className="min-h-screen">
        <Hero 
          title="Muhammad Nanda" 
          subtitle="I'm"
          typedItems={["Muhammad Nanda","a Full-Stack Developer", "a Computer Science Graduate", "a Technologies Enthusiast"]}
        />
        
        <Suspense fallback={<SectionLoader />}>
          <About />
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <Experience />
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <Certificates />
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <ProjectGrid />
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <SkillsMatrix />
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <Footer />
        </Suspense>
      </main>
      
      <DarkModeToggle />
    </>
  );
};

export default Index;
