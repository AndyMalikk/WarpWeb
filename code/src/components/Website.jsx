import React from "react";

const Website = ({ website }) => {
  return (
    <>
      <div>
        <h2 className="paragraph-white">{website.title}</h2>
        <img
          src={website.src}
          alt={website.alt}
          className="w-full h-[30vh] object-cover mb-4 rounded-xl"
        />
      </div>
    </>
  );
};

export default Website;
