import React from "react";
import { Card, Section, SectionTitle } from "../../components/index";

const TentangSidaraSalimba = () => {
  return (
    <Section>
      <div className="flex justify-between gap-x-10 items-center">
        <div className="grid gap-y-6 w-6/12">
          <SectionTitle className="text-primary text-xl font-medium">
            Apa Itu Sidarasalimba
          </SectionTitle>
          <p className="text-sm text-textColor leading-9 py-6">
            Sidarasalimba merupakan aplikasi web berbasis spasial pemetaan.
            Berisi informasi terbaru terkait sebaran sanitasi Limbah Dikabupaten
            Sanggau. Serta menyajikan data-data sanitasi dan air limbah terkait
            kondisi eksisting yang akan dibangun, dan rekomendasi usulan
            pembangunan. Semoga dengan adanya SIDARASALIMBA dapat membantu
            Pemerintah Kabupaten Sanggau dalam merencanakan pembangunan
            kedepannya yang dilakukan oleh Dinas Perumahan, Cipta Karya, Tata
            Ruang Dan Pertanahan Kabupaten Sanggau.
          </p>
        </div>
        <div className="grid gap-y-6">
          <Card>
            <div className="flex gap-x-6">
              <img src="/assets/svg/icons/01.svg" alt="" />
              <div className="grid gap-y-2">
                <p className="">Sanitasi</p>
                <p className="text-sm text-textColor leading-loose">
                  Sebaran eksisting sanitasi di kabupaten sanggau.
                </p>
              </div>
            </div>
          </Card>
          <Card>
            <div className="flex gap-x-6">
              <img src="/assets/svg/icons/02.svg" alt="" />
              <div className="grid gap-y-2">
                <p className="">Informasi</p>
                <p className="text-sm text-textColor leading-loose">
                  Informasi data terbaru, terkait sanitasi
                </p>
              </div>
            </div>
          </Card>
          <Card>
            <div className="flex gap-x-6">
              <img src="/assets/svg/icons/03.svg" alt="" />
              <div className="grid gap-y-2">
                <p className="">Spasial</p>
                <p className="text-sm text-textColor leading-loose">
                  Sistem Informasi berbasis spasial pemetaan.
                </p>
              </div>
            </div>
          </Card>
          <Card>
            <div className="flex gap-x-6">
              <img src="/assets/svg/icons/04.svg" alt="" />
              <div className="grid gap-y-2">
                <p className="">Grafik</p>
                <p className="text-sm text-textColor leading-loose">
                  Menampilkan data-data dengan grafiK
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </Section>
  );
};

export default TentangSidaraSalimba;
