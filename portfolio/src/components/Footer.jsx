import React from 'react';
import { Github, Linkedin, Mail, Instagram } from 'lucide-react';
import { profile } from '../data/profile';
import { socialLinks } from '../data/socialLinks';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-muted py-10 mt-20 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <h3 className="font-bold text-lg text-foreground">{profile.name}</h3>
          <p className="text-sm text-muted-foreground mt-1">{profile.role.split(' | ')[1]}</p>
        </div>
        
        <div className="flex gap-4">
          <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="p-2 bg-background border border-border rounded-full hover:border-primary text-muted-foreground hover:text-primary transition-colors" aria-label="GitHub">
            <Github size={18} />
          </a>
          <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 bg-background border border-border rounded-full hover:border-primary text-muted-foreground hover:text-primary transition-colors" aria-label="LinkedIn">
            <Linkedin size={18} />
          </a>
          <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="p-2 bg-background border border-border rounded-full hover:border-primary text-muted-foreground hover:text-primary transition-colors" aria-label="Instagram">
            <Instagram size={18} />
          </a>
          <a href={socialLinks.email} className="p-2 bg-background border border-border rounded-full hover:border-primary text-muted-foreground hover:text-primary transition-colors" aria-label="Email">
            <Mail size={18} />
          </a>
        </div>
        
        <p className="text-sm text-muted-foreground">
          &copy; {currentYear} {profile.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
