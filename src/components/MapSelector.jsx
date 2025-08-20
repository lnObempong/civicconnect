import { MapContainer, TileLayer, Marker, useMapEvents, useMap } from "react-leaflet";
import { useState, useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// ✅ Custom marker icon
const customIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
  iconSize: [30, 40],
  iconAnchor: [15, 40],
});

// ✅ Component to auto zoom when region changes
function AutoZoom({ regionBounds }) {
  const map = useMap();

  useEffect(() => {
    if (regionBounds && regionBounds.length === 2) {
      map.fitBounds(regionBounds, {
        padding: [50, 50],
        animate: true,
        duration: 1.5,
      });
      setTimeout(() => {
        map.invalidateSize();
      }, 300);
    }
  }, [regionBounds, map]);

  return null;
}

export default function MapSelector({ onLocationSelect, regionBounds }) {
  const [position, setPosition] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [address, setAddress] = useState("");

  // ✅ Access map instance for smooth flyTo
  function LocationMarker() {
    const map = useMapEvents({
      click: async (e) => {
        const { lat, lng } = e.latlng;
        setPosition(e.latlng);
        setLoading(true);
        setError("");
        setAddress("");

        // ✅ Smooth zoom to the clicked location
        map.flyTo([lat, lng], 14, { animate: true, duration: 1.5 });

        try {
          const res = await fetch(
            `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}&addressdetails=1`
          );
          if (!res.ok) throw new Error("Failed to fetch location details");

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

          setAddress(district);
          onLocationSelect({
            lat,
            lng,
            address: district,
          });
        } catch (err) {
          setError("Unable to retrieve location details. Please try again.");
        } finally {
          setLoading(false);
        }
      },
    });

    return position === null ? null : <Marker position={position} icon={customIcon}></Marker>;
  }

  // ✅ Move marker to region center if provided
  useEffect(() => {
    if (regionBounds && regionBounds.length === 2 && !position) {
      const centerLat = (regionBounds[0][0] + regionBounds[1][0]) / 2;
      const centerLng = (regionBounds[0][1] + regionBounds[1][1]) / 2;
      setPosition({ lat: centerLat, lng: centerLng });
      onLocationSelect({
        lat: centerLat,
        lng: centerLng,
        address: "Selected Region Center",
      });
    }
  }, [regionBounds]);

  return (
    <div className="space-y-3">
      <p className="text-sm text-gray-700 font-medium">📍 Click on the map to select a location</p>

      <div className="h-96 w-full rounded-lg overflow-hidden shadow border">
        <MapContainer
          center={[7.9465, -1.0232]} // Ghana center
          zoom={6}
          style={{ height: "100%", width: "100%" }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <LocationMarker />
          <AutoZoom regionBounds={regionBounds} />
        </MapContainer>
      </div>

      {loading && <p className="text-blue-600 text-sm">Fetching address...</p>}
      {error && <p className="text-red-600 text-sm">{error}</p>}
      {address && !loading && (
        <div className="bg-green-50 border border-green-300 p-3 rounded text-green-800 text-sm shadow-sm">
          ✅ Selected Address: <span className="font-semibold">{address}</span>
        </div>
      )}
    </div>
  );
}
