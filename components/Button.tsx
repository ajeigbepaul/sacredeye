import React from "react";

const Button = ({buttonClass,name}:{buttonClass:string,name:string}) => {
  return <button className={`${buttonClass}`}>{name}</button>;
};

export default Button;
