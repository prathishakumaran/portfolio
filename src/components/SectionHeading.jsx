import React from 'react';

const SectionHeading = ({ title }) => {
  return (
    <div style={{ marginBottom: '3rem', textAlign: 'center' }}>
      <h2 className="gradient-text" style={{ fontSize: '2.5rem', fontWeight: '700', display: 'inline-block' }}>
        {title}
      </h2>
      <div style={{ 
        height: '4px', 
        width: '60px', 
        background: 'linear-gradient(to right, var(--accent-cyan), var(--accent-blue))', 
        margin: '10px auto 0',
        borderRadius: '2px'
      }}></div>
    </div>
  );
};

export default SectionHeading;
