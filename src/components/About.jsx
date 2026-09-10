import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, CheckCircle2, UserCheck, Terminal } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/25 text-blue-400 text-xs font-mono font-semibold tracking-wider uppercase mb-4">
            <UserCheck size={14} />
            <span>ABOUT ME</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight mb-4">
            Engineering Profile & Education
          </h2>
          <p className="text-base sm:text-lg text-slate-400 leading-relaxed">
            Passionate B.Tech CSE student dedicated to backend development, clean software design, and practical real-world problem solving.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 via-cyan-400 to-transparent mx-auto mt-6 rounded-full" />
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center text-left">
          
          {/* Left Education Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="glass-card rounded-2xl p-6 sm:p-8 border border-slate-800/90 hover:border-blue-500/40 transition-all shadow-xl space-y-6">
              
              <div className="flex items-center gap-4 border-b border-slate-800 pb-5">
                <div className="p-3 rounded-xl bg-blue-600/10 border border-blue-500/30 text-blue-400">
                  <GraduationCap size={28} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-100">
                    Bachelor of Technology (B.Tech)
                  </h3>
                  <div className="text-xs font-mono text-blue-400">
                    Computer Science Engineering
                  </div>
                </div>
              </div>

              <div className="space-y-3 text-sm text-slate-300">
                <div className="flex justify-between items-center py-1.5 border-b border-slate-800/60">
                  <span className="text-slate-400">Institution</span>
                  <span className="font-medium text-slate-200 text-right">Chameli Devi Group of Institutions, Indore</span>
                </div>
                <div className="flex justify-between items-center py-1.5 border-b border-slate-800/60">
                  <span className="text-slate-400">Duration</span>
                  <span className="font-mono text-slate-200">2023 – 2027</span>
                </div>
                <div className="flex justify-between items-center py-1.5">
                  <span className="text-slate-400">Academic Score (CGPA)</span>
                  <span className="font-mono font-bold text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded border border-emerald-500/20">
                    6.80 / 10
                  </span>
                </div>
              </div>

              <div className="pt-2 font-mono text-xs text-slate-400 flex items-center gap-2">
                <Terminal size={14} className="text-blue-400" />
                <span>Specialization: Java Backend & Spring Boot Architecture</span>
              </div>

            </div>
          </motion.div>

          {/* Right Narrative Profile */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="glass-card rounded-2xl p-6 sm:p-8 border border-slate-800/90 shadow-xl space-y-6">
              
              <h3 className="text-2xl font-bold text-slate-100 tracking-tight">
                Backend Engineering Philosophy
              </h3>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                I am a passionate <strong className="text-white">Java Backend Developer</strong> currently pursuing my B.Tech in Computer Science Engineering. My focus lies in designing structured RESTful APIs, managing database schemas, and building clean, reliable backend systems using <strong className="text-blue-400">Java, Spring Boot, and MySQL</strong>.
              </p>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Rather than working only with theoretical models, I focus on building complete, working applications such as offline AI tools and queue management platforms that solve real-world tasks effectively.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-800">
                <div className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-blue-400 shrink-0 mt-0.5" />
                  <div className="text-xs text-slate-300">
                    <strong className="text-slate-100 block">Clean REST API Design</strong>
                    Structured DTOs, endpoint conventions, and error handling.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-cyan-400 shrink-0 mt-0.5" />
                  <div className="text-xs text-slate-300">
                    <strong className="text-slate-100 block">Database Management</strong>
                    MySQL table relationships, indexes, and CRUD workflows.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-emerald-400 shrink-0 mt-0.5" />
                  <div className="text-xs text-slate-300">
                    <strong className="text-slate-100 block">Version Control & Workflow</strong>
                    Git branch management, GitHub repositories, and postman testing.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-purple-400 shrink-0 mt-0.5" />
                  <div className="text-xs text-slate-300">
                    <strong className="text-slate-100 block">Continuous Learning</strong>
                    Oracle and AWS certifications in Java, Cloud, and Generative AI.
                  </div>
                </div>
              </div>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default About;
