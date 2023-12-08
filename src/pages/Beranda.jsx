import React from "react";
import { NavBar, Footer } from "../components/index";
import {
  Hero,
  TentangSidaraSalimba,
  RekapanData,
  Grafik,
  TabelRankKab,
  TabelRankKec,
  Galeri,
  StatistikPengunjung,
} from "../layouts/Beranda";

const Beranda = () => {
  return (
    <>
      <Hero />
      <TentangSidaraSalimba />
      <RekapanData />
      <Grafik />
      <TabelRankKab />
      <TabelRankKec />
      <Galeri />
      <StatistikPengunjung />
    </>
  );
};

export default Beranda;
