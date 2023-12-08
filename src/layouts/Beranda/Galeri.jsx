import React from "react";
import { Section, SectionTitle } from "../../components/index";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

const Galeri = () => {
  return (
    <Section>
      <div className="flex w-full justify-between">
        <SectionTitle>Galeri</SectionTitle>
        <div className="flex gap-x-4">
          <BsArrowLeft size={24} />
          <BsArrowRight size={24} />
        </div>
      </div>
      <img src="/assets/images/galeri.png" alt="" />
      <p className="text-white -mt-16 ml-8">
        Foto-foto Kegiatan di Bidang Sanitasi dan Air limbah
      </p>
    </Section>
  );
};

export default Galeri;
