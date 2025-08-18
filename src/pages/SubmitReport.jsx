import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MapSelector from "../components/MapSelector";

export default function SubmitReport({ onSubmit }) {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [region, setRegion] = useState("");
  const [photo, setPhoto] = useState(null);
  const [location, setLocation] = useState({ lat: null, lng: null, address: "" });

  const regions = [
    "Greater Accra",
    "Ashanti",
    "Western",
    "Western North",
    "Central",
    "Eastern",
    "Volta",
    "Oti",
    "Northern",
    "Savannah",
    "North East",
    "Upper East",
    "Upper West",
    "Bono",
    "Bono East",
    "Ahafo"
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!region) {
      alert("Please select a region.");
      return;
    }
    if (!location.lat || !location.lng) {
      alert("Please select a location on the map.");
      return;
    }

    const report = {
      title,
      description,
      category,
      region,
      location,
      photo, // ✅ include uploaded photo
      date: new Date().toLocaleString()
    };

    onSubmit(report);
    navigate("/dashboard");
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPhoto(file);
    }
  };

  return (
    <div className="p-8 max-w-2xl mx-auto bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold mb-6">Submit a Report</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Title */}
        <input
          type="text"
          placeholder="Report Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />

        {/* Description */}
        <textarea
          placeholder="Describe the issue..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-2 border rounded"
          required
        ></textarea>

        {/* Category */}
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full p-2 border rounded"
          required
        >
          <option value="">Select Category</option>
          <option value="security">Security</option>
          <option value="sanitation">Sanitation</option>
          <option value="electricity">Electricity</option>
          <option value="education">Education/School</option>
          <option value="health">Health</option>
          <option value="environment">Environment</option>
          <option value="water">Water</option>
          <option value="galamsey">Galamsey</option>
          <option value="other">Any Other</option>
        </select>

        {/* Region */}
        <select
          value={region}
          onChange={(e) => setRegion(e.target.value)}
          className="w-full p-2 border rounded"
          required
        >
          <option value="">Select Region</option>
          {regions.map((r, i) => (
            <option key={i} value={r}>
              {r}
            </option>
          ))}
        </select>

        {/* Photo Upload */}
        <div>
          <label className="block mb-2 text-gray-700 font-semibold">
            Upload a Photo (optional)
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={handlePhotoChange}
            className="w-full border rounded p-2"
          />
          {photo && (
            <p className="text-sm text-green-600 mt-1">
              Selected: {photo.name}
            </p>
          )}
        </div>

        {/* Map Selector */}
        {region ? (
          <MapSelector onLocationSelect={setLocation} selectedRegion={region} />
        ) : (
          <p className="text-gray-500 text-sm">Please select a region to load the map.</p>
        )}

        {/* Display selected address */}
        {location.address && (
          <p className="text-gray-700">Address: {location.address}</p>
        )}

        {/* Submit button */}
        <button
          type="submit"
          className="bg-yellow-600 text-white px-4 py-2 rounded hover:bg-yellow-800"
        >
          Submit Report
        </button>
      </form>
    </div>
  );
}
