import React from "react";
import { CheckCircle2, Zap, Clock, TrendingUp } from "lucide-react";

export default function Benefits() {
  const benefitList = [
    {
      icon: <Clock size={24} className="text-primary" />,
      text: "Reclaim 40+ hours per month through workflow automation"
    },
    {
      icon: <TrendingUp size={24} className="text-primary" />,
      text: "Drive 3x more qualified leads with behavioral targeting"
    },
    {
      icon: <Zap size={24} className="text-primary" />,
      text: "Lower customer acquisition costs by up to 60%"
    }
  ];

  return (
    <section id="benefits" className="section-padding" style={{ background: "var(--gradient-soft)" }}>
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-lg-6">
            <h2 className="display-5 fw-bold mb-4">Core <span className="text-primary">Benefits</span></h2>
            <p className="lead text-muted mb-5">
              Unlock the power of automation to drive consistent growth and efficiency.
            </p>
            <div className="d-flex flex-column gap-3">
              {benefitList.map((item, idx) => (
                <div key={idx} className="d-flex align-items-center gap-3 p-4 bg-white rounded-3 shadow-sm border border-light transition-all hover-shadow">
                  {item.icon}
                  <span className="fw-semibold text-dark">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="col-lg-6">
            <div className="bg-white p-3 rounded-5 shadow-lg position-relative overflow-hidden">
               <img 
                 src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop" 
                 alt="Data Dashboard" 
                 className="img-fluid rounded-5"
               />
               <div className="position-absolute rotate-3 bottom-0 end-0 m-4 p-4 bg-white rounded-4 shadow-lg border border-primary border-opacity-10 d-flex align-items-center gap-3 animate-float" style={{ transform: "rotate(-2deg)" }}>
                  <div className="bg-success bg-opacity-10 p-2 rounded-circle text-success">
                    <TrendingUp size={32} />
                  </div>
                  <div>
                    <h5 className="fw-bold mb-0">+245% ROI</h5>
                    <p className="small text-muted mb-0">Average Portfolio Growth</p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
