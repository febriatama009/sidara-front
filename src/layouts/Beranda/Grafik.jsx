import React, { useState } from "react";
import Chart from "chart.js/auto";
import { Card, Section, SectionTitle } from "../../components/index";
import { Data } from "../../utils/Data";
import { CategoryScale } from "chart.js";
import PieChart from "../../components/Charts/PieChart";
import BarCharts from "../../components/Charts/BarCharts";

Chart.register(CategoryScale);

const Grafik = () => {
  const [chartData, setChartData] = useState({
    labels: Data.map((data) => data.year),
    datasets: [
      {
        label: "Users Gained",
        data: Data.map((data) => data.userGain),
        backgroundColor: [
          "rgba(75,192,192,1)",
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
    <Section>
      <SectionTitle>Grafik</SectionTitle>

      <div className="grid gap-y-8">
        <div className="flex gap-x-6">
          <Card className={`w-6/12`}>
            <BarCharts chartData={chartData} />
          </Card>
          <Card className={`w-6/12`}>
            <PieChart chartData={chartData} />
          </Card>
        </div>

        <div className="flex gap-x-6">
          <Card className={`w-6/12`}>
            <BarCharts chartData={chartData} />
          </Card>
          <Card className={`w-6/12`}>
            <BarCharts chartData={chartData} />
          </Card>
        </div>
      </div>
    </Section>
  );
};

export default Grafik;
