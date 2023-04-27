function Content() {
  return (
    <div className="outer">
      <div className="first">
        <div className="design">
          <button>
            <a href="">Design</a>
          </button>
        </div>
        <div className="featured">
          <button>
            <i className="fas fa-circle"> </i>

            <a href="">Featured</a>
          </button>
        </div>
      </div>

      <div className="short">
        <div id="sports">
          <button>
            <a href="">Sports</a>
          </button>
        </div>
        <div>
          <button>
            <a href="">Design</a>{" "}
          </button>
        </div>
        <div>
          <button>
            <a href="">Architecture</a>{" "}
          </button>
        </div>
        <div>
          <button>
            <a href="">Design</a>{" "}
          </button>
        </div>
      </div>
      <div className="end">
        <div className="last">
          <div className="foryou">
            <button>
              <i className="fas fa-circle"> </i>

              <a href="">For You</a>
            </button>
          </div>
          <div className="sportdesign">
            <div>
              <button>
                <a href="">Sports</a>
              </button>
            </div>
            <div id="design">
              <button>
                <a href="">Design</a>
              </button>
            </div>
          </div>
        </div>
        <div className="discover">
          <button>
          <i className="fas fa-circle"> </i>

            <a href="">Discover</a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Content;
