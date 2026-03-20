"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const detailedProjects = [
  {
    id: 'daily-g',
    title: 'Daily G',
    tagline: 'Personal Growth & Lifestyle System',
    role: 'Lead Android Engineer • Full Ownership',
    platforms: 'Android (iOS & Web handled separately)',
    tech: ['Kotlin', 'MVVM', 'Compose', 'Firebase', 'Clean Arch'],
    summary: 'Daily G is a complete personal growth system designed to elevate mindset, productivity, and lifestyle. As the Android Engineer, I developed the Android app entirely from scratch, using scalable architecture, best practices, and modern Android principles to deliver a high-performance, production-ready experience.',
    keyFeatures: [
      { title: 'Master-Mind Quotes', desc: 'Daily motivational and insight-driven quotes' },
      { title: 'Goal Setting', desc: 'Structured personal goals with progress tracking' },
      { title: 'Genius Library', desc: 'Interactive content to enhance problem-solving' },
      { title: 'Habit Tracker', desc: 'Daily planning, habit formation, and fitness' },
      { title: 'G-Journal', desc: 'Personal journaling for self-reflection' },
      { title: 'Widgets', desc: 'Keep users on track throughout the day' }
    ],
    technicalHighlights: [
      'Fully modular MVVM architecture for maintainability and scalability',
      'Jetpack Compose for smooth, modern, responsive UI',
      'Firebase integration for real-time data sync, auth, and analytics',
      'Optimized performance for multi-feature interaction flows'
    ],
    impact: [
      'Empowered users to develop confidence, creativity, and daily discipline',
      'Delivered a robust Android app complementing iOS and Web',
      'Built with industry-standard best practices ensuring absolute reliability'
    ],
    links: { case: '#', store: 'https://play.google.com/store/apps/details?id=com.gjournal&hl=en' },
    theme: 'from-blue-600/20 to-purple-600/20',
    accentColor: 'text-indigo-400',
    badgeBg: 'bg-indigo-500/10 border-indigo-500/20 text-indigo-300'
  },
  {
    id: 'lookee',
    title: 'LOOKEE Tech',
    tagline: 'Health & Wellness Companion App',
    role: 'Full Ownership — Android Engineer',
    platforms: 'Android (Health companion for connected devices)',
    tech: ['Kotlin', 'MVVM', 'Compose', 'Retrofit', 'Hilt', 'BLE'],
    summary: 'LOOKEE Tech is a companion app for wellness monitoring devices, tracking metrics like oxygen levels, pulse, activity, and sleep patterns. As the Android Engineer, I developed the entire Android app from scratch, ensuring high performance, scalability, and an intuitive user experience.',
    keyFeatures: [
      { title: 'Device Pairing', desc: 'Seamless connection with health devices via Bluetooth' },
      { title: 'Dashboards', desc: 'Visual trends for pulse, oxygen, activity & sleep' },
      { title: 'Analytics', desc: 'Track metrics over time to monitor health improvements' },
      { title: 'Alerts', desc: 'Timely notifications and updates on health data' },
      { title: 'Data Sync', desc: 'Reliable real-time secure storage using Retrofit + Hilt' }
    ],
    technicalHighlights: [
      'Modular MVVM architecture for maintainable and scalable code',
      'Jetpack Compose for clean, responsive, and modern UI',
      'Integrated Bluetooth and sensor APIs for device data collection',
      'Optimized performance for real-time health monitoring'
    ],
    impact: [
      'Provided users with a polished, intuitive health monitoring experience',
      'Delivered a production-ready app complementing the device ecosystem',
      'Built with industry best practices, ensuring long-term maintainability'
    ],
    links: { case: '#', store: 'https://play.google.com/store/apps/details?id=com.lookee.android&hl=en' },
    theme: 'from-indigo-600/20 to-violet-600/20',
    accentColor: 'text-violet-400',
    badgeBg: 'bg-violet-500/10 border-violet-500/20 text-violet-300'
  },
  {
    id: 'nkenne',
    title: 'NKENNE',
    tagline: 'Learn African Languages',
    role: 'Android Engineer',
    platforms: 'Android (Language learning app for African languages)',
    tech: ['Kotlin', 'MVVM', 'Compose', 'Firebase', 'Offline Sync'],
    summary: 'NKENNE is an interactive language learning app that empowers users to learn African languages through multimedia lessons, exercises, and progress tracking. As the Android Engineer, I developed the entire Android app from scratch, implementing scalable architecture, offline capabilities, and a smooth, modern user interface.',
    keyFeatures: [
      { title: 'Multimedia Lessons', desc: 'Audio, text, and interactive exercises' },
      { title: 'Offline Learning', desc: 'Access lessons without internet connectivity' },
      { title: 'Progress Tracking', desc: 'Track completed lessons and learning progress' },
      { title: 'Personalized Plans', desc: 'Content tailored based on user activity' },
      { title: 'Analytics', desc: 'Insight into engagement to improve outcomes' }
    ],
    technicalHighlights: [
      'Modular MVVM architecture for maintainability and scalability',
      'Jetpack Compose for responsive, clean, and modern UI',
      'Firebase for real-time sync, auth, and data persistence',
      'Offline caching for uninterrupted learning experience'
    ],
    impact: [
      'Provided a culturally meaningful learning experience for global users',
      'Delivered a production-ready app with smooth performance and scalability',
      'Built using industry best practices for reliability and maintainability'
    ],
    links: { case: '#', store: 'https://play.google.com/store/search?q=nkenne&c=apps&hl=en' },
    theme: 'from-blue-600/30 to-purple-600/30',
    accentColor: 'text-blue-400',
    badgeBg: 'bg-blue-500/10 border-blue-500/20 text-blue-300'
  },
  {
    id: 'ringo',
    title: 'Ringo',
    tagline: 'Custom SMS & Ringtones App',
    role: 'Android Engineer',
    platforms: 'Android (Custom SMS & Ringtones)',
    tech: ['Kotlin', 'MVVM', 'Media APIs'],
    summary: 'Ringo is a dynamic audio management app allowing users to browse, preview, and set customizable ringtones and notification sounds on their devices. As the Android Engineer, I developed the entire Android app from scratch, implementing scalable architecture, smooth media handling, and a polished user experience.',
    keyFeatures: [
      { title: 'Audio Browsing', desc: 'Explore a wide range of ringtones categorized by genres' },
      { title: 'Preview & Assign', desc: 'Play and assign tones directly from the app' },
      { title: 'Offline Storage', desc: 'Download and store ringtones for offline use' },
      { title: 'Fast Navigation', desc: 'Quick search and category filters for easy discovery' },
      { title: 'User-Friendly UI', desc: 'Modern, clean, responsive design for seamless utility' }
    ],
    technicalHighlights: [
      'Modular MVVM architecture for maintainable and scalable code',
      'Jetpack Compose and Media APIs for smooth UI and audio handling',
      'Optimized performance for fast browsing and playback',
      'Clean code and production-ready architecture for long-term maintainability'
    ],
    impact: [
      'Delivered a polished audio management app with high user engagement',
      'Enhanced mobile personalization by giving users control over sounds',
      'Built using industry best practices ensuring reliability and scalability'
    ],
    links: { case: '#', store: 'https://play.google.com/store/apps/details?id=com.centralparkapps.ringo.ringtones&hl=en' },
    theme: 'from-blue-500/20 to-cyan-600/20',
    accentColor: 'text-cyan-400',
    badgeBg: 'bg-cyan-500/10 border-cyan-500/20 text-cyan-300'
  }
];

