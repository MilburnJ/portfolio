import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="bg-blue-600 p-4">
      <ul className="flex justify-center space-x-8 text-white">
        <li><Link to="/" className="hover:underline">Home</Link></li>
        <li><Link to="/about" className="hover:underline">About</Link></li>
        <li><Link to="/projects" className="hover:underline">Projects</Link></li>
        <li><Link to="/contact" className="hover:underline">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Header;
