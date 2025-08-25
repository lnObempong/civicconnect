import React from "react";
import { FaShieldAlt, FaCheckCircle, FaEnvelope } from "react-icons/fa";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center py-12 px-6">
      <div className="max-w-4xl w-full bg-white rounded-2xl shadow-xl p-8">
        {/* Header Section */}
        <div className="flex items-center gap-3 mb-6">
          <FaShieldAlt className="text-yellow-900 text-4xl" />
          <h1 className="text-4xl font-extrabold text-gray-800">Privacy Policy</h1>
        </div>

        {/* Intro */}
        <p className="text-gray-700 text-lg mb-6 leading-relaxed">
          At <span className="font-semibold text-yellow-700">CivicConnect</span>, your privacy is important to us.
          We collect only the information necessary to provide and improve our services.
          This includes your reports, contact details, and location data when you submit issues.
          We do not share personal information with third parties without your consent,
          except as required by law.
        </p>

        {/* Agreement Statement */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
          <p className="text-gray-700">
            By using <span className="font-semibold text-yellow-700">CivicConnect</span>, you agree to our privacy practices.
            We use the collected data to:
          </p>
        </div>

        {/* List of purposes */}
        <ul className="space-y-3 mb-6">
          <li className="flex items-center gap-3 text-gray-700">
            <FaCheckCircle className="text-yellow-600" /> Track and manage community issue reports.
          </li>
          <li className="flex items-center gap-3 text-gray-700">
            <FaCheckCircle className="text-yellow-600" /> Communicate updates on your submissions.
          </li>
          <li className="flex items-center gap-3 text-gray-700">
            <FaCheckCircle className="text-yellow-600" /> Improve the functionality and user experience of our platform.
          </li>
        </ul>

        {/* Contact Section */}
      <div className="mt-6 p-6 bg-gray-50 rounded-lg shadow-inner">
          <p className="text-gray-700 flex flex-col sm:flex-row items-start sm:items-center gap-2 text-center sm:text-left">
           <span className="flex items-center gap-2">
      <FaEnvelope className="text-yellow-600 text-lg" />
            <span>You can contact us at</span>
          </span>
         <a
             href="mailto:leonardobempng@gmail.com"
              className="text-yellow-600 font-semibold hover:underline break-all"
           >
                leonardobempng@gmail.com
           </a>
             <span className="sm:ml-2">for any questions or concerns regarding your privacy.</span>
          </p>
        </div>
      </div>
    </div>
  );
}
