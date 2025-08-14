// src/pages/Landing.jsx
import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-gray-50">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center flex-grow text-center px-4">
        <h1 className="text-5xl font-extrabold mb-4 text-gray-800">
          Welcome to CivicConnect
        </h1>
        <p className="text-lg mb-6 text-gray-600">
          Empowering Citizens to Report Issues and Improve Communities
        </p>
        <Link
          to="/login"
          className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition"
        >
          Get Started
        </Link>
      </section>

      {/* Features Section */}
      <section className="flex flex-wrap justify-center gap-8 p-8 bg-white shadow-inner">
        <div className="bg-gray-100 p-6 rounded-lg w-64 text-center hover:shadow-lg transition">
          <h2 className="font-bold text-xl mb-2">Report Issues Instantly</h2>
          <p>Submit community issues quickly with photos and details.</p>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg w-64 text-center hover:shadow-lg transition">
          <h2 className="font-bold text-xl mb-2">Track Your Reports</h2>
          <p>Follow up on your submissions and see progress in real-time.</p>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg w-64 text-center hover:shadow-lg transition">
          <h2 className="font-bold text-xl mb-2">Stay Informed</h2>
          <p>Receive updates on community actions and outcomes.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-200 p-4 text-center">
        <ul className="flex justify-center gap-6 text-gray-700">
          <li><Link to="/about" className="hover:underline">About Us</Link></li>
          <li><Link to="/contact" className="hover:underline">Contact</Link></li>
          <li><Link to="/privacy" className="hover:underline">Privacy Policy</Link></li>
        </ul>
      </footer>
    </div>
  );
}
