import React, { useRef, useEffect, useState } from "react";
import { Section, SectionTitle } from "../components/index";
import mapboxgl from "mapbox-gl";

mapboxgl.accessToken =
  "pk.eyJ1IjoidGFtYTAwOSIsImEiOiJjbG1pdTdmNGsyYnByM2lwODgxbGM3Ynl1In0.L1-Li6hE3dHOdPI907VBqQ";

const Sebaran = () => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(109.3425039);
  const [lat, setLat] = useState(-0.0263303);
  const [zoom, setZoom] = useState(12);

  useEffect(() => {
    if (!map.current) {
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: "mapbox://styles/tama009/clmivqmd001mm01qua5s0bmex",
        center: [lng, lat],
        zoom: zoom,
      });

      map.current.on("move", () => {
        setLng(map.current.getCenter().lng.toFixed(4));
        setLat(map.current.getCenter().lat.toFixed(4));
        setZoom(map.current.getZoom().toFixed(2));
      });
    }
  }, [lng, lat, zoom]);
  return (
    <>
      <Section>
        <SectionTitle>Peta Sebaran</SectionTitle>
        <div ref={mapContainer} className="w-full h-[500px]" />
      </Section>
    </>
  );
};

export default Sebaran;
