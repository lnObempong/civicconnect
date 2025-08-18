// src/pages/About.jsx
import React from "react";
import myPhoto from "../assets/leonard.jpg";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-gray-50 p-8">
      <h1 className="text-4xl font-bold mb-6 text-gray-800">About Me</h1>

      {/* Photo & Info */}
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6 bg-white shadow-lg rounded-lg p-6 max-w-4xl w-full">
        
        {/* Photo */}
        <img
          src={myPhoto}
          alt="Leonard Nketia Obempong"
          className="w-48 h-100 rectangle-full object-cover border-4 border-green-700"
        />

        {/* Text */}
        <div className="text-gray-700 text-lg">
          <p className="mb-4">
            Hi, I’m <strong>Leonard Nketia Obempong</strong>, a passionate civic tech enthusiast
            working to bridge technology and public service for sustainable impact.
          </p>
          <p className="mb-4">
           With a deep interest in leveraging digital solutions for societal good, I focus on designing and implementing platforms that empower communities, enhance governance, and foster transparency and citizen engagement.
          </p>

          <p className="mb-4">
            I envision a world where technology strengthens public institutions, amplifies citizen voices, and drives inclusive development. 
            Through my work, I aim to equip communities with tools that not only simplify access to services but also promote accountability and informed decision-making.
          </p>

          <p className="mb-4">
            I thrive at the intersection of innovation, policy, and civic engagement, continuously exploring creative ways to apply technology for social impact. 
            Whether through software development, digital strategy, or community-centered initiatives, I am committed to transforming ideas into solutions that make a tangible difference.
          </p>
        </div>
      </div>
    </div>
  );
}
