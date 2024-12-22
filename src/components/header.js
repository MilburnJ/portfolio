import React from "react";
import Scrollspy from "react-scrollspy";

const Header = () => {
  return (
    <nav className="fixed top-0 w-full bg-white shadow z-10">
      <Scrollspy
        items={["home", "projects", "skills", "contact"]}
        currentClassName="text-blue-500"
        className="flex justify-center space-x-6 p-4"
      >
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </Scrollspy>
    </nav>
  );
};

export default Header;
