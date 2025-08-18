import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import { useState, useEffect } from "react";
import "leaflet/dist/leaflet.css";

export default function MapSelector({ onLocationSelect, regionBounds }) {
  const [position, setPosition] = useState(null);

  function LocationMarker() {
    useMapEvents({
      click: async (e) => {
        const { lat, lng } = e.latlng;
        setPosition(e.latlng);

        // ✅ Reverse geocoding using Nominatim
        const res = await fetch(
          `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}&addressdetails=1`
        );
        const data = await res.json();

        const addr = data.address;
        const district =
          addr.county ||
          addr.district ||
          addr.region ||
          addr.state ||
          addr.city ||
          addr.town ||
          addr.village ||
          data.display_name;

        onLocationSelect({
          lat,
          lng,
          address: district, // ✅ District or nearest admin division
        });
      },
    });

    return position === null ? null : <Marker position={position}></Marker>;
  }

  return (
    <div className="h-96 w-full mb-4 rounded-lg overflow-hidden shadow">
      <MapContainer
        center={[7.9465, -1.0232]} // Ghana center
        zoom={6}
        style={{ height: "100%", width: "100%" }}
        bounds={regionBounds || null} // ✅ restrict to selected region
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <LocationMarker />
      </MapContainer>
    </div>
  );
}
