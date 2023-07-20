import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import "leaflet/dist/leaflet.css";

export const MainPage: React.FC = () => {
  return (
    <>
      <MapContainer    
        center={[37.55179, 126.95171]}
        zoom={20}
        scrollWheelZoom={true}
        style={{ width: "100%", height: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
          <Marker position={[37.55179, 126.95171]}>
              <Popup>
                  <span>A pretty CSS3 popup. <br /> Easily customizable.</span>
              </Popup>
          </Marker>
      </MapContainer>
    </>
  );
};
