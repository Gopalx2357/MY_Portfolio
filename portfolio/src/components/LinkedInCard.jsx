import React from 'react';
import { Linkedin } from 'lucide-react';
import { socialLinks } from '../data/socialLinks';
import { useReveal } from '../hooks/useReveal';

export default function LinkedInCard() {
  const revealRef = useReveal();

  return (
    <section className="py-8" ref={revealRef}>
      <div className="bg-[#0A66C2]/10 border border-[#0A66C2]/30 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6 hover-card-effect transition-all duration-300">
        <div className="flex items-center gap-6">
          <div className="w-16 h-16 bg-[#0A66C2] rounded-full flex items-center justify-center shrink-0">
            <Linkedin size={32} className="text-white" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-2">Let's connect on LinkedIn</h3>
            <p className="text-muted-foreground">I'm actively looking for internship opportunities and would love to connect with professionals and recruiters.</p>
          </div>
        </div>
        <a 
          href={socialLinks.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 bg-[#0A66C2] hover:bg-[#084e96] text-white px-8 py-3 rounded-full font-medium transition-colors flex items-center gap-2"
        >
          <span>Connect</span>
        </a>
      </div>
    </section>
  );
}
