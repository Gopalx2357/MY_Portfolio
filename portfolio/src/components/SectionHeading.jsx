import React from 'react';

export default function SectionHeading({ title, subtitle }) {
  return (
    <div className="mb-12 text-center md:text-left">
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">{title}</h2>
      {subtitle && <p className="text-muted-foreground text-lg max-w-2xl">{subtitle}</p>}
      <div className="h-1 w-20 bg-primary mt-6 rounded-full mx-auto md:mx-0"></div>
    </div>
  );
}
