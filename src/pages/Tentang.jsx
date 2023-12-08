import React from "react";
import { Section, SectionTitle, Card } from "../components/index";

const Tentang = () => {
  return (
    <>
      <Section>
        <SectionTitle>Tentang Sidarasalimba</SectionTitle>
        <div className="flex gap-x-4">
          <Card className={`w-full`}>
            <img
              src="https://images.unsplash.com/photo-1533077162801-86490c593afb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
              alt="Foto Support"
              className="mb-6 w-full object-cover rounded-md"
            />
            <p className="text-lg font-medium text-textImportant mb-6">
              Sub-sistem Pengolahan Setempat
            </p>
            <p className="text-sm text-textColor leading-loose">
              Merupakan prasarana dan sarana untuk mengumpulkan dan mengolah air
              limbah domestik di lokasi sumber
            </p>
          </Card>
          <Card className={`w-full`}>
            <img
              src="https://images.unsplash.com/photo-1533077162801-86490c593afb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
              alt="Foto Support"
              className="mb-6 w-full object-cover rounded-md"
            />
            <p className="text-lg font-medium text-textImportant mb-6">
              Jenis Pelayanan Dasar Air Limbah Domestik
            </p>
            <p className="text-sm text-textColor leading-loose">
              Jenis pelayanan dasar pengolahan air limbah domestik dapat
              dilaksanakan melalui penyelenggaraan dua sistem pengelolaan, yang
              terdiri dari Sistem Pengelolaan Air Limbah Domestik Setempat
              (SPALD-S) dan Sistem Pengelolaan Air Limbah Domestik Terpusat
              (SPALD-T).
            </p>
          </Card>
        </div>
      </Section>
    </>
  );
};

export default Tentang;
