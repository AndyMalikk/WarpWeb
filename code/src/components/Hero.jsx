import React from "react";
import videoBg from "../../public/imgs/bg-video-timelapse-final.mp4";
import Button from "./Button";
import { Link } from "react-router-dom";

const Hero = (props) => {
  return (
    <>
      <div className="w-full h-[100vh] mb-16 lg:mb-40">
        {/*OVERLAY*/}
        <div className="absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.7)]"></div>
        {/*VIDEOBG*/}
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
            <Link to="/kontakty">
              <Button
                label="Kontaktovat"
                className="button"
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
