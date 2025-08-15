export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 py-6 mt-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        {/* Left: Copyright */}
        <p className="text-sm">
          &copy; {new Date().getFullYear()} CivicConnect. Built by{" "}
          <span className="font-semibold">Leonard Nketia Obempong</span>
        </p>

        {/* Middle: Links */}
        <div className="mt-4 md:mt-0 space-x-4">
          <a href="/about" className="hover:text-green-400 transition">
            About Us
          </a>
          <a href="/contact" className="hover:text-green-400 transition">
            Contact
          </a>
        </div>

        {/* Right: Email & Phone */}
        <div className="mt-4 md:mt-0 text-sm">
          <p>Email: <a href="mailto:leonardobempng@gmail.com" className="hover:text-green-400">leonardobempng@gmail.com</a></p>
          <p>Phone: <a href="tel:+233246446344" className="hover:text-green-400">+233 246 446 344</a></p>
        </div>
      </div>
    </footer>
  );
}
