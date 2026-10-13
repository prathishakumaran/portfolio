import React from 'react';
import SectionHeading from './SectionHeading';
import { portfolioData } from '../data/portfolioData';
import { Briefcase } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="section-padding" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <SectionHeading title="Experience" />
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        {portfolioData.experience.map((exp, idx) => (
          <div key={idx} className="glass-card" style={{ padding: '2.5rem', position: 'relative' }}>
            <div style={{ position: 'absolute', top: '-20px', left: '30px', background: 'var(--bg-primary)', padding: '10px', borderRadius: '50%', border: '2px solid var(--accent-purple)' }}>
              <Briefcase size={24} color="var(--accent-cyan)" />
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', marginBottom: '1.5rem', marginTop: '10px' }}>
              <div>
                <h3 style={{ fontSize: '1.5rem', color: 'var(--text-primary)' }}>{exp.role}</h3>
                <h4 style={{ fontSize: '1.2rem', color: 'var(--accent-blue)' }}>{exp.company}</h4>
              </div>
              <span style={{ color: 'var(--text-secondary)', background: 'rgba(255,255,255,0.05)', padding: '5px 15px', borderRadius: '15px', fontSize: '0.9rem' }}>
                {exp.duration}
              </span>
            </div>
            <ul style={{ paddingLeft: '20px', color: 'var(--text-secondary)', lineHeight: '1.8' }}>
              {exp.details.map((detail, i) => (
                <li key={i} style={{ marginBottom: '10px', listStyleType: 'square', color: 'var(--accent-cyan)' }}>
                  <span style={{ color: 'var(--text-secondary)' }}>{detail}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
