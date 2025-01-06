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

      <Intro
        subheading="1."
        heading="UI/UX Design"
        body="Navrhuji rozhraní, která zaujmou vzhledem a usnádní práci vašim zákazníkům. Kladu důraz na jednoduchost, přhlednost a pohodlí při používání."
        img="./imgs/EmptyIMG.jpg"
      />
      <Intro
        subheading="2."
        heading="WEB DEVELOPMENT"
        body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit sit amet lorem nec viverra. Etiam libero nisi."
        img="./imgs/EmptyIMG.jpg"
        reverse={true}
      />
      <Footer />
    </>
  );
};

export default ServicePage;
