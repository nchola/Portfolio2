import React from 'react';
import { User, Code, Globe, Coffee, Users, Target, Award, Lightbulb } from 'lucide-react';
import SpotlightCard from '@/Animations/SpotlightCard/SpotlightCard';
import DecryptedText from '@/Animations/DecryptedText/DecryptedText';

const About: React.FC = () => {
  return (
    <section id="about" className="section bg-static-white dark:bg-void-black">
      <div className="container">
        <div className="mb-12 text-center">
          <span className="inline-block text-xs uppercase tracking-wider text-quantum-gray/70 dark:text-static-white/70 mb-2">
            Introduction
          </span>
          <h2 className="text-4xl md:text-5xl font-cormorant font-bold text-void-black dark:text-static-white">
            About Me
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <DecryptedText
              text="Hello! I'm Muhammad Nanda, a passionate Computer Science graduate with a strong foundation in software development and innovative problem-solving. My journey in technology has been driven by curiosity and a commitment to creating meaningful digital experiences."
              speed={20}
              maxIterations={8}
              animateOn="view"
              className="text-lg text-quantum-gray/90 dark:text-static-white/90 leading-relaxed"
            />
            
            <DecryptedText
              text="I specialize in full-stack development, with expertise in modern frameworks like React, Flutter, and various backend technologies. My experience spans from mobile app development to decision support systems, always focusing on user-centric design and efficient solutions."
              speed={20}
              maxIterations={8}
              animateOn="view"
              className="text-lg text-quantum-gray/90 dark:text-static-white/90 leading-relaxed"
            />

            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="flex items-center gap-2">
                <Code className="w-5 h-5 text-gilded-parchment" />
                <span className="text-sm text-quantum-gray dark:text-static-white/80">Full-Stack Developer</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-5 h-5 text-gilded-parchment" />
                <span className="text-sm text-quantum-gray dark:text-static-white/80">Web & Mobile</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-gilded-parchment" />
                <span className="text-sm text-quantum-gray dark:text-static-white/80">Team Player</span>
              </div>
              <div className="flex items-center gap-2">
                <Lightbulb className="w-5 h-5 text-gilded-parchment" />
                <span className="text-sm text-quantum-gray dark:text-static-white/80">Problem Solver</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <SpotlightCard 
              className="p-6 h-full bg-static-white dark:bg-void-black border border-quantum-gray/20 dark:border-static-white/20 rounded-lg"
              spotlightColor="rgba(193, 154, 107, 0.3)"
            >
              <User className="w-8 h-8 text-gilded-parchment mb-4" />
              <h3 className="text-lg font-cormorant font-bold text-void-black dark:text-static-white mb-2">
                Personal
              </h3>
              <DecryptedText
                text="Based in Palembang, Indonesia. I enjoy exploring new technologies and contributing to open-source projects."
                speed={25}
                maxIterations={6}
                animateOn="view"
                className="text-sm text-quantum-gray/80 dark:text-static-white/80"
              />
            </SpotlightCard>

            <SpotlightCard 
              className="p-6 h-full bg-static-white dark:bg-void-black border border-quantum-gray/20 dark:border-static-white/20 rounded-lg"
              spotlightColor="rgba(193, 154, 107, 0.3)"
            >
              <Target className="w-8 h-8 text-gilded-parchment mb-4" />
              <h3 className="text-lg font-cormorant font-bold text-void-black dark:text-static-white mb-2">
                Goals
              </h3>
              <DecryptedText
                text="Focused on building scalable applications and contributing to innovative tech solutions."
                speed={25}
                maxIterations={6}
                animateOn="view"
                className="text-sm text-quantum-gray/80 dark:text-static-white/80"
              />
            </SpotlightCard>

            <SpotlightCard 
              className="p-6 h-full bg-static-white dark:bg-void-black border border-quantum-gray/20 dark:border-static-white/20 rounded-lg"
              spotlightColor="rgba(193, 154, 107, 0.3)"
            >
              <Coffee className="w-8 h-8 text-gilded-parchment mb-4" />
              <h3 className="text-lg font-cormorant font-bold text-void-black dark:text-static-white mb-2">
                Interests
              </h3>
              <DecryptedText
                text="UI/UX design, artificial intelligence, and creating seamless user experiences."
                speed={25}
                maxIterations={6}
                animateOn="view"
                className="text-sm text-quantum-gray/80 dark:text-static-white/80"
              />
            </SpotlightCard>

            <SpotlightCard 
              className="p-6 h-full bg-static-white dark:bg-void-black border border-quantum-gray/20 dark:border-static-white/20 rounded-lg"
              spotlightColor="rgba(193, 154, 107, 0.3)"
            >
              <Award className="w-8 h-8 text-gilded-parchment mb-4" />
              <h3 className="text-lg font-cormorant font-bold text-void-black dark:text-static-white mb-2">
                Achievements
              </h3>
              <DecryptedText
                text="Multiple certifications in web development, mobile programming, and problem-solving."
                speed={25}
                maxIterations={6}
                animateOn="view"
                className="text-sm text-quantum-gray/80 dark:text-static-white/80"
              />
            </SpotlightCard>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
