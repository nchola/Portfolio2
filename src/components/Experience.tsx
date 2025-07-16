import React from 'react';
import { MapPin, Calendar, Award, GraduationCap, Briefcase } from 'lucide-react';
import SpotlightCard from '@/Animations/SpotlightCard/SpotlightCard';
import DecryptedText from '@/Animations/DecryptedText/DecryptedText';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="section bg-static-white dark:bg-void-black">
      <div className="container">
        <div className="mb-12 text-center">
          <span className="inline-block text-xs uppercase tracking-wider text-quantum-gray/70 dark:text-static-white/70 mb-2">
            Background
          </span>
          <h2 className="text-4xl md:text-5xl font-cormorant font-bold text-void-black dark:text-static-white">
            Experience & Education
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Work Experience */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Briefcase className="w-6 h-6 text-gilded-parchment" />
              <h3 className="text-2xl font-cormorant font-bold text-void-black dark:text-static-white">
                Work Experience
              </h3>
            </div>
            
            <div className="space-y-6">
              {/* Transmitter Division */}
              <SpotlightCard 
                className="p-6 bg-static-white dark:bg-void-black border border-quantum-gray/20 dark:border-static-white/20 rounded-lg"
                spotlightColor="rgba(193, 154, 107, 0.3)"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h4 className="text-xl font-bold text-void-black dark:text-static-white">
                      Transmitter Division
                    </h4>
                    <p className="text-gilded-parchment font-medium">
                      Pertamina RU III - Palembang
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-quantum-gray/60 dark:text-static-white/60">
                    <Calendar className="w-4 h-4" />
                    <span>December 2024 - February 2025</span>
                  </div>
                </div>
                
                <DecryptedText
                  text="Assisted with maintenance and basic troubleshooting of transmitter systems in production facilities. Provided technical support for transmitter hardware under supervision. Conducted routine inspections and participated in calibration processes. Maintained technical documentation and inspection reports. Supported senior technicians in system optimization activities."
                  speed={25}
                  maxIterations={6}
                  animateOn="view"
                  className="text-sm text-quantum-gray/80 dark:text-static-white/80 leading-relaxed mb-4"
                />
                
                <div className="flex flex-wrap gap-2">
                  {['Transmitter Systems', 'Technical Documentation', 'Calibration'].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-gilded-parchment/10 text-gilded-parchment rounded-full text-xs"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </SpotlightCard>

              {/* Flutter Developer */}
              <SpotlightCard 
                className="p-6 bg-static-white dark:bg-void-black border border-quantum-gray/20 dark:border-static-white/20 rounded-lg"
                spotlightColor="rgba(193, 154, 107, 0.3)"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h4 className="text-xl font-bold text-void-black dark:text-static-white">
                      Flutter Developer Apprenticeship
                    </h4>
                    <p className="text-gilded-parchment font-medium">
                      Mobile Programming MDP
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-quantum-gray/60 dark:text-static-white/60">
                    <Calendar className="w-4 h-4" />
                    <span>February - July 2024</span>
                  </div>
                </div>
                
                <DecryptedText
                  text="Developed the PolyglotPath app using Flutter, Firebase & Google Cloud Console, designed to make language learning engaging and accessible. Features include a community forum, language course options (English, Japanese, Korean, and Russian), interactive chat with Gemini AI, and quick, secure Google Sign-In. Designed and implemented an intuitive and responsive user interface. Managing internal applications and information systems. Provided training sessions for staff to effectively use the new system."
                  speed={25}
                  maxIterations={6}
                  animateOn="view"
                  className="text-sm text-quantum-gray/80 dark:text-static-white/80 leading-relaxed mb-4"
                />
                
                <div className="flex flex-wrap gap-2">
                  {['Flutter', 'Firebase', 'Google Cloud Console', 'Gemini AI', 'UI/UX Design'].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-gilded-parchment/10 text-gilded-parchment rounded-full text-xs"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </SpotlightCard>

              {/* Freelance */}
              <SpotlightCard 
                className="p-6 bg-static-white dark:bg-void-black border border-quantum-gray/20 dark:border-static-white/20 rounded-lg"
                spotlightColor="rgba(193, 154, 107, 0.3)"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h4 className="text-xl font-bold text-void-black dark:text-static-white">
                      Freelance
                    </h4>
                    <p className="text-gilded-parchment font-medium">
                      Self-Employed
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-quantum-gray/60 dark:text-static-white/60">
                    <Calendar className="w-4 h-4" />
                    <span>2020 - Present</span>
                  </div>
                </div>
                
                <DecryptedText
                  text="Providing freelance services in web development, mobile app development, and IT consultation. Successfully delivered multiple projects to clients, meeting their specific needs and requirements. Focused on delivering high-quality solutions and maintaining client satisfaction."
                  speed={25}
                  maxIterations={6}
                  animateOn="view"
                  className="text-sm text-quantum-gray/80 dark:text-static-white/80 leading-relaxed mb-4"
                />
                
                <div className="flex flex-wrap gap-2">
                  {['Web Development', 'Mobile App Development', 'IT Consultation'].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-gilded-parchment/10 text-gilded-parchment rounded-full text-xs"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </SpotlightCard>
            </div>
          </div>

          {/* Education */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <GraduationCap className="w-6 h-6 text-gilded-parchment" />
              <h3 className="text-2xl font-cormorant font-bold text-void-black dark:text-static-white">
                Education
              </h3>
            </div>
            
            <div className="space-y-6">
              {/* Bachelor's Degree */}
              <SpotlightCard 
                className="p-6 bg-static-white dark:bg-void-black border border-quantum-gray/20 dark:border-static-white/20 rounded-lg"
                spotlightColor="rgba(193, 154, 107, 0.3)"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h4 className="text-xl font-bold text-void-black dark:text-static-white">
                      Bachelor of Computer Science | Informatics
                    </h4>
                    <p className="text-gilded-parchment font-medium">
                      Universitas Multi Data Palembang
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-quantum-gray/60 dark:text-static-white/60">
                    <Calendar className="w-4 h-4" />
                    <span>2018 - 2024</span>
                  </div>
                </div>
                
                <DecryptedText
                  text="Thesis: Perancangan Sistem Pendukung Keputusan Penentuan Pelanggan Prioritas pada PT. Pan Pacific Insurance dengan Metode TOPSIS Berbasis Web"
                  speed={25}
                  maxIterations={6}
                  animateOn="view"
                  className="text-sm text-quantum-gray/80 dark:text-static-white/80 leading-relaxed"
                />
              </SpotlightCard>

              {/* Senior High School */}
              <SpotlightCard 
                className="p-6 bg-static-white dark:bg-void-black border border-quantum-gray/20 dark:border-static-white/20 rounded-lg"
                spotlightColor="rgba(193, 154, 107, 0.3)"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h4 className="text-xl font-bold text-void-black dark:text-static-white">
                      Senior High School
                    </h4>
                    <p className="text-gilded-parchment font-medium">
                      Senior High School 3 Palembang, Indonesia
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-quantum-gray/60 dark:text-static-white/60">
                    <Calendar className="w-4 h-4" />
                    <span>2015 - 2018</span>
                  </div>
                </div>
              </SpotlightCard>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
