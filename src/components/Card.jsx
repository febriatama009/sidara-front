import React from "react";

const Card = ({ children, className, style }) => {
  return (
    <div
      className={`${className} p-[32px] border border-gray-100  shadow-sm rounded-md`}
      style={style}
    >
      {children}
    </div>
  );
};

export default Card;
