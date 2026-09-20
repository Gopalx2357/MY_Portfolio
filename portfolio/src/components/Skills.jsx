import React from 'react';
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
