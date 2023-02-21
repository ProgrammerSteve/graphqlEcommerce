import React from "react";
const NavTitle = ({ handleNavigationHome }) => {
  return (
    <div onClick={handleNavigationHome}>
      <h1 className="cursor-pointer h-[100px] w-[200px] md:w-[100px] mdlg:w-[130px] lg:w-[160px] 2xl:w-[200px] grid place-items-center text-xl md:text-lg mdlg:text-xl lg:text-2xl xl:text-3xl font-semibold text-white">
        Ecommerce CMS
      </h1>
    </div>
  );
};
export default NavTitle;
