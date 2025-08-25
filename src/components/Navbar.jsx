import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react"; 
import logo from "../assets/logo.png";

export default function Navbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Dashboard", path: "/dashboard" },
    { name: "Submit Report", path: "/report" },
  ];

  return (
    <nav className="bg-yellow-900 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo & Title */}
        <div className="flex items-center gap-3">
          <img
            src={logo}
            alt="CivicConnect Logo"
            className="w-12 h-15   object-cover"
          />
          <h1 className="text-2xl font-bold tracking-wide">CivicConnect</h1>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 items-center text-lg">
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link
                to={link.path}
                className={`relative hover:text-yellow-300 transition ${
                  location.pathname === link.path ? "text-yellow-300 font-semibold" : ""
                }`}
              >
                {link.name}
                {/* Active underline animation */}
                {location.pathname === link.path && (
                  <span className="absolute left-0 bottom-[-6px] w-full h-[2px] bg-yellow-300 rounded"></span>
                )}
              </Link>
            </li>
          ))}
          <li>
            <Link
              to="/"
              className="bg-red-500 px-4 py-2 rounded-md hover:bg-red-600 transition font-semibold"
            >
              Logout
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-yellow-800 px-6 py-4 space-y-4">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`block text-lg ${
                location.pathname === link.path ? "text-yellow-300 font-semibold" : ""
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="block bg-red-500 text-center px-4 py-2 rounded-md hover:bg-red-600 transition font-semibold"
          >
            Logout
          </Link>
        </div>
      )}
    </nav>
  );
}
