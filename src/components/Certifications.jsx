import React from 'react';
import SectionHeading from './SectionHeading';
import { portfolioData } from '../data/portfolioData';
import { Award } from 'lucide-react';

const Certifications = () => {
  return (
    <section id="certifications" className="section-padding" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <SectionHeading title="Certifications & Achievements" />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', maxWidth: '1000px', margin: '0 auto' }}>
        {portfolioData.certifications.map((cert, idx) => (
          <div key={idx} className="glass-card" style={{ padding: '2rem', display: 'flex', flexDirection: 'column' }}>
            <Award size={32} color="var(--accent-purple)" style={{ marginBottom: '1rem' }} />
            <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>{cert.title}</h3>
            <p style={{ color: 'var(--accent-cyan)', fontWeight: '500', marginBottom: '1rem' }}>{cert.issuer}</p>
            {cert.date && <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: 'auto' }}>{cert.date}</p>}
            {cert.details && <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: 'auto', lineHeight: '1.5' }}>{cert.details}</p>}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
