import React from "react";
import { Check, Sparkles } from "lucide-react";

const plans = [
  {
    name: "Growth",
    price: "1,999",
    features: [
      "AI Keyword Clustering",
      "Bi-Weekly Strategy Audits",
      "Autonomous Ad Bidding",
      "Standard Funnel Automation",
      "Email & Slack Support"
    ],
    highlight: false
  },
  {
    name: "Scale",
    price: "4,999",
    features: [
      "Everything in Growth",
      "Full Behavioral Funnel Build",
      "Predictive Trend Analysis",
      "Multi-Channel Retargeting",
      "Priority Account Engineer"
    ],
    highlight: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    features: [
      "Custom Model Training",
      "White-Glove Implementation",
      "Direct API access to Data",
      "Quarterly Growth Roadmaps",
      "Guaranteed ROAS Metrics"
    ],
    highlight: false
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="section-padding bg-light bg-opacity-50">
      <div className="container">
        <div className="text-center mb-5 pb-5">
          <h2 className="display-5 fw-bold mb-3">Pricing <span className="text-primary">Plans</span></h2>
          <p className="text-muted mx-auto" style={{ maxWidth: "600px" }}>
            Simple, transparent pricing to power your growth journey.
          </p>
        </div>
        
        <div className="row g-4 justify-content-center align-items-stretch">
          {plans.map((plan, idx) => (
            <div key={idx} className="col-lg-4 col-md-6">
              <div className={`card-glass h-100 ${plan.highlight ? 'border-primary shadow-lg border-2' : 'border-0'}`}>
                {plan.highlight && (
                  <div className="bg-primary text-white py-2 px-4 rounded-pill position-absolute top-0 start-50 translate-middle small fw-bold d-flex align-items-center gap-2">
                    <Sparkles size={14} /> Recommended
                  </div>
                )}
                <div className="p-2">
                  <h4 className="fw-bold mb-2">{plan.name}</h4>
                  <div className="mb-4">
                    <span className="display-5 fw-bold text-dark">{plan.price !== "Custom" ? `$${plan.price}` : plan.price}</span>
                    {plan.price !== "Custom" && <span className="text-muted">/mo</span>}
                  </div>
                  
                  <hr className="my-4 opacity-10" />
                  
                  <ul className="list-unstyled mb-5">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="mb-3 d-flex align-items-start gap-2 small">
                        <Check size={18} className="text-primary flex-shrink-0 mt-1" />
                        <span className="text-dark fw-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button className={`btn w-100 py-3 fw-bold rounded-3 transition-all ${plan.highlight ? 'btn-vibrant shadow-primary' : 'btn-outline-dark'}`}>
                    Choose {plan.name}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
