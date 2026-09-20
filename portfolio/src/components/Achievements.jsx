import React from 'react';
import SectionHeading from './SectionHeading';
import { achievements, certifications } from '../data/achievements';
import { Award, Trophy, Briefcase, ExternalLink, CheckCircle } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

export default function Achievements() {
  const revealRef = useReveal();

  return (
    <section id="achievements" className="scroll-mt-24 space-y-16" ref={revealRef}>
      {/* Hackathons & Experience Timeline */}
      <div>
        <SectionHeading 
          title="Hackathons & Experience" 
          subtitle="Competitive national hackathons and industry virtual experience simulations." 
        />
        
        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">
          {achievements.map((item, index) => (
            <div key={index} className="relative flex items-start justify-between md:justify-normal md:odd:flex-row-reverse group">
              {/* Center icon badge */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-border bg-card shadow-sm shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                {item.type === 'Hackathon' ? (
                  <Trophy size={18} className="text-amber-500" />
                ) : (
                  <Briefcase size={18} className="text-primary" />
                )}
              </div>
              
              {/* Content card */}
              <div className="w-[calc(100%-3.5rem)] md:w-[calc(50%-2.5rem)] glass-card p-5 md:p-6 rounded-xl hover-card-effect border border-border">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
                  <h4 className="font-bold text-foreground text-base md:text-lg leading-snug">
                    {item.title}
                  </h4>
                  <span className="text-xs font-semibold text-primary bg-primary/10 px-2.5 py-1 rounded-full w-fit">
                    {item.period}
                  </span>
                </div>
                
                <p className="text-xs md:text-sm font-medium text-muted-foreground mb-3">
                  <span className="text-foreground">{item.issuer}</span> • {item.type}
                  {item.credentialId && (
                    <span className="font-mono text-xs ml-2 text-muted-foreground/80">
                      ID: {item.credentialId}
                    </span>
                  )}
                </p>

                {item.description && (
                  <p className="text-xs md:text-sm text-muted-foreground leading-relaxed mb-4">
                    {item.description}
                  </p>
                )}

                {item.link && (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline"
                  >
                    <span>View Certificate</span>
                    <ExternalLink size={13} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Certifications Grid */}
      <div>
        <div className="mb-8">
          <h3 className="text-2xl font-bold tracking-tight text-foreground flex items-center gap-2.5">
            <Award className="text-primary" size={24} />
            <span>Verified Certifications</span>
          </h3>
          <p className="text-sm text-muted-foreground mt-1">
            Certified proficiency in programming languages, databases, and software fundamentals.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {certifications.map((cert, index) => (
            <div 
              key={index}
              className="glass-card p-5 rounded-xl flex flex-col justify-between hover-card-effect border border-border"
            >
              <div>
                <div className="flex justify-between items-start mb-3">
                  <span className="text-xs font-semibold text-primary bg-primary/10 px-2.5 py-0.5 rounded-full">
                    {cert.issuer}
                  </span>
                  <span className="text-xs text-muted-foreground font-medium">
                    {cert.period}
                  </span>
                </div>

                <h4 className="font-bold text-foreground text-base mb-2 flex items-start gap-1.5">
                  <CheckCircle size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                  <span>{cert.title}</span>
                </h4>

                {cert.credentialId && (
                  <p className="text-xs font-mono text-muted-foreground mb-4">
                    ID: {cert.credentialId}
                  </p>
                )}
              </div>

              {cert.link && (
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-between bg-secondary hover:bg-secondary/80 text-secondary-foreground text-xs font-medium py-2 px-3 rounded-md transition-colors w-full mt-2 group"
                >
                  <span>Show Credential</span>
                  <ExternalLink size={13} className="group-hover:translate-x-0.5 transition-transform" />
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
