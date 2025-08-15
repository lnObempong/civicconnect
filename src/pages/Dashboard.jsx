import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    const storedReports = JSON.parse(localStorage.getItem("reports")) || [];
    setReports(storedReports);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
        <Link
          to="/report"
          className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition"
        >
          Submit Report
        </Link>
      </div>

      {reports.length === 0 ? (
        <p className="text-gray-600">No reports submitted yet.</p>
      ) : (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {reports.map((report, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition"
            >
              <h2 className="font-bold text-lg mb-2">{report.title}</h2>
              <p className="text-sm text-gray-500 mb-2">
                Category: {report.category}
              </p>
              <p className="text-gray-700 mb-2">{report.description}</p>
              <p className="text-sm text-gray-500">Location: {report.location}</p>
              <p className="text-xs text-gray-400 mt-2">Date: {report.date}</p>
              <p className="text-xs text-blue-500 mt-1">Status: {report.status}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
