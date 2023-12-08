import React from "react";
import { Button } from "../components/index";
import BottomNav from "./BottomNav";

const NavBar = () => {
  return (
    <>
      <div className="w-full bg-white">
        {/* Top */}
        <div className="border-b-2 border-grayBorder">
          <div className="flex justify-between p-5 w-10/12 mx-auto items-center">
            <div>
              <img
                src="/assets/images/logosidarasalimba.png"
                alt="Logo Sidarasalimba"
                width={80}
              />
            </div>
            <div>
              <img
                src={"/assets/svg/logo-sidarasalimba.svg"}
                alt="Your SVG"
                width={260}
              />
            </div>
            <Button>Login</Button>
          </div>
        </div>
      </div>
      <div className="w-ful sticky top-0 drop-shadow-xl backdrop-blur-sm bg-white/70 ">
        <BottomNav />
      </div>
    </>
  );
};

export default NavBar;
