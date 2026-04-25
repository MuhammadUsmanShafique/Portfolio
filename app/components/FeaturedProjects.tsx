"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from "next/image";

/* ─────────────────────────────────────────
   Project Data
───────────────────────────────────────── */
const projects = [
  {
    id: 'lookee',
    index: '01',
    title: 'LOOKEE Tech',
    tagline: 'Real-Time Health Monitoring System',
    role: 'Lead Android Engineer',
    platforms: 'BLE-Driven Health Monitoring System',
    tech: ['Kotlin', 'Jetpack Compose', 'Retrofit', 'BLE', 'Firebase Auth', 'FCM', 'RESTful APIs'],
    summary: (
      <>
        Led the development of a <span className="text-white font-medium drop-shadow-[0_0_8px_rgba(99,102,241,0.5)]">real-time health monitoring system</span> integrating <span className="text-cyan-300 font-medium">Bluetooth Low Energy (BLE) medical sensors</span> to track oxygen levels, pulse, and activity. Engineered <span className="text-indigo-300 font-medium">reliable device communication pipelines</span> to handle connectivity fluctuations and ensure <span className="text-white font-medium drop-shadow-[0_0_8px_rgba(99,102,241,0.5)]">low-latency data synchronization</span>. Architected a <span className="text-indigo-300 font-medium">scalable Android codebase</span> using modern best practices, enabling <span className="text-cyan-300 font-medium">smooth data visualization</span> and consistent performance in <span className="text-indigo-200 font-medium">production environments</span>.
      </>
    ),
    image: '/image.png',
    images: null,
    store: 'https://play.google.com/store/apps/details?id=com.lookee.android&hl=en',
    gradient: 'from-indigo-600 via-blue-600 to-cyan-500',
    glowColor: 'rgba(99,102,241,0.15)',
    accentClass: 'text-indigo-400',
    badgeClass: 'bg-indigo-500/10 border-indigo-500/30 text-indigo-300',
    dotClass: 'bg-indigo-400',
    imageRight: false,
  },
  {
    id: 'daily-g',
    index: '02',
    title: 'Daily G',
    tagline: 'Personal Growth & Intelligent Learning Ecosystem',
    role: 'Android Engineer',
    platforms: 'Android · AI Ecosystem · Growth Platform',
    tech: [
      'Kotlin',
      'Jetpack Compose',
      'Firebase',
      'MVVM',
      'Clean Architecture',
      'LLM Integration'
    ],
    summary: (
      <>
        Engineered an <span className="text-white font-semibold drop-shadow-[0_0_8px_rgba(168,85,247,0.6)]">intelligent personal growth ecosystem</span> integrating advanced journaling, goal tracking, and <span className="text-pink-300 font-medium tracking-wide">AI-assisted learning modules</span>. Architected with <span className="text-purple-300 font-medium">Clean Architecture & MVVM</span> for uncompromising scalability, leveraging Firebase for seamless <span className="text-white font-medium drop-shadow-[0_0_8px_rgba(168,85,247,0.5)]">real-time state synchronization</span>. Delivered an adaptive user experience focused on continuous <span className="text-pink-200 font-medium">productivity optimization</span>.
      </>
    ),
    image: null,
    images: ['/dailyleftpart.png', '/dailygrightpart.png'],
    store: 'https://play.google.com/store/apps/details?id=com.gjournal&hl=en',
    gradient: 'from-violet-600 via-purple-500 to-pink-500',
    glowColor: 'rgba(139,92,246,0.15)',
    accentClass: 'text-purple-400',
    badgeClass: 'bg-purple-500/10 border-purple-500/30 text-purple-300',
    dotClass: 'bg-purple-400',
    imageRight: true,
  },
  {
    id: 'nkenne',
    index: '03',
    title: 'NKENNE',
    tagline: 'Learn African Languages',
    role: 'Android Engineer',
    platforms: 'Android · Language Learning Platform',
    tech: ['Android SDK', 'Firebase', 'REST APIs', 'Chatbot AI', 'Kotlin'],
    summary: (
      <>
        The first <span className="text-white font-medium drop-shadow-[0_0_8px_rgba(16,185,129,0.5)]">African language learning app</span> with <span className="text-teal-300 font-semibold tracking-wide">150,000+ active users</span>, offering 13 languages including Igbo, Yoruba, and Swahili. Engineered with <span className="text-emerald-300 font-medium">gamified learning paths</span>, <span className="text-white font-medium drop-shadow-[0_0_8px_rgba(16,185,129,0.5)]">AI-powered chatbot practice</span>, and robust <span className="text-teal-200 font-medium">offline-first architecture</span>.
      </>
    ),
    image: '/nkenne.png',
    images: null,
    store: 'https://play.google.com/store/apps/details?id=com.triaxo.nkenne',
    gradient: 'from-emerald-500 via-teal-500 to-green-400',
    glowColor: 'rgba(16,185,129,0.15)',
    accentClass: 'text-emerald-400',
    badgeClass: 'bg-emerald-500/10 border-emerald-500/30 text-emerald-300',
    dotClass: 'bg-emerald-400',
    imageRight: false,
  },
];

