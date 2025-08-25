import { FaLinkedin, FaFacebook, FaInstagram, FaTwitter, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-yellow-900 to-yellow-800 text-gray-100 py-8 mt-10 shadow-inner">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Left: Brand & Copyright */}
        <div className="text-center md:text-left">
          <h2 className="text-lg font-bold tracking-wide">CivicConnect</h2>
          <p className="text-sm mt-1 opacity-80">
            &copy; {new Date().getFullYear()} Built by{" "}
            <span className="font-semibold text-green-400">Leonard Nketia Obempong</span>
          </p>
        </div>

        {/* Middle: Navigation Links */}
        <div className="flex space-x-6 text-sm">
          <a href="/about" className="hover:text-green-400 transition-colors duration-300">
            About Us
          </a>
          <a href="/contact" className="hover:text-green-400 transition-colors duration-300">
            Contact
          </a>
          <a href="/privacy" className="hover:text-green-400 transition-colors duration-300">
            Privacy Policy
          </a>
        </div>

        {/* Right: Contact Info */}
        <div className="text-center md:text-right text-sm">
          <p>
            Email:{" "}
            <a
              href="mailto:leonardobempng@gmail.com"
              className="hover:text-green-400 transition-colors duration-300"
            >
              leonardobempng@gmail.com
            </a>
          </p>
          <p>
            Phone:{" "}
            <a
              href="tel:+233246446344"
              className="hover:text-green-400 transition-colors duration-300"
            >
              +233 246 446 344
            </a>
          </p>
        </div>
      </div>

      {/* Social Icons */}
      <div className="mt-6 flex justify-center space-x-6">
        <a
          href="https://www.linkedin.com/in/leonard-obempong/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-green-400 text-xl transition-colors duration-300"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://www.facebook.com/leonard.obempong"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-green-400 text-xl transition-colors duration-300"
        >
          <FaFacebook />
        </a>
        <a
          href="https://www.instagram.com/_l33ny?igsh=MXZ0dmY1aGk0c2dqag=="
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-green-400 text-xl transition-colors duration-300"
        >
          <FaInstagram />
        </a>
        <a
          href="https://x.com/l_obempong"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-green-400 text-xl transition-colors duration-300"
        >
          <FaTwitter />
        </a>
        <a
          href="https://github.com/lnobempong"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-green-400 text-xl transition-colors duration-300"
        >
          <FaGithub />
        </a>
      </div>

      {/* Bottom Divider */}
      <div className="border-t border-yellow-700 mt-6 pt-4 text-center text-xs opacity-70">
        Be the Steward! 
      </div>
    </footer>
  );
}
