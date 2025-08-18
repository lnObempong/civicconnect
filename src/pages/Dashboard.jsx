// src/pages/Dashboard.jsx
import React from "react";

export default function Dashboard({ reports }) {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
          Dashboard
        </h1>

        {reports.length === 0 ? (
          <p className="text-gray-600 text-center text-lg">
            No reports submitted yet.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {reports.map((report, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg border p-6 flex flex-col justify-between hover:shadow-xl transition-shadow duration-300"
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
                <div className="text-sm text-gray-700 space-y-2">
                  <p>
                    <span className="font-semibold">Category:</span>{" "}
                    {report.category}
                  </p>
                  <p>
                    <span className="font-semibold">Location:</span>{" "}
                    {report.location.address}
                  </p>
                  <p>
                    <span className="font-semibold">Date:</span> {report.date}
                  </p>
                </div>

                {/* Status Badge */}
                <div className="mt-4">
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
