import React from "react";

const Review = (props) => {
  return (
    <>
      <div className="bg-secondary mb-16 text-center p-12 lg:p-12 lg:my-40">
        <p className="text-white paragraph mb-2 lg:mb-6">{props.reviewText}</p>
        <div className="flex justify-center items-center gap-3">
          <img
            src={props.reviewImg}
            alt=""
            className="rounded-full w-[35px] h-[35px] lg:w-[45px] lg:h-[45px]"
          />
          <p className="text-white font-bold paragraph">{props.name}</p>
        </div>
      </div>
    </>
  );
};

export default Review;
