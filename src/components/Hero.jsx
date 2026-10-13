import React from 'react';
import { Link } from 'react-scroll';
import { Mail, ArrowRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { portfolioData } from '../data/portfolioData';

const Hero = () => {
  const { personal, hero } = portfolioData;

  return (
    <section id="home" className="section-padding" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: '100px' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
        <h1 style={{ fontSize: '3.5rem', fontWeight: '700', marginBottom: '1rem', lineHeight: '1.2' }}>
          Hi, I'm <span className="gradient-text">{personal.name}</span>
        </h1>
        <h2 style={{ fontSize: '1.5rem', fontWeight: '400', color: 'var(--text-secondary)', marginBottom: '2rem' }}>
          {personal.headline}
        </h2>
        <p style={{ fontSize: '1.2rem', marginBottom: '1.5rem', color: 'var(--text-primary)' }}>
          {hero.valueStatement}
        </p>
        <p style={{ fontSize: '1.1rem', marginBottom: '3rem', color: 'var(--text-secondary)' }}>
          {hero.supportingText}
        </p>
        
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginBottom: '3rem', flexWrap: 'wrap' }}>
          <Link to="projects" smooth={true} duration={500} offset={-70}>
            <button className="btn-primary">
              View My Projects <ArrowRight size={18} />
            </button>
          </Link>
          <Link to="contact" smooth={true} duration={500} offset={-70}>
            <button className="btn-secondary">
              Contact Me
            </button>
          </Link>
        </div>

        <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center' }}>
          <a href={personal.github} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)' }} aria-label="GitHub">
            <GithubIcon size={24} />
          </a>
          <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)' }} aria-label="LinkedIn">
            <LinkedinIcon size={24} />
          </a>
          <a href={`mailto:${personal.email}`} style={{ color: 'var(--text-secondary)' }} aria-label="Email">
            <Mail size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
