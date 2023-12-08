import React from "react";
import { Button, Card, Section, SectionTitle } from "../components/index";

const ReferensiHukum = () => {
  return (
    <>
      <Section>
        <SectionTitle>Referensi Hukum</SectionTitle>
        <div className="flex gap-x-4 ">
          <Card className={`grid gap-y-2 w-4/12`}>
            <img
              src="/assets/svg/pdf.svg"
              alt=""
              className="items-center mx-auto mb-6"
            />
            <p className="text-center text-lg truncate">
              PP Nomor 2 Tahun 2018
            </p>
            <p className="text-center text-sm text-textColor truncate">
              Standar Pelayanan Minimum
            </p>

            <Button
              className={`border-none text-blue-500 hover:bg-white hover:text-blue-800 w-full`}
            >
              Lihat Detail
            </Button>
          </Card>
          <Card className={`grid gap-y-2 w-4/12`}>
            <img
              src="/assets/svg/pdf.svg"
              alt=""
              className="items-center mx-auto mb-6"
            />
            <p className="text-center text-lg truncate">
              Peraturan Menteri Lampiran II 29/PRT/M/2018
            </p>
            <p className="text-center text-sm text-textColor truncate">
              Standar Teknis Standar Pelayanan Minimal Pekerjaan Umum dan
              Perumahan Rakyat
            </p>

            <Button
              className={`border-none text-blue-500 hover:bg-white hover:text-blue-800 w-full`}
            >
              Lihat Detail
            </Button>
          </Card>
          <Card className={`grid gap-y-2 w-4/12`}>
            <img
              src="/assets/svg/pdf.svg"
              alt=""
              className="items-center mx-auto mb-6"
            />
            <p className="text-center text-lg truncate">
              Peraturan Menteri Lampiran I 29/PRT/M/2018
            </p>
            <p className="text-center text-sm text-textColor truncate">
              Standar Teknis Standar Pelayanan Minimal Pekerjaan Umum dan
              Perumahan Rakyat
            </p>

            <Button
              className={`border-none text-blue-500 hover:bg-white hover:text-blue-800 w-full`}
            >
              Lihat Detail
            </Button>
          </Card>
          <Card className={`grid gap-y-2 w-4/12`}>
            <img
              src="/assets/svg/pdf.svg"
              alt=""
              className="items-center mx-auto mb-6"
            />
            <p className="text-center text-lg truncate">
              PermenPUPR 29/PRT/M/2018
            </p>
            <p className="text-center text-sm text-textColor truncate">
              Standar Teknis Standar Pelayanan Minimal Pekerjaan Umum dan
              Perumahan Rakyat
            </p>

            <Button
              className={`border-none text-blue-500 hover:bg-white hover:text-blue-800 w-full`}
            >
              Lihat Detail
            </Button>
          </Card>
        </div>
        <div className="flex mt-4">
          <Card className={`grid gap-y-2`}>
            <img
              src="/assets/svg/pdf.svg"
              alt=""
              className="items-center mx-auto mb-6"
            />
            <p className="text-center text-lg truncate">
              PP Nomor 2 Tahun 2018
            </p>
            <p className="text-center text-sm text-textColor truncate">
              Standar Pelayanan Minimum
            </p>

            <Button
              className={`border-none text-blue-500 hover:bg-white hover:text-blue-800 w-full`}
            >
              Lihat Detail
            </Button>
          </Card>
        </div>
      </Section>
    </>
  );
};

export default ReferensiHukum;
