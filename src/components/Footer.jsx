import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="w-full mt-8">
        <div className="w-10/12 border-t-2 mx-auto border-t-grayBorder">
          <div className="flex justify-between p-5 mx-auto items-start mt-10">
            {/* Keterangan */}
            <div className="grid gap-y-6 w-5/12">
              <img
                src="/assets/svg/logo-sidarasalimba.svg"
                alt="Logo Sidarasalimba"
                width={260}
              />
              <p className="text-textColor leading-loose">
                Sebuah Sistem Informasi yang menampilkan data-data yang
                berkaitan dengan Sanitasi dan Air Limbah di Kabupaten Sanggau.
              </p>
            </div>

            {/* Bantuan */}
            <div className="grid gap-y-6">
              <p className="text-primary">Bantuan</p>
              <ul className="grid gap-y-6">
                <NavLink to={`tentang`}>
                  <li className="text-sm text-textColor hover:text-primary">
                    Tentang
                  </li>
                </NavLink>
                <NavLink to={`sebaran`}>
                  <li className="text-sm text-textColor hover:text-primary">
                    Sebaran Spasial
                  </li>
                </NavLink>
                <NavLink to={`desa`}>
                  <li className="text-sm text-textColor hover:text-primary">
                    Desa Sanggau
                  </li>
                </NavLink>
                <NavLink to={`grafik`}>
                  <li className="text-sm text-textColor hover:text-primary">
                    Grafik
                  </li>
                </NavLink>
                <NavLink to={`struktur-organisasi`}>
                  <li className="text-sm text-textColor hover:text-primary">
                    Struktur Organisasi
                  </li>
                </NavLink>
                <NavLink to={`referensi-hukum`}>
                  <li className="text-sm text-textColor hover:text-primary">
                    Referensi Hukum
                  </li>
                </NavLink>
              </ul>
            </div>

            {/* Link Terkait */}
            <div className="grid gap-y-6">
              <p className="text-primary">Link Terkait</p>
              <ul className="grid gap-y-6">
                <li className="text-sm text-textColor hover:text-primary">
                  Web Sanggau
                </li>
                <li className="text-sm text-textColor hover:text-primary">
                  Satu Data Kalbar
                </li>
                <li className="text-sm text-textColor hover:text-primary">
                  Lapor Data
                </li>
              </ul>
            </div>

            {/* Follow Us */}
            <div className="grid gap-y-6">
              <p className="text-primary">Sosial Media</p>
              <ul className="grid gap-y-6">
                <li className="text-sm text-textColor hover:text-primary">
                  Youtube
                </li>
                <li className="text-sm text-textColor hover:text-primary">
                  Facebook
                </li>
                <li className="text-sm text-textColor hover:text-primary">
                  Instagram
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* CopyRight */}
        <div className="text-center text-sm text-textColor p-12">
          Copyright © 2023. Sidarasalimba. All rights reserved.
        </div>
      </div>
    </>
  );
};

export default Footer;