// Custom Easing for ultra-premium feel
const customEase = [0.16, 1, 0.3, 1] as const;

// Device visualization cluster for projects
const FeaturedDeviceCluster = ({ id, theme }: { id: string, theme: string }) => {
  return (
    <div className="relative group/device w-full h-full flex items-center justify-center p-4">
      {/* Background Ambient Glow */}
      <div className={`absolute inset-0 bg-gradient-to-tr ${theme} rounded-full blur-[80px] opacity-20 group-hover/device:opacity-40 transition-opacity duration-700`} />
      
      {/* Phone Frame */}
      <div className="relative w-[200px] sm:w-[240px] lg:w-[280px] aspect-[9/19] rounded-[2.5rem] bg-[#111] border-[6px] border-[#222] shadow-2xl overflow-hidden group-hover/device:scale-[1.02] transition-transform duration-500">
        <div className="absolute top-0 inset-x-0 h-6 bg-black flex items-center justify-center z-20">
          <div className="w-16 h-4 bg-black rounded-b-xl" />
        </div>
        
        {/* Screen Content Wrapper */}
        <div className="w-full h-full bg-[#0a0a0c] pt-8 px-4 relative flex flex-col items-center">
           {/* Dynamic Content based on Project ID */}
           {id === 'daily-g' && (
             <div className="w-full space-y-4">
               <div className="w-full h-24 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/10 border border-white/5 p-3 flex flex-col justify-end">
                 <div className="w-1/2 h-2 bg-white/40 rounded-full mb-2" />
                 <div className="w-3/4 h-3 bg-white/80 rounded-full" />
               </div>
               <div className="grid grid-cols-2 gap-3">
                 {[1, 2].map(i => <div key={i} className="h-20 rounded-xl bg-white/5 border border-white/5" />)}
               </div>
               <div className="space-y-2">
                 {[1, 2, 3].map(i => <div key={i} className="h-10 rounded-xl bg-white/5 border border-white/5" />)}
               </div>
             </div>
           )}
           {id === 'lookee' && (
             <div className="w-full space-y-4">
               <div className="w-full aspect-video rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center">
                 <div className="w-12 h-12 rounded-full border-4 border-indigo-500/30 border-t-indigo-500 animate-spin" />
               </div>
               <div className="w-full h-12 rounded-xl bg-white/5 border border-white/5" />
               <div className="grid grid-cols-2 gap-3">
                 {[1, 2, 3, 4].map(i => <div key={i} className="h-12 rounded-xl bg-white/5 border border-white/5" />)}
               </div>
             </div>
           )}
           {id === 'nkenne' && (
             <div className="w-full h-full flex flex-col items-center pt-8">
               <div className="w-32 h-32 rounded-full bg-gradient-to-tr from-blue-600/20 to-purple-600/20 border border-white/10 flex items-center justify-center mb-10">
                 <div className="w-12 h-12 bg-white/20 rounded-full backdrop-blur-md" />
               </div>
               <div className="w-full space-y-3">
                  {[1, 2, 3].map(i => <div key={i} className="h-12 rounded-xl bg-white/5 border border-white/5" />)}
               </div>
             </div>
           )}
           {id === 'ringo' && (
             <div className="w-full text-center space-y-6 pt-4">
               <div className="w-3/4 h-3 bg-white/20 rounded-full mx-auto" />
               <div className="w-20 h-20 rounded-full bg-cyan-500/20 border border-cyan-500/30 mx-auto flex items-center justify-center">
                  <div className="w-6 h-6 bg-cyan-400 rounded-sm" />
               </div>
               <div className="space-y-3">
                  {[1, 2, 3, 4, 5].map(i => <div key={i} className="h-10 rounded-xl bg-white/5 border border-white/5" />)}
               </div>
             </div>
           )}
        </div>

        {/* Glossiness Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-white/5 via-transparent to-transparent pointer-events-none opacity-50 z-30" />
      </div>
    </div>
  );
};

// Expandable Accordion for detailed view
const ExpandableSection = ({ title, icon, children, defaultOpen = false }: any) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border border-white/5 rounded-3xl bg-white/5 backdrop-blur-sm overflow-hidden mb-4">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-5 flex items-center justify-between hover:bg-white/5 transition-colors"
      >
        <div className="flex items-center gap-4">
          <div className="w-8 h-8 rounded-xl bg-white/5 flex items-center justify-center text-blue-400">
            {icon}
          </div>
          <span className="text-sm font-bold text-white tracking-widest uppercase">{title}</span>
        </div>
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.4, ease: customEase }}>
          <svg className="w-5 h-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/>
          </svg>
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: customEase }}
          >
            <div className="px-6 pb-6 pt-2 border-t border-white/5">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FeaturedProjects = () => {
  const [activeProject, setActiveProject] = useState<string | null>(null);

  // Lock body scroll when active
  useEffect(() => {
    if (activeProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [activeProject]);

  return (
    <section className="py-24 lg:py-40 bg-[#050505] text-white relative">
      {/* Background Ambience */}
      <div className="absolute top-0 inset-x-0 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10 max-w-7xl">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: customEase }}
          className="text-center mb-16 lg:mb-24"
        >
          <h2 className="text-sm font-bold tracking-widest text-indigo-400 uppercase mb-4">Portfolio</h2>
          <h3 className="text-4xl lg:text-7xl font-extrabold text-white tracking-tight">Featured Projects</h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {detailedProjects.map((project, idx) => (
            <motion.div
              layoutId={`project-card-${project.id}`}
              key={project.id}
              onClick={() => setActiveProject(project.id)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              whileHover={{ y: -10 }}
              className="group cursor-pointer bg-[#0a0a0c] rounded-[3rem] border border-white/5 hover:border-white/10 transition-all duration-500 overflow-hidden shadow-2xl hover:shadow-blue-500/10"
            >
              {/* Card Visualization Side */}
              <div className="relative aspect-[4/3] bg-gradient-to-br from-slate-900 to-black p-8 overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-tr ${project.theme} opacity-10 group-hover:opacity-20 transition-opacity duration-500`} />
                <div className="w-full h-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-700">
                  <FeaturedDeviceCluster id={project.id} theme={project.theme} />
                </div>
              </div>

              {/* Card Meta Side */}
              <div className="p-8 lg:p-10 border-t border-white/5 backdrop-blur-sm bg-white/[0.02]">
                <div className={`inline-block mb-4 px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase border border-white/10 ${project.badgeBg}`}>
                  {project.platforms}
                </div>
                <h4 className="text-2xl lg:text-3xl font-extrabold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h4>
                <p className={`text-sm lg:text-base font-semibold ${project.accentColor} mb-4`}>
                  {project.tagline}
                </p>
                <div className="flex flex-wrap gap-2 mt-4 opacity-60 group-hover:opacity-100 transition-opacity">
                   {project.tech.slice(0, 3).map(t => (
                     <span key={t} className="text-[10px] font-bold bg-white/5 px-2 py-1 rounded-md text-slate-400">{t}</span>
                   ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Expanded Project Overlay */}
      <AnimatePresence>
        {activeProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-2xl overflow-y-auto no-scrollbar"
          >
            <div className="container mx-auto px-6 py-10 lg:py-20 flex flex-col items-center">
              {/* Back CTA */}
              <motion.button 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                onClick={() => setActiveProject(null)}
                className="self-start mb-10 flex items-center gap-3 text-slate-400 hover:text-white transition-colors group px-4 py-2 rounded-full border border-white/5 hover:bg-white/5"
              >
                <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
                </svg>
                <span className="font-bold text-sm tracking-widest uppercase">Back to Portfolio</span>
              </motion.button>

              {(() => {
                const project = detailedProjects.find(p => p.id === activeProject)!;
                return (
                  <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
                    {/* Visual Project Cluster */}
                    <div className="sticky top-20 flex items-center justify-center p-8 lg:p-0">
                      <div className="w-full aspect-square relative">
                         <div className={`absolute inset-0 bg-gradient-to-tr ${project.theme} opacity-30 blur-[100px] animate-pulse`} />
                         <div className="relative z-10 transform scale-125 lg:scale-150">
                           <FeaturedDeviceCluster id={project.id} theme={project.theme} />
                         </div>
                      </div>
                    </div>

                    {/* Project Information Narrative */}
                    <div className="space-y-10 lg:pt-10">
                      <div>
                        <div className={`inline-block mb-6 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase border border-white/10 ${project.badgeBg}`}>
                          {project.platforms}
                        </div>
                        <h1 className="text-5xl lg:text-7xl font-extrabold text-white mb-6 tracking-tight leading-tight">
                          {project.title}
                        </h1>
                        <p className={`text-2xl font-bold ${project.accentColor} mb-8`}>
                          {project.tagline}
                        </p>
                        <p className="text-xl text-slate-300 leading-relaxed font-light mb-10">
                          {project.summary}
                        </p>
                        
                        <div className="flex flex-wrap gap-2 mb-10">
                          {project.tech.map(t => (
                            <span key={t} className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs font-bold text-slate-300">
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-4">
                        <ExpandableSection 
                          title="Key Deliverables" 
                          defaultOpen={true}
                          icon={<svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>}
                        >
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {project.keyFeatures.map((feat, i) => (
                              <div key={i} className="p-4 rounded-2xl bg-white/5 border border-white/5">
                                <h5 className="text-white font-bold text-sm mb-1">{feat.title}</h5>
                                <p className="text-slate-400 text-xs leading-relaxed">{feat.desc}</p>
                              </div>
                            ))}
                          </div>
                        </ExpandableSection>

                        <ExpandableSection 
                          title="Technical Implementation" 
                          icon={<svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/></svg>}
                        >
                          <ul className="space-y-4">
                            {project.technicalHighlights.map((tech, i) => (
                              <li key={i} className="flex gap-4 items-start group">
                                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 flex-shrink-0 group-hover:scale-150 transition-transform" />
                                <span className="text-slate-300 text-sm leading-relaxed">{tech}</span>
                              </li>
                            ))}
                          </ul>
                        </ExpandableSection>

                        <ExpandableSection 
                          title="Solution Impact" 
                          icon={<svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/></svg>}
                        >
                          <ul className="space-y-4">
                            {project.impact.map((imp, i) => (
                              <li key={i} className="flex gap-4 items-start group">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 flex-shrink-0 group-hover:scale-150 transition-transform" />
                                <span className="text-slate-300 text-sm leading-relaxed">{imp}</span>
                              </li>
                            ))}
                          </ul>
                        </ExpandableSection>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-5 pt-8">
                        <a 
                          href={project.links.store} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="px-10 py-5 rounded-full bg-white text-black font-extrabold text-lg text-center hover:bg-slate-200 transition-colors shadow-xl shadow-white/10"
                        >
                          Launch Experience
                        </a>
                        <a 
                          href={project.links.case}
                          className="px-10 py-5 rounded-full bg-white/5 border border-white/10 text-white font-extrabold text-lg text-center hover:bg-white/10 transition-all backdrop-blur-sm"
                        >
                          Download PDF Deck
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })()}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style dangerouslySetInnerHTML={{__html: `
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />
    </section>
  );
};

export default FeaturedProjects;
