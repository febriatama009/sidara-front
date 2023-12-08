import React from "react";

const Section = ({ children, className }) => {
  return (
    <div className={`${className} w-full py-[50px]`}>
      <div className={`flex-col justify-between w-10/12 mx-auto items-center`}>
        {children}
      </div>
    </div>
  );
};

export default Section;
