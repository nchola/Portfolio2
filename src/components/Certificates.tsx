
import React from 'react';

interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  description: string;
  link?: string;
}

const certificates: Certificate[] = [
  {
    id: 'cert1',
    title: 'Flutter Mobile Development',
    issuer: 'Dicoding Academy',
    date: 'January 2022',
    description: 'Completed comprehensive training in Flutter mobile app development',
    link: '#'
  },
  {
    id: 'cert2',
    title: 'Full Stack Web Development',
    issuer: 'Udemy',
    date: 'March 2022',
    description: 'Mastered MERN stack development with practical projects',
    link: '#'
  },
  {
    id: 'cert3',
    title: 'Database Management with MySQL',
    issuer: 'Coursera',
    date: 'August 2022',
    description: 'Advanced database design, optimization and management',
    link: '#'
  }
];

const Certificates: React.FC = () => {
  return (
    <section id="certificates" className="section bg-quantum-gray/5 dark:bg-quantum-gray/10">
      <div className="container">
        <div className="mb-12">
          <span className="inline-block text-xs uppercase tracking-wider text-static-white/70 dark:text-quantum-gray mb-2">
            Achievements
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-static-white dark:text-void-black">
            Certificates
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((certificate) => (
            <div 
              key={certificate.id}
              className="bg-quantum-gray/10 dark:bg-static-white/5 backdrop-blur-sm border border-gilded-parchment/20 p-6 rounded-md transition-all duration-300 hover:border-gilded-parchment/40 hover:shadow-lg"
            >
              <div className="flex items-start mb-4">
                <div className="w-10 h-10 bg-gilded-parchment/20 rounded-full flex items-center justify-center text-gilded-parchment mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="8" r="6"></circle>
                    <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-static-white dark:text-void-black">{certificate.title}</h3>
                  <p className="text-gilded-parchment">{certificate.issuer}</p>
                </div>
              </div>
              
              <p className="text-sm text-static-white/80 dark:text-void-black/80 mb-4">{certificate.description}</p>
              
              <div className="flex justify-between items-center">
                <span className="text-xs text-static-white/60 dark:text-void-black/60">{certificate.date}</span>
                {certificate.link && (
                  <a 
                    href={certificate.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm text-gilded-parchment hover:underline"
                  >
                    View Certificate
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
