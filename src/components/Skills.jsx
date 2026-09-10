import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Server, Wrench, Brain, CheckCircle2 } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: <Code2 className="text-blue-400" size={20} />,
      skills: ['Java', 'C', 'C++']
    },
    {
      title: 'Technologies & Frameworks',
      icon: <Server className="text-cyan-400" size={20} />,
      skills: ['Spring Boot', 'MySQL', 'React', 'HTML5', 'CSS3', 'Tailwind CSS']
    },
    {
      title: 'Tools & Platforms',
      icon: <Wrench className="text-emerald-400" size={20} />,
      skills: ['VS Code', 'Git', 'GitHub', 'Render', 'Railway', 'Postman', 'IntelliJ IDEA']
    },
    {
      title: 'Core Concepts',
      icon: <Brain className="text-purple-400" size={20} />,
      skills: ['OOPs', 'CRUD Operations', 'REST API Development', 'Version Control', 'Problem Solving']
    }
  ];

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-[#040711]/60 border-y border-slate-800/80">
      {/* Glow effect */}
      <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-blue-600/10 rounded-full blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/25 text-blue-400 text-xs font-mono font-semibold tracking-wider uppercase mb-4">
            <Code2 size={14} />
            <span>TECHNICAL PROFICIENCY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight mb-4">
            Skills & Competencies
          </h2>
          <p className="text-base sm:text-lg text-slate-400 leading-relaxed">
            Core technical stack and software engineering skills developed through coursework and hands-on project implementations.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 via-cyan-400 to-transparent mx-auto mt-6 rounded-full" />
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-card rounded-2xl p-6 sm:p-8 border border-slate-800/90 hover:border-blue-500/30 transition-all duration-300 shadow-xl text-left"
            >
              <div className="flex items-center gap-3 mb-6 border-b border-slate-800 pb-4">
                <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800">
                  {category.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-100 tracking-tight">
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2.5">
                {category.skills.map((skill) => (
                  <div
                    key={skill}
                    className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-900/90 border border-slate-800 text-xs font-mono text-slate-200 hover:border-blue-500/40 hover:text-blue-400 transition-colors"
                  >
                    <CheckCircle2 size={14} className="text-blue-400 shrink-0" />
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;
