import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Server, ShieldCheck, Layers, Cpu, CheckCircle2, Image as ImageIcon } from 'lucide-react';
import { GithubIcon } from './Icons';

const ProjectModal = ({ project, onClose }) => {
  const [activeModalImage, setActiveModalImage] = useState(null);

  useEffect(() => {
    if (project) {
      setActiveModalImage(project.image || project.mainImage);
    }
  }, [project]);

  if (!project) return null;

  const currentImage = activeModalImage || project.mainImage;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-y-auto">
        {/* Backdrop overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/85 backdrop-blur-md"
        />

        {/* Modal Window Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-4xl bg-[#090e1c] border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden z-10 text-left my-auto max-h-[90vh] flex flex-col"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-900/80 shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-blue-500 animate-pulse" />
              <h3 className="text-xl font-bold text-slate-100 tracking-tight">
                {project.title}
              </h3>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>
          </div>

          {/* Scrollable Content Body */}
          <div className="p-6 overflow-y-auto space-y-6">
            
            {/* Real Screenshot Display Container */}
            <div className="space-y-3">
              <div className="relative rounded-xl border border-slate-800 overflow-hidden bg-black p-1 shadow-2xl">
                <img
                  src={currentImage}
                  alt={`${project.title} Original Screenshot`}
                  className="w-full h-auto object-contain rounded-lg max-h-[460px]"
                />
                {project.isOffline && (
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-md bg-blue-600/90 text-white font-mono text-xs font-bold shadow-md">
                    ⚡ OFFLINE LOCAL AI ENGINE
                  </div>
                )}
              </div>

              {/* Gallery Selector inside Modal */}
              {project.gallery && project.gallery.length > 1 && (
                <div className="bg-slate-900/50 p-3 rounded-xl border border-slate-800/80">
                  <div className="flex items-center gap-2 mb-2 text-xs font-mono text-slate-400">
                    <ImageIcon size={14} className="text-blue-400" />
                    <span>Project Screenshots ({project.gallery.length}):</span>
                  </div>
                  <div className="flex items-center gap-3 overflow-x-auto pb-1">
                    {project.gallery.map((item, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActiveModalImage(item.url)}
                        className={`flex items-center gap-2 px-3 py-1.5 rounded-lg border text-xs font-mono transition-all shrink-0 ${
                          currentImage === item.url
                            ? 'bg-blue-600/20 border-blue-500 text-blue-300'
                            : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200'
                        }`}
                      >
                        <img
                          src={item.url}
                          alt={item.label}
                          className="w-8 h-6 object-cover rounded border border-slate-800"
                        />
                        <span>{item.label}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Overview & Purpose Section */}
            <div className="space-y-3 bg-slate-900/60 p-5 rounded-xl border border-slate-800">
              <h4 className="text-sm font-semibold uppercase text-blue-400 tracking-wider font-mono flex items-center gap-2">
                <Layers size={16} />
                Project Overview & Purpose
              </h4>
              <p className="text-sm text-slate-200 leading-relaxed">
                {project.description}
              </p>
              {project.purpose && (
                <p className="text-xs text-slate-400 leading-relaxed pt-1 border-t border-slate-800/80">
                  <strong className="text-slate-300 font-mono">Purpose: </strong>
                  {project.purpose}
                </p>
              )}
            </div>

            {/* Key Implementation Points */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3 bg-slate-900/40 p-4 rounded-xl border border-slate-800/80">
                <h4 className="text-xs font-semibold uppercase text-slate-300 tracking-wider font-mono flex items-center gap-2">
                  <ShieldCheck size={16} className="text-blue-400" />
                  Key Implementation Points
                </h4>
                <ul className="space-y-2">
                  {project.highlights.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 size={15} className="text-blue-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-3 bg-slate-900/40 p-4 rounded-xl border border-slate-800/80">
                <h4 className="text-xs font-semibold uppercase text-slate-300 tracking-wider font-mono flex items-center gap-2">
                  <Cpu size={16} className="text-cyan-400" />
                  Technical Details
                </h4>
                <ul className="space-y-2">
                  {project.architectureDetails.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                      <Server size={15} className="text-cyan-400 shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Technology Stack Badges */}
            <div className="space-y-3 pt-2 border-t border-slate-800/80">
              <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider">Technology Stack</h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs font-mono font-medium text-blue-300 bg-blue-500/10 border border-blue-500/25 rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Footer CTAs */}
          <div className="flex items-center justify-between px-6 py-4 border-t border-slate-800 bg-slate-900/80 shrink-0">
            <div className="text-xs text-slate-400 font-mono">
              Role: {project.role}
            </div>
            <div className="flex items-center gap-3">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium text-slate-200 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors border border-slate-700"
              >
                <GithubIcon size={15} />
                <span>GitHub Repository</span>
              </a>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors shadow-md shadow-blue-600/30"
              >
                <ExternalLink size={15} />
                <span>Live Demo</span>
              </a>
            </div>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ProjectModal;
