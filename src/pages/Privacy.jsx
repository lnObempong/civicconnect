export default function Privacy() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Privacy Policy</h1>
        <p className="text-gray-700 mb-4">
          At CivicConnect, your privacy is important to us. We collect only the information necessary
          to provide and improve our services. This includes your reports, contact details, and location data
          when you submit issues. We do not share personal information with third parties without your consent,
          except as required by law.
        </p>
        <p className="text-gray-700 mb-4">
          By using CivicConnect, you agree to our privacy practices. We use the collected data to:
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-4">
          <li>Track and manage community issue reports.</li>
          <li>Communicate updates on your submissions.</li>
          <li>Improve the functionality and user experience of our platform.</li>
        </ul>
        <p className="text-gray-700">
          You can contact us at <a href="mailto:leonardobempng@gmail.com" className="text-green-600 hover:underline">leonardobempng@gmail.com</a> 
          for any questions or concerns regarding your privacy.
        </p>
      </div>
    </div>
  );
}
