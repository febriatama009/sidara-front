import React from "react";
import { Section, SectionTitle, Card } from "../../components/index";

const StatistikPengunjung = () => {
  return (
    <div className="py-[50px]">
      <Section className={`w-full bg-primary text-center `}>
        <div className="grid gap-y-4">
          <SectionTitle className={`text-white`}>
            Statistik Pengunjung
          </SectionTitle>
          <div className="flex gap-x-4">
            <Card className={`bg-white w-full`}>
              <p className="text-lg font-medium">213 Pengunjung</p>
              <p className="text-textColor text-sm">Hari Ini</p>
            </Card>
            <Card className={`bg-white w-full`}>
              <p className="text-lg font-medium">371 Pengunjung</p>
              <p className="text-textColor text-sm">Bulan Ini</p>
            </Card>
            <Card className={`bg-white w-full`}>
              <p className="text-lg font-medium">4365 Pengunjung</p>
              <p className="text-textColor text-sm">Tahun Ini</p>
            </Card>
            <Card className={`bg-white w-full`}>
              <p className="text-lg font-medium">4365 Pengunjung</p>
              <p className="text-textColor text-sm">Total</p>
            </Card>
          </div>

          <div className="flex gap-x-4">
            <div className="grid gap-y-4 w-full">
              <Card className={`bg-white`}>
                <div className="flex gap-x-6 text-left">
                  <img src="/assets/svg/icons/02.svg" alt="" />
                  <div className="grid gap-y-2">
                    <p className="">Alamat</p>
                    <p className="text-sm text-textColor leading-loose">
                      Jalan Sabang Merah Komplek Perkantoran Semboja, Kelurahan
                      Bunut Sanggau
                    </p>
                  </div>
                </div>
              </Card>
              <Card className={`bg-white`}>
                <div className="flex gap-x-6 text-left">
                  <img src="/assets/svg/icons/02.svg" alt="" />
                  <div className="grid gap-y-2">
                    <p className="">Telp</p>
                    <p className="text-sm text-textColor leading-loose">
                      (0564) 2020636
                    </p>
                  </div>
                </div>
              </Card>
              <Card className={`bg-white`}>
                <div className="flex gap-x-6 text-left">
                  <img src="/assets/svg/icons/02.svg" alt="" />
                  <div className="grid gap-y-2">
                    <p className="">Email</p>
                    <p className="text-sm text-textColor leading-loose">
                      dpcktrp@sanggau.go.id
                    </p>
                  </div>
                </div>
              </Card>
            </div>
            <div className="w-full">
              <Card
                className={`h-full bg-[url(/assets/images/galeri.png)]`}
              ></Card>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default StatistikPengunjung;
