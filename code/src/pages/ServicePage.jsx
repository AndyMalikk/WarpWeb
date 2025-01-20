import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import TextSection from "../components/TextSection";
import Card from "../components/Card";
import Tabs from "../components/Tabs";
import Mag from "../../public/icons/mag.svg";
import Design from "../../public/icons/design.svg";
import Markup from "../../public/icons/markup.svg";
import Pencil from "../../public/icons/pencil-solid.svg";
import Content from "../../public/icons/copy-solid.svg";
import Network from "../../public/icons/network-wired-solid.svg";
import Code from "../../public/icons/code-solid.svg";
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
        body=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque scelerisque diam risus, eu cursus velit scelerisque eget. Sed quis maximus purus, sed lacinia leo. Sed ultrices consequat massa, eget congue metus posuere quis. "
        img="./imgs/MobileUI-UX-amico.png"
      />
      <h3 className="heading-white page-width mb-16 p-4">
        Můj postup práce při <span className="text-accent">UI/UX Designu</span>
      </h3>
      <Tabs
        number="1."
        title="Rešerše"
        svg={Mag}
        items={["item1", "item2", "item3"]}
      />
      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
      <Tabs
        number="2."
        title="Návrh"
        svg={Network}
        items={["item1", "item2", "item3"]}
      />
      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
      <Tabs
        number="3."
        title="Design"
        svg={Pencil}
        items={["item1", "item2", "item3"]}
      />
      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
      <Tabs
        number="4."
        title="Doplnění obsahu"
        svg={Content}
        items={["item1", "item2", "item3"]}
      />
      <div className="mb-16 lg:mb-40"></div>

      <Card
        subheading="2."
        heading="WEB DEVELOPMENT"
        body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit sit amet lorem nec viverra. Etiam libero nisi. 
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque scelerisque diam risus, eu cursus velit scelerisque eget. Sed quis maximus purus, sed lacinia leo. Sed ultrices consequat massa, eget congue metus posuere quis. "
        img="./imgs/Open source-amico.png"
        reverse={true}
      />
      <h3 className="heading-white page-width mb-16 p-4">
        Můj postup práce při <span className="text-accent">WEB DEVELOPMENTU</span>
      </h3>
      <Tabs
        number="1."
        title="Rešerše"
        svg={Mag}
        items={["Analýza konkurence", "", "item3"]}
      />
      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
      <Tabs
        number="2."
        title="Návrh"
        svg={Network}
        items={["item1", "item2", "item3"]}
      />
      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
      <Tabs
        number="3."
        title="Vývoj"
        svg={Code}
        items={["item1", "item2", "item3"]}
      />
      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
      <Tabs
        number="4."
        title="Doplnění obsahu"
        svg={Content}
        items={["item1", "item2", "item3"]}
      />
      <div className="mb-16 lg:mb-40"></div>
      <Footer />
    </>
  );
};

export default ServicePage;
