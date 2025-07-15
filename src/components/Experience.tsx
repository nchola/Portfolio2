
import type React from "react"
import SpotlightCard from "@/Animations/SpotlightCard/SpotlightCard"
import GlitchText from "@/Animations/GlitchText/GlitchText"

interface WorkExperience {
  id: string
  position: string
  company: string
  companyUrl?: string
  duration: string
  description: string[]
  technologies?: string[]
}

interface Education {
  id: string
  degree: string
  institution: string
  institutionUrl?: string
  duration: string
  thesis?: {
    title: string
    url?: string
  }
}

const experiences: WorkExperience[] = [
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
]

const education: Education[] = [
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
]

const Resume: React.FC = () => {
  return (
    <section id="experience" className="section bg-static-white dark:bg-void-black">
      <div className="container">
        <div className="mb-12 text-center">
          <span className="inline-block text-xs uppercase tracking-wider text-void-black/70 dark:text-static-white/70 mb-2">
            Resume
          </span>
          <div className="flex justify-center">
            <GlitchText
              className="text-4xl md:text-5xl font-bold text-void-black dark:text-static-white"
              speed={0.3}
              enableShadows={true}
              enableOnHover={true}
            >
              Experience & Education
            </GlitchText>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Work Experience - Left Column */}
          <div>
            <h3 className="text-2xl font-bold text-void-black dark:text-static-white mb-8">Work Experience</h3>
            <div className="relative border-l-2 border-gilded-parchment/50 pl-8 ml-6 space-y-12">
              {experiences.map((exp, index) => (
                <div key={exp.id} className="relative">
                  {/* Timeline dot */}
                  <div className="absolute -left-[4.1rem] top-1.5 w-8 h-8 rounded-full bg-static-white dark:bg-void-black border-2 border-gilded-parchment flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-gilded-parchment"></div>
                  </div>

                  <SpotlightCard
                    className="border border-gilded-parchment/20 p-6 rounded-md bg-static-white dark:bg-void-black"
                    spotlightColor="rgba(193, 154, 107, 0.15)"
                  >
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-void-black dark:text-static-white">{exp.position}</h3>
                        {exp.companyUrl ? (
                          <a
                            href={exp.companyUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gilded-parchment hover:underline"
                          >
                            {exp.company}
                          </a>
                        ) : (
                          <p className="text-gilded-parchment">{exp.company}</p>
                        )}
                      </div>
                      <div className="text-sm text-void-black/60 dark:text-static-white/60 mt-2 md:mt-0 px-3 py-1 rounded-full border border-gilded-parchment/20">
                        {exp.duration}
                      </div>
                    </div>

                    <ul className="list-disc pl-5 text-void-black/80 dark:text-static-white/80 mb-4 space-y-2">
                      {exp.description.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>

                    {exp.technologies && (
                      <div className="flex flex-wrap gap-2 mt-4">
                        {exp.technologies.map((tech, i) => (
                          <span key={i} className="text-xs text-static-white dark:text-void-black bg-gilded-parchment px-2 py-1 rounded-full">
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                  </SpotlightCard>
                </div>
              ))}
            </div>
          </div>

          {/* Education - Right Column */}
          <div>
            <h3 className="text-2xl font-bold text-void-black dark:text-static-white mb-8">Education</h3>
            <div className="relative border-l-2 border-gilded-parchment/50 pl-8 ml-6 space-y-12">
              {education.map((edu) => (
                <div key={edu.id} className="relative">
                  {/* Timeline dot */}
                  <div className="absolute -left-[4.1rem] top-1.5 w-8 h-8 rounded-full bg-static-white dark:bg-void-black border-2 border-gilded-parchment flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-gilded-parchment"></div>
                  </div>

                  <SpotlightCard
                    className="border border-gilded-parchment/20 p-6 rounded-md bg-static-white dark:bg-void-black"
                    spotlightColor="rgba(193, 154, 107, 0.15)"
                  >
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-void-black dark:text-static-white">{edu.degree}</h3>
                        {edu.institutionUrl ? (
                          <a
                            href={edu.institutionUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gilded-parchment hover:underline"
                          >
                            {edu.institution}
                          </a>
                        ) : (
                          <p className="text-gilded-parchment">{edu.institution}</p>
                        )}
                      </div>
                      <div className="text-sm text-void-black/60 dark:text-static-white/60 mt-2 md:mt-0 px-3 py-1 rounded-full border border-gilded-parchment/20">
                        {edu.duration}
                      </div>
                    </div>

                    {edu.thesis && (
                      <div className="mt-4">
                        <p className="text-void-black/80 dark:text-static-white/80">
                          <span className="font-medium">Thesis: </span>
                          {edu.thesis.url ? (
                            <a
                              href={edu.thesis.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-gilded-parchment hover:underline"
                            >
                              {edu.thesis.title}
                            </a>
                          ) : (
                            <span>{edu.thesis.title}</span>
                          )}
                        </p>
                      </div>
                    )}
                  </SpotlightCard>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Resume
