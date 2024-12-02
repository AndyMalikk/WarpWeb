import React from "react";
import Button from "../Button";

const Intro = () => {
  return (
    <>
      {/*Make reusable ? */}
      {/* container */}
      <div className="flex flex-col-reverse items-center mx-8 gap-8 mb-16 md:flex-row md:justify-around lg:mb-40">
        {/* text container*/}
        <div className="lg:w-1/3">
          <h3 className="text-white paragraph">Co dělám?</h3>
          <h2 className="heading mb-3">Webové stránky na zakázku</h2>
          <p className="paragraph text-white max-w-[600px] mb-6">
            Warp je česká digitální agentura, která pomáhá firmám vyniknout
            online. <br />
            Vytvářím našim klientům webové stránky, které nejen že dobře
            vypadají, ale také jim dávají na trhu výhodu.
          </p>
          <Button label="Chci web" className="button" />
        </div>
        {/* img container */}
        <div className="lg:w-1/3">
          <img src="./imgs/EmptyIMG.jpg" alt="" className="w-full rounded-lg" />
        </div>
      </div>
    </>
  );
};

export default Intro;
