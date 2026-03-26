import React from 'react';
// Make sure to import your icons!
import { Github, Linkedin, Terminal } from 'lucide-react'; 

const Portfolio = () => {
  // Sample projects array - ensure this is defined!
  const projects = [
    { title: "Project One", description: "Description here", tags: ["React", "Tailwind"] },
    { title: "Project Two", description: "Description here", tags: ["Python", "IoT"] }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-300">
      <nav className="flex gap-6 p-6">
        <a href="#about" className="hover:text-emerald-400 transition">About</a>
        <a href="#projects" className="hover:text-emerald-400 transition">Projects</a>
        <a href="#experience" className="hover:text-emerald-400 transition">Experience</a>
      </nav>

      <header id="about" className="py-24 px-6 max-w-6xl mx-auto text-center md:text-left border-b border-slate-800/50">
        <div className="inline-block px-4 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-bold mb-6 border border-emerald-500/20">
          #OPENTOWORK | CYBERSECURITY & AI
        </div>
        <h2 className="text-5xl md:text-8xl font-black mb-8 tracking-tighter text-white">
          Lakhanpal Singh
        </h2>
        
        <div className="flex flex-wrap gap-4 justify-center md:justify-start">
          <a href="https://www.linkedin.com/in/lakhanpal-singh-319450190" target="_blank" rel="noreferrer" 
             className="bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-3 rounded-md font-bold transition-all flex items-center gap-2">
            <Linkedin size={18} /> LINKEDIN
          </a>
          <a href="https://github.com/lakhanpalsingh123" target="_blank" rel="noreferrer" 
             className="bg-slate-800 hover:bg-slate-700 text-white px-8 py-3 rounded-md font-bold transition-all flex items-center gap-2">
            <Github size={18} /> GITHUB
          </a>
        </div>
      </header>

      {/* Projects Grid */}
      <section id="projects" className="py-24 px-6 max-w-6xl mx-auto">
        <h3 className="text-3xl font-bold mb-12 flex items-center gap-4 text-white">
          <Terminal className="text-emerald-400" /> Technical Arsenal
        </h3>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((p, i) => (
            <div key={i} className="group overflow-hidden rounded-xl bg-slate-900 border border-slate-800 hover:border-emerald-500/40 transition-all">
              <div className="h-48 bg-slate-800 overflow-hidden">
                {/* Image or placeholder */}
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold text-white mb-2">{p.title}</h4>
                <p className="text-slate-400 mb-4">{p.description}</p>
                <div className="flex gap-2">
                  {p.tags.map((tag, index) => (
                    <span key={index} className="text-xs font-mono text-emerald-400 bg-emerald-400/10 px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Portfolio;