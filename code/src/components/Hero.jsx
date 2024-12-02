import React from "react";
import ParticlesComponent from "./Particles";

const Hero = (props) => {
  return (
    <>
      {/* Library for particles */}
      <ParticlesComponent id="particles" />
      <div className="flex flex-col justify-center mx-2 mb-8 items-center h-[40vh] lg:h-[55vh] xl:h-[70vh] lg:mb-32">
        <p className="paragraph text-accent mb-2 text-center">
          {props.subheading}
        </p>
        <h1 className="hero-heading">{props.heading}</h1>
      </div>
    </>
  );
};

export default Hero;
