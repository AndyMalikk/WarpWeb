import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Intro from "../components/Intro";
import Portfolio from "../components/Portfolio";
import Services from "../components/Services";
import Review from "../components/Review";
import Footer from "../components/Footer";
import TextSection from "../components/TextSection";
import Card from "../components/Card";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Hero
        subheading="Buďte vidět. Buďte online."
        heading="Buďte tam kde vás zákazníci hledají"
      />
      <Intro />
      <Portfolio images={["./imgs/EmptyIMG.jpg", "./imgs/EmptyIMG.jpg", "./imgs/EmptyIMG.jpg", "./imgs/EmptyIMG.jpg"]} />
      <TextSection
        heading="Webové stránky nemusí stát statisíce."
        body="Nabízím webové stránky za dostupné ceny, ideální pro malé byznysy a začínající podnikatele."
      />

      <h2 className="heading text-center mb-16">Služby</h2>

      <Card
        subheading="1."
        heading="UI/UX Design"
        body="Navrhuji rozhraní, která zaujmou vzhledem a usnádní práci vašim zákazníkům. Kladu důraz na jednoduchost, přhlednost a pohodlí při používání."
        img="./imgs/EmptyIMG.jpg"
      />
      <Card
        subheading="2."
        heading="WEB DEVELOPMENT"
        body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit sit amet lorem nec viverra. Etiam libero nisi."
        img="./imgs/EmptyIMG.jpg"
        reverse={true}
      />
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
