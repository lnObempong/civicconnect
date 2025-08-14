import { useState } from "react";
import MapSelector from "../components/MapSelector";

export default function SubmitReport() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("Pothole");
  const [location, setLocation] = useState(""); // Will hold selected location name or lat/lng

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Report Submitted!\nTitle: ${title}\nDescription: ${description}\nCategory: ${category}\nLocation: ${location}`
    );
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg p-6 w-full max-w-lg"
      >
        <h2 className="text-2xl font-bold mb-4 text-gray-800">
          Submit a Report
        </h2>

        {/* Issue Title */}
        <label className="block mb-4">
          <span className="block text-gray-700 mb-1">Issue Title</span>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </label>

        {/* Description */}
        <label className="block mb-4">
          <span className="block text-gray-700 mb-1">Description</span>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          ></textarea>
        </label>

        {/* Category */}
        <label className="block mb-4">
          <span className="block text-gray-700 mb-1">Category</span>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="Select Category">Select Category</option>
            <option value="Pothole">Pothole</option>
            <option value="Streetlight">Streetlight</option>
            <option value="Trash">Trash</option>
            <option value="Security">Security</option>
            <option value="Sanitation">Sanitation</option>
            <option value="Electricity">Electricity</option>
            <option value="Education/School">Education/School</option>
            <option value="Health">Health</option>
            <option value="Environment">Environment</option>
            <option value="Water">Water</option>
            <option value="Other">Other</option>
          </select>
        </label>

        {/* Location Input */}
        <label className="block mb-4">
          <span className="block text-gray-700 mb-1">
            Location (Address or Area)
          </span>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Type your location or select on map"
            className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </label>

        {/* Map Selector */}
        <div className="mb-4">
          <p className="text-gray-500 text-sm mb-2">
            Or select location on map:
          </p>
          <MapSelector onLocationSelect={(coords) => setLocation(coords)} />
        </div>

        <button
          type="submit"
          className="w-full bg-green-500 text-white p-2 rounded-lg hover:bg-green-600 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
