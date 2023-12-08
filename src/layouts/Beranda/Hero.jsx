import React from "react";
import { Section } from "../../components/index";

const Hero = () => {
  return (
    <Section>
      <div className="bg-[url(/assets/images/bg-hero.png)] bg-cover h-[500px]">
        <div className="grid py-[60px] gap-y-5 justify-center mx-auto items-center text-center">
          <p>Selamat Datang Di Website</p>
          <img
            src="/assets/svg/logo-sidarasalimba.svg"
            alt="Logo Sidarasalimba"
            width={500}
            controls
          />
        </div>
      </div>
      <div className="-mt-[260px] flex justify-center mx-auto items-center w-fit border-8 border-[#fff] rounded-md shadow-xl">
        <iframe
          className="w-[764px] aspect-video rounded-lg"
          src="/assets/videos/videos.mp4"
        ></iframe>
      </div>
    </Section>
  );
};

export default Hero;
