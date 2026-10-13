import os

components_dir = r"d:\portfolio\src\components"
os.makedirs(components_dir, exist_ok=True)

files = {
    "Hero.jsx": """import React from 'react';
import { Link } from 'react-scroll';
import { Github, Linkedin, Mail, ArrowRight } from 'lucide-react';
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
            <Github size={24} />
          </a>
          <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)' }} aria-label="LinkedIn">
            <Linkedin size={24} />
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
""",

    "About.jsx": """import React from 'react';
import SectionHeading from './SectionHeading';
import { portfolioData } from '../data/portfolioData';

const About = () => {
  return (
    <section id="about" className="section-padding" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <SectionHeading title="About Me" />
      <div className="glass-card" style={{ maxWidth: '900px', margin: '0 auto', padding: '3rem', fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--text-secondary)' }}>
        {portfolioData.about.split('\\n\\n').map((paragraph, idx) => (
          <p key={idx} style={{ marginBottom: '1.5rem' }}>{paragraph}</p>
        ))}
      </div>
    </section>
  );
};

export default About;
""",

    "Skills.jsx": """import React from 'react';
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
""",

    "Experience.jsx": """import React from 'react';
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
""",

    "Projects.jsx": """import React, { useState } from 'react';
import SectionHeading from './SectionHeading';
import { portfolioData } from '../data/portfolioData';
import { Github, ExternalLink, X, BarChart2 } from 'lucide-react';

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;
  
  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.8)', zIndex: 9999, display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px' }}>
      <div className="glass-card" style={{ background: 'var(--bg-secondary)', width: '100%', maxWidth: '900px', maxHeight: '90vh', overflowY: 'auto', padding: '2rem', position: 'relative' }}>
        <button onClick={onClose} style={{ position: 'absolute', top: '20px', right: '20px', color: 'var(--text-secondary)' }} aria-label="Close">
          <X size={24} />
        </button>
        
        <h2 style={{ fontSize: '2rem', marginBottom: '1rem', color: 'var(--accent-cyan)' }}>{project.title}</h2>
        
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem', marginBottom: '2rem' }}>
          {project.tech.map((t, i) => (
            <span key={i} style={{ background: 'rgba(138, 43, 226, 0.15)', color: '#D8BFD8', padding: '4px 12px', borderRadius: '12px', fontSize: '0.85rem' }}>{t}</span>
          ))}
        </div>

        {project.github && (
          <div style={{ marginBottom: '2rem' }}>
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn-secondary" style={{ padding: '8px 16px', fontSize: '0.9rem' }}>
              <Github size={18} /> View Code
            </a>
          </div>
        )}

        {project.disclaimer && (
          <div style={{ background: 'rgba(255, 165, 0, 0.1)', borderLeft: '4px solid orange', padding: '1rem', marginBottom: '2rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
            <strong>Note:</strong> {project.disclaimer}
          </div>
        )}

        <div style={{ marginBottom: '2rem' }}>
          <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>Overview</h3>
          <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>{project.description}</p>
        </div>

        {project.showWorkflow && (
          <div style={{ marginBottom: '2rem', background: 'rgba(0,0,0,0.2)', padding: '1.5rem', borderRadius: '8px' }}>
            <h3 style={{ fontSize: '1.1rem', marginBottom: '1rem', textAlign: 'center', color: 'var(--accent-blue)' }}>Workflow</h3>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px' }}>
              <span style={{ padding: '8px 12px', background: 'var(--glass-bg)', borderRadius: '4px' }}>Data Integration</span>
              <span style={{ color: 'var(--accent-cyan)' }}>➔</span>
              <span style={{ padding: '8px 12px', background: 'var(--glass-bg)', borderRadius: '4px' }}>Data Transformation</span>
              <span style={{ color: 'var(--accent-cyan)' }}>➔</span>
              <span style={{ padding: '8px 12px', background: 'var(--glass-bg)', borderRadius: '4px' }}>Visualization</span>
              <span style={{ color: 'var(--accent-cyan)' }}>➔</span>
              <span style={{ padding: '8px 12px', background: 'var(--glass-bg)', borderRadius: '4px' }}>Dashboard</span>
            </div>
          </div>
        )}

        <div style={{ marginBottom: '2rem' }}>
          <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>Features</h3>
          <ul style={{ paddingLeft: '20px', color: 'var(--text-secondary)' }}>
            {project.features.map((f, i) => (
              <li key={i} style={{ marginBottom: '8px' }}>{f}</li>
            ))}
          </ul>
        </div>
        
        {project.dashboardIncludes && (
          <div style={{ marginBottom: '2rem' }}>
            <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>Dashboard Includes</h3>
            <ul style={{ paddingLeft: '20px', color: 'var(--text-secondary)' }}>
              {project.dashboardIncludes.map((f, i) => (
                <li key={i} style={{ marginBottom: '8px' }}>{f}</li>
              ))}
            </ul>
          </div>
        )}

        <div style={{ marginBottom: '2rem' }}>
          <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>My Contribution</h3>
          <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>{project.contribution}</p>
        </div>

        <div>
          <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>Screenshots</h3>
          <div style={{ 
            height: '250px', 
            background: 'linear-gradient(45deg, #121E42, #1E90FF33)', 
            borderRadius: '8px', 
            display: 'flex', 
            flexDirection: 'column',
            justifyContent: 'center', 
            alignItems: 'center',
            color: 'var(--text-secondary)',
            border: '1px dashed var(--accent-blue)'
          }}>
            <BarChart2 size={48} style={{ marginBottom: '10px', opacity: 0.5 }} />
            <span>Screenshot coming soon</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="section-padding">
      <SectionHeading title="My Projects" />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
        {portfolioData.projects.map((project) => (
          <div key={project.id} className="glass-card" style={{ display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
            <div style={{ 
              height: '180px', 
              background: 'linear-gradient(45deg, #121E42, #1E90FF33)', 
              display: 'flex', 
              flexDirection: 'column',
              justifyContent: 'center', 
              alignItems: 'center',
              borderBottom: '1px solid var(--glass-border)'
            }}>
              <BarChart2 size={36} style={{ marginBottom: '8px', opacity: 0.5, color: 'var(--text-secondary)' }} />
              <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Screenshot coming soon</span>
            </div>
            <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>{project.title}</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '1.5rem', lineHeight: '1.5', flex: 1 }}>
                {project.description.substring(0, 120)}...
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
                {project.tech.slice(0, 3).map((t, i) => (
                  <span key={i} style={{ background: 'rgba(255,255,255,0.05)', fontSize: '0.8rem', padding: '4px 10px', borderRadius: '10px' }}>{t}</span>
                ))}
                {project.tech.length > 3 && <span style={{ fontSize: '0.8rem', padding: '4px' }}>+{project.tech.length - 3}</span>}
              </div>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <button className="btn-primary" style={{ padding: '8px 16px', fontSize: '0.9rem', flex: 1, justifyContent: 'center' }} onClick={() => setSelectedProject(project)}>
                  View Details
                </button>
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn-secondary" style={{ padding: '8px 12px' }} aria-label="GitHub Repository">
                    <Github size={18} />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      {selectedProject && <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />}
    </section>
  );
};

export default Projects;
""",

    "Certifications.jsx": """import React from 'react';
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
""",

    "Education.jsx": """import React from 'react';
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
""",

    "Contact.jsx": """import React, { useState } from 'react';
import SectionHeading from './SectionHeading';
import { portfolioData } from '../data/portfolioData';
import { Mail, Phone, Linkedin, Github, Send } from 'lucide-react';

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
            <button className="btn-disabled" disabled style={{ marginBottom: '2rem' }}>
              Resume coming soon
            </button>
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
              <div style={{ background: 'var(--glass-bg)', padding: '10px', borderRadius: '50%' }}><Linkedin size={20} color="var(--accent-purple)" /></div>
              <span>LinkedIn</span>
            </a>
            <a href={personal.github} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--text-secondary)' }}>
              <div style={{ background: 'var(--glass-bg)', padding: '10px', borderRadius: '50%' }}><Github size={20} color="var(--text-primary)" /></div>
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
""",

    "Footer.jsx": """import React from 'react';

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
"""
}

for filename, content in files.items():
    with open(os.path.join(components_dir, filename), 'w', encoding='utf-8') as f:
        f.write(content)

print("Components generated.")
