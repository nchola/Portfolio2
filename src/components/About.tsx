import React from "react";
import DecryptedText from "../Animations/DecryptedText/DecryptedText";
import Balatro from "../Animations/Balatro/Balatro";

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="section bg-static-white/5 dark:bg-quantum-gray/5"
    >
      <div className="container">
        <div className="mb-12">
          <span className="inline-block text-xs uppercase tracking-wider text-quantum-gray dark:text-static-white/70 mb-2">
            <DecryptedText text="Introduction" animateOn="view" className="inline-block" />
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-quantum-gray dark:text-static-white">
            <DecryptedText text="About Me" animateOn="view" className="inline-block" />
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-4 flex justify-center relative overflow-hidden">
            {/* Balatro as full background */}
            <div className="absolute inset-0 w-full h-full z-0">
              <Balatro color1="rgb(196,144,144)" color2="rgb(41,50,51)" color3="rgb(238,240,242)" contrast={3.5} lighting={0.7} />
            </div>
            {/* Profile image container */}
            <div className="w-58 h-80 rounded-full  overflow-hidden relative flex items-center justify-center z-10">
              <img
                src="/hero.png"
                alt="Muhammad Nanda"
                className="w-48 h-64 object-cover object-center rounded-full"
                style={{
                  filter: "grayscale(20%) contrast(110%)",
                  transform: "scale(1.05)",
                  border: "4px solid transparent",
                  background: "rgba(0,0,0,0.1)",
                }}
              />
            </div>
          </div>

          <div className="lg:col-span-8">
            <h3 className="text-2xl font-cormorant font-bold mb-4 text-quantum-gray dark:text-static-white">
              <DecryptedText text="Muhammad Nanda" animateOn="view" className="inline-block" />
            </h3>
            <p className="text-quantum-gray/90 dark:text-static-white/80 italic mb-6">
              <DecryptedText text="I Have strong attention to detail, consept and structure." animateOn="view" className="inline-block" />
              <br />
              <DecryptedText text="Backend Developer who lives for untangling technical knots. Over the past three years, I’ve built a reputation for dissecting messy problems—whether it’s a cryptic error buried in production logs or a performance bottleneck everyone else avoids. My coding isn’t just about writing features; it’s about asking 'why' until the system reveals its secrets." animateOn="view" speed={70} className="inline-block" />
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <ul className="space-y-2">
                  <li className="flex items-center text-quantum-gray/90 dark:text-static-white/80">
                    <span className="inline-block w-6 h-6 mr-2 text-gilded-parchment">
                      →
                    </span>
                    <strong className="mr-2"><DecryptedText text="Email:" animateOn="view" className="inline-block" /></strong>
                    <span><DecryptedText text="nchola@mhs.mdp.ac.id" animateOn="view" className="inline-block" /></span>
                  </li>
                  <li className="flex items-center text-quantum-gray/90 dark:text-static-white/80">
                    <span className="inline-block w-6 h-6 mr-2 text-gilded-parchment">
                      →
                    </span>
                    <strong className="mr-2"><DecryptedText text="City:" animateOn="view" className="inline-block" /></strong>
                    <span><DecryptedText text="Palembang, Indonesia" animateOn="view" className="inline-block" /></span>
                  </li>
                  <li className="flex items-center text-quantum-gray/90 dark:text-static-white/80">
                    <span className="inline-block w-6 h-6 mr-2 text-gilded-parchment">
                      →
                    </span>
                    <strong className="mr-2"><DecryptedText text="Freelance:" animateOn="view" className="inline-block" /></strong>
                    <span><DecryptedText text="Available" animateOn="view" className="inline-block" /></span>
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
                <DecryptedText text="View My CV" animateOn="view" className="inline-block" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
