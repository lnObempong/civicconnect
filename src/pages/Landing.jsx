import { Link } from "react-router-dom";
import { ArrowRight, AlertCircle, MapPin, Bell } from "lucide-react";

export default function Landing() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* ✅ Hero Section */}
      <section
        className="flex flex-col items-center justify-center text-center px-4 min-h-screen bg-cover bg-center relative dark:bg-gray-900"
        style={{ backgroundImage: "url('/images/landing-bg.jpg')" }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40"></div>

        <div className="relative z-10 max-w-3xl">
          <h1 className="text-4xl sm:text-6xl font-extrabold mb-6 text-white animate-fade-in">
            Welcome to <span className="text-yellow-400">CivicConnect</span>
          </h1>
          <p className="text-lg sm:text-xl mb-8 text-gray-200 leading-relaxed">
            Empowering Citizens to Report Issues and Improve Communities
          </p>
          <Link
            to="/login"
            className="inline-flex items-center gap-2 bg-yellow-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-yellow-800 transition-all text-lg font-semibold"
          >
            Get Started <ArrowRight size={20} />
          </Link>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-6 text-white text-sm animate-bounce">
          ↓ Scroll Down
        </div>
      </section>

      {/* ✅ Features Section */}
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-8 p-10 bg-white shadow-inner">
        <div className="bg-gray-100 p-6 rounded-xl text-center hover:shadow-xl hover:bg-yellow-50 transition transform hover:scale-105">
          <AlertCircle size={40} className="mx-auto text-yellow-600 mb-4" />
          <h2 className="font-bold text-xl mb-2">Report Issues Instantly</h2>
          <p className="text-gray-600">Submit community issues quickly with photos and details.</p>
        </div>
        <div className="bg-gray-100 p-6 rounded-xl text-center hover:shadow-xl hover:bg-yellow-50 transition transform hover:scale-105">
          <MapPin size={40} className="mx-auto text-green-600 mb-4" />
          <h2 className="font-bold text-xl mb-2">Track Your Reports</h2>
          <p className="text-gray-600">Follow up on your submissions and see progress in real-time.</p>
        </div>
        <div className="bg-gray-100 p-6 rounded-xl text-center hover:shadow-xl hover:bg-yellow-50 transition transform hover:scale-105">
          <Bell size={40} className="mx-auto text-blue-600 mb-4" />
          <h2 className="font-bold text-xl mb-2">Stay Informed</h2>
          <p className="text-gray-600">Receive updates on community actions and outcomes.</p>
        </div>
      </section>

      {/* ✅ Footer */}
      <footer className="bg-gray-600 text-gray-400 p-6 text-center">
        <p className="mb-4">© {new Date().getFullYear()} CivicConnect. All rights reserved.</p>
        <ul className="flex justify-center gap-6 text-gray-300">
          
        </ul>
      </footer>
    </div>
  );
}
