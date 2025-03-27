import React from 'react';
const About: React.FC = () => {
  return <section id="about" className="section bg-quantum-gray/10 dark:bg-quantum-gray/5 bg-gray-900">
      <div className="container">
        <div className="mb-12">
          <span className="inline-block text-xs uppercase tracking-wider text-static-white/70 dark:text-quantum-gray mb-2">
            Introduction
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-static-white dark:text-void-black">
            About Me
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-4 flex justify-center">
            <div className="w-48 h-48 rounded-full border-4 border-gilded-parchment overflow-hidden">
              <div className="w-full h-full bg-gilded-parchment/20 flex items-center justify-center text-2xl font-bold text-gilded-parchment">
                MN
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-8">
            <h3 className="text-2xl font-cormorant font-bold mb-4 text-static-white dark:text-void-black">
              Muhammad Nanda
            </h3>
            <p className="text-static-white/80 dark:text-void-black/80 italic mb-6">
              Software Developer with 2 years experience working on several projects.
            </p>
            <p className="text-static-white/80 dark:text-void-black/80 mb-6">
              I have an interest in a career as a Programmer. I'm a fast learner and self-taught.
              I have learned a lot of new technologies in the past few years by myself on the Internet.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <ul className="space-y-2">
                  <li className="flex items-center text-static-white/80 dark:text-void-black/80">
                    <span className="inline-block w-6 h-6 mr-2 text-gilded-parchment">→</span>
                    <strong className="mr-2">Email:</strong>
                    <span>nchola@mhs.mdp.ac.id</span>
                  </li>
                  <li className="flex items-center text-static-white/80 dark:text-void-black/80">
                    <span className="inline-block w-6 h-6 mr-2 text-gilded-parchment">→</span>
                    <strong className="mr-2">City:</strong>
                    <span>Palembang, Indonesia</span>
                  </li>
                  <li className="flex items-center text-static-white/80 dark:text-void-black/80">
                    <span className="inline-block w-6 h-6 mr-2 text-gilded-parchment">→</span>
                    <strong className="mr-2">Freelance:</strong>
                    <span>Available</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="mt-8">
              <a href="https://www.canva.com/design/DAGKGZpZdDY/iTF0vcbWF4rajEYJ4pQEFw/view" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-6 py-3 bg-gilded-parchment text-void-black rounded-md hover:bg-gilded-parchment/80 transition-colors duration-300">
                <span className="mr-2">→</span>
                View My CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default About;