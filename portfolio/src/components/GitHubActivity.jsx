import React, { useState, useEffect } from 'react';
import SectionHeading from './SectionHeading';
import { socialLinks } from '../data/socialLinks';
import { fallbackGithubData } from '../data/githubFallback';
import { Github, Flame, GitCommit, Calendar, Info } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

export default function GitHubActivity() {
  const revealRef = useReveal();
  const username = socialLinks.github.split('/').pop() || 'gopalx2357';

  // Use fallbackGithubData as initial state for instant zero-delay rendering
  const [data, setData] = useState(fallbackGithubData);
  const [hoveredDay, setHoveredDay] = useState(null);
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });

  // Fetch latest data in background
  useEffect(() => {
    let isMounted = true;
    async function fetchLatest() {
      try {
        const res = await fetch(`https://github-contributions-api.jogruber.de/v4/${username}?y=last`);
        if (res.ok) {
          const json = await res.json();
          if (isMounted && json && json.contributions && json.contributions.length > 0) {
            setData(json);
          }
        }
      } catch (e) {
        // Fallback data is already loaded, silently ignore network or adblocker errors
        console.warn('Using preloaded GitHub contributions:', e.message);
      }
    }
    fetchLatest();
    return () => {
      isMounted = false;
    };
  }, [username]);

  const contributions = data?.contributions || [];
  const totalContributions = data?.total?.lastYear ?? contributions.reduce((acc, curr) => acc + curr.count, 0);

  // Calculate max commits in a single day
  let maxInDay = 0;
  contributions.forEach((d) => {
    if (d.count > maxInDay) maxInDay = d.count;
  });

  // Align days into 53 weeks (Sunday to Saturday)
  const firstDay = contributions.length > 0 ? new Date(contributions[0].date + "T00:00:00").getDay() : 0;
  const padded = [...Array(firstDay).fill(null), ...contributions];
  const weeks = [];
  for (let i = 0; i < padded.length; i += 7) {
    weeks.push(padded.slice(i, i + 7));
  }

  // Month labels across top
  const monthLabels = [];
  let lastMonth = -1;
  weeks.forEach((week, weekIdx) => {
    const firstValidDay = week.find((d) => d !== null);
    if (firstValidDay) {
      const d = new Date(firstValidDay.date + "T00:00:00");
      const month = d.getMonth();
      if (month !== lastMonth) {
        monthLabels.push({
          weekIdx,
          month: d.toLocaleString('en-US', { month: 'short' })
        });
        lastMonth = month;
      }
    }
  });

  const formatDate = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString + "T00:00:00");
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    });
  };

  const handleMouseEnter = (day, e) => {
    setHoveredDay(day);
    setTooltipPos({ x: e.clientX, y: e.clientY });
  };

  const handleMouseMove = (e) => {
    setTooltipPos({ x: e.clientX, y: e.clientY });
  };

  const handleMouseLeave = () => {
    setHoveredDay(null);
  };

  // Color mapping based on GitHub's classic contribution levels
  const getFillColor = (level, count) => {
    if (count === 0 || level === 0) return 'var(--cell-empty, #161b22)';
    if (level === 1) return '#0e4429';
    if (level === 2) return '#006d32';
    if (level === 3) return '#26a641';
    return '#39d353'; // level 4
  };

  return (
    <section className="scroll-mt-24" ref={revealRef}>
      <SectionHeading 
        title="GitHub Activity & Contributions" 
        subtitle="Real-time open-source commits, pull requests, and activity tracking." 
      />

      <div className="glass-card p-6 md:p-8 rounded-2xl flex flex-col items-center hover-card-effect border border-border relative">
        {/* Top Stats Banner */}
        <div className="w-full flex flex-wrap items-center justify-between gap-4 mb-6 pb-6 border-b border-border">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
              <GitCommit size={22} />
            </div>
            <div>
              <h4 className="text-xl font-bold text-foreground">
                {totalContributions} {totalContributions === 1 ? 'Contribution' : 'Contributions'}
              </h4>
              <p className="text-xs text-muted-foreground">In the last 12 months</p>
            </div>
          </div>

          <div className="flex items-center gap-6 text-xs text-muted-foreground font-medium">
            <div className="flex items-center gap-2">
              <Flame size={16} className="text-amber-500" />
              <span>Max in a single day: <strong className="text-foreground">{maxInDay} commits</strong></span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar size={16} className="text-primary" />
              <span>User: <strong className="text-foreground font-mono">@{username}</strong></span>
            </div>
          </div>
        </div>

        {/* Live Hover Status Bar */}
        <div className="w-full bg-secondary/80 dark:bg-muted/50 border border-border rounded-xl py-3 px-4 mb-6 flex items-center justify-between min-h-[48px] shadow-sm">
          {hoveredDay ? (
            <div className="flex items-center gap-2.5 text-sm text-foreground">
              <span className={`w-3 h-3 rounded-full ${hoveredDay.count > 0 ? 'bg-emerald-500 animate-pulse' : 'bg-muted-foreground/40'}`}></span>
              <span>
                <strong className="text-primary font-semibold">
                  {hoveredDay.count === 0 ? 'No commits' : `${hoveredDay.count} ${hoveredDay.count === 1 ? 'commit' : 'commits'}`}
                </strong>
                {' '}on <span className="font-medium text-foreground">{formatDate(hoveredDay.date)}</span>
              </span>
            </div>
          ) : (
            <div className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
              <Info size={16} className="text-primary/70 shrink-0" />
              <span>Cursor ko kisi bhi square par le jayein — commits aur date yaha aur tooltip me dikhega</span>
            </div>
          )}
          <span className="text-[11px] font-mono text-muted-foreground/80 hidden md:inline-block">
            {hoveredDay ? (hoveredDay.count > 0 ? 'Active Commit Day' : 'No Activity') : 'Interactive Graph'}
          </span>
        </div>

        {/* Graph Container with horizontal scroll */}
        <div className="w-full overflow-x-auto pb-4 pt-1 flex justify-center select-none">
          <div className="inline-block relative">
            <svg
              width="830"
              height="140"
              viewBox="0 0 830 140"
              className="overflow-visible font-sans"
              style={{
                '--cell-empty': 'rgb(240 242 245 / 0.8)',
              }}
            >
              <style>{`
                .dark svg {
                  --cell-empty: #161b22;
                }
              `}</style>

              {/* Month Labels */}
              {monthLabels.map((m, idx) => (
                <text
                  key={idx}
                  x={32 + m.weekIdx * 15}
                  y="12"
                  className="fill-muted-foreground font-medium text-[10px]"
                >
                  {m.month}
                </text>
              ))}

              {/* Day Labels */}
              <text x="6" y="41" className="fill-muted-foreground text-[9px]">Mon</text>
              <text x="6" y="71" className="fill-muted-foreground text-[9px]">Wed</text>
              <text x="6" y="101" className="fill-muted-foreground text-[9px]">Fri</text>

              {/* Graph Squares Grid */}
              <g transform="translate(32, 22)">
                {weeks.map((week, weekIdx) => (
                  <g key={weekIdx} transform={`translate(${weekIdx * 15}, 0)`}>
                    {week.map((day, dayIdx) => {
                      if (!day) return null;
                      const isHovered = hoveredDay?.date === day.date;
                      return (
                        <rect
                          key={day.date}
                          x="0"
                          y={dayIdx * 15}
                          width="11"
                          height="11"
                          rx="2"
                          fill={getFillColor(day.level, day.count)}
                          stroke={isHovered ? '#3b82f6' : 'rgba(0,0,0,0.06)'}
                          strokeWidth={isHovered ? 2 : 1}
                          className="cursor-pointer transition-colors duration-75"
                          onMouseEnter={(e) => handleMouseEnter(day, e)}
                          onMouseMove={handleMouseMove}
                          onMouseLeave={handleMouseLeave}
                          onClick={() => setHoveredDay(day)}
                        >
                          <title>
                            {day.count === 0 ? 'No contributions' : `${day.count} ${day.count === 1 ? 'commit' : 'commits'}`} on {formatDate(day.date)}
                          </title>
                        </rect>
                      );
                    })}
                  </g>
                ))}
              </g>
            </svg>
          </div>
        </div>

        {/* Global Floating Tooltip (Fixed position so it NEVER gets cut off or flickers) */}
        {hoveredDay && (
          <div
            className="fixed pointer-events-none z-50 px-3 py-1.5 bg-neutral-900 text-white dark:bg-neutral-800 dark:text-neutral-100 text-xs rounded-lg shadow-2xl border border-neutral-700/80 -translate-x-1/2 -translate-y-full whitespace-nowrap"
            style={{
              left: `${tooltipPos.x}px`,
              top: `${tooltipPos.y - 10}px`
            }}
          >
            <p className="font-semibold text-xs flex items-center gap-1.5">
              <span className={`w-2 h-2 rounded-full ${hoveredDay.count > 0 ? 'bg-emerald-400' : 'bg-neutral-400'}`}></span>
              <span>
                {hoveredDay.count === 0 ? 'No contributions' : `${hoveredDay.count} ${hoveredDay.count === 1 ? 'commit' : 'commits'}`}
              </span>
            </p>
            <p className="text-[10px] text-neutral-300 mt-0.5">
              {formatDate(hoveredDay.date)}
            </p>
          </div>
        )}

        {/* Legend & GitHub Profile Link */}
        <div className="mt-4 pt-4 border-t border-border w-full flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <span>Less</span>
            <div className="flex gap-1.5 items-center">
              <span className="w-3 h-3 rounded-sm border border-border" style={{ backgroundColor: 'var(--cell-empty, #161b22)' }}></span>
              <span className="w-3 h-3 rounded-sm" style={{ backgroundColor: '#0e4429' }}></span>
              <span className="w-3 h-3 rounded-sm" style={{ backgroundColor: '#006d32' }}></span>
              <span className="w-3 h-3 rounded-sm" style={{ backgroundColor: '#26a641' }}></span>
              <span className="w-3 h-3 rounded-sm" style={{ backgroundColor: '#39d353' }}></span>
            </div>
            <span>More</span>
          </div>

          <a 
            href={socialLinks.github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs font-semibold text-primary hover:underline transition-all"
          >
            <Github size={15} />
            <span>View Full Profile on GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
}
