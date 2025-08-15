import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  const navLinks = [
    { name: "Dashboard", path: "/dashboard" },
    { name: "Submit Report", path: "/report" },
  ];

  return (
    <nav className="bg-green-800 text-white px-6 py-4 flex justify-between items-center shadow-md">
      <h1 className="text-xl font-bold">CivicConnect</h1>
      <ul className="flex gap-6">
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
