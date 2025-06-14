import React from 'react';
import './Navbar.css'; // Optional for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">Divyansh</div>
      <ul className="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
