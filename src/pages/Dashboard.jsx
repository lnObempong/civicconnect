// src/pages/Dashboard.jsx
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Dashboard() {
  const [reports, setReports] = useState([
    { id: 1, title: "Pothole on Main St", category: "Pothole", status: "Pending" },
    { id: 2, title: "Broken streetlight on Elm St", category: "Streetlight", status: "Resolved" },
  ]);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Your Reports</h1>
        <Link
          to="/report"
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
        >
          Submit New Report
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {reports.map((report) => (
          <div key={report.id} className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition">
            <h2 className="text-xl font-bold mb-1">{report.title}</h2>
            <p className="text-gray-700">Category: {report.category}</p>
            <p className="text-gray-600 mt-1">Status: {report.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
