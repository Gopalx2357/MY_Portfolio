import fs from 'fs';
import path from 'path';

const SRC_DIR = './portfolio/src';

const files = {
  'components/Contact.jsx': `import React, { useState } from 'react';
import SectionHeading from './SectionHeading';
import { Mail, MessageSquare, Send } from 'lucide-react';
import { socialLinks } from '../data/socialLinks';
import { useReveal } from '../hooks/useReveal';
import { cn } from '../utils/cn';

export default function Contact() {
  const revealRef = useReveal();
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulating API call since no service is configured
    setTimeout(() => {
      setLoading(false);
      setStatus('error'); // Show error by default as per constraints
    }, 1500);
  };

  return (
    <section id="contact" className="scroll-mt-24" ref={revealRef}>
      <SectionHeading title="Get In Touch" subtitle="Have a question or want to work together? Leave a message." />
      
      <div className="grid md:grid-cols-2 gap-10">
        <div className="space-y-6">
          <p className="text-muted-foreground text-lg mb-8">
            I'm currently looking for new opportunities, specifically internships where I can contribute and learn. My inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
          
          <div className="space-y-4">
            <a href={socialLinks.email} className="flex items-center gap-4 glass-card p-4 rounded-xl hover-card-effect">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0">
                <Mail size={24} />
              </div>
              <div>
                <h4 className="font-semibold text-foreground">Email Me</h4>
                <p className="text-sm text-muted-foreground break-all">{socialLinks.email.replace('mailto:', '')}</p>
              </div>
            </a>
            
            <a href={socialLinks.whatsapp} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 glass-card p-4 rounded-xl hover-card-effect">
              <div className="w-12 h-12 bg-[#25D366]/10 rounded-full flex items-center justify-center text-[#25D366] shrink-0">
                <MessageSquare size={24} />
              </div>
              <div>
                <h4 className="font-semibold text-foreground">WhatsApp</h4>
                <p className="text-sm text-muted-foreground">Direct Message</p>
              </div>
            </a>
          </div>
        </div>
        
        <form onSubmit={handleSubmit} className="glass-card p-6 rounded-xl flex flex-col gap-4">
          <div className="space-y-1">
            <label htmlFor="name" className="text-sm font-medium text-foreground">Name</label>
            <input 
              type="text" 
              id="name" 
              required
              className="w-full bg-background border border-border rounded-md px-4 py-2 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
              placeholder="Your Name"
            />
          </div>
          
          <div className="space-y-1">
            <label htmlFor="email" className="text-sm font-medium text-foreground">Email</label>
            <input 
              type="email" 
              id="email" 
              required
              className="w-full bg-background border border-border rounded-md px-4 py-2 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
              placeholder="your.email@example.com"
            />
          </div>
          
          <div className="space-y-1">
            <label htmlFor="subject" className="text-sm font-medium text-foreground">Subject</label>
            <input 
              type="text" 
              id="subject" 
              required
              className="w-full bg-background border border-border rounded-md px-4 py-2 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
              placeholder="Job Opportunity"
            />
          </div>
          
          <div className="space-y-1">
            <label htmlFor="message" className="text-sm font-medium text-foreground">Message</label>
            <textarea 
              id="message" 
              required
              rows={4}
              className="w-full bg-background border border-border rounded-md px-4 py-2 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow resize-none"
              placeholder="Hi Sri Krishna, I'd like to discuss..."
            ></textarea>
          </div>
          
          <button 
            type="submit" 
            disabled={loading}
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3 rounded-md font-medium transition-colors flex items-center justify-center gap-2 mt-2 disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {loading ? (
              <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin"></div>
            ) : (
              <>
                <span>Send Message</span>
                <Send size={18} />
              </>
            )}
          </button>
          
          {status === 'error' && (
            <div className="mt-2 p-3 bg-destructive/10 text-destructive text-sm rounded-md border border-destructive/20">
              Contact service not configured. Please use direct email or WhatsApp instead. Configure .env with your service keys to enable.
            </div>
          )}
          {status === 'success' && (
            <div className="mt-2 p-3 bg-green-500/10 text-green-500 text-sm rounded-md border border-green-500/20">
              Message sent successfully! I will get back to you soon.
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
`,
  'components/Footer.jsx': `import React from 'react';
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
`
};

Object.keys(files).forEach(filepath => {
  const fullPath = path.join(SRC_DIR, filepath);
  fs.mkdirSync(path.dirname(fullPath), { recursive: true });
  fs.writeFileSync(fullPath, files[filepath]);
});
console.log("UI components 4 scaffolded.");
