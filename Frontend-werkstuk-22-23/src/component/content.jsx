
function Content() {
  return (
    <div>
      <div className="outer">
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
        <div className="short">
        <div className="Sports">
          <button>
            <a href="">Sports</a>
          </button>
        </div>
        <div className="Design">
          <button>
            <a href="">Design</a>{" "}
          </button>
        </div>
        <div className="Architecture">
          <button>
            <a href="">Featured</a>{" "}
          </button>
        </div>
        <div className="Architecture">
          <button>
            <a href="">Featured</a>{" "}
          </button>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
