import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import CodingProfiles from './components/CodingProfiles';
import LinkedInCard from './components/LinkedInCard';
import Achievements from './components/Achievements';
import Education from './components/Education';
import GitHubActivity from './components/GitHubActivity';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useTheme } from './hooks/useTheme';

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12 space-y-32">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <CodingProfiles />
        <LinkedInCard />
        <Achievements />
        <Education />
        <GitHubActivity />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
