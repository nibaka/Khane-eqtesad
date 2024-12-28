import React, { useState, useEffect } from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import "./Header.css";

const Header = () => {
  const [currentDate, setCurrentDate] = useState("");

  // Update the current date
  useEffect(() => {
    const now = new Date();
    const options = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
    const formattedDate = now.toLocaleDateString("fa-IR", options);
    setCurrentDate(formattedDate);
  }, []);

  return (
    <header className="header">
      <div className="container">
        {/* Right Side: Date and Social Media Icons */}
        <div className="nav-left">
          <div className="date">{currentDate}</div>
          <div className="social-icons">
            <a href="https://telegram.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookF />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Left Side: Categories and Links */}
        <div className="nav-right">
          <ul className="nav-links">
            <li>
              <a href="/categories">دسته‌بندی‌ها</a>
            </li>
            <li>
              <a href="/about">درباره ما</a>
            </li>
            <li>
              <a href="/contact">تماس با ما</a>
            </li>
          </ul>
        </div>

        {/* Hamburger Menu */}
        <div className="hamburger">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  );
};

export default Header;
