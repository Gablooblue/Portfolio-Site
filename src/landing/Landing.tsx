import React from 'react';
import '../stylesheets/Landing.css';
import Hero from "./Hero"
import Journey from "./Journey"
import Projects from "./Projects"
import Contact from "./Contact"
import Recognition from "./Recognition"
import ScrollSpy from '../components/ScrollSpy';

const sections = [
  { id: 'hero',        label: '00 · Top' },
  { id: 'journey',     label: '01 · Work' },
  { id: 'projects',    label: '02 · Builds' },
  { id: 'recognition', label: '03 · Press' },
  { id: 'contact',     label: '04 · Reach' },
];

function Landing() {
  return (
    <div className="bg-paper text-ink min-h-screen scroll-smooth font-sans">
      <ScrollSpy sections={sections} />

      <main className="relative">
        <section id="hero">
          <Hero />
        </section>

        <hr className="hairline" />

        <section id="journey">
          <Journey />
        </section>

        <hr className="hairline" />

        <section id="projects">
          <Projects />
        </section>

        <hr className="hairline" />

        <section id="recognition">
          <Recognition />
        </section>

        <hr className="hairline" />

        <section id="contact">
          <Contact />
        </section>

        <footer className="px-[6vw] md:px-[9vw] py-10 label-mono flex flex-wrap gap-x-6 gap-y-2 justify-between">
          <span>gabriel henry lopez · thegablopez.com</span>
          <span>hand-written. no template.</span>
        </footer>
      </main>
    </div>
  );
}

export default Landing;
