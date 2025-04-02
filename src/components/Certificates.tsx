
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

          <div className="flex justify-center mt-12">
            <ScrollArea className="max-h-36 border border-gilded-parchment/10 rounded-md p-4 w-full max-w-lg bg-quantum-gray/5 dark:bg-static-white/5 backdrop-blur-sm">
              <p className="text-sm italic text-center text-quantum-gray dark:text-static-white/80">
                "Continuous learning has been key to my professional growth. These certificates represent my commitment to staying current with technologies and methodologies in the ever-evolving tech landscape."
              </p>
            </ScrollArea>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;
