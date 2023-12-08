import React from "react";
import { Section, SectionTitle } from "../components/index";

const StrukturOrganisasi = () => {
  return (
    <>
      <Section>
        <SectionTitle className={`text-center`}>
          Struktur Organisasi Dinas Perumahan, Cipta Karya, Tata Ruang dan
          Pertanahan <br /> Kabupaten Sanggau
        </SectionTitle>

        <img src="/assets/images/struktur.png" alt="" />
      </Section>
    </>
  );
};

export default StrukturOrganisasi;
