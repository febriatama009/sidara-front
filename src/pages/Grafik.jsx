import React, { useState } from "react";
import PieChart from "../components/Charts/PieChart";
import BarCharts from "../components/Charts/BarCharts";
import { Section, SectionTitle, Card } from "../components";
import { Data } from "../utils/Data";

const Grafik = () => {
  const [chartData, setChartData] = useState({
    labels: Data.map((data) => data.year),
    datasets: [
      {
        data: Data.map((data) => data.userGain),
        backgroundColor: [
          "#4bc0c0",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "gray",
        borderWidth: 0,
      },
    ],
  });
  return (
    <>
      <Section>
        <SectionTitle>Grafik & Data</SectionTitle>
        <div className="grid gap-y-4">
          <Card className={`w-full`}>
            <p className="pb-12 text-xl font-medium">Air Limbah Domestik</p>
            <BarCharts chartData={chartData} />
          </Card>
          <Card className={`w-full`}>
            <p className="pb-12 text-xl font-medium">Persampahan</p>
            <BarCharts chartData={chartData} />
          </Card>
          <Card className={`w-full`}>
            <p className="pb-12 text-xl font-medium">Drainase</p>
            <BarCharts chartData={chartData} />
          </Card>
          <Card className={`w-full`}>
            <p className="pb-12 text-xl font-medium">Rumah Tangga</p>
            <BarCharts chartData={chartData} />
          </Card>
          <Card className={`w-full`}>
            <p className="pb-12 text-xl font-medium">Capaian Layanan SPM</p>
            <PieChart chartData={chartData} />
          </Card>
          <Card className={`w-full`}>
            <p className="pb-12 text-xl font-medium">
              Capaian Layanan SPM Kecamatan
            </p>
            <BarCharts chartData={chartData} />
          </Card>
          <Card className={`w-full`}>
            <p className="pb-12 text-xl font-medium">Akses Layak</p>
            <BarCharts chartData={chartData} />
          </Card>
          <Card className={`w-full`}>
            <p className="pb-12 text-xl font-medium">Akses Tidak Layak</p>
            <BarCharts chartData={chartData} />
          </Card>
        </div>
      </Section>
    </>
  );
};

export default Grafik;
