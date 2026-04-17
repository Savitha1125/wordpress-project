import React from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Marcus Thorne",
    role: "VP of Growth at SaaSify",
    content: "Transitioning our SEO and ad management to Vanguard's AI engine was the best decision we made this year. Our CPA dropped by 45% within the first 60 days.",
    avatar: "https://i.pravatar.cc/150?u=marcus"
  },
  {
    name: "Elena Vance",
    role: "Founder of Nexa Digital",
    content: "The level of transparency and technical depth they bring is unparalleled. Their automation workflows have allowed us to scale without increasing headcount.",
    avatar: "https://i.pravatar.cc/150?u=elena"
  },
  {
    name: "Julian Brooks",
    role: "Marketing Director at RetailCore",
    content: "I've worked with many agencies, but Vanguard is the only one that truly understands the intersection of AI and conversion psychology.",
    avatar: "https://i.pravatar.cc/150?u=julian"
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-padding bg-white">
      <div className="container">
        <div className="text-center mb-5 pb-3">
          <h2 className="display-5 fw-bold mb-3">What Our <span className="text-primary">Partners</span> Say</h2>
          <p className="text-muted mx-auto" style={{ maxWidth: "600px" }}>
            We measure our success by the growth of the companies we scale.
          </p>
        </div>
        
        <div className="row g-4">
          {testimonials.map((t, idx) => (
            <div key={idx} className="col-lg-4 col-md-6">
              <div className="card-glass h-100 border-0 shadow-sm transition-all hover-translate">
                <div className="d-flex gap-1 mb-4 text-warning">
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <p className="text-dark mb-4 fst-italic" style={{ lineHeight: "1.8" }}>"{t.content}"</p>
                <div className="d-flex align-items-center gap-3 mt-auto">
                  <img src={t.avatar} alt={t.name} className="rounded-circle shadow-sm" style={{ width: "50px", height: "50px", objectFit: "cover", border: "2px solid white" }} />
                  <div>
                    <h6 className="fw-bold mb-0">{t.name}</h6>
                    <p className="small text-muted mb-0">{t.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
