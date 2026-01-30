
import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TeacherProfile from './components/TeacherProfile';
import ClassSections from './components/ClassSections';
import ApplicationForm from './components/ApplicationForm';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

gsap.registerPlugin(ScrollTrigger);

const App: React.FC = () => {
  const mainRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Background animation with performance optimizations
      gsap.to('.animated-blob', {
        x: 'random(-60, 60)',
        y: 'random(-60, 60)',
        duration: 15,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
        stagger: {
          each: 3,
          repeat: -1,
          yoyo: true
        },
        force3D: true
      });
    }, mainRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={mainRef} className="relative min-h-screen selection:bg-cyan-500 selection:text-white overflow-x-hidden bg-[#0f0720]">
      {/* Dynamic Animated Background - Optimized */}
      <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden">
        <div className="animated-blob blob-bg absolute top-[-15%] left-[-15%] w-[600px] h-[600px] bg-purple-900/15 rounded-full"></div>
        <div className="animated-blob blob-bg absolute bottom-[5%] right-[-10%] w-[700px] h-[700px] bg-blue-900/15 rounded-full"></div>
        <div className="animated-blob blob-bg absolute top-[30%] left-[50%] w-[500px] h-[500px] bg-cyan-900/10 rounded-full"></div>
      </div>

      <Navbar />
      
      <main className="relative z-10">
        <Hero />
        <TeacherProfile />
        <ClassSections />
        <ApplicationForm />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
};

export default App;