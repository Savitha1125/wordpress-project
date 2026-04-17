import React from "react";
import { Github, Twitter, Linkedin, Facebook, Sparkles } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-dark mt-0">
      <div className="container">
        <div className="row g-5">
          <div className="col-lg-4">
            <div className="d-flex align-items-center gap-2 fw-bold fs-4 text-white mb-4">
              <div className="p-2 bg-primary rounded-3 text-white">
                <Sparkles size={24} />
              </div>
              Vanguard
            </div>
            <p className="mb-4 pe-lg-5" style={{ color: "rgba(255,255,255,0.6)" }}>
              Engineered for the future of digital commerce. We use AI to automate growth and scale your brand with precision.
            </p>
            <div className="d-flex gap-3">
              {[Twitter, Linkedin, Github, Facebook].map((Icon, idx) => (
                <a key={idx} href="#" className="social-icon-box text-decoration-none">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
          
          <div className="col-lg-2 col-md-4">
            <h6 className="footer-heading">Solutions</h6>
            <ul className="list-unstyled">
              {["SEO Mastery", "Social AI", "Paid Growth", "Automation"].map((l, i) => (
                <li key={i} className="mb-2"><a href="#" className="footer-dark-link">{l}</a></li>
              ))}
            </ul>
          </div>
          
          <div className="col-lg-2 col-md-4">
            <h6 className="footer-heading">Company</h6>
            <ul className="list-unstyled">
              {["About Us", "Case Studies", "Our Method", "Partners"].map((l, i) => (
                <li key={i} className="mb-2"><a href="#" className="footer-dark-link">{l}</a></li>
              ))}
            </ul>
          </div>
          
          <div className="col-lg-4 col-md-4">
            <h6 className="footer-heading">Newsletter</h6>
            <p className="small mb-4" style={{ color: "rgba(255,255,255,0.6)" }}>Get the latest AI marketing insights delivered to your inbox.</p>
            <div className="input-group mb-3">
              <input type="email" className="form-control bg-white bg-opacity-10 border-0 text-white py-2" placeholder="Email address" />
              <button className="btn btn-primary px-4" type="button">Join</button>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom d-flex flex-column flex-md-row justify-content-between align-items-center gap-3">
          <p className="small mb-0" style={{ color: "rgba(255,255,255,0.4)" }}>
            © {currentYear} Vanguard Digital AI. All rights reserved.
          </p>
          <div className="d-flex gap-4">
            <a href="#" className="small text-decoration-none" style={{ color: "rgba(255,255,255,0.4)" }}>Privacy Policy</a>
            <a href="#" className="small text-decoration-none" style={{ color: "rgba(255,255,255,0.4)" }}>Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
