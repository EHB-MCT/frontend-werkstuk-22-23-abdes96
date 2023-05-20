import { useState, useEffect } from "react";
import DropdownLanguage from "./LanguageDropdown";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import "../styles/nav.css";

function Navbar({  showOnScroll = true }) {
  const [showNav, setShowNav] = useState(!showOnScroll);

  useEffect(() => {
    const onScroll = () => {


      if (!showOnScroll) {
        setShowNav(true);
        return;
      }

      if (window.scrollY > 400) {
        setShowNav(true);
      } else {
        setShowNav(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [showOnScroll]);


 

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <nav className={showNav ? "show-nav" : ""}>
      <div className="navbar__top">
        <div className="navbar__left">
          <Link to="/" onClick={scrollToTop}>
            <img src={Logo} alt="" />
          </Link>
          <div className="navbar__language-dropdown">
            <DropdownLanguage />
          </div>
        </div>
        <div className="navbar__search-bar">
          <i className="fas fa-search"></i>
          <input
            className="navbar__search-input"
            type="text"
            placeholder="Search"
          />
          <button className="navbar__filter-button">Filters...</button>
        </div>
        <div>
          <ul className="navbar__links">
            <li>
              <a href="">Create</a>{" "}
            </li>
            <li>
              <a href="">Profile</a>{" "}
            </li>
          </ul>
        </div>
      </div>
      <div className="nav_categories">
        <ul>
          <li>
            <a href="/design">Design</a>
          </li>
          <li>
            <a href="/architecture">Architecture</a>
          </li>
          <li>
            <a href="/art">Art</a>
          </li>
          <li>
            <a href="/biology">Biology</a>
          </li>
          <li>
            <a href="/sports">Sports</a>
          </li>
          <li>
            <a href="/authors">Authors</a>
          </li>
          <li>
            <a href="/geology">Geology</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
