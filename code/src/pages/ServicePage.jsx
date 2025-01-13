import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import TextSection from "../components/TextSection";
import Intro from "../components/Intro";

const ServicePage = () => {
  return (
    <>
      <Navbar />
      <Hero heading="Služby které nabízím" />
      <TextSection
        heading="Lorem ipsum lorem ipsum"
        body="Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum. Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum."
      />

      <Footer />
    </>
  );
};

export default ServicePage;
