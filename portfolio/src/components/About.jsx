import React from 'react';
import SectionHeading from './SectionHeading';
import { MapPin, GraduationCap, Briefcase, Code, Linkedin } from 'lucide-react';
import { profile } from '../data/profile';
import { socialLinks } from '../data/socialLinks';
import { useReveal } from '../hooks/useReveal';

export default function About() {
  const revealRef = useReveal();

  return (
    <section id="about" className="scroll-mt-24" ref={revealRef}>
      <SectionHeading title="About Me" />
      
      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-5 text-muted-foreground leading-relaxed text-base md:text-lg">
          <p>
            I’m a highly motivated Computer Science student with a strong foundation in Data Structures & Algorithms and Full Stack Development. I’m passionate about turning ideas into practical, real-world solutions and continuously improving my problem-solving skills.
          </p>
          <p>
            I work with C++, JavaScript, React, and modern web technologies, with a focus on building scalable and user-friendly applications. From developing AI-powered interview platforms to building competitive coding and esports platforms, I enjoy working across the complete development lifecycle—from ideation and development to deployment.
          </p>
          <p>
            Beyond coding, I actively participate in hackathons, explore emerging AI and software technologies, and practice DSA on coding platforms. I’m currently looking for software development internship opportunities where I can contribute to meaningful projects, learn from experienced developers, and grow as a software engineer.
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
          
          <div className="mt-auto pt-4 border-t border-border flex flex-col gap-2">
             <a 
               href={socialLinks.linkedin} 
               target="_blank" 
               rel="noopener noreferrer" 
               className="w-full text-center flex items-center justify-center gap-2 bg-[#0A66C2] hover:bg-[#084e96] text-white py-2 rounded-md transition-colors text-sm font-medium"
             >
               <Linkedin size={16} />
               <span>Connect on LinkedIn</span>
             </a>
             <a href="#contact" className="w-full text-center block bg-secondary hover:bg-secondary/80 text-secondary-foreground py-2 rounded-md transition-colors text-sm font-medium">
               Let's Collaborate
             </a>
          </div>
        </div>
      </div>
    </section>
  );
}
