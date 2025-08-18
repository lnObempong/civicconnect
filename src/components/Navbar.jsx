import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png"; // Add your logo file in src/assets/

export default function Navbar() {
  const location = useLocation();

  const navLinks = [
    { name: "Dashboard", path: "/dashboard" },
    { name: "Submit Report", path: "/report" },
  ];

  return (
    <nav className="bg-yellow-900 text-white px-6 py-4 flex justify-between items-center shadow-md">
      {/* Logo and Title */}
      <div className="flex items-center gap-3">
        <img
          src={logo}
          alt="CivicConnect Logo"
          className="w-15 h-10  border-2 border-white object-cover"
        />
        <h1 className="text-xl font-bold">CivicConnect</h1>
      </div>

      {/* Navigation Links */}
      <ul className="flex gap-6 items-center">
        {navLinks.map((link, index) => (
          <li key={index}>
            <Link
              to={link.path}
              className={`${
                location.pathname === link.path ? "font-bold underline" : ""
              } hover:underline`}
            >
              {link.name}
            </Link>
          </li>
        ))}
        <li>
          <Link
            to="/"
            className="bg-red-500 px-3 py-1 rounded hover:bg-red-600 transition"
          >
            Logout
          </Link>
        </li>
      </ul>
    </nav>
  );
}
