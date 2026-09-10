import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Layers, ArrowUpRight, Server, Database, Shield, Terminal, Eye, Image as ImageIcon } from 'lucide-react';
import { GithubIcon } from './Icons';
import ProjectModal from './ProjectModal';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const [activeImageMap, setActiveImageMap] = useState({
    'nova-ai': '/images/nova-ai-main.png',
    'smart-queue': '/images/smart-queue-main.png'
  });

  const projects = [
    {
      id: 'nova-ai',
      title: 'NOVA AI – Offline AI Assistant',
      role: 'Full-Stack Developer (Java / Spring Boot)',
      summary: 'Full-stack offline AI assistant designed to run with a local AI model for privacy-focused local execution.',
      description: 'A full-stack offline AI assistant designed to run with a local AI model (Gemma 3 via Ollama) and a Spring Boot backend.',
      technologies: ['Java', 'Spring Boot', 'SQLite', 'Ollama', 'Gemma 3', 'Tailwind CSS', 'React'],
      githubUrl: 'https://github.com/nitin-verma288',
      liveUrl: 'https://github.com/nitin-verma288',
      image: activeImageMap['nova-ai'],
      mainImage: '/images/nova-ai-main.png',
      gallery: [
        { url: '/images/nova-ai-main.png', label: 'Intelligence Engine Workspace' },
        { url: '/images/nova-ai-login.png', label: 'Console Login Console' }
      ],
      isOffline: true,
      highlights: [
        'Developed a full-stack offline AI assistant using Spring Boot, React, and Ollama',
        'Implemented JWT authentication for secure local user sessions',
        'Implemented persistent chat history management',
        'Integrated SQLite database for lightweight, self-contained local storage',
        'Built real-time AI streaming responses (SSE)',
        'Developed REST APIs for chat orchestration and provider management',
        'Created a responsive ChatGPT-like user interface'
      ],
      architectureDetails: [
        'Spring Boot REST APIs orchestrating local Ollama LLM requests',
        'SQLite database integration for local persistence',
        'Real-time token streaming to React frontend',
        'Strict offline local AI model execution (Gemma 3 via Ollama)'
      ],
      type: 'Offline AI System / Full-Stack',
      status: 'Local AI Model (Gemma 3)',
      purpose: 'Provide a privacy-centric, zero-cloud AI assistant running completely offline on the user\'s local machine without transmitting data to external third-party servers.'
    },
    {
      id: 'smart-queue',
      title: 'Smart Queue Management System',
      role: 'Backend Developer',
      summary: 'A smart queue management application designed for real-time queue handling and booking workflows.',
      description: 'A real-time queue handling and booking management system built with a Spring Boot REST API backend and MySQL database.',
      technologies: ['Spring Boot', 'Java', 'React.js', 'Tailwind CSS', 'MySQL'],
      githubUrl: 'https://github.com/nitin-verma288',
      liveUrl: 'https://github.com/nitin-verma288',
      image: activeImageMap['smart-queue'],
      mainImage: '/images/smart-queue-main.png',
      gallery: [
        { url: '/images/smart-queue-main.png', label: 'Live Operations & Ticket Tracker' },
        { url: '/images/smart-queue-portal.png', label: 'Active Sector Portal' },
        { url: '/images/smart-queue-landing.png', label: 'Portal Access Selection' }
      ],
      isOffline: false,
      highlights: [
        'Developed REST APIs using Spring Boot for queue and user management',
        'Designed and managed MySQL database tables and relationships',
        'Implemented full CRUD operations for token and appointment workflows',
        'Implemented backend authentication logic and secure token generation',
        'Implemented queue management and status updating algorithms'
      ],
      architectureDetails: [
        'Spring Boot REST architecture for high concurrency handling',
        'Relational MySQL schema design with foreign key constraints',
        'Backend authentication and token generation workflows',
        'Responsive React frontend with live status updates'
      ],
      type: 'Backend & Queue API System',
      status: 'Production Architecture',
      purpose: 'Streamline customer queuing and appointment booking workflows, reducing waiting room friction through real-time digital token generation and queue status updates.'
    }
  ];

  const handleThumbnailClick = (projectId, imageUrl, e) => {
    e.stopPropagation();
    setActiveImageMap(prev => ({ ...prev, [projectId]: imageUrl }));
  };

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/25 text-blue-400 text-xs font-mono font-semibold tracking-wider uppercase mb-4">
            <Layers size={14} />
            <span>PORTFOLIO SHOWCASE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight mb-4">
            Projects & Case Studies
          </h2>
          <p className="text-base sm:text-lg text-slate-400 leading-relaxed">
            Real-world applications engineered with Java, Spring Boot, databases, and modern web technologies.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 via-cyan-400 to-transparent mx-auto mt-6 rounded-full" />
        </div>

        {/* Project Cards List */}
        <div className="space-y-16">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="glass-card rounded-2xl border border-slate-800/90 overflow-hidden hover:border-blue-500/40 transition-all duration-300 shadow-xl group text-left"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                
                {/* Left Screenshot & Visual Preview Area */}
                <div className="lg:col-span-7 bg-[#040711] p-6 sm:p-8 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-slate-800/80 relative overflow-hidden group">
                  
                  {/* Window Bar Header */}
                  <div className="flex items-center justify-between mb-4 z-10">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                      <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                      <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                    </div>
                    <div className="text-[11px] font-mono text-slate-400 flex items-center gap-1.5 bg-slate-900/90 px-3 py-1 rounded-md border border-slate-800">
                      <Terminal size={12} className="text-blue-400" />
                      <span>{project.type}</span>
                    </div>
                  </div>

                  {/* Prominent Original Screenshot Container */}
                  <div className="relative rounded-xl border border-slate-800/90 overflow-hidden bg-black shadow-2xl group-hover:border-blue-500/40 transition-all duration-300 my-auto">
                    <img
                      src={project.image}
                      alt={`${project.title} Real Screenshot`}
                      className="w-full h-auto object-contain max-h-[380px] w-full rounded-lg transform group-hover:scale-[1.01] transition-transform duration-500"
                    />
                    
                    {/* Hover Explore Badge Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center bg-slate-950/60 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 text-white font-semibold text-xs shadow-lg shadow-blue-600/40 border border-blue-400/40"
                      >
                        <Eye size={16} />
                        <span>Explore Full Case Study</span>
                      </button>
                    </div>

                    {project.isOffline && (
                      <div className="absolute top-3 left-3 px-3 py-1 rounded-md bg-blue-600/90 backdrop-blur-md text-white font-mono text-[10px] font-bold border border-blue-400/30 shadow-md">
                        ⚡ LOCAL OFFLINE AI
                      </div>
                    )}
                  </div>

                  {/* Screenshot Gallery Thumbnail Strip */}
                  <div className="pt-4 mt-4 border-t border-slate-800/80 z-10">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[11px] font-mono text-slate-400 flex items-center gap-1">
                        <ImageIcon size={13} className="text-blue-400" />
                        Original Screenshots ({project.gallery.length})
                      </span>
                      <span className="text-[10px] font-mono text-slate-500">Click thumbnail to swap preview</span>
                    </div>
                    <div className="flex items-center gap-2 overflow-x-auto pb-1">
                      {project.gallery.map((item, gIdx) => (
                        <button
                          key={gIdx}
                          onClick={(e) => handleThumbnailClick(project.id, item.url, e)}
                          className={`relative rounded-lg overflow-hidden border transition-all shrink-0 w-20 h-12 bg-slate-950 ${
                            project.image === item.url
                              ? 'border-blue-500 ring-2 ring-blue-500/30 opacity-100'
                              : 'border-slate-800 opacity-60 hover:opacity-100 hover:border-slate-700'
                          }`}
                          title={item.label}
                        >
                          <img
                            src={item.url}
                            alt={item.label}
                            className="w-full h-full object-cover"
                          />
                        </button>
                      ))}
                    </div>
                  </div>

                </div>

                {/* Right Content Column */}
                <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between space-y-6">
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono text-blue-400 uppercase tracking-wider">
                        {project.role}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold text-slate-100 group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-slate-300 leading-relaxed">
                      {project.summary}
                    </p>
                  </div>

                  {/* What I Built Bullet Section */}
                  <div className="space-y-2.5">
                    <div className="text-xs font-mono text-slate-400 uppercase tracking-wider font-semibold">
                      What I Built:
                    </div>
                    <ul className="space-y-2 text-xs text-slate-300">
                      {project.highlights.slice(0, 4).map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-blue-400 font-bold shrink-0 mt-0.5">•</span>
                          <span className="leading-snug">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technology Badges */}
                  <div className="space-y-1.5">
                    <div className="text-[11px] font-mono text-slate-500 uppercase">Technologies:</div>
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 text-xs font-mono font-medium text-blue-300 bg-blue-500/10 border border-blue-500/20 rounded-md"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center gap-3 pt-4 border-t border-slate-800/80">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-all shadow-md shadow-blue-600/25 border border-blue-400/30"
                    >
                      <span>Explore Project</span>
                      <ArrowUpRight size={14} />
                    </button>

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium text-slate-300 bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors border border-slate-800"
                    >
                      <GithubIcon size={14} />
                      <span>GitHub</span>
                    </a>

                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium text-slate-300 bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors border border-slate-800"
                    >
                      <ExternalLink size={14} />
                      <span>Live Demo</span>
                    </a>
                  </div>

                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Project Details Modal Component */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};

export default Projects;
