import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Portfolio from "../components/Portfolio";
import Footer from "../components/Footer";

const PortfolioPage = () => {
  return (
    <>
      <Navbar />
      <Hero heading="Tvořím weby které fungují" />
      <Portfolio />
      <Footer />
    </>
  );
};

export default PortfolioPage;
