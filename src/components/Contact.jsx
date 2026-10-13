import React, { useState } from 'react';
import SectionHeading from './SectionHeading';
import { portfolioData } from '../data/portfolioData';
import { Mail, Phone, Send } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

const Contact = () => {
  const { personal } = portfolioData;
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("This form is for demo purposes only. Please email me directly using the provided email address.");
  };

  return (
    <section id="contact" className="section-padding" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <SectionHeading title="Let's Connect" />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', maxWidth: '1000px', margin: '0 auto' }}>
        
        {/* Contact Info */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>Interested in working together?</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '2rem' }}>
              I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.
            </p>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ marginBottom: '2rem', alignSelf: 'flex-start' }}>
              Download Resume
            </a>
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <a href={`mailto:${personal.email}`} style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--text-secondary)' }}>
              <div style={{ background: 'var(--glass-bg)', padding: '10px', borderRadius: '50%' }}><Mail size={20} color="var(--accent-cyan)" /></div>
              <span>{personal.email}</span>
            </a>
            <a href={`tel:${personal.phone}`} style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--text-secondary)' }}>
              <div style={{ background: 'var(--glass-bg)', padding: '10px', borderRadius: '50%' }}><Phone size={20} color="var(--accent-blue)" /></div>
              <span>{personal.phone}</span>
            </a>
            <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--text-secondary)' }}>
              <div style={{ background: 'var(--glass-bg)', padding: '10px', borderRadius: '50%' }}><LinkedinIcon size={20} color="var(--accent-purple)" /></div>
              <span>LinkedIn</span>
            </a>
            <a href={personal.github} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--text-secondary)' }}>
              <div style={{ background: 'var(--glass-bg)', padding: '10px', borderRadius: '50%' }}><GithubIcon size={20} color="var(--text-primary)" /></div>
              <span>GitHub</span>
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div className="glass-card" style={{ padding: '2.5rem' }}>
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div>
              <label htmlFor="name" style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>Name</label>
              <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange} 
                style={{ width: '100%', padding: '12px', borderRadius: '8px', background: 'rgba(0,0,0,0.2)', border: '1px solid var(--glass-border)', color: 'white', outline: 'none' }} 
              />
            </div>
            <div>
              <label htmlFor="email" style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>Email</label>
              <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange} 
                style={{ width: '100%', padding: '12px', borderRadius: '8px', background: 'rgba(0,0,0,0.2)', border: '1px solid var(--glass-border)', color: 'white', outline: 'none' }} 
              />
            </div>
            <div>
              <label htmlFor="message" style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>Message</label>
              <textarea id="message" name="message" rows="5" required value={formData.message} onChange={handleChange} 
                style={{ width: '100%', padding: '12px', borderRadius: '8px', background: 'rgba(0,0,0,0.2)', border: '1px solid var(--glass-border)', color: 'white', outline: 'none', resize: 'vertical' }} 
              ></textarea>
            </div>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', fontStyle: 'italic' }}>
              Note: Form is for demo only. Please email me directly using the address provided.
            </p>
            <button type="submit" className="btn-primary" style={{ justifyContent: 'center' }}>
              Send Message <Send size={18} />
            </button>
          </form>
        </div>

      </div>
    </section>
  );
};

export default Contact;
