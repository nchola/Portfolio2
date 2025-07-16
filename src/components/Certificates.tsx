import React, { useState, useEffect } from "react";
import GlitchText from "@/Animations/GlitchText/GlitchText";
import CertificateCard from "./CertificateCard";
import Masonry from 'react-masonry-css';

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  description: string;
  link?: string;
  image?: string;
}

const certificates: Certificate[] = [
  {
    id: "cert0",
    title: "monkeytype",
    issuer: "monkeytype",
    date: "2025",
    description: "Monkeytype Typing test with 84-115 WPM.",
    image: "/projects/monkeytype.png",
    link: "/projects/monkeytype.png",
  },
  {
    id: "cert0",
    title: "TOEIC",
    issuer: "TOEIC",
    date: "Maret 2024",
    description: "TOEIC With Actual Score 705.",
    link: "https://drive.google.com/file/d/1gzUnYfz7Si-XNBOnZutAgSKE9Wcr-KLy/view?usp=sharing",
  },

  {
    id: "cert1",
    title: "Building Web Applications in PHP",
    issuer: "University of Michigan",
    date: "April 2024",
    description:
      "Mastered PHP fundamentals including syntax, arrays, error handling, and MySQL integration using XAMPP/MAMP development environments.",
    link: "https://coursera.org/verify/NXD6B8CYRVND",
  },
  {
    id: "cert2",
    title: "Back End Development and APIs",
    issuer: "FreeCodeCamp",
    date: "March 2025",
    description:
      "Certified in Node.js, Express, MongoDB, and REST API development with JWT/OAuth security and five real-world projects.",
    link: "https://freecodecamp.org/certification/MuhammadNanda/back-end-development-and-apis",
  },
  {
    id: "cert3",
    title: "Introduction to Back-End Development",
    issuer: "Meta",
    date: "April 2024",
    description:
      "Distinguished between front-end, back-end, and full-stack development.",
    link: "https://coursera.org/verify/9Y6UNTUQXPBY",
  },
  {
    id: "cert4",
    title: "Problem Solving (Intermediate)",
    issuer: "HackerRank",
    date: "August 2024",
    description:
      "It covers topics of Data Structures (such as HashMaps, Stacks and Queues) and Algorithms (such as Optimal Solutions).",
    link: "https://www.hackerrank.com/certificates/ae6941f35c0b",
  },
  {
    id: "cert5",
    title: "Frontend Developer (React)",
    issuer: "HackerRank",
    date: "July 2024",
    description: "It covers topics like React, CSS, and JavaScript.",
    link: "https://www.hackerrank.com/certificates/82fecaefa3c4",
  },
  {
    id: "cert6",
    title: "Rest API (Intermediate)",
    issuer: "HackerRank",
    date: "July 2024",
    description:
      "It covers topics like getting data from an API and process using parameters or paging.",
    link: "https://www.hackerrank.com/certificates/ea574087a548",
  },
  {
    id: "cert7",
    title: "SQL (Advanced)",
    issuer: "HackerRank",
    date: "July 2024",
    description:
      "It covers topics like query optimization, data modeling, Indexing, window functions, and pivots in SQL.",
    link: "https://www.hackerrank.com/certificates/d5e1611ab888",
  },
  {
    id: "cert8",
    title: "Software Engineer",
    issuer: "HackerRank",
    date: "July 2024",
    description: "It covers topics like Problem solving, SQL, and REST API.",
    link: "https://www.hackerrank.com/certificates/296d3826c94f",
  },
  {
    id: "cert9",
    title: "SQL (Intermediate)",
    issuer: "HackerRank",
    date: "July 2024",
    description: "It includes complex joins, unions, and sub-queries.",
    link: "https://www.hackerrank.com/certificates/5b9112e28389",
  },
  {
    id: "cert10",
    title: "Software Engineer Intern",
    issuer: "HackerRank",
    date: "July 2024",
    description: "It covers topics like Problem solving and SQL.",
    link: "https://www.hackerrank.com/certificates/9928225c8a33",
  },
  {
    id: "cert11",
    title: "JavaScript (Basic)",
    issuer: "Dicoding",
    date: "July 2024",
    description:
      "Covers fundamental concepts of JavaScript including variables, functions, objects, and basic problem solving.",
    link: "https://www.dicoding.com/certificates/MRZME896LPYQ",
  },
  {
    id: "cert12",
    title: "Problem Solving (Basic)",
    issuer: "HackerRank",
    date: "July 2024",
    description:
      "It covers topics of Data Structures (such as HashMaps, Stacks and Queues) and Algorithms (such as Optimal Solutions).",
    link: "https://www.hackerrank.com/certificates/77d5ee7ca622",
  },
  {
    id: "cert13",
    title: "React (Basic)",
    issuer: "HackerRank",
    date: "July 2024",
    description:
      "React (Basic) It covers topics like Basic Routing, Rendering Elements,State Management (Internal Component State), Handling Events, ES6 and JavaScript and Form Validation.",
    link: "https://www.hackerrank.com/certificates/2c8f08620d46",
  },
  {
    id: "cert14",
    title: "AWS Cloud Practitioner Essentials",
    issuer: "Dicoding",
    date: "July 2024",
    description:
      "Fundamental understanding of AWS Cloud services, architecture, security, and pricing models.",
    link: "https://www.dicoding.com/certificates/JMZV3DV2OPN9",
  },
  {
    id: "cert15",
    title: "Personal Development - IDCamp",
    issuer: "Dicoding",
    date: "July 2024",
    description:
      "Focused on professional growth and soft skills development in tech industry.",
    link: "",
  },
  {
    id: "cert16",
    title: "Product Management with Trello",
    issuer: "Dicoding",
    date: "July 2024",
    description:
      "Mastery of Trello for project and product management workflows.",
    link: "https://coursera.org/verify/9ZXFD6PHL88P",
  },
  {
    id: "cert17",
    title: "Python Basic",
    issuer: "Dicoding",
    date: "July 2024",
    description:
      "Fundamental concepts of Python programming including syntax, data types, and basic algorithms.",
    link: "https://www.dicoding.com/certificates/N9ZO72736ZG5",
  },
  {
    id: "cert18",
    title: "Data Visualization",
    issuer: "Dicoding",
    date: "July 2024",
    description:
      "Creating effective data visualizations using modern tools and best practices.",
    link: "https://www.dicoding.com/certificates/07Z6RJRRRPQR",
  },
  {
    id: "cert19",
    title: "Dart Programming Basics",
    issuer: "Dicoding",
    date: "July 2024",
    description:
      "Fundamental concepts of Dart programming language including syntax and object-oriented programming.",
    link: "https://www.dicoding.com/certificates/0LZ0RG3O0P65",
  },
  {
    id: "cert20",
    title: "Project Management Fundamentals",
    issuer: "Dicoding",
    date: "July 2024",
    description:
      "Basic principles of project management including planning, execution, and monitoring.",
    link: "https://www.dicoding.com/certificates/GRX539ODKZ0M",
  },
  {
    id: "cert21",
    title: "Javascript Basic",
    issuer: "HackerRank",
    date: "July 2025",
    description:
      "It covers topics like, Functions, Currying, Hoisting, Scope, Inheritance, Events and Error Handling.",
    link: "https://www.hackerrank.com/certificates/fdbc584fe558",
  },
  {
    id: "cert22",
    title: "TOEFL",
    issuer: "Englishvit",
    date: "Maret 2025",
    description: "TOEFL With Actual Score 573.",
    link: "https://drive.google.com/file/d/12jgo40WmASYK-0shdsLohOeEcxR-2Efd/view?usp=sharing",
  },
].filter((cert) => cert.title !== "");

