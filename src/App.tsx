import React from 'react';
import logo from './logo.svg';
import './App.css';
import Hero from "./Hero"
import Journey from "./Journey"
import Projects from "./Projects"
import Contact from "./Contact"
import Recognition from "./Recognition"


function App() {
  return (
    <div className="bg-slate-900 text-white scroll-smooth">
        <Hero />
        <Journey />
        <Projects />
        <Recognition />
        <Contact />
                
    </div>
  );
}

export default App;
