import React from "react";
import Button from "../Button";

const Services = () => {
  return (
    <>
      <div className="p-4 flex flex-col page-width lg:mb-40 xl:flex-row-reverse xl:justify-around xl:gap-24">
        {/* Header / Buttons*/}
        <div className="mb-8 xl:w-1/2 ">
          <p className="paragraph text-white">Moje role</p>
          <h2 className="heading mb-4">Služby</h2>
          <Button label="UI/UX DESIGN" className="button-service mb-2" />
          <br />
          <Button label="WEB DEVELOPMENT" className="button-service" />
        </div>
        {/* Text */}
        <div className=" xl:w-1/2 border-l-[1px] border-accent p-8 ">
          <h3 className="heading2 mb-4">UI/UX DESIGN</h3>
          <p className="paragraph text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            justo mauris, pellentesque vitae lacinia id, rutrum id metus.
            Suspendisse tempor eros diam, nec condimentum ante egestas eu.
            Maecenas sit amet ligula vitae est scelerisque tempor. Nullam et
            dapibus ante.
          </p>
        </div>
      </div>
    </>
  );
};

export default Services;
