import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Menu, X, FileText } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navLinks = [
    { name: 'Home', to: 'home' },
    { name: 'About', to: 'about' },
    { name: 'Skills', to: 'skills' },
    { name: 'Experience', to: 'experience' },
    { name: 'Projects', to: 'projects' },
    { name: 'Certifications', to: 'certifications' },
    { name: 'Education', to: 'education' },
    { name: 'Contact', to: 'contact' },
  ];

  // Resume PDF has been provided
  const hasResume = true; 

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <Link to="home" smooth={true} duration={500} className="nav-logo" onClick={closeMenu}>
          <span className="gradient-text">K. Prathisha</span>
        </Link>

        <div className="mobile-icon" onClick={toggleMenu} aria-label="Toggle Navigation">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </div>

        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          {navLinks.map((link) => (
            <li key={link.name} className="nav-item">
              <Link
                to={link.to}
                smooth={true}
                duration={500}
                offset={-70}
                className="nav-links"
                onClick={closeMenu}
              >
                {link.name}
              </Link>
            </li>
          ))}
          <li className="nav-item nav-btn-item">
            {hasResume ? (
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn-primary resume-btn">
                <FileText size={18} /> Resume
              </a>
            ) : (
              <button className="btn-disabled resume-btn" disabled>
                <FileText size={18} /> Resume coming soon
              </button>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
