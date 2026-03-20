"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, 
  Smartphone, 
  Database, 
  Layers, 
  Globe, 
  ShieldCheck, 
  Zap, 
  Cpu, 
  Infinity, 
  ToyBrick 
} from 'lucide-react';

const skills = [
  { name: 'Kotlin & Java', level: 'Expert', icon: <Code2 className="w-5 h-5" />, color: 'from-orange-500 to-red-600' },
  { name: 'Jetpack Compose', level: 'Expert', icon: <Smartphone className="w-5 h-5" />, color: 'from-blue-500 to-indigo-600' },
  { name: 'Clean Architecture', level: 'Expert', icon: <Layers className="w-5 h-5" />, color: 'from-purple-500 to-pink-600' },
  { name: 'MVVM / MVI', level: 'Expert', icon: <Cpu className="w-5 h-5" />, color: 'from-cyan-500 to-blue-600' },
  { name: 'Firebase & Supabase', level: 'Advanced', icon: <Database className="w-5 h-5" />, color: 'from-yellow-500 to-orange-600' },
  { name: 'Retrofit / Hilt', level: 'Expert', icon: <Zap className="w-5 h-5" />, color: 'from-emerald-500 to-teal-600' },
  { name: 'Unit Testing', level: 'Advanced', icon: <ShieldCheck className="w-5 h-5" />, color: 'from-indigo-500 to-blue-700' },
  { name: 'REST APIs', level: 'Expert', icon: <Globe className="w-5 h-5" />, color: 'from-slate-500 to-slate-700' },
  { name: 'SDK Integration', level: 'Expert', icon: <ToyBrick className="w-5 h-5" />, color: 'from-blue-400 to-cyan-500' },
  { name: 'CI/CD Pipelines', level: 'Advanced', icon: <Infinity className="w-5 h-5" />, color: 'from-pink-500 to-rose-600' },
];

const TechStack = () => {
  return (
    <section className="py-24 lg:py-32 bg-[#050505] relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-bold tracking-widest text-blue-400 uppercase mb-3">Industry Expertise</h2>
          <h3 className="text-4xl lg:text-5xl font-extrabold text-white">Full-Stack Android Stack</h3>
        </motion.div>

        {/* Using flex for better alignment of uneven items */}
        <div className="flex flex-wrap justify-center gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)] p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm group cursor-default transition-all duration-300 hover:bg-white/[0.08] hover:border-white/20"
            >
              <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${skill.color} flex items-center justify-center text-white mb-5 shadow-lg shadow-blue-500/10 group-hover:scale-110 transition-transform duration-300`}>
                {skill.icon}
              </div>
              <h4 className="text-xl font-bold text-white mb-1">{skill.name}</h4>
              <p className="text-sm text-slate-400 font-medium">{skill.level}</p>
              
              {/* Subtle Progress Bar */}
              <div className="mt-4 w-full h-1 bg-white/5 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: '100%' }}
                  transition={{ delay: index * 0.1 + 0.5, duration: 1 }}
                  className={`h-full bg-gradient-to-r ${skill.color} opacity-60`}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
