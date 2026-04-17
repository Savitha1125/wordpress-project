import React from "react";
import { Search, Settings, TrendingUp } from "lucide-react";

const steps = [
  {
    icon: <Search size={28} />,
    title: "1. Audit & Discovery",
    desc: "We perform a deep-dive into your analytics, customer behavior, and competitor landscape to identify untouched growth levers."
  },
  {
    icon: <Settings size={28} />,
    title: "2. Infrastructure Build",
    desc: "Our engineers deploy custom-trained AI models and marketing automation flows tailored to your specific sales cycle."
  },
  {
    icon: <TrendingUp size={28} />,
    title: "3. Aggressive Scaling",
    desc: "We continuously optimize the engine, shifting budgets to winning channels and expanding your market share with precision."
  }
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="section-padding bg-white">
      <div className="container text-center">
        <h2 className="display-5 fw-bold mb-5 pb-5">How It <span className="text-gradient">Works</span></h2>
        
        <div className="row g-5 position-relative">
          {steps.map((step, idx) => (
            <div key={idx} className="col-lg-4 position-relative">
              {idx < steps.length - 1 && (
                <div className="step-line d-none d-lg-block" style={{ top: "35px", opacity: "0.2" }}></div>
              )}
              <div className="bg-primary bg-opacity-10 text-primary d-inline-flex align-items-center justify-content-center rounded-circle mb-4 shadow-sm" style={{ width: "70px", height: "70px" }}>
                {step.icon}
              </div>
              <h4 className="fw-bold mb-3">{step.title}</h4>
              <p className="text-muted px-lg-4 small" style={{ lineHeight: "1.7" }}>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
