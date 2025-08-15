import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MapSelector from "../components/MapSelector";

export default function SubmitReport() {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");

  const categories = [
    "Security",
    "Sanitation",
    "Electricity",
    "Education/School",
    "Health",
    "Environment",
    "Water",
    "Other",
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    const newReport = {
      title,
      category,
      description,
      location,
      date: new Date().toLocaleString(),
      status: "Pending",
    };

    const existingReports = JSON.parse(localStorage.getItem("reports")) || [];
    existingReports.push(newReport);
    localStorage.setItem("reports", JSON.stringify(existingReports));

    // ✅ Redirect to Dashboard
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">Submit a Report</h1>
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-lg max-w-lg mx-auto"
      >
        <div className="mb-4">
          <label className="block mb-2 font-semibold">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 border rounded-lg"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2 font-semibold">Category</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full p-2 border rounded-lg"
            required
          >
            <option value="">Select Category</option>
            {categories.map((cat, index) => (
              <option key={index} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-4">
          <label className="block mb-2 font-semibold">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-2 border rounded-lg"
            rows="4"
            required
          ></textarea>
        </div>

        <div className="mb-4">
          <label className="block mb-2 font-semibold">Location</label>
          <MapSelector onSelectLocation={(loc) => setLocation(loc)} />
          {location && (
            <p className="text-sm text-gray-500 mt-2">
              Selected Location: {location}
            </p>
          )}
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition w-full"
        >
          Submit Report
        </button>
      </form>
    </div>
  );
}
