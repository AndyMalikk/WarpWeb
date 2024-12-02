import React from "react";
import Hero from "./components/Hero";
import Intro from "./components/homepage/Intro";
import Portfolio from "./components/homepage/Portfolio";
import Services from "./components/homepage/Services";
import Review from "./components/homepage/Review";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Hero
        subheading="Najdou si k vám zákazníci cestu?"
        heading="Digitální prezentace posune váš byznys vpřed"
      />
      <Intro />
      <Portfolio
        images={[
          "./imgs/EmptyIMG.jpg",
          "./imgs/EmptyIMG.jpg",
          "./imgs/EmptyIMG.jpg",
          "./imgs/EmptyIMG.jpg",
        ]}
      />
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

export default App;
