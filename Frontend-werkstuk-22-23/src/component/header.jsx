import Logo from "../assets/logo.png";
import Wikiwall from "../assets/Wikiwall.png";
import Dropdownlanguage from "./LanguageDropdown";
import { Link } from "react-router-dom";
import { useSpring, animated } from "react-spring";

function Header() {
  const logo = useSpring({
    from: { scale: 0 },
    to: { scale: 1 },
    delay: 400,
    config: { tension: 100, friction: 10 },
  });
  const searchbar = useSpring({
    from: { opacity: 0, y: 100 },
    to: { opacity: 1, y: 0 },
    delay: 800,
    config: { tension: 100, friction: 10 },
  });
  return (
    <header>
      <div className="tophead">
        <div className="leftop">
          <Link to="/">
            <img src={Logo} alt="" />
          </Link>
          <div className="language-dropdown">
            <Dropdownlanguage />
          </div>
        </div>
        <div>
          <ul>
            <li>
              <a href="">Create</a>{" "}
            </li>
            <li>
              <a href="">Profile</a>{" "}
            </li>
          </ul>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <animated.div style={{ ...logo }}>
          <img id="wiki" src={Wikiwall} alt="" />
        </animated.div>
      </div>
      <animated.div style={{ ...searchbar }}>
        <div className="searchbar">
          <i className="fas fa-search"></i>
          <input type="text" placeholder="Search" />
          <button className="filterbutton">Filters...</button>
        </div>
        <div className="categories">
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
        <div className="slogan">
          <p style={{opacity: "1"}} > Any topic, interactive fun.</p>
          <p style={{opacity: "0.8"}}> Any topic, interactive fun.</p>
          <p style={{opacity: "0.6"}}> Any topic, interactive fun.</p>
          <p style={{opacity: "0.4"}}> Any topic, interactive fun.</p>
          <p style={{opacity: "0.2"}}> Any topic, interactive fun.</p>
        </div>
      </animated.div>
    </header>
  );
}
export default Header;
