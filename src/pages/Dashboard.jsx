export default function Dashboard() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Your Reports</h1>
      <a href="/report" className="bg-blue-500 text-white px-4 py-2 rounded">
        Submit New Report
      </a>
      <div className="mt-6">
        <p>No reports yet...</p>
      </div>
    </div>
  );
}
