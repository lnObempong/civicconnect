import React from "react";
import { FaLinkedin, FaFacebook, FaInstagram, FaTwitter, FaGithub } from "react-icons/fa";
import myPhoto from "../assets/leonard.jpg";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex flex-col items-center py-12 px-6">
      {/* Heading */}
      <h1 className="text-4xl font-extrabold text-gray-800 mb-8 text-center">
        About Me
      </h1>

      {/* Card Container */}
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden max-w-5xl w-full flex flex-col md:flex-row">
        {/* Photo Section */}
        <div className="flex-shrink-0 w-full md:w-1/3">
          <img
            src={myPhoto}
            alt="Leonard Nketia Obempong"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Info Section */}
        <div className="p-8 flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Leonard Nketia Obempong
            </h2>
            <p className="text-gray-600 mb-4">
              Hi, I’m <strong>Leonard Nketia Obempong</strong>, a passionate civic tech
              enthusiast working to bridge technology and public service for sustainable
              impact.
            </p>
            <p className="text-gray-600 mb-4">
              With a deep interest in leveraging digital solutions for societal good, I
              focus on designing and implementing platforms that empower communities,
              enhance governance, and foster transparency and citizen engagement.
            </p>
            <p className="text-gray-600 mb-4">
              I envision a world where technology strengthens public institutions,
              amplifies citizen voices, and drives inclusive development. Through my work,
              I aim to equip communities with tools that not only simplify access to
              services but also promote accountability and informed decision-making.
            </p>
            <p className="text-gray-600 mb-4">
              I thrive at the intersection of innovation, policy, and civic engagement,
              continuously exploring creative ways to apply technology for social impact.
              Whether through software development, digital strategy, or community-centered
              initiatives, I am committed to transforming ideas into solutions that make a
              tangible difference.
            </p>
          </div>

          {/* Social Links */}
          <div className="mt-6 flex space-x-6">
            <a
              href="https://www.linkedin.com/in/leonard-obempong/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-blue-700 transition text-2xl"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.facebook.com/leonard.obempong"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-blue-600 transition text-2xl"
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.instagram.com/_l33ny?igsh=MXZ0dmY1aGk0c2dqag=="
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-pink-600 transition text-2xl"
            >
              <FaInstagram />
            </a>
            <a
              href="https://x.com/l_obempong"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-blue-500 transition text-2xl"
            >
              <FaTwitter />
            </a>
            <a
              href="https://github.com/lnobempong"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-800 transition text-2xl"
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
