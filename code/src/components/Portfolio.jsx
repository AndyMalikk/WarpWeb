import React from "react";
import Button from "./Button";

const Portfolio = (props) => {
  {
    /*maps through images array and adds the following code into every index. The array is set in App.jsx*/
  }
  const imageElements = props.images.map((image, index) => (
    <img
      key={index}
      src={image}
      alt=""
      className="w-full md:w-1/2 lg:w-1/4"
    ></img>
  ));

  return (
    <>
      {/* text container */}
      <div className="bg-secondary pb-16 lg:my-40">
        <div className="text-center mb-8 pt-8">
          <p className="paragraph text-white">Moje projekty</p>
          <h2 className="heading">Portfolio</h2>
        </div>

        {/* img container */}
        <div className="flex flex-col md:flex-row md:justify-center md:flex-wrap lg:justify-center mb-4 md:mb-8">{imageElements}</div>
        <div className="flex justify-center items-center">
          <Button
            label="Zobrazit celé portfolio"
            className="button"
          />
        </div>
      </div>
    </>
  );
};

export default Portfolio;
