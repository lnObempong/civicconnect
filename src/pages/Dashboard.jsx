// src/pages/Dashboard.jsx
export default function Dashboard({ reports }) {
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      {reports.length === 0 ? (
        <p className="text-gray-600">No reports submitted yet.</p>
      ) : (
        <div className="grid gap-4">
          {reports.map((report, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg p-4 border">
              <h2 className="text-xl font-semibold">{report.title}</h2>
              <p className="text-gray-700">{report.description}</p>
              <p><strong>Category:</strong> {report.category}</p>
              <p><strong>Address:</strong> {report.location.address}</p>
              <p><strong>Date:</strong> {report.date}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
