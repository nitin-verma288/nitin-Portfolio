import React from 'react';
import { motion } from 'framer-motion';
import { Award, ShieldCheck, ExternalLink, Calendar } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      title: 'OCI 2025 Certified Generative AI Professional',
      issuer: 'Oracle',
      date: '2025',
      badgeColor: 'from-amber-500/20 to-orange-500/10',
      borderColor: 'hover:border-amber-500/40',
      iconColor: 'text-amber-400',
      description: 'Oracle Cloud Infrastructure Generative AI professional certification covering LLMs, fine-tuning, RAG frameworks, and deployment.'
    },
    {
      title: 'Oracle Java Foundations Professional',
      issuer: 'Oracle',
      date: 'Professional Certification',
      badgeColor: 'from-rose-500/20 to-red-500/10',
      borderColor: 'hover:border-rose-500/40',
      iconColor: 'text-rose-400',
      description: 'Foundational Java programming certification verifying core object-oriented concepts, syntax, data structures, and algorithms.'
    },
    {
      title: 'AWS Academy Graduate – Cloud Foundations',
      issuer: 'AWS',
      date: 'AWS Academy',
      badgeColor: 'from-blue-500/20 to-cyan-500/10',
      borderColor: 'hover:border-blue-500/40',
      iconColor: 'text-blue-400',
      description: 'Comprehensive AWS cloud computing foundation covering cloud architecture, IAM security, EC2, S3, and database services.'
    },
    {
      title: 'TCS iON – Group Discussion Certification',
      issuer: 'TCS iON',
      date: 'January 2026',
      badgeColor: 'from-emerald-500/20 to-teal-500/10',
      borderColor: 'hover:border-emerald-500/40',
      iconColor: 'text-emerald-400',
      description: 'Professional communication, structured team collaboration, and group discussion certification completed in January 2026.'
    }
  ];

  return (
    <section id="certifications" className="py-24 relative overflow-hidden bg-[#030611]/80 border-t border-slate-800/80">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/25 text-blue-400 text-xs font-mono font-semibold tracking-wider uppercase mb-4">
            <Award size={14} />
            <span>VERIFIED ACCOMPLISHMENTS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight mb-4">
            Certifications & Training
          </h2>
          <p className="text-base sm:text-lg text-slate-400 leading-relaxed">
            Official technical credentials and industry training completed across Oracle, AWS, and TCS iON.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 via-cyan-400 to-transparent mx-auto mt-6 rounded-full" />
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert, idx) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`glass-card rounded-2xl p-6 border border-slate-800/90 ${cert.borderColor} transition-all duration-300 shadow-xl flex flex-col justify-between text-left group`}
            >
              <div className="space-y-4">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${cert.badgeColor} border border-slate-700/80 shrink-0`}>
                      <Award className={cert.iconColor} size={24} />
                    </div>
                    <div>
                      <span className="text-xs font-mono font-semibold text-blue-400 uppercase tracking-wider block">
                        {cert.issuer}
                      </span>
                      <h3 className="text-base sm:text-lg font-bold text-slate-100 group-hover:text-blue-400 transition-colors">
                        {cert.title}
                      </h3>
                    </div>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {cert.description}
                </p>
              </div>

              <div className="flex items-center justify-between pt-4 mt-4 border-t border-slate-800/80 text-xs font-mono text-slate-400">
                <div className="flex items-center gap-1.5">
                  <Calendar size={13} className="text-slate-500" />
                  <span>{cert.date}</span>
                </div>
                <div className="flex items-center gap-1 text-emerald-400 font-sans text-[11px] font-semibold bg-emerald-500/10 px-2.5 py-0.5 rounded border border-emerald-500/20">
                  <ShieldCheck size={13} />
                  <span>Verified</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Certifications;
