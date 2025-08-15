import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import { useState } from "react";
import "leaflet/dist/leaflet.css";

function LocationMarker({ onLocationSelect }) {
  const [position, setPosition] = useState(null);

  useMapEvents({
    click(e) {
      setPosition(e.latlng);
      onLocationSelect(`${e.latlng.lat}, ${e.latlng.lng}`);
    },
  });

  return position === null ? null : <Marker position={position}></Marker>;
}

export default function MapSelector({ onLocationSelect }) {
  return (
    <div className="h-64 w-full rounded-lg overflow-hidden border border-gray-300">
      <MapContainer
        center={[7.9465, -1.0232]} // Centered in Ghana
        zoom={6}
        className="h-full w-full"
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; OpenStreetMap contributors"
        />
        <LocationMarker onLocationSelect={onLocationSelect} />
      </MapContainer>
    </div>
  );
}
