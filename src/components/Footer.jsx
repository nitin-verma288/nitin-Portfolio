import React from 'react';
import { Mail, Code2, Phone } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

const Footer = () => {
  return (
    <footer className="border-t border-slate-800/80 bg-[#03050b] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand & Monogram */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-blue-600/10 border border-blue-500/30 flex items-center justify-center text-blue-400 font-mono font-bold">
              <Code2 size={16} />
            </div>
            <div className="text-left">
              <div className="font-bold text-slate-100 text-base">Nitin Verma</div>
              <div className="text-xs font-mono text-slate-400">Java Backend Developer | Spring Boot Developer</div>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/nitin-verma288"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-900 border border-transparent hover:border-slate-800 transition-all"
              aria-label="GitHub Profile"
            >
              <GithubIcon size={18} />
            </a>
            <a
              href="https://linkedin.com/in/nitinverma288"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-slate-400 hover:text-blue-400 hover:bg-slate-900 border border-transparent hover:border-slate-800 transition-all"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon size={18} />
            </a>
            <a
              href="mailto:nitinverma288nv@gmail.com"
              className="p-2 rounded-lg text-slate-400 hover:text-blue-400 hover:bg-slate-900 border border-transparent hover:border-slate-800 transition-all"
              aria-label="Email Me"
            >
              <Mail size={18} />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-xs font-mono text-slate-500">
            © {new Date().getFullYear()} Nitin Verma. All rights reserved.
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
