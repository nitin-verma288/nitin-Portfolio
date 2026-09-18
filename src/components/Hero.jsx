import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Server, Database, Code, Terminal, CheckCircle2, Phone, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

const Hero = () => {
  return (
    <section id="home" className="scroll-mt-24 relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background ambient radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/15 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="lg:col-span-7 flex flex-col items-start text-left"
          >
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/25 text-blue-400 text-xs font-mono font-semibold tracking-wider uppercase mb-6 shadow-[0_0_15px_rgba(0,102,255,0.15)]">
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
              JAVA BACKEND DEVELOPER
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-100 tracking-tight leading-[1.1] mb-3">
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-400">Nitin Verma.</span>
            </h1>

            {/* Second Highlighted Line */}
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-slate-300 tracking-tight mb-5">
              Java Backend Developer | Spring Boot Developer
            </h2>

            {/* Short Description */}
            <p className="text-base sm:text-lg text-slate-400 max-w-2xl leading-relaxed mb-8">
              Passionate Java Backend Developer skilled in Java, Spring Boot, MySQL, REST APIs, Git, and GitHub. B.Tech Computer Science Engineering student focused on building practical, reliable applications.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-xl transition-all duration-300 shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50 hover:-translate-y-0.5 border border-blue-400/30"
              >
                <span>View Projects</span>
                <ArrowRight size={17} />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-slate-200 bg-slate-900/80 hover:bg-slate-800/90 rounded-xl transition-all duration-300 border border-slate-700 hover:border-slate-600"
              >
                <span>Let's Connect</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-slate-800/80 w-full">
              <span className="text-xs font-mono text-slate-500 uppercase tracking-wider">Connect:</span>
              <a
                href="https://github.com/nitin-verma288"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-400 hover:text-white transition-colors"
              >
                <GithubIcon size={15} />
                <span>GitHub</span>
              </a>
              <span className="text-slate-700">•</span>
              <a
                href="https://linkedin.com/in/nitinverma288"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-400 hover:text-blue-400 transition-colors"
              >
                <LinkedinIcon size={15} />
                <span>LinkedIn</span>
              </a>
              <span className="text-slate-700">•</span>
              <a
                href="mailto:nitinverma288nv@gmail.com"
                className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-400 hover:text-cyan-400 transition-colors"
              >
                <Mail size={15} />
                <span>nitinverma288nv@gmail.com</span>
              </a>
            </div>
          </motion.div>

          {/* Right Hero Visual Area */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 relative flex justify-center items-center"
          >
            {/* Blue Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-cyan-500/10 rounded-3xl blur-2xl -z-10" />

            {/* Central Developer Visual Card */}
            <div className="w-full max-w-lg rounded-2xl bg-slate-900/90 border border-slate-800 shadow-2xl p-5 backdrop-blur-xl relative overflow-hidden text-left">
              
              {/* Window Bar Header */}
              <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400 bg-slate-950/60 px-3 py-1 rounded-md border border-slate-800">
                  <Terminal size={12} className="text-blue-400" />
                  <span>SpringBootApplication.java</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  <span className="text-[10px] font-mono text-emerald-400">ACTIVE</span>
                </div>
              </div>

              {/* Visual Code Snippet */}
              <div className="font-mono text-xs sm:text-sm space-y-2 bg-[#050811] p-4 rounded-xl border border-slate-800/90 text-slate-300">
                <p><span className="text-purple-400">@SpringBootApplication</span></p>
                <p><span className="text-blue-400">public class</span> <span className="text-amber-300">NitinVermaPortfolio</span> &#123;</p>
                
                <div className="pl-4 space-y-1">
                  <p className="text-slate-500">// Real-World Software Engineering</p>
                  <p><span className="text-purple-400">@Autowired</span></p>
                  <p><span className="text-blue-400">private</span> <span className="text-cyan-300">QueueService</span> queueService;</p>
                  
                  <p className="pt-2"><span className="text-purple-400">@PostMapping</span>(<span className="text-emerald-300">"/api/v1/queue/book"</span>)</p>
                  <p><span className="text-blue-400">public</span> ResponseEntity&lt;Token&gt; <span className="text-blue-300">createToken</span>() &#123;</p>
                  <p className="pl-4 text-slate-300"><span className="text-purple-400">return</span> ResponseEntity.<span className="text-blue-300">ok</span>(queueService.<span className="text-blue-300">generate</span>());</p>
                  <p>&#125;</p>
                </div>

                <p>&#125;</p>
              </div>

              {/* Status Indicators Bar */}
              <div className="grid grid-cols-2 gap-3 mt-4 pt-2">
                <div className="flex items-center gap-2.5 p-2.5 rounded-lg bg-slate-950/60 border border-slate-800/80">
                  <Server size={16} className="text-blue-400 shrink-0" />
                  <div>
                    <div className="text-[11px] text-slate-400">REST APIs</div>
                    <div className="text-xs font-mono font-medium text-slate-200">Spring Boot</div>
                  </div>
                </div>
                <div className="flex items-center gap-2.5 p-2.5 rounded-lg bg-slate-950/60 border border-slate-800/80">
                  <Database size={16} className="text-cyan-400 shrink-0" />
                  <div>
                    <div className="text-[11px] text-slate-400">Database</div>
                    <div className="text-xs font-mono font-medium text-slate-200">MySQL / SQLite</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Info Cards with Real Data Only */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-4 -left-2 sm:-left-6 px-3.5 py-2 rounded-xl bg-slate-900/90 border border-blue-500/30 shadow-xl backdrop-blur-md flex items-center gap-2 text-xs font-semibold text-slate-200"
            >
              <div className="w-6 h-6 rounded-md bg-blue-600/20 text-blue-400 flex items-center justify-center font-mono text-xs font-bold">
                J
              </div>
              <span>Java</span>
            </motion.div>

            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute -bottom-5 -left-2 sm:-left-4 px-3.5 py-2 rounded-xl bg-slate-900/90 border border-emerald-500/30 shadow-xl backdrop-blur-md flex items-center gap-2 text-xs font-semibold text-slate-200"
            >
              <CheckCircle2 size={16} className="text-emerald-400" />
              <span>Spring Boot</span>
            </motion.div>

            <motion.div
              animate={{ y: [0, -7, 0] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              className="absolute -top-3 -right-2 sm:-right-4 px-3.5 py-2 rounded-xl bg-slate-900/90 border border-cyan-500/30 shadow-xl backdrop-blur-md flex items-center gap-2 text-xs font-semibold text-slate-200"
            >
              <Code size={15} className="text-cyan-400" />
              <span>REST APIs</span>
            </motion.div>

            <motion.div
              animate={{ y: [0, 7, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
              className="absolute -bottom-4 -right-2 sm:-right-6 px-3.5 py-2 rounded-xl bg-slate-900/90 border border-purple-500/30 shadow-xl backdrop-blur-md flex items-center gap-2 text-xs font-semibold text-slate-200"
            >
              <span className="w-2 h-2 rounded-full bg-purple-400" />
              <span>B.Tech CSE</span>
            </motion.div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
