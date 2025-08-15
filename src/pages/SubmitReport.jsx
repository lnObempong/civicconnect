// src/pages/SubmitReport.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MapSelector from "../components/MapSelector";

export default function SubmitReport({ onSubmit }) {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [location, setLocation] = useState({ lat: null, lng: null, address: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!location.lat || !location.lng) {
      alert("Please select a location on the map.");
      return;
    }

    const report = { title, description, category, location, date: new Date().toLocaleString() };
    onSubmit(report);

    navigate("/dashboard"); // ✅ Redirect to dashboard
  };

  return (
    <div className="p-8 max-w-2xl mx-auto bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold mb-6">Submit a Report</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Report Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
        <textarea
          placeholder="Describe the issue..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-2 border rounded"
          required
        ></textarea>
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
          <option value="galamsey">galamsey</option>
          <option value="other">Any Other</option>
        </select>

        <MapSelector onLocationSelect={setLocation} />

        {location.address && (
          <p className="text-gray-700">Address: {location.address}</p>
        )}

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Submit Report
        </button>
      </form>
    </div>
  );
}
