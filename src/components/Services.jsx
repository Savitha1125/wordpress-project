import React from "react";
import { Search, Share2, Cpu, BarChart3 } from "lucide-react";

const services = [
  {
    icon: <Search size={32} />,
    title: "Full-Funnel SEO",
    desc: "Move beyond rankings. We optimize for high-intent traffic and conversions using neural keyword clustering and semantic content mapping.",
    color: "#6366f1"
  },
  {
    icon: <Share2 size={32} />,
    title: "Algorithmic SMM",
    desc: "Data-driven social strategies that leverage trend-prediction models to create viral content cycles and community growth on autopilot.",
    color: "#a855f7"
  },
  {
    icon: <Cpu size={32} />,
    title: "Neural Automation",
    desc: "Eliminate friction in your sales cycle. We build autonomous lead-nurturing workflows that engage prospects based on behavioral triggers.",
    color: "#ec4899"
  },
  {
    icon: <BarChart3 size={32} />,
    title: "Performance Media",
    desc: "Maximize every dollar. Our AI-managed ad infrastructure optimizes bids and creatives in real-time across Google, Meta, and LinkedIn.",
    color: "#f59e0b"
  }
];

export default function Services() {
  return (
    <section id="services" className="section-padding bg-light bg-opacity-50">
      <div className="container">
        <div className="text-center mb-5 pb-3">
          <h2 className="display-5 fw-bold mb-3">Our <span className="text-primary">Services</span></h2>
          <p className="text-muted mx-auto" style={{ maxWidth: "600px" }}>
            Comprehensive AI-driven solutions to accelerate your digital growth.
          </p>
        </div>
        
        <div className="row g-4">
          {services.map((item, idx) => (
            <div key={idx} className="col-lg-3 col-md-6">
              <div className="card-glass h-100 text-center border-0">
                <div className="p-3 rounded-4 mb-4 d-inline-flex" style={{ backgroundColor: `${item.color}15`, color: item.color }}>
                  {item.icon}
                </div>
                <h4 className="fw-bold mb-3 fs-5">{item.title}</h4>
                <p className="text-muted small mb-0" style={{ lineHeight: "1.7" }}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