const ease = [0.16, 1, 0.3, 1] as const;

/* ─────────────────────────────────────────
   Image Panel
───────────────────────────────────────── */
function ImagePanel({ project }: { project: typeof projects[0] }) {
  /* Dual images (Daily G) */
  if (project.images) {
    return (
      <div className="absolute inset-0 flex gap-2 px-2 py-6 sm:py-8 lg:py-10">
        {project.images.map((src, i) => (
          <div
            key={i}
            className="relative flex-1 overflow-hidden rounded-xl"
          >
            <Image
              src={src}
              alt={`${project.title} screenshot ${i + 1}`}
              fill
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 40vw, 28vw"
              className={`object-contain ${i === 0 ? 'object-right' : 'object-left'}`}
              priority={i === 0}
            />
          </div>
        ))}
      </div>
    );
  }

  /* Single image (Nkenne) */
  if (project.image) {
    return (
      <div className="absolute inset-0 p-4">
        <div className="relative w-full h-full">
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 55vw"
            className="object-contain"
            priority
          />
        </div>
      </div>
    );
  }

  /* Gradient placeholder (Lookee) */
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-10`} />
      <div className="relative z-10 text-center px-8">
        <div
          className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${project.gradient} mx-auto mb-6 flex items-center justify-center shadow-2xl`}
        >
          <svg className="w-10 h-10 text-white/90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
              d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18" />
          </svg>
        </div>
        <p className={`text-sm font-semibold tracking-widest uppercase ${project.accentClass} opacity-60`}>
          {project.platforms}
        </p>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────
   Project Row Card
