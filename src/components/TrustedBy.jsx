import React from "react";

export default function TrustedBy() {
  const companies = [
    { name: "FINVEST", style: { fontWeight: "900", letterSpacing: "-1px" } },
    { name: "SKYLINE", style: { letterSpacing: "5px", textTransform: "uppercase" } },
    { name: "OMEGA", style: { fontWeight: "300", fontStyle: "italic" } },
    { name: "STRIPE", style: { fontWeight: "800", letterSpacing: "1px" } },
    { name: "VERVE", style: { textTransform: "lowercase", fontWeight: "700" } }
  ];

  return (
    <section className="py-5 bg-white border-top border-bottom overflow-hidden">
      <div className="container">
        <p className="text-center small text-muted text-uppercase fw-bold mb-5" style={{ letterSpacing: "3px", opacity: "0.5" }}>
          Powering the Next Generation of Brands
        </p>
        <div className="d-flex justify-content-center align-items-center flex-wrap gap-4 gap-md-5 opacity-75">
          {companies.map((c, idx) => (
            <div key={idx} className="px-3 grayscale hover-grayscale-0 transition-all cursor-default">
               <h3 className="mb-0 user-select-none" style={c.style}>{c.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
