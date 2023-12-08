import React from "react";

const MenuList = ({ children, className }) => {
  return (
    <ul>
      <li
        className={`py-7 px-0 mx-0 border-b-2 border-[#fff] w-[120px] text-center hover:text-primary hover:border-b-2 hover:border-primary ${className}`}
      >
        {children}
      </li>
    </ul>
  );
};

export default MenuList;
