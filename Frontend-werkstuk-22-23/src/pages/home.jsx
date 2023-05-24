import { motion } from "framer-motion";
import { useSpring, animated } from "react-spring";
import Header from "../component/header";
import '../styles/App.css';
import { Link } from "react-router-dom";
import Data from "../service/Data.json"

function Content() {

  const backgroundImageStyles = Data.map((item) => ({
    backgroundImage: `url(${item.picture})`,
  }));
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
            <Link to={`/detail?id=${Data[1].id}&title=${encodeURIComponent(Data[1].title)}`}>
              <div  style={backgroundImageStyles[1]} className="design">
                <button>
                  Design
                </button>
                
                <div className="title">{Data[1].title} </div>
              </div> 
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} transition={{ type: "spring" }}>
            <Link to={`/detail?title=${encodeURIComponent("Het oude Egypte")}`}>
                <div  className="featured">
                <button>
                  <i className="fas fa-circle"> </i>
                  Featured
                </button>

                <div className="title">Het oude Egypte</div>
              </div></Link>
            </motion.div>
          </div>

          <div className="short">
            <motion.div whileHover={{ scale: 1.1 }} transition={{ type: "spring" }}>
              <div style={backgroundImageStyles[2]}  className="sports" id="littlebox">
                <button>
                  <a href="">Sports</a>
                </button>
                <div className="title">{Data[2].title} </div>
              </div>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} transition={{ type: "spring" }}>
              <div style={backgroundImageStyles[3]}  id="littlebox">
                <button>
                  <a href="">Design</a>{" "}
                </button>
                <div className="title">{Data[3].title} </div>
              </div>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} transition={{ type: "spring" }}>
              <div style={backgroundImageStyles[4]}  id="littlebox">
                <button>
                  <a href="">Architecture</a>{" "}
                </button>
                <div className="title">{Data[4].title} </div>
              </div>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} transition={{ type: "spring" }}>
              <div style={backgroundImageStyles[5]}  id="littlebox">
                <button>
                  <a href="">Design</a>{" "}
                </button>
                <div className="title">{Data[5].title} </div>
              </div>
            </motion.div>
          </div>
          <div className="end">
            <div className="last">
              <motion.div whileHover={{ scale: 1.1 }} transition={{ type: "spring" }}>
                <div style={backgroundImageStyles[6]}  className="foryou">
                  <button>
                    <i className="fas fa-circle"> </i>
                    <a href="">For You</a>
                  </button>
                  <div className="title">{Data[6].title} </div>
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
