import React from "react";
import { Section, Card, Button, SectionTitle } from "../../components/index";

const RekapanData = () => {
  return (
    <Section>
      <SectionTitle>Data Rekapan Sidarasalimba</SectionTitle>
      <div className="flex gap-x-[26px]">
        <Card className="grid gap-y-8 w-full">
          <img src="/assets/svg/icons/water.svg" alt="Water" />
          <div className="grid gap-y-2">
            <p className="text-textColor">Air Limbah Domestik</p>
            <p className="text-2xl font-bold text-textImportant">126 Sebaran</p>
          </div>
          <hr className="w-2/12" />
          <Button>Lihat Detail</Button>
        </Card>
        <Card className="grid gap-y-8 w-full">
          <img src="/assets/svg/icons/recycle.svg" alt="Water" />
          <div className="grid gap-y-2">
            <p className="text-textColor">Persampahan</p>
            <p className="text-2xl font-bold text-textImportant">126 Sebaran</p>
          </div>
          <hr className="w-2/12" />
          <Button>Lihat Detail</Button>
        </Card>
        <Card className="grid gap-y-8 w-full">
          <img src="/assets/svg/icons/pipes.svg" alt="Water" />
          <div className="grid gap-y-2">
            <p className="text-textColor">Drainase</p>
            <p className="text-2xl font-bold text-textImportant">126 Sebaran</p>
          </div>
          <hr className="w-2/12" />
          <Button>Lihat Detail</Button>
        </Card>
      </div>
    </Section>
  );
};

export default RekapanData;
