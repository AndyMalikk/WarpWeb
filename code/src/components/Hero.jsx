import React from "react";
import ParticlesComponent from "./Particles";

const Hero = (props) => {
  return (
    <>
      {/* Library for particles */}
      <ParticlesComponent id="particles" />
      <div className="flex  flex-col justify-center items-center h-[70vh]">
        <p className="heading">{props.subheading}</p>
        <h1 className="hero-heading">{props.heading}</h1>
      </div>
    </>
  );
};

export default Hero;
