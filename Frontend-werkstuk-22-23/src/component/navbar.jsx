import { useState, useEffect } from "react";
import DropdownLanguage from "./LanguageDropdown";
import Logo from "../assets/logo.png";
import "../styles/nav.css";

function Navbar({showOnScroll}) {
  const [showNav, setShowNav] = useState(!showOnScroll);

  useEffect(() => {
    const onScroll = () => {
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
  }, []);

  return (
    <nav className={showNav ? "show-nav" : ""}>
      <div className="navbar__top">
        <div className="navbar__left">
          <img src={Logo} alt="" />
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
    </nav>
  );
}

export default Navbar;
