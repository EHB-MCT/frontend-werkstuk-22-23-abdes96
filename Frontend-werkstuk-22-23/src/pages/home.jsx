import { motion } from "framer-motion";
import { useSpring, animated } from "react-spring";
import Header from "../component/header";
import '../styles/App.css';
import { Link } from "react-router-dom";

function Content() {
  const logo = useSpring({
    from: { scale: 0 },
    to: { scale: 1 },
    delay: 1200,
  });

  return (
    <motion.div
    initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}
    
    
  >
      <Header />
      <animated.div style={{ ...logo }}>
        <div className="outer">
          <div className="first">
            <motion.div whileHover={{ scale: 1.1 }} transition={{ type: "spring" }}>
              <div className="design">
                <button>
                  <a href="">Design</a>
                </button>
                <div className="title"> website title</div>
              </div>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} transition={{ type: "spring" }}>
            <Link to={`/detail?title=${encodeURIComponent("Het oude Egypte")}`}>
                <div className="featured">
                <button>
                  <i className="fas fa-circle"> </i>
                  <Link to={`/detail?title=${encodeURIComponent("Het oude Egypte")}`}>Featured</Link>
                </button>

                <div className="title">Het oude Egypte</div>
              </div></Link>
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
              <motion.div whileHover={{ scale: 1.1 }} transition={{ type: "spring" }}>
                <div className="foryou">
                  <button>
                    <i className="fas fa-circle"> </i>
                    <a href="">For You</a>
                  </button>
                  <div className="title">website title</div>
                </div>
              </motion.div>
              <div className="sportdesign">
                <motion.div whileHover={{ scale: 1.1 }} transition={{ type: "spring" }}>
                  <div id="sports">
                    <button>
                      <a href="">Sports</a>
                    </button>
                    <div className="title">website title</div>
                  </div>
                </motion.div>
                <motion.div whileHover={{ scale: 1.1}} transition={{ type: "spring" }}>
                  <div id="design">
                  <button>
                    <a href="">Design</a>
                  </button>
                  <div className="title">website title</div>
                </div>
              </motion.div>
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
  
  </motion.div>
);
}

export default Content;
