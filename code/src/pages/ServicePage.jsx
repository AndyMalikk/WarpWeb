import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import TextSection from "../components/TextSection";
import Card from "../components/Card";
import Tabs from "../components/Tabs";
import Mag from "../../public/icons/mag.svg";
const ServicePage = () => {
  return (
    <>
      <Navbar />
      <Hero heading="Služby které nabízím" />
      <TextSection
        heading="Lorem ipsum"
        body="
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque scelerisque diam risus, eu cursus velit scelerisque eget. Sed quis maximus purus, sed lacinia leo. Sed ultrices consequat massa, eget congue metus posuere quis."
      />
      <Card
        subheading="1."
        heading="UI/UX Design"
        body="Navrhuji rozhraní, která zaujmou vzhledem a usnádní práci vašim zákazníkům. Kladu důraz na jednoduchost, přhlednost a pohodlí při používání. 
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque scelerisque diam risus, eu cursus velit scelerisque eget. Sed quis maximus purus, sed lacinia leo. Sed ultrices consequat massa, eget congue metus posuere quis. "
        img="./imgs/EmptyIMG.jpg"
      />
      <h3 className="heading-white page-width mb-12 p-4">
        Můj postup práce při <span className="text-accent">UI/UX Designu</span>
      </h3>
      <Tabs
        number="1."
        title="Rešerše"
        svg={Mag}
        items={["item1", "item2", "item3"]}
      />
      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />

      <Card
        subheading="2."
        heading="WEB DEVELOPMENT"
        body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit sit amet lorem nec viverra. Etiam libero nisi. 
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque scelerisque diam risus, eu cursus velit scelerisque eget. Sed quis maximus purus, sed lacinia leo. Sed ultrices consequat massa, eget congue metus posuere quis. "
        img="./imgs/EmptyIMG.jpg"
        reverse={true}
      />
      <Footer />
    </>
  );
};

export default ServicePage;
