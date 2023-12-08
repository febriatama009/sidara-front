import React from "react";
import ReactDOM from "react-dom/client";
import {
  Beranda,
  Tentang,
  Sebaran,
  Desa,
  Grafik,
  StrukturOrganisasi,
  ReferensiHukum,
  Pengaduan,
  Root,
  NotFound,
  DaftarDesa,
  DetailDesa,
} from "./pages/index";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Beranda />,
      },
      {
        path: "tentang",
        element: <Tentang />,
      },
      {
        path: "sebaran",
        element: <Sebaran />,
      },
      {
        path: "desa",
        element: <Desa />,
        children: [
          {
            path: "toba",
            to: "toba",
            element: <DaftarDesa />,
            children: [
              {
                path: "serambai-jaya",
                element: <DetailDesa />,
              },
            ],
          },
        ],
      },
      {
        path: "grafik",
        element: <Grafik />,
      },
      {
        path: "struktur-organisasi",
        element: <StrukturOrganisasi />,
      },
      {
        path: "referensi-hukum",
        element: <ReferensiHukum />,
      },
      {
        path: "pengaduan",
        element: <Pengaduan />,
        children: [
          {
            path: "ajukan-pengaduan",
            element: "",
          },
          {
            path: "daftar-pengaduan",
            element: "",
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
