import React from 'react';

const Footer = () => {
  return (
    <footer style={{ background: 'var(--bg-primary)', padding: '2rem 5%', textAlign: 'center', borderTop: '1px solid var(--glass-border)' }}>
      <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
        &copy; {new Date().getFullYear()} K. Prathisha. Built with React & Vite.
      </p>
    </footer>
  );
};

export default Footer;
