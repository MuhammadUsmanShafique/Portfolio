"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 bg-[#050505] border-t border-white/5">
      <div className="container mx-auto px-6 flex flex-col items-center">
        <div className="flex gap-8 mb-8">
          {[
            { icon: <Github className="w-5 h-5" />, href: "https://github.com", label: "GitHub" },
            { icon: <Linkedin className="w-5 h-5" />, href: "https://linkedin.com", label: "LinkedIn" },
            { icon: <Twitter className="w-5 h-5" />, href: "https://twitter.com", label: "Twitter" },
            { icon: <Mail className="w-5 h-5" />, href: "mailto:hello@example.com", label: "Email" },
          ].map((social, i) => (
            <motion.a
              key={i}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -3, textShadow: "0 0 8px rgb(255 255 255 / 0.5)" }}
              className="text-slate-400 hover:text-white transition-colors"
              aria-label={social.label}
            >
              {social.icon}
            </motion.a>
          ))}
        </div>
        
        <div className="text-center">
          <p className="text-sm text-slate-500 font-medium tracking-wide">
            &copy; {currentYear} &bull; Handcrafted with Gradient Passion
          </p>
          <p className="text-[10px] text-slate-600 uppercase tracking-[0.2em] mt-2">
            Built with Next.js & Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
