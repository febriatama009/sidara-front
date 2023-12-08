import React from "react";
import { Section, SectionTitle, Card, Button } from "../components/index";
import { NavLink } from "react-router-dom";

const Desa = () => {
  return (
    <Section className={`gap-y-4`}>
      <SectionTitle>Daftar Kecamatan</SectionTitle>
      <div className="grid gap-y-4">
        <div className="flex gap-x-4">
          <Card
            className={`w-full block bg-cover p-[0px]`}
            style={{
              backgroundImage: `url(
              "https://images.unsplash.com/photo-1533077162801-86490c593afb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
              )`,
            }}
          >
            <div className="w-full h-full bg-gradient-to-t from-black py-[32px] px-[20px] grid gap-y-8">
              <p className="text-white text-xl font-bold pt-20">Toba</p>
              <div className="flex items-center gap-x-6">
                <p className="text-white text-xs">
                  7 Desa/Kelurahan ada di kecamatan ini
                </p>
                <NavLink to={`toba`}>
                  <Button
                    className={`border-white bg-opacity-10 text-white hover:border-opacity-0`}
                  >
                    Detail
                  </Button>
                </NavLink>
              </div>
            </div>
          </Card>
          <Card
            className={`w-full block bg-cover p-[0px]`}
            style={{
              backgroundImage: `url(
              "https://plus.unsplash.com/premium_photo-1669047983005-7a004484d260?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
              )`,
            }}
          >
            <div className="w-full h-full bg-gradient-to-t from-black py-[32px] px-[20px] grid gap-y-8">
              <p className="text-white text-xl font-bold pt-20">Tayan Hulu</p>
              <div className="flex items-center gap-x-6">
                <p className="text-white text-xs">
                  7 Desa/Kelurahan ada di kecamatan ini
                </p>
                <Button
                  className={`border-white bg-opacity-10 text-white hover:border-opacity-0`}
                >
                  Detail
                </Button>
              </div>
            </div>
          </Card>
          <Card
            className={`w-full block bg-cover p-[0px]`}
            style={{
              backgroundImage: `url(
              "https://images.unsplash.com/photo-1498598457418-36ef20772bb9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
              )`,
            }}
          >
            <div className="w-full h-full bg-gradient-to-t from-black py-[32px] px-[20px] grid gap-y-8">
              <p className="text-white text-xl font-bold pt-20">Tayan Hilir</p>
              <div className="flex items-center gap-x-6">
                <p className="text-white text-xs">
                  7 Desa/Kelurahan ada di kecamatan ini
                </p>
                <Button
                  className={`border-white bg-opacity-10 text-white hover:border-opacity-0`}
                >
                  Detail
                </Button>
              </div>
            </div>
          </Card>
          <Card
            className={`w-full block bg-cover p-[0px]`}
            style={{
              backgroundImage: `url(
              "https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
              )`,
            }}
          >
            <div className="w-full h-full bg-gradient-to-t from-black py-[32px] px-[20px] grid gap-y-8">
              <p className="text-white text-xl font-bold pt-20">Sekayam</p>
              <div className="flex items-center gap-x-6">
                <p className="text-white text-xs">
                  7 Desa/Kelurahan ada di kecamatan ini
                </p>
                <Button
                  className={`border-white bg-opacity-10 text-white hover:border-opacity-0`}
                >
                  Detail
                </Button>
              </div>
            </div>
          </Card>
        </div>
        <div className="flex gap-x-4">
          <Card
            className={`w-full block bg-cover p-[0px]`}
            style={{
              backgroundImage: `url(
              "https://images.unsplash.com/photo-1533077162801-86490c593afb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
              )`,
            }}
          >
            <div className="w-full h-full bg-gradient-to-t from-black py-[32px] px-[20px] grid gap-y-8">
              <p className="text-white text-xl font-bold pt-20">Toba</p>
              <div className="flex items-center gap-x-6">
                <p className="text-white text-xs">
                  7 Desa/Kelurahan ada di kecamatan ini
                </p>
                <Button
                  className={`border-white bg-opacity-10 text-white hover:border-opacity-0`}
                >
                  Detail
                </Button>
              </div>
            </div>
          </Card>
          <Card
            className={`w-full block bg-cover p-[0px]`}
            style={{
              backgroundImage: `url(
              "https://plus.unsplash.com/premium_photo-1669047983005-7a004484d260?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
              )`,
            }}
          >
            <div className="w-full h-full bg-gradient-to-t from-black py-[32px] px-[20px] grid gap-y-8">
              <p className="text-white text-xl font-bold pt-20">Tayan Hulu</p>
              <div className="flex items-center gap-x-6">
                <p className="text-white text-xs">
                  7 Desa/Kelurahan ada di kecamatan ini
                </p>
                <Button
                  className={`border-white bg-opacity-10 text-white hover:border-opacity-0`}
                >
                  Detail
                </Button>
              </div>
            </div>
          </Card>
          <Card
            className={`w-full block bg-cover p-[0px]`}
            style={{
              backgroundImage: `url(
              "https://images.unsplash.com/photo-1498598457418-36ef20772bb9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
              )`,
            }}
          >
            <div className="w-full h-full bg-gradient-to-t from-black py-[32px] px-[20px] grid gap-y-8">
              <p className="text-white text-xl font-bold pt-20">Tayan Hilir</p>
              <div className="flex items-center gap-x-6">
                <p className="text-white text-xs">
                  7 Desa/Kelurahan ada di kecamatan ini
                </p>
                <Button
                  className={`border-white bg-opacity-10 text-white hover:border-opacity-0`}
                >
                  Detail
                </Button>
              </div>
            </div>
          </Card>
          <Card
            className={`w-full block bg-cover p-[0px]`}
            style={{
              backgroundImage: `url(
              "https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
              )`,
            }}
          >
            <div className="w-full h-full bg-gradient-to-t from-black py-[32px] px-[20px] grid gap-y-8">
              <p className="text-white text-xl font-bold pt-20">Sekayam</p>
              <div className="flex items-center gap-x-6">
                <p className="text-white text-xs">
                  7 Desa/Kelurahan ada di kecamatan ini
                </p>
                <Button
                  className={`border-white bg-opacity-10 text-white hover:border-opacity-0`}
                >
                  Detail
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </Section>
  );
};

export default Desa;
