import fs from 'fs';
import path from 'path';

const SRC_DIR = './portfolio/src';

const files = {
  'utils/cn.js': `import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
`,
  'components/Navbar.jsx': `import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useScrollSpy } from '../hooks/useScrollSpy';
import { cn } from '../utils/cn';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Coding', href: '#coding' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar({ theme, toggleTheme }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const activeSection = useScrollSpy(navItems.map(i => i.href.substring(1)), 200);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={cn(
      'fixed top-0 w-full z-50 transition-all duration-300',
      isScrolled ? 'glass-nav py-4' : 'bg-transparent py-6'
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <a href="#home" className="text-xl font-bold tracking-tighter">
            Sri Krishna Gopal
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-6">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={cn(
                    'text-sm font-medium transition-colors hover:text-primary',
                    activeSection === item.href.substring(1) 
                      ? 'text-primary' 
                      : 'text-muted-foreground'
                  )}
                >
                  {item.name}
                </a>
              ))}
            </div>
            
            <div className="flex items-center space-x-4 border-l border-border pl-4">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-xs font-medium text-muted-foreground hidden lg:block">Available for Internships</span>
              
              <button 
                onClick={toggleTheme} 
                className="p-2 rounded-full hover:bg-muted transition-colors"
                aria-label="Toggle Theme"
              >
                {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <button 
              onClick={toggleTheme} 
              className="p-2 rounded-full hover:bg-muted transition-colors"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-foreground"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden glass-nav border-t border-border mt-4 absolute w-full">
          <div className="px-4 pt-2 pb-6 space-y-1 shadow-lg">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  'block px-3 py-3 rounded-md text-base font-medium',
                  activeSection === item.href.substring(1)
                    ? 'bg-primary/10 text-primary'
                    : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                )}
              >
                {item.name}
              </a>
            ))}
            <div className="px-3 py-3 mt-4 flex items-center space-x-2 border-t border-border">
               <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-sm font-medium">Available for Internships</span>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
`,
  'components/Hero.jsx': `import React from 'react';
import { FileText, Github, Linkedin, Mail, ArrowRight } from 'lucide-react';
import { profile } from '../data/profile';
import { socialLinks } from '../data/socialLinks';
import { useReveal } from '../hooks/useReveal';

export default function Hero() {
  const revealRef = useReveal();

  return (
    <section id="home" className="min-h-[80vh] flex flex-col justify-center relative pt-20" ref={revealRef}>
      <div className="max-w-3xl">
        <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-6">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          <span>Open to Internships</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4">
          Hi, I'm <span className="text-primary">{profile.name.split(' ')[0]}</span>
        </h1>
        <h2 className="text-2xl md:text-3xl text-muted-foreground font-medium mb-6">
          {profile.role.split(' | ')[1]} &amp; {profile.role.split(' | ')[2]}
        </h2>
        
        <p className="text-lg text-muted-foreground leading-relaxed mb-10 max-w-2xl">
          {profile.intro}
        </p>
        
        <div className="flex flex-wrap gap-4 items-center">
          <a 
            href="#projects" 
            className="bg-primary text-primary-foreground px-6 py-3 rounded-md font-medium inline-flex items-center space-x-2 hover:opacity-90 transition-opacity"
          >
            <span>View Projects</span>
            <ArrowRight size={18} />
          </a>
          <a 
            href="#contact" 
            className="bg-secondary text-secondary-foreground px-6 py-3 rounded-md font-medium hover:bg-secondary/80 transition-colors"
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
            <a href="/resume.pdf" target="_blank" className="p-2 text-muted-foreground hover:text-foreground hover:bg-muted rounded-full transition-all" title="Download Resume">
              <FileText size={20} />
            </a>
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
`,
  'components/About.jsx': `import React from 'react';
import SectionHeading from './SectionHeading';
import { MapPin, GraduationCap, Briefcase, Code } from 'lucide-react';
import { profile } from '../data/profile';
import { useReveal } from '../hooks/useReveal';

export default function About() {
  const revealRef = useReveal();

  return (
    <section id="about" className="scroll-mt-24" ref={revealRef}>
      <SectionHeading title="About Me" />
      
      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-4 text-muted-foreground leading-relaxed text-lg">
          <p>
            I am a highly motivated Computer Science student with a strong foundation in Data Structures & Algorithms and Full Stack Development. My journey in tech is driven by a passion for building practical, real-world solutions.
          </p>
          <p>
            Proficient in C++, JavaScript, and React, I thrive in environments that challenge me to solve complex problems. From developing AI-powered interview platforms to creating competitive programming arenas, I enjoy full-cycle development from ideation to deployment.
          </p>
          <p>
            When I'm not coding, you can find me participating in hackathons, learning about new AI tools, or sharpening my problem-solving skills on coding platforms. I'm currently seeking internship opportunities to contribute to impactful projects while further honing my skills.
          </p>
        </div>
        
        <div className="glass-card p-6 rounded-xl flex flex-col gap-6">
          <div className="flex items-start gap-4">
            <GraduationCap className="text-primary mt-1" size={24} />
            <div>
              <h4 className="font-semibold text-foreground">Education</h4>
              <p className="text-sm text-muted-foreground">{profile.education.degree}</p>
              <p className="text-sm text-muted-foreground">{profile.education.college}</p>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <MapPin className="text-primary mt-1" size={24} />
            <div>
              <h4 className="font-semibold text-foreground">Location</h4>
              <p className="text-sm text-muted-foreground">{profile.location}</p>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <Code className="text-primary mt-1" size={24} />
            <div>
              <h4 className="font-semibold text-foreground">Interests</h4>
              <p className="text-sm text-muted-foreground">Full Stack, Web3, AI Integration</p>
            </div>
          </div>
          
          <div className="mt-auto pt-4 border-t border-border">
             <a href="#contact" className="w-full text-center block bg-secondary hover:bg-secondary/80 text-secondary-foreground py-2 rounded-md transition-colors text-sm font-medium">
               Let's Collaborate
             </a>
          </div>
        </div>
      </div>
    </section>
  );
}
`
};

Object.keys(files).forEach(filepath => {
  const fullPath = path.join(SRC_DIR, filepath);
  fs.mkdirSync(path.dirname(fullPath), { recursive: true });
  fs.writeFileSync(fullPath, files[filepath]);
});
console.log("UI components 1 scaffolded.");
