import React from 'react';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-6 px-10 bg-gray-800 shadow-md fixed w-full z-10">
      <div className="text-2xl font-bold text-white">My Portfolio</div>
      <ul className="flex space-x-6">
        <li>
          <a href="projects" className="text-white hover:text-blue-400 transition-colors">
            Projects
          </a>
        </li>
        <li>
          <a href="about" className="text-white hover:text-blue-400 transition-colors">
            About
          </a>
        </li>
        <li>
          <a href="contact" className="text-white hover:text-blue-400 transition-colors">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
