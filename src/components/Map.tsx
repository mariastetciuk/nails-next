"use client";
import { MapContainer, TileLayer, Marker,Tooltip } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const Map = () => {
  const center = { lat: 48.94223312190792, lng: 24.695944525987674 };
  const zoom = 15;
  const locationName = "Beauriful Nails";
  const myLocationIcon = new L.Icon({
    iconUrl: "/icon/marker.gif",
    iconSize: [45, 45],
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
        />
        <Marker position={center} icon={myLocationIcon}>
         <Tooltip className="text-red" opacity={1} >{locationName}</Tooltip>
            
        
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
