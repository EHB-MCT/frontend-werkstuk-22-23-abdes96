import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useSpring, animated } from "react-spring";
import Header from "../component/header";
  
function Content() {
  
  const logo = useSpring({
    from: { scale: 0 },
    to: { scale: 1 },
    delay: 1200,
  });
  return (
    <>
    <Header />
    <animated.div style={{ ...logo }}>

    <div className="outer">
      <div className="first">
        <motion.div whileHover={{ scale: 1.1 }} transition={{ type: "spring" }}>
          <div className="design">
            <button>
              <a href="">Design</a>
            </button>
            <div className="title">website title</div>
          </div>
        </motion.div>
        <motion.div whileHover={{ scale: 1.1 }} transition={{ type: "spring" }}>
          <div className="featured">
            <button>
              <i className="fas fa-circle"> </i>
              <Link to="/de-oude-egypte">Featured</Link>
            </button>
            <div className="title">De oude Egypte</div>
          </div>
        </motion.div>
      </div>

      <div className="short">
        <motion.div whileHover={{ scale: 1.1 }} transition={{ type: "spring" }}>
          <div className="sports" id="littlebox">
            <button>
              <a href="">Sports</a>
            </button>
            <div className="title">website title</div>
          </div>
        </motion.div>
        <motion.div whileHover={{ scale: 1.1 }} transition={{ type: "spring" }}>
          <div id="littlebox">
            <button>
              <a href="">Design</a>{" "}
            </button>
            <div className="title">website title</div>
          </div>
        </motion.div>
        <motion.div whileHover={{ scale: 1.1 }} transition={{ type: "spring" }}>
          <div id="littlebox">
            <button>
              <a href="">Architecture</a>{" "}
            </button>
            <div className="title">website title</div>
          </div>
        </motion.div>
        <motion.div whileHover={{ scale: 1.1 }} transition={{ type: "spring" }}>
          <div id="littlebox">
            <button>
              <a href="">Design</a>{" "}
            </button>
            <div className="title">website title</div>
          </div>
        </motion.div>
      </div>
      <div className="end">
        <div className="last">
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring" }}
          >
            <div className="foryou">
              <button>
                <i className="fas fa-circle"> </i>
                <a href="">For You</a>
              </button>
              <div className="title">website title</div>
            </div>
          </motion.div>
          <div className="sportdesign">
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring" }}
            >
              <div id="sports">
                <button>
                  <a href="">Sports</a>
                </button>
                <div className="title">website title</div>
              </div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring" }}
            >
            <div id="design">
              <button>
                <a href="">Design</a>
              </button>
              <div className="title">website title</div>
            </div> </motion.div>
          </div>
        </div>
        <motion.div whileHover={{ scale: 1.1 }} transition={{ type: "spring" }}>
          <div className="discover">
            <button>
              <i className="fas fa-circle"> </i>
              <a href="">Discover</a>
            </button>
            <div className="title">website title</div>
          </div>
        </motion.div>
      </div>
    </div>
    </animated.div>
    </>
  );
}

export default Content;
