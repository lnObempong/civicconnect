import React from "react";
import { FaEnvelope, FaPhoneAlt, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center py-12 px-6">
      <div className="max-w-4xl w-full bg-white rounded-2xl shadow-xl p-8">
        {/* Heading */}
        <h1 className="text-4xl font-extrabold text-gray-800 mb-4 text-center">
          Contact Us
        </h1>
        <p className="text-gray-600 text-center mb-8">
          Have any questions, suggestions, or feedback? We'd love to hear from you!
        </p>

        {/* Contact Info */}
        <div className="flex flex-col md:flex-row md:justify-around items-center mb-10">
          <div className="flex items-center gap-3 mb-4 md:mb-0">
            <FaEnvelope className="text-yellow-900 text-2xl" />
            <a
              href="mailto:leonardobempng@gmail.com"
              className="text-gray-700 hover:text-yellow-900 text-lg"
            >
              leonardobempng@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-3">
            <FaPhoneAlt className="text-yellow-900 text-2xl" />
            <a
              href="tel:+233246446344"
              className="text-gray-700 hover:text-yellow-900 text-lg"
            >
              +233 246 446 344
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <form className="space-y-6">
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Message</label>
            <textarea
              placeholder="Write your message..."
              rows="4"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-yellow-900"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-yellow-600 text-white font-semibold py-3 rounded-lg hover:bg-yellow-900 transition"
          >
            Send Message
          </button>
        </form>

        {/* Social Links */}
        <div className="flex justify-center mt-8 space-x-6">
          <a
            href="https://www.linkedin.com/in/leonard-obempong/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-blue-700 text-2xl transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/lnobempong"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-gray-800 text-2xl transition"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </div>
  );
}
