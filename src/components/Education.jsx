import React from 'react';
import SectionHeading from './SectionHeading';
import { portfolioData } from '../data/portfolioData';
import { GraduationCap } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="section-padding">
      <SectionHeading title="Education" />
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        {portfolioData.education.map((edu, idx) => (
          <div key={idx} className="glass-card" style={{ padding: '2rem', marginBottom: '1.5rem', display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
            <div style={{ background: 'rgba(30, 144, 255, 0.1)', padding: '12px', borderRadius: '12px' }}>
              <GraduationCap size={28} color="var(--accent-blue)" />
            </div>
            <div>
              <h3 style={{ fontSize: '1.3rem', color: 'var(--text-primary)', marginBottom: '5px' }}>{edu.degree}</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginBottom: '5px' }}>{edu.institution}</p>
              {edu.affiliation && <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '5px' }}>{edu.affiliation}</p>}
              <div style={{ display: 'flex', gap: '1rem', marginTop: '10px' }}>
                <span style={{ color: 'var(--accent-cyan)', fontSize: '0.9rem', fontWeight: '500' }}>{edu.year}</span>
                {edu.aggregate && <span style={{ color: 'var(--accent-purple)', fontSize: '0.9rem', fontWeight: '500' }}>Score: {edu.aggregate}</span>}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
