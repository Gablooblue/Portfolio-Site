import React from 'react';
import '../stylesheets/Landing.css';
import Hero from "./Hero"
import Journey from "./Journey"
import Projects from "./Projects"
import Contact from "./Contact"
import Recognition from "./Recognition"
import ScrollSpy from '../components/ScrollSpy';

const sections = [
  { id: 'hero', label: 'Home' },
  { id: 'journey', label: 'Journey' },
  { id: 'projects', label: 'Projects' },
  { id: 'recognition', label: 'Recognition' },
  { id: 'contact', label: 'Contact' }
];

function Landing() {
  return (
    <div className="relative bg-slate-900 text-white scroll-smooth min-h-screen overflow-hidden">
      {/* Persistent background effects */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Top right glow */}
        <div className="absolute top-0 -right-40 w-[600px] h-[600px] bg-sky-500/30 rounded-full blur-[100px] opacity-50" />
        
        {/* Center left glow */}
        <div className="absolute top-1/3 -left-40 w-[600px] h-[600px] bg-indigo-500/30 rounded-full blur-[100px] opacity-50" />
        
        {/* Bottom center glow */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-sky-500/30 rounded-full blur-[100px] opacity-50" />
        
        {/* Additional ambient glows */}
        <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] bg-purple-500/20 rounded-full blur-[100px] opacity-40" />
        <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-blue-500/20 rounded-full blur-[100px] opacity-40" />
      </div>

      {/* Content */}
      <div className="relative">
        <ScrollSpy sections={sections} />
        <section id="hero">
          <Hero />
        </section>
        <section id="journey" className="relative z-10">
          <Journey />
        </section>
        <section id="projects" className="relative z-10">
          <Projects />
        </section>
        <section id="recognition" className="relative z-10">
          <Recognition />
        </section>
        <section id="contact" className="relative z-10">
          <Contact />
        </section>
      </div>
    </div>
  );
}

export default Landing;
