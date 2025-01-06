import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Intro from "../components/Intro";
import Portfolio from "../components/Portfolio";
import Services from "../components/Services";
import Review from "../components/Review";
import Footer from "../components/Footer";
import TextSection from "../components/TextSection";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Hero
        subheading="Buďte vidět. Buďte online."
        heading="Buďte tam kde vás zákazníci hledají"
      />
      <Intro
        subheading="Co dělám?"
        heading="Webové stránky na zakázku"
        body="Warp je česká digitální agentura, která pomáhá firmám vyniknout online.
        Vytvářím našim klientům webové stránky, které nejen že dobře vypadají, ale také jim dávají na trhu výhodu."
        img="./imgs/EmptyIMG.jpg"
        buttonShown={true}
        buttonLabel="CHCI WEB"
      />
      <Portfolio images={["./imgs/EmptyIMG.jpg", "./imgs/EmptyIMG.jpg", "./imgs/EmptyIMG.jpg", "./imgs/EmptyIMG.jpg"]} />
      <TextSection
        heading="Webové stránky nemusí stát statisíce."
        body="Nabízíme webové stránky za dostupné ceny, ideální pro malé byznysy a začínající podnikatele."
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

export default HomePage;
