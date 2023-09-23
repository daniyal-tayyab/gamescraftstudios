import React from "react";

const BUTTON_TYPE_CLASSES = {
  default: "default",
  inverted: "inverted",
};

const Button = ({ children, buttonType, ...otherprops }) => {
  return (
    <button
      className={`button ${BUTTON_TYPE_CLASSES[buttonType]}`}
      {...otherprops}
    >
      {children}
    </button>
  );
};

export default Button;
