import React from 'react';
import SectionHeading from './SectionHeading';
import { FileText, Download, ExternalLink, Award, GraduationCap, CheckCircle } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

export default function Resume() {
  const revealRef = useReveal();

  return (
    <section id="resume" className="scroll-mt-24" ref={revealRef}>
      <SectionHeading 
        title="Resume & Credentials" 
        subtitle="Review my comprehensive academic credentials, technical skills, and experience." 
      />

      <div className="glass-card p-6 md:p-10 rounded-2xl border border-border hover-card-effect relative overflow-hidden">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Left 2 Cols: Info & Highlights */}
          <div className="md:col-span-2 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                <FileText size={28} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground">Gopal Yadav</h3>
                <p className="text-sm text-muted-foreground">B.Tech Computer Science & Engineering • ABES EC</p>
              </div>
            </div>

            <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
              My resume includes in-depth details of my full-stack web development projects, machine learning implementations, hackathon achievements, and competitive programming credentials.
            </p>

            {/* Quick Resume Highlights */}
            <div className="grid sm:grid-cols-3 gap-3 pt-2">
              <div className="bg-muted/40 border border-border/80 rounded-xl p-3 flex items-start gap-2.5">
                <GraduationCap className="text-primary shrink-0 mt-0.5" size={18} />
                <div>
                  <div className="text-xs text-muted-foreground font-medium">Academics</div>
                  <div className="text-sm font-bold text-foreground">SGPA 8.48 / 10</div>
                </div>
              </div>

              <div className="bg-muted/40 border border-border/80 rounded-xl p-3 flex items-start gap-2.5">
                <Award className="text-amber-500 shrink-0 mt-0.5" size={18} />
                <div>
                  <div className="text-xs text-muted-foreground font-medium">DSA Problems</div>
                  <div className="text-sm font-bold text-foreground">250+ Solved</div>
                </div>
              </div>

              <div className="bg-muted/40 border border-border/80 rounded-xl p-3 flex items-start gap-2.5">
                <CheckCircle className="text-emerald-500 shrink-0 mt-0.5" size={18} />
                <div>
                  <div className="text-xs text-muted-foreground font-medium">Hackathons</div>
                  <div className="text-sm font-bold text-foreground">Semi-Finalist</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Col: Action Buttons */}
          <div className="flex flex-col sm:flex-row md:flex-col gap-3 justify-center">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground py-3.5 px-6 rounded-xl font-semibold transition-all shadow-md hover:shadow-primary/20"
            >
              <ExternalLink size={18} />
              <span>View Resume</span>
            </a>

            <a
              href="/resume.pdf"
              download="Gopal_Yadav_Resume.pdf"
              className="inline-flex items-center justify-center gap-2 bg-secondary hover:bg-secondary/80 text-secondary-foreground py-3.5 px-6 rounded-xl font-semibold transition-colors border border-border"
            >
              <Download size={18} />
              <span>Download PDF</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
