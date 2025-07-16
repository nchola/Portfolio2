import React from 'react';
import { Code, Database, Server, Smartphone, Globe, GitBranch, Zap, Layers } from 'lucide-react';
import SpotlightCard from '@/Animations/SpotlightCard/SpotlightCard';
import DecryptedText from '@/Animations/DecryptedText/DecryptedText';

const SkillsMatrix: React.FC = () => {
  const skillsData = [
    {
      category: "Frontend Development",
      icon: Code,
      skills: [
        "React",
        "Next.js",
        "Tailwind CSS",
        "JavaScript (ES6+)",
        "HTML5",
        "CSS3",
        "Redux",
        "Context API",
        "Responsive Design",
        "UI/UX Principles",
      ],
    },
    {
      category: "Backend Development",
      icon: Server,
      skills: [
        "Node.js",
        "Express.js",
        "RESTful APIs",
        "GraphQL",
        "Serverless Functions",
        "JWT Authentication",
        "OAuth",
        "Microservices",
        "API Design",
        "Data Structures",
      ],
    },
    {
      category: "Mobile Development",
      icon: Smartphone,
      skills: [
        "Flutter",
        "Dart",
        "Firebase",
        "UI/UX Design",
        "Mobile App Architecture",
        "State Management",
        "API Integration",
        "Testing",
        "Deployment",
        "Cross-Platform Development",
      ],
    },
    {
      category: "Databases",
      icon: Database,
      skills: [
        "MySQL",
        "MongoDB",
        "PostgreSQL",
        "Firebase Realtime Database",
        "Database Design",
        "SQL",
        "NoSQL",
        "Data Modeling",
        "Query Optimization",
        "Database Administration",
      ],
    },
    {
      category: "DevOps & Tools",
      icon: GitBranch,
      skills: [
        "Git",
        "GitHub",
        "CI/CD",
        "Docker",
        "AWS",
        "Google Cloud Platform",
        "Linux",
        "Bash Scripting",
        "Agile Methodologies",
        "Project Management",
      ],
    },
    {
      category: "Other Technologies",
      icon: Zap,
      skills: [
        "AI/ML Basics",
        "Python",
        "PHP",
        "C++",
        "Data Visualization",
        "Web Scraping",
        "Automation",
        "Problem Solving",
        "Algorithms",
        "Data Analysis",
      ],
    },
  ];

  return (
    <section id="skills" className="section bg-static-white dark:bg-void-black">
      <div className="container">
        <div className="mb-12 text-center">
          <span className="inline-block text-xs uppercase tracking-wider text-quantum-gray/70 dark:text-static-white/70 mb-2">
            Technical Expertise
          </span>
          <h2 className="text-4xl md:text-5xl font-cormorant font-bold text-void-black dark:text-static-white">
            Skills & Technologies
          </h2>
          <DecryptedText
            text="A comprehensive overview of my technical skills and expertise across various domains of software development."
            speed={20}
            maxIterations={8}
            animateOn="view"
            className="mt-4 text-quantum-gray/80 dark:text-static-white/80 max-w-2xl mx-auto"
          />
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {skillsData.map((category, index) => (
            <SpotlightCard
              key={index}
              className="p-6 bg-static-white dark:bg-void-black border border-quantum-gray/20 dark:border-static-white/20 rounded-lg"
              spotlightColor="rgba(193, 154, 107, 0.3)"
            >
              <div className="flex items-center gap-3 mb-4">
                <category.icon className="w-6 h-6 text-gilded-parchment" />
                <h3 className="text-xl font-cormorant font-bold text-void-black dark:text-static-white">
                  {category.category}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 bg-gilded-parchment/10 text-gilded-parchment rounded-full text-xs"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsMatrix;
