import React from "react";

const Button = ({ onClick, btnText }) => {
  return <button 
  className="w-full h-10 bg-indigo-600 text-xl text-white rounded-lg shadow-lg cursor-pointer hover:bg-indigo-900 hover:scale-[1.02]"
  onClick={onClick}>{btnText}</button>;
};

export default Button;
