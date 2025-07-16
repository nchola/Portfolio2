import React from 'react';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import SpotlightCard from '@/Animations/SpotlightCard/SpotlightCard';
import GlitchText from '@/Animations/GlitchText/GlitchText';
import DecryptedText from '@/Animations/DecryptedText/DecryptedText';

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

const experiences = [
  {
    id: "exp1",
    position: "Transmitter Division",
    company: "Pertamina RU III - Palembang",
    duration: "December 2024 - February 2025",
    description: [
      "Assisted with maintenance and basic troubleshooting of transmitter systems in production facilities.",
      "Provided technical support for transmitter hardware under supervision.",
      "Conducted routine inspections and participated in calibration processes.",
      "Maintained technical documentation and inspection reports.",
      "Supported senior technicians in system optimization activities.",
    ],
    technologies: ["Transmitter Systems", "Technical Documentation", "Calibration"],
  },
  {
    id: "exp2",
    position: "Flutter Developer Apprenticeship",
    company: "Mobile Programming MDP",
    duration: "February - July 2024",
    description: [
      "Developed the PolyglotPath app using Flutter, Firebase & Google Cloud Console, designed to make language learning engaging and accessible.",
      "Features include a community forum, language course options (English, Japanese, Korean, and Russian), interactive chat with Gemini AI, and quick, secure Google Sign-In.",
      "Designed and implemented an intuitive and responsive user interface.",
      "Managing internal applications and information systems.",
      "Provided training sessions for staff to effectively use the new system.",
    ],
    technologies: ["Flutter", "Firebase", "Google Cloud Console", "Gemini AI", "UI/UX Design"],
  },
  {
    id: "exp3",
    position: "Decision Support System Developer",
    company: "PT. Pan Pacific Insurance",
    companyUrl: "https://www.panfic.com/",
    duration: "April 2023 - January 2024",
    description: [
      "Developed a Decision Support System for Determining Insurance Priority Customers Using the TOPSIS Method.",
      "Utilized the TOPSIS (Technique for Order of Preference by Similarity to Ideal Solution) method for multi-criteria decision-making.",
      "Managed customer data with CRUD (Create, Read, Update, Delete) operations.",
      "Provided training sessions for staff to effectively use the new system.",
    ],
    technologies: ["Web Development", "TOPSIS Method", "Decision Support System", "CRUD Operations"],
  },
  {
    id: "exp4",
    position: "Archive Application Developer",
    company: "Dinas Perumahan dan Permukiman,  Kota Palembang.",
    duration: "February - June 2022",
    description: [
      "Developed an archive management system to streamline document storage and retrieval.",
      "Implemented features to enhance data security and user accessibility.",
      "Collaborated with local government staff to ensure the system met their requirements.",
      "Managing internal applications and information systems.",
      "Provided training sessions for staff to effectively use the new system.",
    ],
    technologies: ["Web Development", "Archive Management", "Data Security", "User Training"],
  },
  {
    id: "exp5",
    position: "IT Help Desk",
    company: "Dinas Perumahan dan Permukiman Sumatera Selatan",
    companyUrl: "https://disperkim.sumselprov.go.id/",
    duration: "February - June 2021",
    description: [
      "Installation, maintenance, and troubleshooting of computers and other devices.",
      "Technical support for hardware or software issues.",
      "Maintaining and updating the website.",
      "Managing internal applications and information systems.",
      "Optimizing and ensuring data integrity.",
      "Basic training for new systems.",
    ],
    technologies: ["Technical Support", "Hardware Maintenance", "Website Management", "System Administration"],
  },
];

const education = [
  {
    id: "edu1",
    degree: "Bachelor of Computer Science | Informatics",
    institution: "Universitas Multi Data Palembang",
    institutionUrl: "https://mdp.ac.id/en/",
    duration: "2018 - 2024",
    thesis: {
      title:
        "Perancangan Sistem Pendukung Keputusan Penentuan Pelanggan Prioritas pada PT. Pan Pacific Insurance dengan Metode TOPSIS Berbasis Web",
      url: "https://jurnal.itscience.org/index.php/digitech/article/view/5361",
    },
  },
  {
    id: "edu2",
    degree: "Senior High School",
    institution: "Senior High School 3 Palembang, Indonesia",
    duration: "2015 - 2018",
  },
  {
    id: "edu3",
    degree: "Junior High School",
    institution: "Junior High School 4 Palembang, Indonesia",
    duration: "2012 - 2015",
  },
];

const Experience: React.FC = () => {
  return (
    <section id="experience" className="section bg-static-white dark:bg-void-black">
      <div className="container">
        <div className="mb-12 text-center">
          <div className="inline-block text-xs uppercase tracking-wider text-quantum-gray/70 dark:text-static-white/70 mb-2">
            Journey
          </div>
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
              {experiences.map((item, index) => (
                <SpotlightCard
                  key={item.id}
                  className="relative pl-12 transition-all duration-300 hover:scale-[1.02] bg-static-white/80 dark:bg-void-black/80 border-quantum-gray/20 dark:border-static-white/20"
                  spotlightColor="rgba(193, 154, 107, 0.3)"
                >
                  <div className="absolute left-0 top-6 w-12 h-12 bg-gilded-parchment/20 rounded-full flex items-center justify-center">
                    <div className="w-6 h-6 bg-gilded-parchment rounded-full"></div>
                  </div>
                  <Card className="bg-transparent border-none shadow-none">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-3">
                        <h4 className="text-lg font-cormorant font-bold text-void-black dark:text-static-white">
                          {item.position}
                        </h4>
                        {item.companyUrl && (
                          <a
                            href={item.companyUrl}
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
                          {item.duration}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {item.company}
                        </div>
                      </div>
                      <DecryptedText
                        text={item.description.join(' ')}
                        speed={30}
                        maxIterations={8}
                        animateOn="view"
                        className="text-quantum-gray dark:text-static-white/90 text-sm leading-relaxed mb-4"
                      />
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
              {education.map((item, index) => (
                <SpotlightCard
                  key={item.id}
                  className="relative pl-12 transition-all duration-300 hover:scale-[1.02] bg-static-white/80 dark:bg-void-black/80 border-quantum-gray/20 dark:border-static-white/20"
                  spotlightColor="rgba(193, 154, 107, 0.3)"
                >
                  <div className="absolute left-0 top-6 w-12 h-12 bg-gilded-parchment/20 rounded-full flex items-center justify-center">
                    <div className="w-6 h-6 bg-gilded-parchment rounded-full"></div>
                  </div>
                  <Card className="bg-transparent border-none shadow-none">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-3">
                        <h4 className="text-lg font-cormorant font-bold text-void-black dark:text-static-white">
                          {item.degree}
                        </h4>
                        {item.institutionUrl && (
                          <a
                            href={item.institutionUrl}
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
                          {item.duration}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {item.institution}
                        </div>
                      </div>
                      {item.thesis && (
                        <div className="text-sm text-quantum-gray dark:text-static-white/90 mb-3">
                          <strong>Thesis:</strong>{" "}
                          <DecryptedText
                            text={item.thesis.title}
                            speed={30}
                            maxIterations={8}
                            animateOn="view"
                            className="text-gilded-parchment hover:text-gilded-parchment/80 transition-colors inline"
                          />
                        </div>
                      )}
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
