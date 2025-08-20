// src/pages/Dashboard.jsx
import React from "react";
import { PlusCircle, MapPin, CalendarDays, Tag } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Dashboard({ reports }) {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4 sm:mb-0">
            Dashboard
          </h1>
          <button
            onClick={() => navigate("/report")}
            className="flex items-center gap-2 bg-yellow-900 text-white px-4 py-2 rounded-lg shadow hover:bg-yellow-700 transition"
          >
            <PlusCircle size={20} />
            New Report
          </button>
        </div>

        {/* Empty State */}
        {reports.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-16 bg-white rounded-xl shadow text-center">
            <img
              src="https://cdn-icons-png.flaticon.com/512/4076/4076505.png"
              alt="No Reports"
              className="w-32 mb-6 opacity-80"
            />
            <h2 className="text-xl font-semibold text-gray-700 mb-2">
              No Reports Yet
            </h2>
            <p className="text-gray-500 mb-6">
              Start by creating your first report to keep track of issues.
            </p>
            <button
              onClick={() => navigate("/report")}
              className="bg-yellow-900 text-white px-5 py-2 rounded-lg hover:bg-yellow-700 transition"
            >
              Add Report
            </button>
          </div>
        ) : (
          /* Reports Grid */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {reports.map((report, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow hover:shadow-lg transition-all duration-300 border p-6 flex flex-col"
              >
                {/* Title */}
                <h2 className="text-xl font-bold text-green-700 mb-2">
                  {report.title}
                </h2>

                {/* Description */}
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {report.description}
                </p>

                {/* Details */}
                <div className="text-sm text-gray-700 space-y-2 mb-4">
                  <p className="flex items-center gap-2">
                    <Tag size={16} className="text-yellow-700" />
                    <span className="font-semibold">Category:</span>{" "}
                    {report.category}
                  </p>
                  <p className="flex items-center gap-2">
                    <MapPin size={16} className="text-blue-600" />
                    <span className="font-semibold">Location:</span>{" "}
                    {report.location.address}
                  </p>
                  <p className="flex items-center gap-2">
                    <CalendarDays size={16} className="text-gray-600" />
                    <span className="font-semibold">Date:</span> {report.date}
                  </p>
                </div>

                {/* Status Badge */}
                <div className="mt-auto">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      report.status === "Resolved"
                        ? "bg-green-100 text-green-700"
                        : report.status === "Pending"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {report.status || "Pending"}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
