import React from 'react';
import { FaHome, FaBriefcase, FaUserAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../CSS/NavBar.css'; // Styling for the navbar

const NavBar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="nav-item">
        <FaHome />
        <span>Home</span>
      </Link>
      <Link to="/portfolio" className="nav-item">
        <FaBriefcase />
        <span>Portfolio</span>
      </Link>
      <Link to="/about" className="nav-item">
        <FaUserAlt />
        <span>About</span>
      </Link>
    </nav>
  );
};

export default NavBar;
