
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
    title: 'Building Web Applications in PHP',
    issuer: 'University of Michigan',
    date: 'April 2024',
    description: 'Mastered PHP fundamentals including syntax, arrays, error handling, and MySQL integration using XAMPP/MAMP development environments.',
    link: 'https://coursera.org/verify/NXD6B8CYRVND'
  },
  {
    id: 'cert2',
    title: 'Back End Development and APIs',
    issuer: 'FreeCodeCamp',
    date: 'March 2025',
    description: 'Certified in Node.js, Express, MongoDB, and REST API development with JWT/OAuth security and five real-world projects.',
    link: 'https://freecodecamp.org/certification/MuhammadNanda/back-end-development-and-apis'
  },
  {
    id: 'cert3',
    title: 'Introduction to Back-End Development',
    issuer: 'Meta',
    date: 'April 2024',
    description: 'Distinguished between front-end, back-end, and full-stack development.',
    link: 'https://coursera.org/verify/9Y6UNTUQXPBY'
  },
  {
    id: 'cert4',
    title: 'Problem Solving (Intermediate)',
    issuer: 'HackerRank',
    date: 'August 2024',
    description: 'It covers topics of Data Structures (such as HashMaps, Stacks and Queues) and Algorithms (such as Optimal Solutions).',
    link: 'https://www.hackerrank.com/certificates/ae6941f35c0b'
  },
  {
    id: 'cert5',
    title: 'Frontend Developer (React)',
    issuer: 'HackerRank',
    date: 'July 2024',
    description: 'It covers topics like React, CSS, and JavaScript.',
    link: 'https://www.hackerrank.com/certificates/82fecaefa3c4'
  },
  {
    id: 'cert6',
    title: 'Rest API (Intermediate)',
    issuer: 'HackerRank',
    date: 'July 2024',
    description: 'It covers topics like getting data from an API and process using parameters or paging.',
    link: 'https://www.hackerrank.com/certificates/ea574087a548'
  },
  {
    id: 'cert7',
    title: 'SQL (Advanced)',
    issuer: 'HackerRank',
    date: 'July 2024',
    description: 'It covers topics like query optimization, data modeling, Indexing, window functions, and pivots in SQL.',
    link: 'https://www.hackerrank.com/certificates/d5e1611ab888'
  },
  {
    id: 'cert8',
    title: 'Software Engineer',
    issuer: 'HackerRank',
    date: 'July 2024',
    description: 'It covers topics like Problem solving, SQL, and REST API.',
    link: 'https://www.hackerrank.com/certificates/296d3826c94f'
  },
  {
    id: 'cert9',
    title: 'SQL (Intermediate)',
    issuer: 'HackerRank',
    date: 'July 2024',
    description: 'It includes complex joins, unions, and sub-queries.',
    link: 'https://www.hackerrank.com/certificates/5b9112e28389'
  },
  {
    id: 'cert10',
    title: 'Software Engineer Intern',
    issuer: 'HackerRank',
    date: 'July 2024',
    description: 'It covers topics like Problem solving and SQL.',
    link: 'https://www.hackerrank.com/certificates/9928225c8a33'
  },
  {
    id: 'cert',
    title: '',
    issuer: '',
    date: '2024',
    description: '',
    link: ''
  },
  {
    id: 'cert',
    title: '',
    issuer: '',
    date: '2024',
    description: '',
    link: ''
  },
  {
    id: 'cert',
    title: '',
    issuer: '',
    date: '2024',
    description: '',
    link: ''
  },
  {
    id: 'cert',
    title: '',
    issuer: '',
    date: '2024',
    description: '',
    link: ''
  },
  {
    id: 'cert',
    title: '',
    issuer: '',
    date: '2024',
    description: '',
    link: ''
  },
  {
    id: 'cert',
    title: '',
    issuer: '',
    date: '2024',
    description: '',
    link: ''
  },
  {
    id: 'cert',
    title: '',
    issuer: '',
    date: '2024',
    description: '',
    link: ''
  },
  {
    id: 'cert',
    title: '',
    issuer: '',
    date: '2024',
    description: '',
    link: ''
  },
  {
    id: 'cert',
    title: '',
    issuer: '',
    date: '2024',
    description: '',
    link: ''
  },
  {
    id: 'cert',
    title: '',
    issuer: '',
    date: '2024',
    description: '',
    link: ''
  },
  {
    id: 'cert',
    title: '',
    issuer: '',
    date: '2024',
    description: '',
    link: ''
  },
  {
    id: 'cert',
    title: '',
    issuer: '',
    date: '2024',
    description: '',
    link: ''
  }
];

const Certificates: React.FC = () => {
  return (
    <section id="certificates" className="section bg-static-white dark:bg-void-black">
      <div className="container">
        <div className="mb-12">
          <span className="inline-block text-xs uppercase tracking-wider text-quantum-gray/70 dark:text-static-white/70 mb-2">
            Achievements
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-void-black dark:text-static-white">
            Certificates
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((certificate) => (
            <div 
              key={certificate.id}
              className="bg-quantum-gray/5 dark:bg-static-white/5 backdrop-blur-sm border border-gilded-parchment/20 p-6 rounded-md transition-all duration-300 hover:border-gilded-parchment/40 hover:shadow-lg"
            >
              <div className="flex items-start mb-4">
                <div className="w-10 h-10 bg-gilded-parchment/20 rounded-full flex items-center justify-center text-gilded-parchment mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="8" r="6"></circle>
                    <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-void-black dark:text-static-white">{certificate.title}</h3>
                  <p className="text-gilded-parchment">{certificate.issuer}</p>
                </div>
              </div>
              
              <p className="text-sm text-void-black/80 dark:text-static-white/80 mb-4">{certificate.description}</p>
              
              <div className="flex justify-between items-center">
                <span className="text-xs text-void-black/60 dark:text-static-white/60">{certificate.date}</span>
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
