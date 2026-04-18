"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Terminal, Smartphone, Code2, ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative w-full min-h-[90vh] bg-[#050505] text-slate-200 flex items-center justify-center overflow-hidden font-sans selection:bg-purple-500/30">
      
      {/* Abstract Background Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[400px] h-[400px] sm:w-[500px] sm:h-[500px] bg-blue-600/20 rounded-full blur-[100px] sm:blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[400px] h-[400px] sm:w-[500px] sm:h-[500px] bg-purple-600/20 rounded-full blur-[100px] sm:blur-[120px] pointer-events-none" />
      
      {/* Subtle grid pattern overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMSIgZmlsbD0icmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA1KSIvPjwvc3ZnPg==')] opacity-[0.15] z-0"></div>

      <div className="container mx-auto px-6 py-12 lg:py-24 relative z-10 flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-8 min-h-[80vh]">
        
        {/* Left Formatted Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-1 text-center lg:text-left space-y-6 sm:space-y-8 max-w-2xl"
        >
          {/* Availability Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md shadow-sm"
          >
            <span className="relative flex h-2 sm:h-2.5 w-2 sm:w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 sm:h-2.5 w-2 sm:w-2.5 bg-blue-500"></span>
            </span>
            <span className="text-xs sm:text-sm font-medium tracking-wide text-slate-300">
              Available for new opportunities
            </span>
          </motion.div>

          {/* Main Titles */}
          <div className="space-y-4">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1]"
            >
              Hi, I'm <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 drop-shadow-sm pb-2">
                Muhammad Usman
              </span>
            </motion.h1>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-lg sm:text-2xl lg:text-3xl font-semibold text-slate-300 flex flex-col sm:flex-row items-center lg:items-start lg:block justify-center gap-1 sm:gap-2 lg:gap-0"
            >
              Android Engineer <span className="hidden sm:inline text-slate-600 mx-2">|</span> 
              <span className="font-medium text-slate-400 text-base sm:text-xl lg:text-2xl">Kotlin • Jetpack Compose</span>
            </motion.h2>
          </div>

          {/* Tagline text */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="text-base sm:text-lg lg:text-xl text-slate-400 leading-relaxed max-w-xl mx-auto lg:mx-0"
          >
            Building scalable, production-ready mobile apps with clean architecture. Delivering native experiences that users love.
          </motion.p>

          {/* Call to Actions */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-5 pt-2 sm:pt-4"
          >
            <button 
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold text-base sm:text-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(99,102,241,0.4)] active:scale-95 flex items-center justify-center gap-2 group"
            >
              View Projects
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-white/5 backdrop-blur-sm text-white font-semibold text-base sm:text-lg border border-white/10 transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:scale-105 active:scale-95"
            >
              Contact Me
            </button>
          </motion.div>
        </motion.div>

        {/* Right Content - Premium Circular Profile */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="flex-1 flex justify-center lg:justify-end relative w-full mt-10 lg:mt-0"
        >
          {/* Main Circular Container */}
          <div className="relative w-[280px] h-[280px] sm:w-[340px] sm:h-[340px] lg:w-[420px] lg:h-[420px] group mt-8 lg:-mt-10">
            {/* Animated Glow Behind Circle */}
            <motion.div 
              animate={{ 
                scale: [1, 1.05, 1],
                opacity: [0.3, 0.5, 0.3]
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -inset-4 bg-gradient-to-tr from-blue-500 to-purple-600 rounded-full blur-2xl lg:blur-3xl group-hover:opacity-70 transition duration-500"
            ></motion.div>
            
            {/* Circular Image Wrapper */}
            <div className="relative w-full h-full rounded-full p-2 bg-gradient-to-tr from-white/10 to-white/30 backdrop-blur-md border border-white/20 shadow-2xl transition-transform duration-500 group-hover:scale-[1.02] z-10 flex items-center justify-center">
              <div className="relative w-full h-full rounded-full overflow-hidden bg-slate-800 shadow-inner">
                <Image 
                  src="/dp.png" 
                  alt="Muhammad Usman - Android Engineer" 
                  fill
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 280px, (max-width: 1024px) 340px, 420px"
                  priority
                />
                
                {/* Subtle Inner Glow for Premium Feel */}
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-slate-900/40 to-transparent pointer-events-none"></div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
