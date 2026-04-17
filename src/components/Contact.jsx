import React, { useState } from "react";
import { CheckCircle2, Mail, MapPin, Phone } from "lucide-react";

export default function Contact() {
  const [formStatus, setFormStatus] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormStatus("Success! Our growth team will contact you within 24 hours.");
    e.target.reset();
  };

  return (
    <section id="contact" className="section-padding position-relative overflow-hidden" style={{ background: "var(--gradient-soft)" }}>
      <div className="blob blob-indigo" style={{ bottom: '-10%', left: '30%', opacity: '0.1' }}></div>
      <div className="container py-2 text-center text-lg-start">
        <div className="row g-5 align-items-center">
          <div className="col-lg-5">
            <h2 className="display-4 fw-bold mb-4">Let's Ignite <br /><span className="text-gradient">Growth.</span></h2>
            <p className="lead text-muted mb-5">
              Ready to automate your marketing and scale your revenue? Book a strategy audit today.
            </p>
            
            <div className="d-flex flex-column gap-3">
              {[
                { icon: <Mail />, label: "Email", val: "growth@vanguard.digital" },
                { icon: <MapPin />, label: "HQ", val: "Austin, Texas, USA" },
                { icon: <Phone />, label: "Call", val: "+1 (555) 000-0000" }
              ].map((item, idx) => (
                <div key={idx} className="d-flex align-items-center gap-4 p-3 bg-white border border-opacity-10 rounded-4 shadow-sm">
                  <div className="text-primary">{item.icon}</div>
                  <div className="text-start">
                    <div className="small fw-bold text-muted text-uppercase" style={{ fontSize: '0.7rem' }}>{item.label}</div>
                    <div className="fw-bold">{item.val}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="col-lg-7">
            <div className="card-glass p-4 p-md-5 border-0 shadow-lg text-start">
              <form onSubmit={handleFormSubmit}>
                <div className="row g-4 mb-4">
                  <div className="col-md-6">
                    <label className="form-label small fw-bold text-muted">Full Name</label>
                    <input type="text" className="form-control bg-light border-0 py-3 rounded-3 fw-bold" placeholder="Savitha" required />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label small fw-bold text-muted">Business Email</label>
                    <input type="email" className="form-control bg-light border-0 py-3 rounded-3 fw-bold" placeholder="savitha@hq.com" required />
                  </div>
                </div>
                
                <div className="mb-4">
                  <label className="form-label small fw-bold text-muted">Your Growth Goals</label>
                  <textarea className="form-control bg-light border-0 py-3 rounded-3 fw-bold" rows="4" placeholder="How can we help you scale?" required></textarea>
                </div>
                
                <button type="submit" className="btn-vibrant w-100 py-3 shadow-lg fs-5">
                  Send Audit Request
                </button>
                
                {formStatus && (
                  <div className="mt-4 p-3 bg-success bg-opacity-10 text-success rounded-4 text-center fw-bold d-flex gap-2 justify-content-center align-items-center small">
                    <CheckCircle2 size={18} /> {formStatus}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