// Hook untuk deteksi lebar layar
function useWindowWidth() {
  const [width, setWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1200
  );
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return width;
}

// Fungsi untuk chunk array
function chunkArray(array: Certificate[], size: number): Certificate[][] {
  const result = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
}

const Certificates: React.FC = () => {
  const width = useWindowWidth();
  const isMobile = width <= 768;
  
  // Breakpoint untuk masonry responsif
  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1
  };

  // Untuk mobile: chunk 4 (2x2)
  const certificateChunks = chunkArray(certificates, 4);
  
  // Slider state
  const [slide, setSlide] = useState(0);
  useEffect(() => { setSlide(0); }, [isMobile]);

  return (
    <section
      id="certificates"
      className="section bg-static-white dark:bg-void-black"
    >
      <div className="container">
        <div className="mb-12 text-center">
          <span className="inline-block text-xs uppercase tracking-wider text-quantum-gray/70 dark:text-static-white/70 mb-2">
            Achievements
          </span>
          <GlitchText
            speed={0.3}
            enableShadows={true}
            enableOnHover={false}
            className="text-4xl md:text-5xl font-cormorant font-bold text-void-black dark:text-static-white"
          >
            Certificates
          </GlitchText>
          <p className="mt-4 text-quantum-gray/80 dark:text-static-white/80 max-w-2xl mx-auto">
            Explore all my professional certificates in a modern interactive grid.
          </p>
        </div>

        <div className="relative">
          {/* Desktop: Masonry Grid */}
          {!isMobile && (
            <Masonry
              breakpointCols={breakpointColumnsObj}
              className="my-masonry-grid"
              columnClassName="my-masonry-grid_column"
            >
              {certificates.map(cert => (
                <CertificateCard key={cert.id + cert.title} certificate={cert} />
              ))}
            </Masonry>
          )}

          {/* Mobile: Slider 2x2 grid */}
          {isMobile && (
            <div>
              <div className="flex justify-between items-center mb-4">
                <button 
                  onClick={() => setSlide(s => Math.max(0, s - 1))} 
                  disabled={slide === 0} 
                  className="px-3 py-1 rounded bg-gilded-parchment/20 text-gilded-parchment disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-300"
                >
                  Prev
                </button>
                <div className="flex gap-1">
                  {certificateChunks.map((_, idx) => (
                    <span 
                      key={idx} 
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${slide === idx ? 'bg-gilded-parchment' : 'bg-gilded-parchment/30'}`}
                    />
                  ))}
                </div>
                <button 
                  onClick={() => setSlide(s => Math.min(certificateChunks.length - 1, s + 1))} 
                  disabled={slide === certificateChunks.length - 1} 
                  className="px-3 py-1 rounded bg-gilded-parchment/20 text-gilded-parchment disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-300"
                >
                  Next
                </button>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {certificateChunks[slide]?.map(cert => (
                  <CertificateCard key={cert.id + cert.title} certificate={cert} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
