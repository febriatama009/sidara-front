import React from "react";
import MenuList from "./MenuList";
import { NavLink } from "react-router-dom";

const BottomNav = () => {
  return (
    <div className="w-10/12 mx-auto ">
      <ul className="flex justify-around mx-auto items-center text-textColor text-sm">
        <NavLink
          to={`/`}
          className={({ isActive }) =>
            isActive
              ? "text-primary border-b-2 border-primary hover:border-none"
              : ""
          }
        >
          <MenuList>Beranda</MenuList>
        </NavLink>
        <NavLink
          to={`tentang`}
          className={({ isActive }) =>
            isActive ? "text-primary border-b-2 border-primary " : ""
          }
        >
          <MenuList>Tentang</MenuList>
        </NavLink>
        <NavLink
          to={`sebaran`}
          className={({ isActive }) =>
            isActive ? "text-primary border-b-2 border-primary " : ""
          }
        >
          <MenuList>Sebaran</MenuList>
        </NavLink>
        <NavLink
          to={`desa`}
          className={({ isActive }) =>
            isActive ? "text-primary border-b-2 border-primary " : ""
          }
        >
          <MenuList>Desa</MenuList>
        </NavLink>
        <NavLink
          to={`grafik`}
          className={({ isActive }) =>
            isActive ? "text-primary border-b-2 border-primary " : ""
          }
        >
          <MenuList>Grafik</MenuList>
        </NavLink>
        <NavLink
          to={`struktur-organisasi`}
          className={({ isActive }) =>
            isActive ? "text-primary border-b-2 border-primary " : ""
          }
        >
          <MenuList>Struktur Org...</MenuList>
        </NavLink>
        <NavLink
          to={`referensi-hukum`}
          className={({ isActive }) =>
            isActive ? "text-primary border-b-2 border-primary " : ""
          }
        >
          <MenuList>Referensi Huk..</MenuList>
        </NavLink>
        <NavLink
          to={`pengaduan`}
          className={({ isActive }) =>
            isActive ? "text-primary border-b-2 border-primary " : ""
          }
        >
          <MenuList>Pengaduan</MenuList>
        </NavLink>
      </ul>
    </div>
  );
};

export default BottomNav;
