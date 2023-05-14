import { Link } from "react-router-dom";


function Content() {
  return (
    <div className="outer">
      <div className="first">
        <div className="design">
          <button>
            <a href="">Design</a>
          </button>
          <div className="title">website title</div>
        </div>
        <div className="featured">
          <button>
            <i className="fas fa-circle"> </i>

            <Link to="/de-oude-egypte">Featured</Link>

          </button>
          <div className="title">De oude Egypte</div>
        </div>
      </div>

      <div className="short">
        <div className="sports" id="littlebox">
          <button>
            <a href="">Sports</a>
          </button>
          <div className="title">website title</div>
        </div>
        <div  id="littlebox">
          <button>
            <a href="">Design</a>{" "}
          </button>
          <div className="title">website title</div>
        </div>
        <div id="littlebox">
          <button>
            <a href="">Architecture</a>{" "}
          </button>
          <div className="title">website title</div>
        </div>
        <div id="littlebox">
          <button>
            <a href="">Design</a>{" "}
          </button>
          <div className="title">website title</div>
        </div>
      </div>
      <div className="end">
        <div className="last">
          <div className="foryou">
            <button>
              <i className="fas fa-circle"> </i>

              <a href="">For You</a>
            </button>
            <div className="title">websitle title</div>
          </div>
          <div className="sportdesign">
            <div id="sports">
              <button>
                <a href="">Sports</a>
              </button>
              <div className="title">website title</div>
            </div>
            <div id="design">
              <button>
                <a href="">Design</a>
              </button>
              <div className="title">website title</div>
            </div>
          </div>
        </div>
        <div className="discover">
          <button>
          <i className="fas fa-circle"> </i>

            <a href="">Discover</a>
          </button>
          <div className="title">website title</div>
        </div>
      </div>
    </div>
  );
}

export default Content;