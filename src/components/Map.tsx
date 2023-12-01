"use client";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const Map = () => {
  const center = { lat: 48.94223312190792, lng: 24.695944525987674 };
  const zoom = 15;
  const myLocationIcon = new L.Icon({
    iconUrl: "/icon/marker.gif",
    iconSize: [35, 35],
    iconAnchor: [18, 32],
  });

  return (
    <div className=" h-[300px] md:h-[360px] lg:h-[560px]">
      <MapContainer
        center={center}
        zoom={zoom}
        scrollWheelZoom={false}
        style={{
          width: "100%",
          height: "100%",
          maxWidth: "100vw",
        }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          detectRetina={true}
        />
        <object
          type="image/svg+xml"
          data={"marker.svg"}
          className="absolute z-[9999] h-[4rem] w-[4rem] xs:left-[45%] xs:top-[28%] md:left-[46%] md:top-[36%] lg:left-[48%] lg:top-[41%]"
        />
        <Marker position={center} icon={myLocationIcon}>
       </Marker>
          
       
      </MapContainer>
    </div>
  );
};

export default Map;
