import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
   <div className="container">
       <div className="logo"><span>!</span>MPT</div>

      <ul className={isMobileMenuOpen ? "nav-links mobile" : "nav-links"}>
        <li><a href="#home" onClick={toggleMenu}>Home</a></li>
        <li><a href="#about" onClick={toggleMenu}>About</a></li>
        <li><a href="#skills" onClick={toggleMenu}>Skills</a></li>
        <li><a href="#services" onClick={toggleMenu}>Services</a></li>
        <li><a href="#works" onClick={toggleMenu}>My Works</a></li>
        <li><a href="#contact" onClick={toggleMenu}>Contact me</a></li>
      </ul>

      <div className="hamburger" onClick={toggleMenu}>
        <span className={isMobileMenuOpen ? "bar open" : "bar"}></span>
        <span className={isMobileMenuOpen ? "bar open" : "bar"}></span>
        <span className={isMobileMenuOpen ? "bar open" : "bar"}></span>
      </div>
   </div>
    </nav>
  );
};

export default Navbar;