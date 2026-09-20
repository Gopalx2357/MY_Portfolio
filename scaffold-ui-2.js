import fs from 'fs';
import path from 'path';

const SRC_DIR = './portfolio/src';

const files = {
  'components/Skills.jsx': `import React from 'react';
import SectionHeading from './SectionHeading';
import { skills } from '../data/skills';
import { useReveal } from '../hooks/useReveal';

export default function Skills() {
  const revealRef = useReveal();

  return (
    <section id="skills" className="scroll-mt-24" ref={revealRef}>
      <SectionHeading title="Technical Skills" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Object.entries(skills).map(([category, skillList]) => (
          <div key={category} className="glass-card p-6 rounded-xl hover-card-effect">
            <h3 className="text-lg font-semibold mb-4 text-foreground">{category}</h3>
            <div className="flex flex-wrap gap-2">
              {skillList.map(skill => (
                <span 
                  key={skill} 
                  className="bg-muted text-muted-foreground px-3 py-1 text-sm rounded-md font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
`,
  'components/Projects.jsx': `import React from 'react';
import SectionHeading from './SectionHeading';
import { projects } from '../data/projects';
import { Github, ExternalLink } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';
import { cn } from '../utils/cn';

function ProjectCard({ project }) {
  return (
    <div className="glass-card rounded-xl overflow-hidden hover-card-effect flex flex-col h-full group">
      {/* Optional image placeholder if no image provided */}
      {project.image ? (
        <div className="h-48 w-full overflow-hidden bg-muted">
          <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        </div>
      ) : (
        <div className="h-2 w-full bg-primary/20"></div>
      )}
      
      <div className="p-6 flex flex-col flex-1">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-bold text-foreground">{project.title}</h3>
          <span className={cn(
            "text-xs px-2 py-1 rounded-full font-medium border",
            project.status === 'Completed' ? "bg-green-500/10 text-green-500 border-green-500/20" : "bg-yellow-500/10 text-yellow-500 border-yellow-500/20"
          )}>
            {project.status}
          </span>
        </div>
        
        <p className="text-sm text-muted-foreground mb-4 flex-1">{project.description}</p>
        
        <div className="mb-6">
          <p className="text-xs font-semibold text-foreground mb-2">Tech Stack:</p>
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.map(tech => (
              <span key={tech} className="text-[10px] bg-secondary text-secondary-foreground px-2 py-0.5 rounded uppercase font-bold tracking-wider">
                {tech}
              </span>
            ))}
          </div>
        </div>
        
        <div className="flex gap-3 mt-auto pt-4 border-t border-border">
          <a 
            href={project.github || '#'} 
            target={project.github ? "_blank" : "_self"}
            rel="noopener noreferrer"
            className={cn(
              "flex items-center justify-center gap-2 flex-1 py-2 rounded-md text-sm font-medium transition-colors",
              project.github ? "bg-muted hover:bg-muted/80 text-foreground" : "bg-muted/50 text-muted-foreground cursor-not-allowed"
            )}
            onClick={(e) => !project.github && e.preventDefault()}
          >
            <Github size={16} />
            <span>Code</span>
          </a>
          <a 
            href={project.live || '#'} 
            target={project.live ? "_blank" : "_self"}
            rel="noopener noreferrer"
            className={cn(
              "flex items-center justify-center gap-2 flex-1 py-2 rounded-md text-sm font-medium transition-colors",
              project.live ? "bg-primary hover:bg-primary/90 text-primary-foreground" : "bg-muted/50 text-muted-foreground cursor-not-allowed"
            )}
            onClick={(e) => !project.live && e.preventDefault()}
          >
            <ExternalLink size={16} />
            <span>Demo</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const revealRef = useReveal();

  return (
    <section id="projects" className="scroll-mt-24" ref={revealRef}>
      <SectionHeading title="Featured Projects" subtitle="A selection of my best work and side projects." />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
}
`,
  'components/CodingProfiles.jsx': `import React from 'react';
import SectionHeading from './SectionHeading';
import { socialLinks } from '../data/socialLinks';
import { useReveal } from '../hooks/useReveal';

const profiles = [
  { name: 'LeetCode', link: socialLinks.leetcode, icon: 'https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png' },
  { name: 'GeeksforGeeks', link: socialLinks.geeksforgeeks, icon: 'https://upload.wikimedia.org/wikipedia/commons/4/43/GeeksforGeeks.svg' },
  { name: 'CodeChef', link: socialLinks.codechef, icon: 'https://cdn.iconscout.com/icon/free/png-256/codechef-2752174-2285031.png' },
  { name: 'Codeforces', link: socialLinks.codeforces, icon: 'https://cdn.iconscout.com/icon/free/png-256/code-forces-3628695-3030220.png' },
  { name: 'HackerRank', link: socialLinks.hackerrank, icon: 'https://upload.wikimedia.org/wikipedia/commons/4/40/HackerRank_Icon-1000px.png' }
];

export default function CodingProfiles() {
  const revealRef = useReveal();

  return (
    <section id="coding" className="scroll-mt-24" ref={revealRef}>
      <SectionHeading title="Coding Profiles" subtitle="My competitive programming and problem-solving footprints." />
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {profiles.map((profile) => (
          <a 
            key={profile.name} 
            href={profile.link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="glass-card p-4 rounded-xl flex flex-col items-center justify-center gap-3 hover-card-effect"
          >
            <div className="w-12 h-12 bg-white rounded-md flex items-center justify-center p-2">
              <img src={profile.icon} alt={profile.name} className="w-full h-full object-contain" />
            </div>
            <span className="font-medium text-sm text-foreground">{profile.name}</span>
          </a>
        ))}
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
console.log("UI components 2 scaffolded.");
