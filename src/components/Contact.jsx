import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Send, Copy, Check, ArrowUpRight, MessageSquare } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const emailAddress = "nitinverma288nv@gmail.com";
  const phoneNumber = "+91 88391 44372";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main CTA Card Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl bg-gradient-to-b from-slate-900/90 via-[#0a0f20] to-slate-950 border border-slate-800 p-8 sm:p-12 lg:p-16 shadow-2xl overflow-hidden"
        >
          {/* Subtle Top Accent Bar */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-cyan-400 to-blue-600" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-6 text-left space-y-6">
              
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/25 text-blue-400 text-xs font-mono font-semibold tracking-wider uppercase">
                <MessageSquare size={14} />
                <span>OPEN FOR OPPORTUNITIES</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-100 tracking-tight leading-tight">
                Let's build something useful.
              </h2>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                I am actively seeking Java Backend / Software Developer internship and entry-level full-time opportunities. Feel free to connect or send a message directly.
              </p>

              {/* Direct Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href={`mailto:${emailAddress}`}
                  className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-xl transition-all duration-300 shadow-lg shadow-blue-600/30 hover:-translate-y-0.5 border border-blue-400/30"
                >
                  <Mail size={18} />
                  <span>Email Me</span>
                </a>

                <button
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-2 px-5 py-3.5 text-sm font-semibold text-slate-200 bg-slate-900 hover:bg-slate-800 rounded-xl transition-all border border-slate-700 hover:border-slate-600"
                >
                  {copied ? <Check size={18} className="text-emerald-400" /> : <Copy size={18} />}
                  <span>{copied ? "Email Copied!" : "Copy Email"}</span>
                </button>
              </div>

              {/* Contact Information Badges */}
              <div className="space-y-3 pt-4">
                <div className="flex items-center gap-3 text-sm text-slate-300">
                  <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-blue-400">
                    <Mail size={16} />
                  </div>
                  <a href={`mailto:${emailAddress}`} className="hover:text-blue-400 transition-colors font-mono">
                    {emailAddress}
                  </a>
                </div>

                <div className="flex items-center gap-3 text-sm text-slate-300">
                  <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-emerald-400">
                    <Phone size={16} />
                  </div>
                  <a href={`tel:${phoneNumber.replace(/\s+/g, '')}`} className="hover:text-emerald-400 transition-colors font-mono">
                    {phoneNumber}
                  </a>
                </div>
              </div>

              {/* Social Link Badges */}
              <div className="flex flex-wrap items-center gap-4 pt-6 border-t border-slate-800">
                <a
                  href="https://github.com/nitin-verma288"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 text-xs font-mono text-slate-300 bg-slate-900/80 hover:bg-slate-800 rounded-lg border border-slate-800 hover:border-slate-700 transition-colors"
                >
                  <GithubIcon size={15} />
                  <span>GitHub</span>
                  <ArrowUpRight size={13} />
                </a>

                <a
                  href="https://linkedin.com/in/nitinverma288"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 text-xs font-mono text-slate-300 bg-slate-900/80 hover:bg-slate-800 rounded-lg border border-slate-800 hover:border-blue-500/40 transition-colors"
                >
                  <LinkedinIcon size={15} className="text-blue-400" />
                  <span>LinkedIn</span>
                  <ArrowUpRight size={13} />
                </a>
              </div>

            </div>

            {/* Right Contact Form */}
            <div className="lg:col-span-6">
              <div className="bg-[#060a14] rounded-2xl p-6 sm:p-8 border border-slate-800/90 shadow-xl text-left">
                <h3 className="text-xl font-bold text-slate-100 mb-2">
                  Send a Direct Message
                </h3>
                <p className="text-xs text-slate-400 mb-6">
                  Fill out the form below and I'll respond directly via email.
                </p>

                {formSubmitted ? (
                  <div className="p-6 rounded-xl bg-emerald-950/40 border border-emerald-500/30 text-emerald-300 text-center space-y-2">
                    <Check size={32} className="mx-auto text-emerald-400" />
                    <div className="font-bold text-base">Message Sent Successfully!</div>
                    <p className="text-xs text-emerald-400/80">Thank you for reaching out. I will get back to you shortly.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-xs font-mono text-slate-400 uppercase mb-1.5">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Your Name / Company"
                        className="w-full px-4 py-2.5 rounded-lg bg-slate-900/90 border border-slate-800 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-slate-400 uppercase mb-1.5">
                        Your Email
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="recruiter@company.com"
                        className="w-full px-4 py-2.5 rounded-lg bg-slate-900/90 border border-slate-800 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-slate-400 uppercase mb-1.5">
                        Message
                      </label>
                      <textarea
                        rows={4}
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Hi Nitin, I would like to discuss a Java Backend developer opportunity with you..."
                        className="w-full px-4 py-2.5 rounded-lg bg-slate-900/90 border border-slate-800 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-xl transition-all shadow-md shadow-blue-600/30 border border-blue-400/30"
                    >
                      <Send size={16} />
                      <span>Send Message</span>
                    </button>
                  </form>
                )}
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Contact;
