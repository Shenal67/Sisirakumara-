
import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Camera, Film, Mic, Video, Monitor, Play } from 'lucide-react';

const Hero: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-content > *', {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
        force3D: true
      });

      gsap.to('.floating-icon', {
        y: 'random(-15, 15)',
        rotation: 'random(-10, 10)',
        duration: 'random(3, 5)',
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        stagger: 0.2,
        force3D: true
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="hero-content z-10 will-animate">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-6">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
            <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest">Enrollment Open 2024/25</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight tracking-tight">
            Master <span className="text-cyan-400">Media</span> & <br />
            Communication with <br />
            <span className="relative inline-block">
              Expert Guidance
              <svg className="absolute -bottom-2 left-0 w-full" height="10" viewBox="0 0 400 10" fill="none" preserveAspectRatio="none">
                <path d="M0 5C50 5 150 0 200 5C250 10 350 5 400 5" stroke="#22d3ee" strokeWidth="3" strokeLinecap="round" />
              </svg>
            </span>
          </h1>
          <p className="text-gray-400 text-lg mb-10 max-w-lg leading-relaxed">
            Grade 10–13 classes conducted by an experienced and modern teaching professional. Dive deep into the world of storytelling, media ethics, and digital creation.
          </p>
          <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button 
              onClick={() => scrollTo('apply')}
              className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl font-bold text-white shadow-xl shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:-translate-y-1 active:scale-95 transition-all flex items-center justify-center space-x-2"
            >
              <span>Join a Class</span>
              <Play size={18} fill="currentColor" />
            </button>
            <button 
              onClick={() => scrollTo('classes')}
              className="w-full sm:w-auto px-8 py-4 glass text-white rounded-xl font-bold hover:bg-white/10 active:scale-95 transition-all"
            >
              View Courses
            </button>
          </div>
        </div>

        <div className="relative h-[400px] md:h-[600px] flex items-center justify-center will-animate">
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-[300px] h-[300px] md:w-[450px] md:h-[450px] rounded-full bg-gradient-to-tr from-cyan-500/10 to-purple-600/10 blur-3xl"></div>
            <div className="w-[280px] h-[280px] md:w-[400px] md:h-[400px] glass rounded-3xl border-white/10 flex items-center justify-center rotate-3 overflow-hidden">
               <div className="text-center p-8">
                  <div className="text-6xl mb-4">👨‍🏫</div>
                  <h3 className="text-2xl font-bold text-white mb-2">Sisira Kumara</h3>
                  <p className="text-cyan-400 font-medium">Media Specialist</p>
               </div>
            </div>
          </div>

          <div className="floating-icon absolute top-10 right-10 p-4 glass rounded-2xl text-cyan-400 shadow-xl z-20">
            <Camera size={32} />
          </div>
          <div className="floating-icon absolute bottom-20 right-20 p-4 glass rounded-2xl text-purple-400 shadow-xl z-20">
            <Film size={32} />
          </div>
          <div className="floating-icon absolute top-1/2 left-0 p-4 glass rounded-2xl text-blue-400 shadow-xl z-20">
            <Mic size={32} />
          </div>
          <div className="floating-icon absolute top-20 left-20 p-4 glass rounded-2xl text-pink-400 shadow-xl z-20">
            <Video size={32} />
          </div>
          <div className="floating-icon absolute bottom-10 left-10 p-4 glass rounded-2xl text-green-400 shadow-xl z-20">
            <Monitor size={32} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;