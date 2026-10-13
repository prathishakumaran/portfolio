import React from 'react';
import SectionHeading from './SectionHeading';
import { portfolioData } from '../data/portfolioData';

const About = () => {
  return (
    <section id="about" className="section-padding" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <SectionHeading title="About Me" />
      <div className="glass-card" style={{ maxWidth: '900px', margin: '0 auto', padding: '3rem', fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--text-secondary)' }}>
        {portfolioData.about.split('\n\n').map((paragraph, idx) => (
          <p key={idx} style={{ marginBottom: '1.5rem' }}>{paragraph}</p>
        ))}
      </div>
    </section>
  );
};

export default About;
