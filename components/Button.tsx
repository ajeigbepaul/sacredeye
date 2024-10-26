import React from "react";

const Button = ({
  buttonClass,
  name,
  handleClick,
}: {
  buttonClass: string;
  name: string;
  handleClick?: () => void;
}) => {
  return (
    <button onClick={handleClick} className={`${buttonClass}`}>
      {name}
    </button>
  );
};

export default Button;
