import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Award, ChevronLeft, ChevronRight } from "lucide-react";

interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  description: string;
  link?: string;
}

// Filter out empty certificates
const certificates: Certificate[] = [
  {
    id: 'cert0',
    title: 'TOEIC',
    issuer: 'TOEIC',
    date: 'Maret 2024',
    description: 'TOEIC with actual score 705.',
    link: 'https://drive.google.com/file/d/1gzUnYfz7Si-XNBOnZutAgSKE9Wcr-KLy/view?usp=sharing'
  },
  
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
    id: 'cert11',
    title: 'JavaScript (Basic)',
    issuer: 'Dicoding',
    date: 'July 2024',
    description: 'Covers fundamental concepts of JavaScript including variables, functions, objects, and basic problem solving.',
    link: 'https://www.dicoding.com/certificates/MRZME896LPYQ'
  },
  {
    id: 'cert12',
    title: 'Problem Solving (Basic)',
    issuer: 'HackerRank',
    date: 'July 2024',
    description: 'It covers topics of Data Structures (such as HashMaps, Stacks and Queues) and Algorithms (such as Optimal Solutions).',
    link: 'https://www.hackerrank.com/certificates/77d5ee7ca622'
  },
  {
    id: 'cert13',
    title: 'React (Basic)',
    issuer: 'HackerRank',
    date: 'July 2024',
    description: 'React (Basic) It covers topics like Basic Routing, Rendering Elements,State Management (Internal Component State), Handling Events, ES6 and JavaScript and Form Validation.',
    link: 'https://www.hackerrank.com/certificates/2c8f08620d46'
  },
  {
    id: 'cert14',
    title: 'AWS Cloud Practitioner Essentials',
    issuer: 'Dicoding',
    date: 'July 2024',
    description: 'Fundamental understanding of AWS Cloud services, architecture, security, and pricing models.',
    link: 'https://www.dicoding.com/certificates/JMZV3DV2OPN9'
  },
  {
    id: 'cert15',
    title: 'Personal Development - IDCamp',
    issuer: 'Dicoding',
    date: 'July 2024',
    description: 'Focused on professional growth and soft skills development in tech industry.',
    link: ''
  },
  {
    id: 'cert16',
    title: 'Product Management with Trello',
    issuer: 'Dicoding',
    date: 'July 2024',
    description: 'Mastery of Trello for project and product management workflows.',
    link: 'https://coursera.org/verify/9ZXFD6PHL88P'
  },
  {
    id: 'cert17',
    title: 'Python Basic',
    issuer: 'Dicoding',
    date: 'July 2024',
    description: 'Fundamental concepts of Python programming including syntax, data types, and basic algorithms.',
    link: 'https://www.dicoding.com/certificates/N9ZO72736ZG5'
  },
  {
    id: 'cert18',
    title: 'Data Visualization',
    issuer: 'Dicoding',
    date: 'July 2024',
    description: 'Creating effective data visualizations using modern tools and best practices.',
    link: 'https://www.dicoding.com/certificates/07Z6RJRRRPQR'
  },
  {
    id: 'cert19',
    title: 'Dart Programming Basics',
    issuer: 'Dicoding',
    date: 'July 2024',
    description: 'Fundamental concepts of Dart programming language including syntax and object-oriented programming.',
    link: 'https://www.dicoding.com/certificates/0LZ0RG3O0P65'
  },
  {
    id: 'cert20',
    title: 'Project Management Fundamentals',
    issuer: 'Dicoding',
    date: 'July 2024',
    description: 'Basic principles of project management including planning, execution, and monitoring.',
    link: 'https://www.dicoding.com/certificates/GRX539ODKZ0M'
  },
  {
    id: 'cert21',
    title: 'Javascript Basic',
    issuer: 'HackerRank',
    date: 'July 2024',
    description: 'It covers topics like, Functions, Currying, Hoisting, Scope, Inheritance, Events and Error Handling.',
    link: 'https://www.hackerrank.com/certificates/fdbc584fe558'
  }
].filter(cert => cert.title !== '');

const CertificateCard = ({ certificate }: { certificate: Certificate }) => {
  return (
    <div 
      className="bg-quantum-gray/5 dark:bg-static-white/5 backdrop-blur-sm border border-gilded-parchment/20 p-6 rounded-md transition-all duration-300 hover:border-gilded-parchment/40 hover:shadow-lg flex flex-col h-full"
    >
      <div className="flex items-start mb-4">
        <div className="w-10 h-10 bg-gilded-parchment/20 rounded-full flex items-center justify-center text-gilded-parchment mr-4">
          <Award className="w-5 h-5" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-void-black dark:text-static-white">{certificate.title}</h3>
          <p className="text-gilded-parchment">{certificate.issuer}</p>
        </div>
      </div>
      
      <div className="flex-grow flex items-center justify-center">
        <p className="text-sm text-center text-void-black/80 dark:text-static-white/80">
          {certificate.description}
        </p>
      </div>
      
      <div className="flex justify-between items-center mt-4 pt-4 border-t border-gilded-parchment/10">
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
  );
};

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
          <p className="mt-4 text-quantum-gray/80 dark:text-static-white/80 max-w-2xl mx-auto">
            Swipe through my professional certifications and achievements
          </p>
        </div>

        <div className="relative px-4 py-8">
          {/* Floating decorative elements */}
          <div className="absolute top-0 left-0 w-24 h-24 bg-gilded-parchment/10 rounded-full blur-3xl animate-float z-0"></div>
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-gilded-parchment/10 rounded-full blur-3xl animate-float z-0" style={{ animationDelay: '2s' }}></div>
          
          <Carousel
            opts={{ 
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {certificates.map((certificate) => (
                <CarouselItem key={certificate.id} className="pl-2 md:pl-4 sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                  <CertificateCard certificate={certificate} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex items-center justify-center gap-4 mt-8">
              <CarouselPrevious className="relative inset-auto left-0 translate-y-0" />
              <div className="flex items-center gap-1">
                {Array.from({ length: Math.ceil(certificates.length / 4) }).map((_, index) => (
                  <div 
                    key={index} 
                    className="w-2 h-2 rounded-full bg-gilded-parchment/40"
                  />
                ))}
              </div>
              <CarouselNext className="relative inset-auto right-0 translate-y-0" />
            </div>
          </Carousel>

          
        </div>
      </div>
    </section>
  );
};

export default Certificates;
