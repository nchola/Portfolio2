import React from "react";

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="section bg-static-white/5 dark:bg-quantum-gray/5"
    >
      <div className="container">
        <div className="mb-12">
          <span className="inline-block text-xs uppercase tracking-wider text-quantum-gray dark:text-static-white/70 mb-2">
            Introduction
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-quantum-gray dark:text-static-white">
            About Me
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-4 flex justify-center">
            <div className="w-58 h-80 rounded-full border-4 border-gilded-parchment overflow-hidden">
              <img
                src="/hero.png"
                alt="Muhammad Nanda"
                className="w-full h-full object-cover object-center"
                style={{
                  filter: "grayscale(20%) contrast(110%)",
                  transform: "scale(1.05)",
                }}
              />
            </div>
          </div>

          <div className="lg:col-span-8">
            <h3 className="text-2xl font-cormorant font-bold mb-4 text-quantum-gray dark:text-static-white">
              Muhammad Nanda
            </h3>
            <p className="text-quantum-gray/90 dark:text-static-white/80 italic mb-6">
            Clean, DRY and Solid<br></br>
            Backend Developer who lives for untangling technical knots. Over the past two years, I’ve built a reputation for dissecting messy problems—whether it’s a cryptic error buried in production logs or a performance bottleneck everyone else avoids. My coding isn’t just about writing features; it’s about asking “why” until the system reveals its secrets.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <ul className="space-y-2">
                  <li className="flex items-center text-quantum-gray/90 dark:text-static-white/80">
                    <span className="inline-block w-6 h-6 mr-2 text-gilded-parchment">
                      →
                    </span>
                    <strong className="mr-2">Email:</strong>
                    <span>nchola@mhs.mdp.ac.id</span>
                  </li>
                  <li className="flex items-center text-quantum-gray/90 dark:text-static-white/80">
                    <span className="inline-block w-6 h-6 mr-2 text-gilded-parchment">
                      →
                    </span>
                    <strong className="mr-2">City:</strong>
                    <span>Palembang, Indonesia</span>
                  </li>
                  <li className="flex items-center text-quantum-gray/90 dark:text-static-white/80">
                    <span className="inline-block w-6 h-6 mr-2 text-gilded-parchment">
                      →
                    </span>
                    <strong className="mr-2">Freelance:</strong>
                    <span>Available</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8">
              <a
                href="https://www.canva.com/design/DAGKGZpZdDY/iTF0vcbWF4rajEYJ4pQEFw/view"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-gilded-parchment text-void-black rounded-md hover:bg-gilded-parchment/80 transition-colors duration-300"
              >
                <span className="mr-2">→</span>
                View My CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
