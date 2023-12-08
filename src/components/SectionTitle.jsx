import React from "react";

const SectionTitle = ({ children, className }) => {
  return (
    <div className={`${className} text-primary text-xl font-medium pb-8`}>
      {children}
    </div>
  );
};

export default SectionTitle;
