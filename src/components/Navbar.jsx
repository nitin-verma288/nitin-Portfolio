import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Code2 } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'Projects', id: 'projects' },
    { name: 'Skills', id: 'skills' },
    { name: 'About', id: 'about' },
    { name: 'Certifications', id: 'certifications' },
    { name: 'Contact', id: 'contact' },
  ];

  const scrollToSection = (sectionId) => {
    // 1. Close mobile menu before scrolling
    setMobileMenuOpen(false);

    // 2. Short delay so the mobile drawer animation does not interfere with layout calculation
    setTimeout(() => {
      if (sectionId === 'home') {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
        return;
      }

      const element = document.getElementById(sectionId);
      if (element) {
        const navbarHeight = 80;
        const elementPosition = element.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = Math.max(0, elementPosition - navbarHeight);

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }, 250);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#05070d]/85 backdrop-blur-md border-b border-slate-800/80 py-3 shadow-lg shadow-black/40'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Monogram / Brand */}
        <button
          type="button"
          onClick={() => scrollToSection('home')}
          className="flex items-center gap-2 group focus:outline-none cursor-pointer text-left"
        >
          <div className="w-9 h-9 rounded-lg bg-blue-600/10 border border-blue-500/30 flex items-center justify-center text-blue-400 font-mono font-bold group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(0,102,255,0.5)]">
            <Code2 size={18} />
          </div>
          <span className="font-bold text-slate-100 text-lg tracking-tight group-hover:text-blue-400 transition-colors">
            Nitin Verma
          </span>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 rounded-full bg-slate-900/60 border border-slate-800/80 px-4 py-1.5 backdrop-blur-md">
          {navLinks.map((link) => (
            <button
              key={link.name}
              type="button"
              onClick={() => scrollToSection(link.id)}
              className="px-3.5 py-1.5 text-sm font-medium text-slate-300 hover:text-blue-400 transition-colors rounded-full hover:bg-slate-800/50 cursor-pointer"
            >
              {link.name}
            </button>
          ))}
        </nav>

        {/* Right CTA & Social Icons */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://github.com/nitin-verma288"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/60 transition-all border border-transparent hover:border-slate-700"
            aria-label="GitHub Profile"
          >
            <GithubIcon size={19} />
          </a>
          <a
            href="https://linkedin.com/in/nitinverma288"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg text-slate-400 hover:text-blue-400 hover:bg-slate-800/60 transition-all border border-transparent hover:border-slate-700"
            aria-label="LinkedIn Profile"
          >
            <LinkedinIcon size={19} />
          </a>

          <button
            type="button"
            onClick={() => scrollToSection('contact')}
            className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-all duration-200 shadow-lg shadow-blue-600/25 hover:shadow-blue-600/40 hover:-translate-y-0.5 border border-blue-400/30 cursor-pointer"
          >
            <span>Let's Connect</span>
            <ArrowUpRight size={15} />
          </button>
        </div>

        {/* Mobile Menu Trigger */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white focus:outline-none cursor-pointer"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-[#0a0f1d] border-b border-slate-800/90 px-4 pt-3 pb-6 shadow-2xl relative z-50"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  type="button"
                  onClick={() => scrollToSection(link.id)}
                  className="text-left w-full px-4 py-2.5 text-base font-medium text-slate-300 hover:text-blue-400 hover:bg-slate-900/80 rounded-lg transition-colors cursor-pointer focus:outline-none"
                >
                  {link.name}
                </button>
              ))}
              <div className="pt-4 border-t border-slate-800 flex items-center justify-between mt-2 px-2">
                <div className="flex items-center gap-3">
                  <a
                    href="https://github.com/nitin-verma288"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg text-slate-400 hover:text-white bg-slate-900 border border-slate-800"
                    aria-label="GitHub"
                  >
                    <GithubIcon size={20} />
                  </a>
                  <a
                    href="https://linkedin.com/in/nitinverma288"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg text-slate-400 hover:text-blue-400 bg-slate-900 border border-slate-800"
                    aria-label="LinkedIn"
                  >
                    <LinkedinIcon size={20} />
                  </a>
                </div>
                <button
                  type="button"
                  onClick={() => scrollToSection('contact')}
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-semibold text-white bg-blue-600 rounded-lg shadow-md shadow-blue-600/30 cursor-pointer"
                >
                  <span>Let's Connect</span>
                  <ArrowUpRight size={16} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
