import React from "react";
import { ArrowRight, Zap } from "lucide-react";

export default function Hero() {
  return (
    <section className="section-padding position-relative overflow-hidden d-flex align-items-center" style={{ minHeight: "80vh", paddingTop: "100px" }}>
      <div className="blob blob-indigo animate-float"></div>
      <div className="blob blob-pink animate-float" style={{ animationDelay: "3s" }}></div>
      
      <div className="container text-center">
        <div className="d-inline-flex align-items-center gap-2 px-3 py-1 bg-white rounded-pill shadow-sm mb-4 border border-primary border-opacity-10">
           <Zap size={16} className="text-primary fill-primary" />
           <span className="fw-bold text-muted small text-uppercase" style={{ letterSpacing: "1px" }}>AI-Driven Excellence</span>
        </div>
        
        <h1 className="display-2 fw-bold mb-4" style={{ letterSpacing: "-1.5px", lineHeight: "1.1" }}>
          AI-Powered Digital Marketing <br />
          <span className="text-gradient">That Scales Your Revenue</span>
        </h1>
        
        <p className="lead text-muted mx-auto mb-5" style={{ maxWidth: "720px", fontSize: "1.35rem", fontWeight: "400" }}>
          Stop guessing. Start growing. We deploy autonomous marketing engines that predictably acquire customers while you focus on building your product.
        </p>
        
        <div className="d-flex justify-content-center flex-wrap gap-3">
          <a href="#contact" className="btn-vibrant px-5 py-3 text-decoration-none shadow-lg d-flex align-items-center gap-2">
            Get Started <ArrowRight size={20} />
          </a>
          <a href="#how-it-works" className="btn btn-outline-dark border-2 rounded-3 px-5 py-3 fw-bold text-decoration-none transition-all">
            Book a Demo
          </a>
        </div>
      </div>
    </section>
  );
}
