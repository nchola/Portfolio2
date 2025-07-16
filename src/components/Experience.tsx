import React from 'react';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import SpotlightCard from '@/Animations/SpotlightCard/SpotlightCard';
import GlitchText from '@/Animations/GlitchText/GlitchText';
import ScrollReveal from '@/Animations/ScrollReveal/ScrollReveal';

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
    <section id="experience" className="section bg-background">
      <div className="container">
        <div className="mb-12 text-center">
          <div className="inline-block text-xs uppercase tracking-wider text-muted-foreground mb-2">
            Journey
          </div>
          <ScrollReveal>
            <GlitchText
              speed={0.3}
              enableShadows={true}
              enableOnHover={false}
              className="text-4xl md:text-5xl font-cormorant font-bold text-foreground"
            >
              Experience & Education
            </GlitchText>
          </ScrollReveal>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Experience Column */}
          <div className="relative">
            <div className="absolute left-4 lg:left-6 top-0 bottom-0 w-px bg-accent/30"></div>
            <div className="space-y-6 lg:space-y-8">
              <h3 className="text-xl lg:text-2xl font-cormorant font-bold text-foreground mb-4 lg:mb-6">
                Experience
              </h3>
              {experiences.map((item, index) => (
                <ScrollReveal key={item.id}>
                  <SpotlightCard
                    className="relative pl-8 lg:pl-12 transition-all duration-300 hover:scale-[1.02]"
                    spotlightColor="rgba(193, 154, 107, 0.3)"
                  >
                    <div className="absolute left-0 top-4 lg:top-6 w-8 h-8 lg:w-12 lg:h-12 bg-accent/20 rounded-full flex items-center justify-center">
                      <div className="w-4 h-4 lg:w-6 lg:h-6 bg-accent rounded-full"></div>
                    </div>
                    <Card className="bg-card/80 border-border shadow-lg">
                      <CardContent className="p-4 lg:p-6">
                        <div className="flex items-start justify-between mb-2 lg:mb-3">
                          <h4 className="text-base lg:text-lg font-cormorant font-bold text-foreground leading-tight">
                            {item.position}
                          </h4>
                          {item.companyUrl && (
                            <a
                              href={item.companyUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-accent hover:text-accent/80 transition-colors"
                            >
                              <ExternalLink className="w-4 h-4" />
                            </a>
                          )}
                        </div>
                        <div className="text-accent font-medium mb-2 text-sm lg:text-base">
                          {item.company}
                        </div>
                        <div className="flex flex-col sm:flex-row sm:gap-4 text-xs lg:text-sm text-muted-foreground mb-3 gap-1">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-3 h-3 lg:w-4 lg:h-4" />
                            {item.duration}
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="w-3 h-3 lg:w-4 lg:h-4" />
                            {item.company}
                          </div>
                        </div>
                        <ul className="list-disc pl-4 lg:pl-5 text-foreground/90 text-xs lg:text-sm leading-relaxed mb-3 lg:mb-4 space-y-1">
                          {item.description.slice(0, 3).map((desc, descIndex) => (
                            <li key={descIndex}>{desc}</li>
                          ))}
                          {item.description.length > 3 && (
                            <li className="text-muted-foreground">
                              +{item.description.length - 3} more responsibilities...
                            </li>
                          )}
                        </ul>
                        <div className="flex flex-wrap gap-1 lg:gap-2">
                          {item.technologies.slice(0, 3).map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="px-2 py-1 bg-accent/10 text-accent text-xs rounded-full"
                            >
                              {tech}
                            </span>
                          ))}
                          {item.technologies.length > 3 && (
                            <span className="px-2 py-1 bg-muted/10 text-muted-foreground text-xs rounded-full">
                              +{item.technologies.length - 3}
                            </span>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  </SpotlightCard>
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* Education Column */}
          <div className="relative">
            <div className="absolute left-4 lg:left-6 top-0 bottom-0 w-px bg-accent/30"></div>
            <div className="space-y-6 lg:space-y-8">
              <h3 className="text-xl lg:text-2xl font-cormorant font-bold text-foreground mb-4 lg:mb-6">
                Education
              </h3>
              {education.map((item, index) => (
                <ScrollReveal key={item.id}>
                  <SpotlightCard
                    className="relative pl-8 lg:pl-12 transition-all duration-300 hover:scale-[1.02]"
                    spotlightColor="rgba(193, 154, 107, 0.3)"
                  >
                    <div className="absolute left-0 top-4 lg:top-6 w-8 h-8 lg:w-12 lg:h-12 bg-accent/20 rounded-full flex items-center justify-center">
                      <div className="w-4 h-4 lg:w-6 lg:h-6 bg-accent rounded-full"></div>
                    </div>
                    <Card className="bg-card/80 border-border shadow-lg">
                      <CardContent className="p-4 lg:p-6">
                        <div className="flex items-start justify-between mb-2 lg:mb-3">
                          <h4 className="text-base lg:text-lg font-cormorant font-bold text-foreground leading-tight">
                            {item.degree}
                          </h4>
                          {item.institutionUrl && (
                            <a
                              href={item.institutionUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-accent hover:text-accent/80 transition-colors"
                            >
                              <ExternalLink className="w-4 h-4" />
                            </a>
                          )}
                        </div>
                        <div className="text-accent font-medium mb-2 text-sm lg:text-base">
                          {item.institution}
                        </div>
                        <div className="flex flex-col sm:flex-row sm:gap-4 text-xs lg:text-sm text-muted-foreground mb-3 gap-1">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-3 h-3 lg:w-4 lg:h-4" />
                            {item.duration}
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="w-3 h-3 lg:w-4 lg:h-4" />
                            {item.institution}
                          </div>
                        </div>
                        {item.thesis && (
                          <div className="text-xs lg:text-sm text-foreground/90 mb-3">
                            <strong>Thesis:</strong>{" "}
                            <a
                              href={item.thesis.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-accent hover:text-accent/80 transition-colors"
                            >
                              {item.thesis.title.length > 60 
                                ? `${item.thesis.title.substring(0, 60)}...`
                                : item.thesis.title
                              }
                            </a>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  </SpotlightCard>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
