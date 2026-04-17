import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import TrustedBy from "./components/TrustedBy";
import Services from "./components/Services";
import HowItWorks from "./components/HowItWorks";
import Benefits from "./components/Benefits";
import Testimonials from "./components/Testimonials";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-light min-vh-100">
      <Header />
      <Hero />
      <TrustedBy />
      <Services />
      <HowItWorks />
      <Benefits />
      <Testimonials />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
