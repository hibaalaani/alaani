import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-6 px-10 bg-gray-800 shadow-md fixed w-full z-10">
      <div className="text-2xl font-bold text-white"><Link to='/'>My Portfolio</Link></div>
      <ul className="flex space-x-6">
        <li>
          <Link to="projects" className="text-white hover:text-blue-400 transition-colors">
            Projects
          </Link>
        </li>
        <li>
          <Link to="experience" className="text-white hover:text-blue-400 transition-colors">
            Experience
          </Link>
        </li>
        <li>
          <Link to="about" className="text-white hover:text-blue-400 transition-colors">
            About
          </Link>
        </li>
        <li>
          <Link to="contact" className="text-white hover:text-blue-400 transition-colors">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
