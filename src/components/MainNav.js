import React, { useState } from "react";
import { FaSearch, FaBars } from "react-icons/fa";
import axios from "axios"; // Import axios for API requests
import "./MainNav.css";
import logo from "../assets/icons/logo.png";

const MainNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState(""); // For storing search query
  const [searchResults, setSearchResults] = useState([]); // For storing search results
  const [isSearchActive, setIsSearchActive] = useState(false); // For toggling search input visibility

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value); // Update search query
  };

  const handleSearchSubmit = async (e) => {
    e.preventDefault(); // Prevent page reload on form submit

    try {
      // Make API request to search articles
      const response = await axios.get(
        `https://your-api-endpoint.com/search?query=${searchQuery}`
      );
      setSearchResults(response.data.articles); // Update state with search results
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  const toggleSearch = () => {
    setIsSearchActive(!isSearchActive); // Toggle visibility of search input
  };

  return (
    <nav className="main-nav">
      <div className="container">
        {/* Hamburger Menu for Mobile */}
        <div className="hamburger" onClick={toggleMenu}>
          <FaBars />
        </div>

        {/* Logo */}
        <div className="logo">
          <a href="/">
            <img src={logo} alt="خانه اقتصاد" />
          </a>
        </div>

        {/* Navigation Links */}
        <ul className={`nav-links-main ${isMenuOpen ? "show" : ""}`}>
          <li className="active">
            <a href="/">خانه</a>
          </li>
          <li>
            <a href="/politics">سیاست</a>
          </li>
          <li>
            <a href="/world">جهان</a>
          </li>
          <li>
            <a href="/blog">وبلاگ</a>
          </li>
          <li>
            <a href="/contact">تماس با ما</a>
          </li>
        </ul>

        {/* Search Icon and Input */}
        <div className="search-icon" onClick={toggleSearch}>
          <FaSearch />
        </div>

        {/* Conditionally render the search input */}
        {isSearchActive && (
          <form onSubmit={handleSearchSubmit} className="search-form">
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  handleSearchSubmit(e); // Trigger search when Enter is pressed
                }
              }}
              placeholder="جستجو..."
            />
            <button type="submit">
              <FaSearch />
            </button>
          </form>
        )}
      </div>

      {/* Display Search Results if there are any */}
      {searchResults.length > 0 && (
        <div className="search-results">
          <ul>
            {searchResults.map((article) => (
              <li key={article._id}>
                <a href={`/article/${article.slug}`}>
                  <h3>{article.title}</h3>
                  <p>{article.caption}</p>
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default MainNav;
