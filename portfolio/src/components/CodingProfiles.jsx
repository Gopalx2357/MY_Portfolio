import React from 'react';
import SectionHeading from './SectionHeading';
import { socialLinks } from '../data/socialLinks';
import { useReveal } from '../hooks/useReveal';
import { ExternalLink } from 'lucide-react';

export default function CodingProfiles() {
  const revealRef = useReveal();

  const profiles = [
    {
      name: 'GitHub',
      username: 'gopalx2357',
      desc: 'Open-source repositories, projects, and contributions',
      link: socialLinks.github,
      icon: 'https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png'
    },
    {
      name: 'LeetCode',
      username: 'Gopalx235',
      desc: 'Data Structures & Algorithms problem solving',
      link: socialLinks.leetcode,
      icon: 'https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png'
    },
    {
      name: 'GeeksforGeeks',
      username: 'gopalx235',
      desc: 'Coding practice and algorithmic challenges',
      link: socialLinks.geeksforgeeks,
      icon: 'https://upload.wikimedia.org/wikipedia/commons/4/43/GeeksforGeeks.svg'
    },
    {
      name: 'Codeforces',
      username: 'gopal.x2',
      desc: 'Competitive programming contests',
      link: socialLinks.codeforces,
      icon: 'https://cdn.iconscout.com/icon/free/png-256/code-forces-3628695-3030220.png'
    },
    {
      name: 'CodeChef',
      username: 'gopal_x2',
      desc: 'Contests and algorithm practice',
      link: socialLinks.codechef,
      icon: 'https://cdn.iconscout.com/icon/free/png-256/codechef-2752174-2285031.png'
    },
    {
      name: 'HackerRank',
      username: 'gopal_x235',
      desc: 'Skill badges and coding challenges',
      link: socialLinks.hackerrank,
      icon: 'https://upload.wikimedia.org/wikipedia/commons/4/40/HackerRank_Icon-1000px.png'
    }
  ];

  return (
    <section id="coding" className="scroll-mt-24" ref={revealRef}>
      <SectionHeading title="Coding & Problem Solving" subtitle="My competitive programming profiles and algorithmic footprints." />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {profiles.map((profile) => (
          <div 
            key={profile.name}
            className="glass-card p-6 rounded-xl flex flex-col justify-between hover-card-effect border border-border"
          >
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-white rounded-lg p-2 flex items-center justify-center shadow-sm shrink-0">
                  <img src={profile.icon} alt={profile.name} className="w-full h-full object-contain" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground text-lg">{profile.name}</h3>
                  <span className="text-xs font-mono text-primary font-medium">@{profile.username}</span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                {profile.desc}
              </p>
            </div>

            <a 
              href={profile.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-secondary hover:bg-secondary/80 text-secondary-foreground py-2 px-4 rounded-md text-sm font-medium transition-colors w-full group"
            >
              <span>Visit Profile</span>
              <ExternalLink size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
