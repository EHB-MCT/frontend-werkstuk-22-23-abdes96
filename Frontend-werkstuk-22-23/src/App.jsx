import Logo from "./assets/logo.png";
import Wikiwall from "./assets/Wikiwall.png";
import "@fortawesome/fontawesome-free/css/all.css";
import Dropdownlanguage from "./component/languagedropdown";
import Content from "./component/content";
import "./App.css";

function App() {
  return (
    <>
    <header>
      <div className="tophead">
        <div className="leftop">
          <img src={Logo} alt="" />
        <div className="language-dropdown">
        <Dropdownlanguage/>
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
      <img id="wiki" src={Wikiwall} alt="" />
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
    </header>

    <Content/>

</>
  );
}

export default App;
