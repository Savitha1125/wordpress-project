import React, { useState } from "react";
import { Sparkles } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white bg-opacity-90 backdrop-blur sticky-top py-2 border-bottom border-light">
      <div className="container">
        <a className="navbar-brand d-flex align-items-center gap-2 fw-bold fs-4 text-dark" href="#">
          <div className="p-1 bg-primary rounded-3 text-white">
             <Sparkles size={20} />
          </div>
          Vanguard
        </a>
        
        {/* Toggle Button for Mobile */}
        <button 
          className="navbar-toggler border-0 shadow-none" 
          type="button" 
          onClick={toggleMenu}
          aria-expanded={isMenuOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapsible Content */}
        <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`} id="navbarMain">
          <ul className="navbar-nav mx-auto gap-lg-4 py-3 py-lg-0">
            <li className="nav-item"><a className="nav-link nav-link-proper" href="#services" onClick={() => setIsMenuOpen(false)}>Services</a></li>
            <li className="nav-item"><a className="nav-link nav-link-proper" href="#how-it-works" onClick={() => setIsMenuOpen(false)}>How It Works</a></li>
            <li className="nav-item"><a className="nav-link nav-link-proper" href="#benefits" onClick={() => setIsMenuOpen(false)}>Benefits</a></li>
            <li className="nav-item"><a className="nav-link nav-link-proper" href="#pricing" onClick={() => setIsMenuOpen(false)}>Pricing</a></li>
          </ul>
          
          <div className="d-flex align-items-center mt-lg-0 pb-3 pb-lg-0">
            <a href="#contact" className="btn-vibrant px-4 py-2 small shadow-sm text-decoration-none w-100 text-center" onClick={() => setIsMenuOpen(false)}>
              Get Started
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
