
import React from 'react';
import { Award, Code, Users, Coffee } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import SpotlightCard from '@/Animations/SpotlightCard/SpotlightCard';
import GlitchText from '@/Animations/GlitchText/GlitchText';
import ScrollReveal from '@/Animations/ScrollReveal/ScrollReveal';

const About: React.FC = () => {
  const stats = [
    { icon: Code, label: 'Projects Completed', value: '50+' },
    { icon: Award, label: 'Certifications', value: '25+' },
    { icon: Users, label: 'Team Projects', value: '15+' },
    { icon: Coffee, label: 'Cups of Coffee', value: '∞' }
  ];

  return (
    <section id="about" className="section bg-background">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div>
              <span className="inline-block text-xs uppercase tracking-wider text-muted-foreground mb-2">
                About Me
              </span>
              <ScrollReveal>
                <GlitchText
                  speed={0.3}
                  enableShadows={true}
                  enableOnHover={false}
                  className="text-4xl md:text-5xl font-cormorant font-bold text-foreground"
                >
                  Passionate Developer
                </GlitchText>
              </ScrollReveal>
            </div>
            
            <div className="space-y-4 text-foreground/90 leading-relaxed">
              <ScrollReveal>
                <p>
                  I'm a passionate full-stack developer with expertise in modern web technologies. 
                  My journey in software development has been driven by curiosity and a desire to 
                  create meaningful digital experiences.
                </p>
              </ScrollReveal>
              
              <ScrollReveal>
                <p>
                  With a strong foundation in both frontend and backend development, I enjoy 
                  working with technologies like React, Node.js, TypeScript, and various databases. 
                  I'm always eager to learn new technologies and tackle challenging problems.
                </p>
              </ScrollReveal>
              
              <ScrollReveal>
                <p>
                  When I'm not coding, you can find me exploring new technologies, contributing 
                  to open-source projects, or sharing knowledge with the developer community.
                </p>
              </ScrollReveal>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, index) => (
              <ScrollReveal key={index}>
                <SpotlightCard
                  className="text-center p-6 transition-all duration-300 hover:scale-105"
                  spotlightColor="rgba(193, 154, 107, 0.3)"
                >
                  <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-6 h-6 text-accent" />
                  </div>
                  <div className="text-2xl font-cormorant font-bold text-foreground mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </SpotlightCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
