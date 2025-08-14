import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import { useState } from "react";

function LocationMarker({ onLocationSelect }) {
  const [position, setPosition] = useState(null);

  useMapEvents({
    click(e) {
      setPosition(e.latlng);
      onLocationSelect(`Lat: ${e.latlng.lat}, Lng: ${e.latlng.lng}`);
    },
  });

  return position === null ? null : <Marker position={position}></Marker>;
}

export default function MapSelector({ onLocationSelect }) {
  return (
    <MapContainer
      center={[7.9465, -1.0232]} // Ghana center
      zoom={7}
      style={{ height: "250px", width: "100%" }}
      className="rounded border border-gray-300"
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <LocationMarker onLocationSelect={onLocationSelect} />
    </MapContainer>
  );
}
