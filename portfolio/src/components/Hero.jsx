import React, { useState } from 'react';
import { FileText, Github, Linkedin, Mail, ArrowRight } from 'lucide-react';
import { profile } from '../data/profile';
import { socialLinks } from '../data/socialLinks';
import { useReveal } from '../hooks/useReveal';
import profileImg from '../assets/profile.jpg';

export default function Hero() {
  const revealRef = useReveal();
  const [showStatus, setShowStatus] = useState(false);

  return (
    <section id="home" className="min-h-[80vh] flex flex-col md:flex-row items-center justify-between relative pt-20 gap-10" ref={revealRef}>
      <div className="max-w-2xl flex-1 relative z-10">
        <div
          onMouseEnter={() => setShowStatus(true)}
          onMouseLeave={() => setShowStatus(false)}
          onClick={() => setShowStatus((prev) => !prev)}
          className={`inline-flex items-center gap-2 bg-card/90 hover:bg-card border border-border/80 hover:border-primary/50 shadow-sm p-1.5 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer mb-6 group select-none hover:bg-primary/5 hover:border-primary/30 hover:pr-3.5 ${
            showStatus ? 'pr-3.5 bg-primary/5 border-primary/30' : 'pr-2'
          }`}
          title="Open to Opportunities"
        >
          {/* Circular Profile Image */}
          <div className="relative w-7 h-7 rounded-full overflow-hidden border border-border/80 shrink-0">
            <img 
              src={profileImg} 
              alt={profile.name} 
              className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300" 
            />
          </div>

          {/* Glowing Status Dot */}
          <span className="relative flex h-2.5 w-2.5 shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
          </span>

          {/* Smooth Expanding Status Text on Hover */}
          <div
            className={`overflow-hidden transition-all duration-300 ease-out whitespace-nowrap flex items-center group-hover:max-w-[240px] group-hover:opacity-100 group-hover:pl-0.5 ${
              showStatus ? 'max-w-[240px] opacity-100 pl-0.5' : 'max-w-0 opacity-0 pl-0'
            }`}
          >
            <span className="text-xs sm:text-sm font-medium text-foreground pr-1">
              Open to Opportunities
            </span>
          </div>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4">
          Hi, I'm <span className="text-primary">{profile.name.split(' ')[0]}</span>
        </h1>
        <h2 className="text-2xl md:text-3xl text-muted-foreground font-medium mb-6">
          {profile.role.split(' | ')[1]} &amp; {profile.role.split(' | ')[2]}
        </h2>
        
        <p className="text-lg text-muted-foreground leading-relaxed mb-10 max-w-xl">
          {profile.intro}
        </p>
        
        <div className="flex flex-wrap gap-4 items-center">
          <a 
            href="#projects" 
            className="bg-primary text-primary-foreground px-6 py-3 rounded-md font-medium inline-flex items-center space-x-2 hover:opacity-90 transition-opacity shadow-sm"
          >
            <span>View Projects</span>
            <ArrowRight size={18} />
          </a>
          <a 
            href="/resume.pdf" 
            target="_blank"
            rel="noopener noreferrer"
            className="bg-secondary text-secondary-foreground px-5 py-3 rounded-md font-medium inline-flex items-center space-x-2 hover:bg-secondary/80 transition-colors border border-border"
          >
            <FileText size={18} />
            <span>Resume</span>
          </a>
          <a 
            href="#contact" 
            className="text-muted-foreground hover:text-foreground px-4 py-3 rounded-md font-medium hover:bg-muted transition-colors"
          >
            Contact Me
          </a>
          
          <div className="flex items-center space-x-3 ml-2 md:ml-4 border-l border-border pl-4 md:pl-6">
            <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="p-2 text-muted-foreground hover:text-foreground hover:bg-muted rounded-full transition-all">
              <Github size={20} />
            </a>
            <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 text-muted-foreground hover:text-foreground hover:bg-muted rounded-full transition-all">
              <Linkedin size={20} />
            </a>
            <a href={socialLinks.email} className="p-2 text-muted-foreground hover:text-foreground hover:bg-muted rounded-full transition-all" title="Email Me">
              <Mail size={20} />
            </a>
            <a href="/resume.pdf" target="_blank" className="p-2 text-muted-foreground hover:text-foreground hover:bg-muted rounded-full transition-all" title="Download Resume">
              <FileText size={20} />
            </a>
          </div>
        </div>
      </div>
      
      {/* Profile Image - Right Side */}
      <div className="flex-1 flex justify-center items-center lg:justify-end w-full lg:w-auto mt-10 md:mt-0 relative z-10">
        <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-[400px] lg:h-[400px] rounded-full p-2 bg-gradient-to-tr from-primary/20 via-primary/10 to-transparent border border-border/50 shadow-2xl">
          <div className="w-full h-full rounded-full overflow-hidden bg-muted">
            <img 
              src={profileImg} 
              alt={profile.name} 
              className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500" 
            />
          </div>
        </div>
      </div>
      
      {/* Decorative flat element */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 -z-10 hidden lg:block opacity-40 dark:opacity-20 pointer-events-none">
        <div className="w-[400px] h-[400px] bg-primary/20 rounded-full blur-3xl absolute -right-20 top-0"></div>
        <div className="w-[300px] h-[300px] bg-blue-500/20 rounded-full blur-3xl absolute right-40 top-40"></div>
      </div>
    </section>
  );
}
