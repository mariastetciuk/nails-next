"use client";
import { MapContainer, TileLayer, Marker,Tooltip } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import LocateControl from "./map/LocateControl";

const Map = () => {
  const center = { lat: 48.942141511985035, lng: 24.69562265972141 };
  const zoom = 15;
  const locationName = "Beautiful Nails";
  const myLocationIcon = new L.Icon({
    iconUrl: "/icon/marker.gif",
    iconSize: [45, 45],
    iconAnchor: [18, 32],
  });

  return (
    <section id="map" className="relative h-[250px] md:h-[360px] lg:h-[560px]">
      <MapContainer
        center={center}
        zoom={zoom}
        scrollWheelZoom={false}
        style={{
          width: "100%",
          height: "100%",
          maxWidth: "100vw",
          zIndex: "1",
        }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={center} icon={myLocationIcon}>
         <Tooltip className="text-red" opacity={1} >{locationName}</Tooltip>
            
        
        </Marker>
        <LocateControl />
      </MapContainer>
      <button type="button" aria-label="come back locale" className="absolute z-30 left-[9px] pointer-events-none top-[80px] px-1  bg-white border-gray-400 border-2 text-black ">
      <svg aria-label="icon location" className="w-[21px] h-[32px] fill-current text-current ">
         <use href={"/sprite.svg#icon-location"}></use>
             </svg>
      </button>
    </section>
  );
};

export default Map;
