
import React from 'react';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import SpotlightCard from '@/Animations/SpotlightCard/SpotlightCard';
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
    title: 'Work Experience Transmitter Division',
    company: 'Pertamina RU III - Palembang',
    location: 'Palembang, Indonesia',
    period: 'December 2024 - February 2025',
    description:
      'Assisted with maintenance and basic troubleshooting of transmitter systems in production facilities. Provided technical support for transmitter hardware under supervision. Conducted routine inspections and participated in calibration processes. Maintained technical documentation and inspection reports. Supported senior technicians in system optimization activities.',
    technologies: ['Transmitter Systems', 'Technical Documentation', 'Calibration'],
  },
  {
    title: 'Flutter Developer Apprenticeship',
    company: 'Mobile Programming MDP',
    location: 'Palembang, Indonesia',
    period: 'February - July 2024',
    description:
      'Developed the PolyglotPath app using Flutter, Firebase & Google Cloud Console, designed to make language learning engaging and accessible. Features include a community forum, language course options (English, Japanese, Korean, and Russian), interactive chat with Gemini AI, and quick, secure Google Sign-In. Designed and implemented an intuitive and responsive user interface. Managing internal applications and information systems. Provided training sessions for staff to effectively use the new system.',
    technologies: ['Flutter', 'Firebase', 'Google Cloud Console', 'Gemini AI', 'UI/UX Design'],
  },
  {
    title: 'Decision Support System Developer',
    company: 'PT. Pan Pacific Insurance',
    location: 'Palembang, Indonesia',
    period: 'April 2023 - January 2024',
    description:
      'Developed a Decision Support System for Determining Insurance Priority Customers Using the TOPSIS Method. Utilized the TOPSIS (Technique for Order of Preference by Similarity to Ideal Solution) method for multi-criteria decision-making. Managed customer data with CRUD (Create, Read, Update, Delete) operations. Provided training sessions for staff to effectively use the new system.',
    technologies: ['Web Development', 'TOPSIS Method', 'Decision Support System', 'CRUD Operations'],
  },
  {
    title: 'Archive Application Developer',
    company: 'Dinas Perumahan dan Permukiman, Kota Palembang',
    location: 'Palembang, Indonesia',
    period: 'February - June 2022',
    description:
      'Developed an archive management system to streamline document storage and retrieval. Implemented features to enhance data security and user accessibility. Collaborated with local government staff to ensure the system met their requirements. Managing internal applications and information systems. Provided training sessions for staff to effectively use the new system.',
    technologies: ['Web Development', 'Archive Management', 'Data Security', 'User Training'],
  },
  {
    title: 'IT Help Desk',
    company: 'Dinas Perumahan dan Permukiman Sumatera Selatan',
    location: 'Palembang, Indonesia',
    period: 'February - June 2021',
    description:
      'Installation, maintenance, and troubleshooting of computers and other devices. Technical support for hardware or software issues. Maintaining and updating the website. Managing internal applications and information systems. Optimizing and ensuring data integrity. Basic training for new systems.',
    technologies: ['Technical Support', 'Hardware Maintenance', 'Website Management', 'System Administration'],
  },
];

const educationData: EducationItem[] = [
  {
    institution: 'Universitas Multi Data Palembang',
    location: 'Palembang, Indonesia',
    degree: 'Bachelor of Computer Science | Informatics',
    period: '2018 - 2024',
    description:
      'Thesis: Perancangan Sistem Pendukung Keputusan Penentuan Pelanggan Prioritas pada PT. Pan Pacific Insurance dengan Metode TOPSIS Berbasis Web',
    link: 'https://www.mdp.ac.id/',
  },
  {
    institution: 'Senior High School 3 Palembang',
    location: 'Palembang, Indonesia',
    degree: 'Senior High School',
    period: '2015 - 2018',
    description:
      'Completed senior high school education with focus on science and mathematics.',
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
