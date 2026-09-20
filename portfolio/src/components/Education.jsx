import React from 'react';
import SectionHeading from './SectionHeading';
import { profile } from '../data/profile';
import { GraduationCap, Calendar } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

export default function Education() {
  const revealRef = useReveal();

  return (
    <section id="education" className="scroll-mt-24" ref={revealRef}>
      <SectionHeading title="Education" />
      
      <div className="glass-card p-6 md:p-8 rounded-xl border-l-4 border-l-primary hover-card-effect">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-primary/10 rounded-lg text-primary mt-1 hidden sm:block">
              <GraduationCap size={24} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-foreground">{profile.education.degree}</h3>
              <p className="text-lg text-muted-foreground">{profile.education.college}</p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground bg-muted px-3 py-1 rounded-full text-sm font-medium w-fit">
            <Calendar size={14} />
            <span>{profile.education.period}</span>
          </div>
        </div>
        
        <div className="mt-6 sm:ml-16">
          <h4 className="text-sm font-semibold text-foreground mb-3">Relevant Coursework:</h4>
          <div className="flex flex-wrap gap-2">
            {profile.education.coursework.map(course => (
              <span key={course} className="bg-secondary text-secondary-foreground px-3 py-1 rounded-md text-xs font-medium">
                {course}
              </span>
            ))}
          </div>

          {profile.education.achievements && profile.education.achievements.length > 0 && (
            <div className="mt-4 bg-primary/10 border border-primary/20 rounded-lg p-3 text-xs md:text-sm font-medium text-foreground flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              <span>{profile.education.achievements[0]}</span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
