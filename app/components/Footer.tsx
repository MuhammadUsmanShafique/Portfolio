"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react';

const socialLinks = [
  { 
    icon: <Github className="w-5 h-5" />, 
    href: "https://github.com/MuhammadUsmanShafique", 
    label: "GitHub",
    color: "hover:text-[#2ea44f] hover:bg-[#2ea44f]/10"
  },
  { 
    icon: <Linkedin className="w-5 h-5" />, 
    href: "https://pk.linkedin.com/in/muhammad-usman-shafique", 
    label: "LinkedIn",
    color: "hover:text-[#0077b5] hover:bg-[#0077b5]/10"
  },
  { 
    icon: <Mail className="w-5 h-5" />, 
    href: "mailto:usman2002shafiq@gmail.com", 
    label: "Email",
    color: "hover:text-[#ea4335] hover:bg-[#ea4335]/10"
  },
];

const Footer = () => {
  return (
    <footer id="contact" className="relative py-24 sm:py-32 bg-[#050505] overflow-hidden">
      {/* ── Background Architecture ── */}
      
      {/* Mesh Gradient Anim */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      {/* Noise Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.03] z-[1] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center max-w-4xl mx-auto">
          
          {/* ── Contact CTA ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight mb-8">
              READY TO BUILD <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500">
                SOMETHING GREAT?
              </span>
            </h2>
            
            <motion.a
              href="mailto:usman2002shafiq@gmail.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-white text-black font-bold text-lg transition-shadow hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] group"
            >
              Get in touch
              <ExternalLink className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </motion.a>
          </motion.div>

          {/* ── Social Grid ── */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-20">
            {socialLinks.map((social, i) => (
              <motion.a
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5 }}
                className={`flex items-center gap-3 px-6 py-3 rounded-2xl bg-white/5 border border-white/10 text-slate-400 transition-all duration-300 ${social.color}`}
              >
                {social.icon}
                <span className="font-semibold tracking-wide text-sm">{social.label}</span>
              </motion.a>
            ))}
          </div>

          {/* ── Bottom Section ── */}
          <div className="w-full pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex flex-col items-center md:items-start space-y-2">
              <p className="text-slate-400 font-medium text-sm">
                &copy; 2026 Usman. All rights reserved.
              </p>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">
                  Available for new projects
                </span>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <p className="text-[10px] text-slate-600 uppercase tracking-[0.3em] font-semibold">
                Built with Next.js & Framer Motion
              </p>
              <div className="hidden sm:block h-4 w-px bg-white/10" />
              <p className="hidden sm:block text-[10px] text-slate-600 uppercase tracking-[0.3em] font-semibold">
                Design with Passion
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
