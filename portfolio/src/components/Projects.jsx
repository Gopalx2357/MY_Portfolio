import React from 'react';
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
