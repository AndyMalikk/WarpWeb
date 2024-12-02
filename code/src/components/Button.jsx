import React from "react";

const Button = (props) => {
  return (
    <>
      {/* add transform */}
      {/*Maybe use prop for classname */}
      <button className={props.className}>{props.label}</button>
    </>
  );
};

export default Button;
