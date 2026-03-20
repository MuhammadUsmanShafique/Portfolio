import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative w-full min-h-screen bg-[#050505] text-slate-200 flex items-center justify-center overflow-hidden font-sans selection:bg-purple-500/30">
      
      {/* Abstract Background Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] pointer-events-none" />
      
      {/* Subtle grid pattern overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMSIgZmlsbD0icmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA1KSIvPjwvc3ZnPg==')] opacity-50 z-0"></div>

      <div className="container mx-auto px-6 py-24 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-8">
        
        {/* Left Formatted Content */}
        <div className="flex-1 text-center lg:text-left space-y-8 max-w-2xl">
          {/* Availability Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md shadow-sm opacity-0 animate-[fadeIn_1s_ease-out_forwards]">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-500"></span>
            </span>
            <span className="text-sm font-medium tracking-wide text-slate-300">
              Available for new opportunities
            </span>
          </div>

          {/* Main Titles */}
          <div className="space-y-4 opacity-0 animate-[fadeInUp_1s_ease-out_0.2s_forwards]">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1]">
              Hi, I'm <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500">
                Muhammad Usman
              </span>
            </h1>
            
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-slate-300">
              Android Engineer <span className="text-slate-600 mx-2">|</span> 
              <span className="font-medium text-slate-400">Kotlin • Jetpack Compose • MVVM</span>
            </h2>
          </div>

          {/* Tagline text */}
          <p className="text-lg sm:text-xl text-slate-400 leading-relaxed max-w-xl mx-auto lg:mx-0 opacity-0 animate-[fadeInUp_1s_ease-out_0.4s_forwards]">
            Building scalable, production-ready mobile apps with clean architecture. Delivering native experiences that users love.
          </p>

          {/* Call to Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5 pt-4 opacity-0 animate-[fadeInUp_1s_ease-out_0.6s_forwards]">
            <button className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(99,102,241,0.4)] active:scale-95 group">
              View Projects
              <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
            </button>
            <button className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/5 backdrop-blur-sm text-white font-semibold text-lg border border-white/10 transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:scale-105 active:scale-95">
              Contact Me
            </button>
          </div>
        </div>

        {/* Right Subtle Phone Mockup (CSS Only) */}
        <div className="flex-1 flex justify-center lg:justify-end perspective-1000 opacity-0 animate-[fadeIn_1.5s_ease-out_0.8s_forwards]">
          <div className="relative group perspective-1000 w-[280px] sm:w-[320px]">
            {/* Background blur decorative circle behind the phone */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[80%] bg-gradient-to-tr from-blue-500/20 to-purple-600/20 rounded-full blur-3xl -z-10 group-hover:scale-110 transition-transform duration-700"></div>
            
            {/* Phone Body */}
            <div className="relative mx-auto border-slate-800 bg-slate-900 border-[8px] rounded-[3rem] h-[580px] lg:h-[620px] w-full shadow-2xl transition-all duration-500 ease-out transform group-hover:-translate-y-4 group-hover:shadow-[0_20px_50px_rgba(99,102,241,0.3)]">
              
              {/* Phone Notch */}
              <div className="absolute top-0 inset-x-0 w-[45%] h-[24px] bg-slate-800 rounded-b-2xl mx-auto z-20"></div>
              
              {/* Screen Area */}
              <div className="rounded-[2.4rem] overflow-hidden w-full h-full bg-[#0a0a0c] relative flex flex-col items-center border border-white/5 pt-10 px-5 pb-6">
                
                {/* Simulated App Header */}
                <div className="flex justify-between w-full items-center mb-8">
                  <div className="flex flex-col gap-1.5">
                    <div className="w-8 h-1 bg-slate-700 rounded-full"></div>
                    <div className="w-5 h-1 bg-slate-700 rounded-full"></div>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 p-[2px]">
                    <div className="w-full h-full bg-slate-900 rounded-full border border-slate-800 flex items-center justify-center">
                       <div className="w-2.5 h-2.5 bg-blue-500 rounded-full"></div>
                    </div>
                  </div>
                </div>

                {/* Simulated Hero Card */}
                <div className="w-full h-40 bg-gradient-to-br from-blue-600/30 to-purple-600/20 rounded-3xl mb-6 border border-white/10 p-5 flex flex-col justify-end relative overflow-hidden transition-transform duration-500 hover:scale-[1.03] cursor-pointer">
                  <div className="absolute top-[-20%] right-[-20%] w-32 h-32 bg-purple-500/40 rounded-full blur-2xl"></div>
                   <div className="relative z-10 space-y-3">
                     <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-2xl mb-2 flex items-center justify-center">
                       <div className="w-5 h-5 bg-white rounded-lg opacity-80"></div>
                     </div>
                     <div>
                       <div className="w-3/4 h-3 bg-white/80 rounded-full mb-2"></div>
                       <div className="w-1/2 h-2.5 bg-white/40 rounded-full"></div>
                     </div>
                   </div>
                </div>

                {/* Simulated List Items */}
                <div className="w-full space-y-4">
                  {[1, 2, 3].map((item) => (
                    <div key={item} className="w-full bg-white/5 rounded-2xl p-4 flex items-center gap-4 border border-white/5 transition-colors duration-300 hover:bg-white/10 cursor-pointer">
                      <div className="w-12 h-12 rounded-xl bg-slate-800 flex-shrink-0 flex items-center justify-center">
                         <div className={`w-4 h-4 rounded-full ${item === 1 ? 'bg-blue-400' : item === 2 ? 'bg-purple-400' : 'bg-indigo-400'} opacity-70`}></div>
                      </div>
                      <div className="flex-1 space-y-2">
                        <div className="w-2/3 h-2.5 bg-slate-400 rounded-full"></div>
                        <div className="w-1/3 h-2 bg-slate-600 rounded-full"></div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Floating Bottom Navigation/FAB */}
                <div className="absolute bottom-6 inset-x-0 flex justify-center pointer-events-none">
                   <div className="px-6 py-4 bg-white/10 backdrop-blur-md border border-white/10 rounded-full flex gap-6 items-center shadow-lg pointer-events-auto transition-transform hover:scale-105 duration-300">
                      <div className="w-6 h-6 rounded-full bg-blue-500 shrink-0"></div>
                      <div className="w-6 h-6 rounded-full bg-slate-600 shrink-0"></div>
                      <div className="w-6 h-6 rounded-full bg-slate-600 shrink-0"></div>
                   </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}} />
    </section>
  );
};

export default HeroSection;
