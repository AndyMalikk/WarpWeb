import React from "react";
import ParticlesComponent from "./Particles";

const Hero = (props) => {
  return (
    <>
      {/* Library for particles 
      <ParticlesComponent id="particles" /> */}
      <div className="bg-[url('imgs/bg-image.webp')] bg-cover bg-no-repeat m-4 rounded-xl">
        <div className="flex flex-col justify-center mx-2 items-start page-width h-[97vh] lg:mb-40">
          <p className="paragraph text-accent mb-16 text-center ">{props.subheading}</p>
          <h1 className="hero-heading max-w-[800px]">{props.heading}</h1>
        </div>
      </div>
    </>
  );
};

export default Hero;
