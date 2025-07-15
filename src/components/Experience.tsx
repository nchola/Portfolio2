import React from 'react';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { SpotlightCard } from '@/Animations/SpotlightCard/SpotlightCard';
import GlitchText from '@/Animations/GlitchText/GlitchText';

interface ExperienceItem {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
  technologies: string[];
  link?: string;
}

interface EducationItem {
  institution: string;
  location: string;
  degree: string;
  period: string;
  description: string;
  gpa?: string;
  link?: string;
}

const experienceData: ExperienceItem[] = [
  {
    title: 'Software Engineer Intern',
    company: 'PT. Mitra Integrasi Informatika',
    location: 'Jakarta, Indonesia',
    period: 'Feb 2023 - Aug 2023',
    description:
      'Developed and maintained web applications using React.js and Node.js. Collaborated with cross-functional teams to deliver high-quality software products. Implemented RESTful APIs and integrated them with front-end components.',
    technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Git'],
    link: 'https://www.mii.co.id/',
  },
  {
    title: 'Freelance Web Developer',
    company: 'Self-Employed',
    location: 'Remote',
    period: 'Jan 2022 - Present',
    description:
      'Designed and developed responsive websites for various clients using modern web technologies. Managed projects from conception to deployment, ensuring client satisfaction and timely delivery. Provided ongoing maintenance and support for existing websites.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Tailwind CSS'],
  },
];

const educationData: EducationItem[] = [
  {
    institution: 'Universitas Indonesia',
    location: 'Depok, Indonesia',
    degree: 'Bachelor of Computer Science',
    period: 'Aug 2019 - Aug 2023',
    description:
      'Completed a comprehensive curriculum in computer science, covering data structures, algorithms, software engineering, and database management. Participated in various programming competitions and hackathons.',
    gpa: '3.75/4.0',
    link: 'https://www.ui.ac.id/',
  },
];

const Experience: React.FC = () => {
  return (
    <section id="experience" className="section bg-static-white dark:bg-void-black">
      <div className="container">
        <div className="mb-12 text-center">
          <span className="inline-block text-xs uppercase tracking-wider text-void-black/70 dark:text-static-white/70 mb-2">
            Journey
          </span>
          <GlitchText
            speed={0.3}
            enableShadows={true}
            enableOnHover={false}
            className="text-4xl md:text-5xl font-cormorant font-bold text-void-black dark:text-static-white"
          >
            Experience & Education
          </GlitchText>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Experience Column */}
          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-px bg-gilded-parchment/30"></div>
            <div className="space-y-8">
              <h3 className="text-2xl font-cormorant font-bold text-void-black dark:text-static-white mb-6">
                Experience
              </h3>
              {experienceData.map((item, index) => (
                <SpotlightCard
                  key={index}
                  className="relative pl-12 transition-all duration-300 hover:scale-[1.02]"
                  spotlightColor="rgba(193, 154, 107, 0.3)"
                  spotlightSize={200}
                >
                  <div className="absolute left-0 top-6 w-12 h-12 bg-gilded-parchment/20 rounded-full flex items-center justify-center">
                    <div className="w-6 h-6 bg-gilded-parchment rounded-full"></div>
                  </div>
                  <Card className="bg-static-white/80 dark:bg-void-black/80 border-quantum-gray/20 shadow-lg">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-3">
                        <h4 className="text-lg font-cormorant font-bold text-void-black dark:text-static-white">
                          {item.title}
                        </h4>
                        {item.link && (
                          <a
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gilded-parchment hover:text-gilded-parchment/80 transition-colors"
                          >
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                      <div className="text-gilded-parchment font-medium mb-2">
                        {item.company}
                      </div>
                      <div className="flex flex-wrap gap-4 text-sm text-quantum-gray/80 dark:text-static-white/80 mb-3">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {item.period}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {item.location}
                        </div>
                      </div>
                      <p className="text-quantum-gray dark:text-static-white/90 text-sm leading-relaxed mb-4">
                        {item.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {item.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-2 py-1 bg-gilded-parchment/10 text-gilded-parchment text-xs rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </SpotlightCard>
              ))}
            </div>
          </div>

          {/* Education Column */}
          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-px bg-gilded-parchment/30"></div>
            <div className="space-y-8">
              <h3 className="text-2xl font-cormorant font-bold text-void-black dark:text-static-white mb-6">
                Education
              </h3>
              {educationData.map((item, index) => (
                <SpotlightCard
                  key={index}
                  className="relative pl-12 transition-all duration-300 hover:scale-[1.02]"
                  spotlightColor="rgba(193, 154, 107, 0.3)"
                  spotlightSize={200}
                >
                  <div className="absolute left-0 top-6 w-12 h-12 bg-gilded-parchment/20 rounded-full flex items-center justify-center">
                    <div className="w-6 h-6 bg-gilded-parchment rounded-full"></div>
                  </div>
                  <Card className="bg-static-white/80 dark:bg-void-black/80 border-quantum-gray/20 shadow-lg">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-3">
                        <h4 className="text-lg font-cormorant font-bold text-void-black dark:text-static-white">
                          {item.degree}
                        </h4>
                        {item.link && (
                          <a
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gilded-parchment hover:text-gilded-parchment/80 transition-colors"
                          >
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                      <div className="text-gilded-parchment font-medium mb-2">
                        {item.institution}
                      </div>
                      <div className="flex flex-wrap gap-4 text-sm text-quantum-gray/80 dark:text-static-white/80 mb-3">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {item.period}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {item.location}
                        </div>
                      </div>
                      {item.gpa && (
                        <div className="text-sm text-quantum-gray dark:text-static-white/90 mb-3">
                          <strong>GPA:</strong> {item.gpa}
                        </div>
                      )}
                      <p className="text-quantum-gray dark:text-static-white/90 text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                </SpotlightCard>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
