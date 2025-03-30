import React from 'react';

interface WorkExperience {
  id: string;
  position: string;
  company: string;
  duration: string;
  description: string[];
  technologies: string[];
}

const experiences: WorkExperience[] = [
  {
    id: 'exp1',
    position: 'Flutter Developer',
    company: 'Tech Solutions Inc.',
    duration: 'Jan 2022 - Present',
    description: [
      'Developed and maintained multiple mobile applications using Flutter framework',
      'Implemented REST API integration and local database storage with SQLite',
      'Collaborated with design team to create responsive and elegant user interfaces'
    ],
    technologies: ['Flutter', 'Dart', 'Firebase', 'RESTful APIs']
  },
  {
    id: 'exp2',
    position: 'Web Developer Intern',
    company: 'Digital Web Agency',
    duration: 'May 2021 - Dec 2021',
    description: [
      'Assisted in development of client websites using modern JavaScript frameworks',
      'Created reusable components and implemented responsive designs',
      'Participated in code reviews and team meetings'
    ],
    technologies: ['HTML/CSS', 'JavaScript', 'NodeJS', 'Express']
  }
];

const Experience: React.FC = () => {
  return (
    <section id="experience" className="section portfolio-section bg-void-black dark:bg-static-white">
      <div className="container">
        <div className="mb-12">
          <span className="inline-block text-xs uppercase tracking-wider text-static-white/70 dark:text-quantum-gray mb-2">
            Career
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-static-white dark:text-void-black">
            Work Experience
          </h2>
        </div>

        <div className="relative border-l-2 border-gilded-parchment/50 pl-8 ml-6 md:ml-12 space-y-12">
          {experiences.map((exp, index) => (
            <div 
              key={exp.id}
              className="relative"
            >
              {/* Timeline dot */}
              <div className="absolute -left-[4.1rem] top-1.5 w-8 h-8 rounded-full bg-void-black dark:bg-static-white border-2 border-gilded-parchment flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-gilded-parchment"></div>
              </div>
              
              <div className="bg-quantum-gray/10 dark:bg-quantum-gray/5 backdrop-blur-sm border border-gilded-parchment/20 p-6 rounded-md">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-static-white dark:text-void-black">{exp.position}</h3>
                    <p className="text-gilded-parchment">{exp.company}</p>
                  </div>
                  <div className="text-sm text-static-white/60 dark:text-void-black/60 mt-2 md:mt-0 px-3 py-1 rounded-full border border-gilded-parchment/20">
                    {exp.duration}
                  </div>
                </div>
                
                <ul className="list-disc pl-5 text-static-white/80 dark:text-void-black/80 mb-4 space-y-2">
                  {exp.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
                
                <div className="flex flex-wrap gap-2 mt-4">
                  {exp.technologies.map((tech, i) => (
                    <span 
                      key={i}
                      className="text-xs text-void-black bg-gilded-parchment px-2 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
