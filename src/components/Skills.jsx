import React from 'react';
import SectionHeading from './SectionHeading';
import { portfolioData } from '../data/portfolioData';

const Skills = () => {
  return (
    <section id="skills" className="section-padding">
      <SectionHeading title="Skills" />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
        {portfolioData.skills.map((skillGroup, idx) => (
          <div key={idx} className="glass-card" style={{ padding: '2rem' }}>
            <h3 style={{ color: 'var(--accent-cyan)', marginBottom: '1.5rem', fontSize: '1.3rem' }}>{skillGroup.category}</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem' }}>
              {skillGroup.items.map((item, i) => (
                <span key={i} style={{ background: 'rgba(30, 144, 255, 0.1)', border: '1px solid var(--accent-blue)', padding: '6px 14px', borderRadius: '20px', fontSize: '0.9rem', color: 'var(--text-primary)' }}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
