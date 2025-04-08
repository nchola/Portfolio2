
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
    <section id="experience" className="section bg-void-black dark:bg-static-white">
      <div className="container">
        <div className="mb-10">
          <span className="inline-block text-xs uppercase tracking-wider text-static-white/70 dark:text-quantum-gray mb-2">
            Career
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-static-white dark:text-void-black">
            Work Experience
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {experiences.map((exp) => (
            <div 
              key={exp.id}
              className="relative"
            >
              {/* Experience card - reduced size by 25% */}
              <div className="relative pl-6 border-l-2 border-gilded-parchment/50 scale-75 origin-top-left md:scale-100 md:origin-center">
                {/* Timeline dot */}
                <div className="absolute -left-[1rem] top-1.5 w-6 h-6 rounded-full bg-void-black dark:bg-static-white border-2 border-gilded-parchment flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-gilded-parchment"></div>
                </div>
                
                <div className="bg-quantum-gray/10 dark:bg-quantum-gray/5 backdrop-blur-sm border border-gilded-parchment/20 p-4 rounded-md">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-3">
                    <div>
                      <h3 className="text-lg font-bold text-static-white dark:text-void-black">{exp.position}</h3>
                      <p className="text-sm text-gilded-parchment">{exp.company}</p>
                    </div>
                    <div className="text-xs text-static-white/60 dark:text-void-black/60 mt-2 md:mt-0 px-2 py-1 rounded-full border border-gilded-parchment/20">
                      {exp.duration}
                    </div>
                  </div>
                  
                  <ul className="list-disc pl-4 text-sm text-static-white/80 dark:text-void-black/80 mb-3 space-y-1">
                    {exp.description.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                  
                  <div className="flex flex-wrap gap-1 mt-3">
                    {exp.technologies.map((tech, i) => (
                      <span 
                        key={i}
                        className="text-xs text-void-black bg-gilded-parchment px-2 py-0.5 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
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
