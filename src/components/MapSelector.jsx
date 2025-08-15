// src/components/MapSelector.jsx
import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import { reverseGeocode } from "../utils/geocode";

export default function MapSelector({ onLocationSelect }) {
  const [position, setPosition] = useState(null);
  const [address, setAddress] = useState("");

  function LocationMarker() {
    useMapEvents({
      click: async (e) => {
        const { lat, lng } = e.latlng;
        setPosition([lat, lng]);
        const fetchedAddress = await reverseGeocode(lat, lng);
        setAddress(fetchedAddress);
        onLocationSelect({ lat, lng, address: fetchedAddress });
      },
    });

    return position ? <Marker position={position}></Marker> : null;
  }

  return (
    <div>
      <MapContainer
        center={[7.9465, -1.0232]} // Ghana center
        zoom={7}
        style={{ height: "300px", width: "100%" }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <LocationMarker />
      </MapContainer>
      {address && (
        <p className="mt-2 text-gray-600">
          <strong>Selected Address:</strong> {address}
        </p>
      )}
    </div>
  );
}
