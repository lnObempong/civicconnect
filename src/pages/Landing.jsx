import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div
      className="min-h-screen flex flex-col justify-between bg-gray-50 bg-cover bg-center relative"
      style={{ backgroundImage: "url('/images/landing-bg.jpg')" }} // Place image in public/images/
    >
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center flex-grow text-center px-4">
        <h1 className="text-5xl font-extrabold mb-4 text-white">
          Welcome to CivicConnect
        </h1>
        <p className="text-lg mb-6 text-gray-200">
          Empowering Citizens to Report Issues and Improve Communities
        </p>
        <Link
          to="/login"
          className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition"
        >
          Get Started
        </Link>
      </div>

      {/* Features Section */}
      <section className="relative z-10 flex flex-wrap justify-center gap-8 p-8 bg-white bg-opacity-90 shadow-inner">
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
      <footer className="relative z-10 bg-gray-200 p-4 text-center">
        <ul className="flex justify-center gap-6 text-gray-700">
          <li>
            <Link to="/privacy" className="hover:underline">
              Privacy Policy
            </Link>
          </li>
        </ul>
      </footer>
    </div>
  );
}