───────────────────────────────────────── */
function ProjectCard({ project, idx }: { project: typeof projects[0]; idx: number }) {
  const isRight = project.imageRight;

  return (
    <motion.article
      initial={{ opacity: 0, y: 48 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.9, ease, delay: idx * 0.08 }}
      className="group relative"
    >
      {/* Ambient glow */}
      <div
        className="absolute inset-0 rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none blur-3xl"
        style={{ background: project.glowColor }}
      />

      {/* Card */}
      <div className="relative rounded-2xl sm:rounded-[2rem] border border-white/[0.06] bg-[#0c0c0f] overflow-hidden transition-all duration-500 group-hover:border-white/[0.14] group-hover:shadow-2xl">
        <div className={`flex flex-col ${isRight ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}>

          {/* ── Image Panel ── */}
          <div className="relative w-full lg:w-[55%] bg-[#080810] overflow-hidden h-[340px] sm:h-[440px] lg:h-auto">
            {/* Subtle grid pattern */}
            <div
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
                backgroundSize: '40px 40px',
              }}
            />
            {/* Gradient tint */}
            <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-[0.06] pointer-events-none`} />

            <ImagePanel project={project} />

            {/* Platform badge */}
            <div className="absolute top-4 left-4 z-20">
              <span className={`inline-flex items-center gap-1.5 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full text-[9px] sm:text-[10px] font-bold tracking-widest uppercase border backdrop-blur-md ${project.badgeClass}`}>
                <span className={`w-1.5 h-1.5 rounded-full ${project.dotClass}`} />
                {project.platforms}
              </span>
            </div>

            {/* Index watermark */}
            <div className="absolute bottom-3 right-4 z-10">
              <span className="text-[40px] sm:text-[56px] font-black text-white/[0.04] leading-none select-none">
                {project.index}
              </span>
            </div>
          </div>

          {/* ── Details Panel ── */}
          <div className="w-full lg:w-[45%] flex flex-col justify-center px-5 py-7 sm:px-8 sm:py-9 lg:px-12 lg:py-12">

            {/* Role chip */}
            <div className="mb-4 sm:mb-6">
              <span className={`text-[10px] sm:text-[11px] font-bold tracking-[0.2em] uppercase ${project.accentClass}`}>
                {project.role}
              </span>
            </div>

            {/* Title */}
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight mb-2">
              {project.title}
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 font-medium mb-4 sm:mb-6 tracking-wide">
              {project.tagline}
            </p>

            {/* Divider */}
            <div className={`w-8 sm:w-10 h-[2px] bg-gradient-to-r ${project.gradient} rounded-full mb-4 sm:mb-6`} />

            {/* Summary */}
            <p className="text-slate-400 text-sm sm:text-[15px] leading-[1.7] sm:leading-[1.8] mb-6 sm:mb-8">
              {project.summary}
            </p>

            {/* Tech stack */}
            <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-7 sm:mb-10">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="px-2.5 py-1 sm:px-3 rounded-lg bg-white/[0.04] border border-white/[0.07] text-[10px] sm:text-[11px] font-semibold text-slate-400 tracking-wide"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* CTA */}
            <a
              href={project.store}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className={`group/btn inline-flex items-center gap-2.5 self-start px-5 py-3 sm:px-7 sm:py-3.5 rounded-xl bg-gradient-to-r ${project.gradient} text-white text-xs sm:text-sm font-bold tracking-wide shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-[1.03] active:scale-[0.98]`}
            >
              <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3.18 23.76c.3.17.64.24.99.2l13.08-11.95L13.81 8.6 3.18 23.76zM20.7 10.06l-2.84-1.65-3.64 3.33 3.64 3.32 2.87-1.66c.82-.48.82-1.86-.03-2.34zM1.56.48C1.21.16.75.02.3.2L13.81 12 17.15 8.73 1.56.48zM.3 23.8c.45.18.91.04 1.26-.28l15.59-8.25-3.34-3.27L.3 23.8z"/>
              </svg>
              Google Play
              <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5 transition-transform duration-300 group-hover/btn:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

/* ─────────────────────────────────────────
   Section
───────────────────────────────────────── */
const FeaturedProjects = () => {
  return (
    <section id="projects" className="relative py-28 lg:py-40 bg-[#050507] text-white overflow-hidden">
      {/* Top separator */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* Background ambient blobs */}
      <div className="absolute top-40 left-[-200px] w-[600px] h-[600px] bg-indigo-600/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-40 right-[-200px] w-[600px] h-[600px] bg-purple-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 container mx-auto px-6 max-w-7xl">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.85, ease }}
          className="mb-20 lg:mb-28 text-center flex flex-col items-center"
        >
          {/* Label pill */}
          <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 backdrop-blur-md mb-6 sm:mb-8 shadow-[0_0_20px_rgba(99,102,241,0.15)] group hover:bg-indigo-500/15 transition-all duration-300">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500 shadow-[0_0_8px_rgba(99,102,241,0.8)]"></span>
            </span>
            <span className="text-[11px] sm:text-xs font-bold tracking-[0.2em] text-indigo-300 uppercase">Case Studies</span>
          </div>

          {/* Headline */}
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.15] mb-6 max-w-4xl mx-auto">
            Scalable Android Systems{' '}
            <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-sm">
              in Production
            </span>
          </h2>

          {/* Decorative divider */}
          <div className="flex items-center gap-3 mb-6 sm:mb-8 justify-center">
            <div className="w-16 sm:w-24 h-[1.5px] bg-gradient-to-r from-transparent to-indigo-500/50" />
            <div className="w-2.5 h-2.5 rounded-full bg-indigo-400 shadow-[0_0_10px_rgba(99,102,241,0.8)]" />
            <div className="w-16 sm:w-24 h-[1.5px] bg-gradient-to-l from-transparent to-indigo-500/50" />
          </div>

          {/* Subtitle */}
          <p className="text-base sm:text-lg lg:text-xl text-slate-400/90 font-medium max-w-3xl mx-auto leading-relaxed">
            Real-world applications engineered with AI capabilities, modern architecture, and production-grade reliability — built to scale and deliver measurable impact.
          </p>
        </motion.div>

        {/* Project rows */}
        <div className="flex flex-col gap-8 lg:gap-10">
          {projects.map((project, idx) => (
            <ProjectCard key={project.id} project={project} idx={idx} />
          ))}
        </div>
      </div>

      {/* Bottom separator */}
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
};

export default FeaturedProjects;
