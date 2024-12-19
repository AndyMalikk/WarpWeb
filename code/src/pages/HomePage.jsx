import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Intro from "../components/Intro";
import Portfolio from "../components/Portfolio";
import Services from "../components/Services";
import Review from "../components/Review";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Hero
        subheading="Buďte vidět. Buďte online." /* budte videt. budte online. */
        heading="Profesionální web pro váš byznys na míru" /*Profesionalni web pro vas byznys na miru */
      />
      <Intro />
      <Portfolio images={["./imgs/EmptyIMG.jpg", "./imgs/EmptyIMG.jpg", "./imgs/EmptyIMG.jpg", "./imgs/EmptyIMG.jpg"]} />
      <Services />
      <Review
        reviewText="'Práce proběhla výborně. Byli jsme nadšeni z rychlosti vývoje i z
        celkového výsledku.'"
        name="Jana Nováková"
        reviewImg="./imgs/EmptyIMG.jpg"
      />
      <Footer />
    </>
  );
};

export default HomePage;
