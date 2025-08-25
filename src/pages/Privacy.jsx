import React from "react";
import { FaShieldAlt, FaCheckCircle, FaEnvelope } from "react-icons/fa";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center py-8 px-4 sm:py-12 sm:px-6">
      <div className="max-w-4xl w-full bg-white rounded-2xl shadow-xl p-6 sm:p-8">
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 mb-6 text-center sm:text-left">
          <FaShieldAlt className="text-yellow-900 text-4xl" />
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-800">
            Privacy Policy
          </h1>
        </div>

        {/* Intro */}
        <p className="text-gray-700 text-base sm:text-lg mb-6 leading-relaxed text-center sm:text-left">
          At <span className="font-semibold text-yellow-700">CivicConnect</span>, your privacy is important to us.
          We collect only the information necessary to provide and improve our services.
          This includes your reports, contact details, and location data when you submit issues.
          We do not share personal information with third parties without your consent,
          except as required by law.
        </p>

        {/* Agreement Statement */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6 text-center sm:text-left">
          <p className="text-gray-700 text-sm sm:text-base">
            By using <span className="font-semibold text-yellow-700">CivicConnect</span>, you agree to our privacy practices.
            We use the collected data to:
          </p>
        </div>

        {/* List of purposes */}
        <ul className="space-y-3 mb-6">
          <li className="flex flex-col sm:flex-row sm:items-center gap-2 text-gray-700 text-sm sm:text-base">
            <FaCheckCircle className="text-yellow-600 flex-shrink-0" />
            <span>Track and manage community issue reports.</span>
          </li>
          <li className="flex flex-col sm:flex-row sm:items-center gap-2 text-gray-700 text-sm sm:text-base">
            <FaCheckCircle className="text-yellow-600 flex-shrink-0" />
            <span>Communicate updates on your submissions.</span>
          </li>
          <li className="flex flex-col sm:flex-row sm:items-center gap-2 text-gray-700 text-sm sm:text-base">
            <FaCheckCircle className="text-yellow-600 flex-shrink-0" />
            <span>Improve the functionality and user experience of our platform.</span>
          </li>
        </ul>

        {/* Contact Section */}
        <div className="mt-6 p-4 sm:p-6 bg-gray-50 rounded-lg shadow-inner">
          <div className="flex flex-col text-center sm:text-left gap-3">
            <div className="flex items-center justify-center sm:justify-start gap-2">
              <FaEnvelope className="text-yellow-600 text-lg" />
              <span className="text-gray-700 text-sm sm:text-base">
                You can contact us at:
              </span>
            </div>
            <a
              href="mailto:leonardobempng@gmail.com"
              className="text-yellow-600 font-semibold hover:underline break-all text-sm sm:text-base"
            >
              leonardobempng@gmail.com
            </a>
            <span className="text-gray-700 text-sm sm:text-base">
              for any questions or concerns regarding your privacy.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
