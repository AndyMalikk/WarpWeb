import React from "react";
import ParticlesComponent from "./Particles";

const Hero = (props) => {
  return (
    <>
      {/* Library for particles */}
      {/*<ParticlesComponent id="particles" />*/}
      <div className="flex flex-col justify-center mx-2 items-center h-[20rem] lg:h-[35rem] lg:mb-32 ">
        <p className="paragraph text-accent mb-2 text-center ">
          {props.subheading}
        </p>
        <h1 className="hero-heading">{props.heading}</h1>
      </div>
    </>
  );
};

export default Hero;
