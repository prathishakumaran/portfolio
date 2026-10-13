import React, { useState } from 'react';
import SectionHeading from './SectionHeading';
import { portfolioData } from '../data/portfolioData';
import { ExternalLink, X, BarChart2 } from 'lucide-react';
import { GithubIcon } from './SocialIcons';

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
              <GithubIcon size={18} /> View Code
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
          {project.image ? (
            <img src={project.image} alt={project.title} style={{ width: '100%', borderRadius: '8px', border: '1px solid var(--glass-border)' }} />
          ) : (
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
          )}
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
          <div 
            key={project.id} 
            className="glass-card project-card" 
            style={{ display: 'flex', flexDirection: 'column', overflow: 'hidden', cursor: 'pointer', transition: 'transform 0.3s ease, box-shadow 0.3s ease' }}
            onClick={() => setSelectedProject(project)}
            onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.boxShadow = '0 12px 40px rgba(0, 0, 0, 0.4)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'var(--glass-shadow)'; }}
          >
            {project.image ? (
              <div style={{ height: '180px', width: '100%', overflow: 'hidden', borderBottom: '1px solid var(--glass-border)' }}>
                <img src={project.image} alt={project.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            ) : (
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
            )}
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
                <button className="btn-primary" style={{ padding: '8px 16px', fontSize: '0.9rem', flex: 1, justifyContent: 'center' }}>
                  View Details
                </button>
                {project.github && (
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn-secondary" 
                    style={{ padding: '8px 12px' }} 
                    aria-label="GitHub Repository"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <GithubIcon size={18} />
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
