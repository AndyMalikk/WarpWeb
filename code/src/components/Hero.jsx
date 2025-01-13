import React from "react";
import ParticlesComponent from "./Particles";
import videoBg from "../../public/imgs/bg-video-timelapse-finalV3.mp4";
import Button from "./Button";

const Hero = (props) => {
  return (
    <>
      {/* Library for particles 
      <ParticlesComponent id="particles" /> */}
      {/*<div className="bg-[url('imgs/bg-image.webp')] bg-cover bg-no-repeat m-4 rounded-xl">
        <div className="flex flex-col justify-center mx-2 items-start page-width h-[97vh] lg:mb-40">
          <p className="paragraph text-accent mb-16 text-center ">{props.subheading}</p>
          <h1 className="hero-heading max-w-[800px]">{props.heading}</h1>
        </div>
    </div>*/}
      <div className="w-full h-[100vh] mb-16 lg:mb-40">
        {/*OVERLAY*/}
        <div className="absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.7)]"></div>
        {/*CONTENT*/}
        <video
          src={videoBg}
          autoPlay
          loop
          muted
          className="w-full h-full object-cover"
        />
        {/*CONTENT*/}
        <div className="page-width">
          <div className="absolute w-full h-full top-0 flex flex-col justify-center items-start text-white mx-4">
            <p className="paragraph text-accent mb-8">{props.subheading}</p>
            <h1 className="hero-heading max-w-[800px] mb-8">{props.heading}</h1>
            <Button
              label="Kontaktovat"
              className="button"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
