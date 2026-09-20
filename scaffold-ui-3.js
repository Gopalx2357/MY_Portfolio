import fs from 'fs';
import path from 'path';

const SRC_DIR = './portfolio/src';

const files = {
  'components/LinkedInCard.jsx': `import React from 'react';
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
`,
  'components/Achievements.jsx': `import React from 'react';
import SectionHeading from './SectionHeading';
import { achievements } from '../data/achievements';
import { Award, Trophy } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

export default function Achievements() {
  const revealRef = useReveal();

  return (
    <section id="achievements" className="scroll-mt-24" ref={revealRef}>
      <SectionHeading title="Achievements & Experience" subtitle="Hackathons, virtual experiences, and certifications." />
      
      <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">
        {achievements.map((item, index) => (
          <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-border bg-background shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
              {item.type === 'Hackathon' ? <Trophy size={18} className="text-primary" /> : <Award size={18} className="text-primary" />}
            </div>
            
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass-card p-5 rounded-xl hover-card-effect">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                <h4 className="font-bold text-foreground">{item.title}</h4>
                <span className="text-xs font-medium text-muted-foreground bg-muted px-2 py-1 rounded mt-2 sm:mt-0 w-fit">{item.year}</span>
              </div>
              <p className="text-sm text-muted-foreground">{item.type} | {item.issuer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
`,
  'components/Education.jsx': `import React from 'react';
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
        </div>
      </div>
    </section>
  );
}
`,
  'components/GitHubActivity.jsx': `import React from 'react';
import SectionHeading from './SectionHeading';
import { socialLinks } from '../data/socialLinks';
import { Github } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

export default function GitHubActivity() {
  const revealRef = useReveal();
  const username = socialLinks.github.split('/').pop();

  return (
    <section className="scroll-mt-24" ref={revealRef}>
      <SectionHeading title="GitHub Activity" subtitle="My open-source contributions and coding consistency." />
      
      <div className="glass-card p-2 sm:p-6 rounded-xl flex flex-col items-center hover-card-effect">
        <div className="w-full overflow-x-auto pb-4 flex justify-center">
          {username && username !== '[your-username]' ? (
             <img 
               src={\`https://ghchart.rshah.org/2196F3/\${username}\`} 
               alt="\${username}'s Github chart" 
               className="min-w-[700px] h-auto dark:invert dark:hue-rotate-180 opacity-90"
             />
          ) : (
            <div className="w-full max-w-[800px] h-[150px] bg-muted animate-pulse rounded flex items-center justify-center">
              <span className="text-muted-foreground text-sm">Add GitHub username in data to view chart</span>
            </div>
          )}
        </div>
        
        <div className="mt-4 pt-4 border-t border-border w-full flex justify-center">
          <a 
            href={socialLinks.github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            <Github size={16} />
            <span>Follow me on GitHub</span>
          </a>
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
console.log("UI components 3 scaffolded.");
