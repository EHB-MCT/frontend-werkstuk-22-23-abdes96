import { Link, useLocation } from "react-router-dom";
import "../styles/Detail.css";
import Egypt from "../assets/goden.png";
import Navbar from "../component/navbar";
import { motion } from "framer-motion";
import { useEffect } from "react";
import Data from "../service/Data.json"

function Detail() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const location = useLocation();
  const title = new URLSearchParams(location.search).get("title");
  const id = new URLSearchParams(location.search).get("id");
  const backgroundImageStyles = Data.map((item) => ({
    backgroundImage: `url(${item.picture})`,
  }));
  

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Navbar showOnScroll={false} />
      <div className="outer-container">
        <motion.div
          className="inner-container"
          style={backgroundImageStyles[id]}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
            scale: {
              type: "spring",
              damping: 7,
              stiffness: 100,
              restDelta: 0.001,
            },
          }}
        >
          <div className="button-back">
            <Link to="/home">
             
              <button> Terug </button>
            </Link>
          </div>
          <div className="titletopic">
            <h1>{title}</h1>
          </div>
          <div className="image-container">
            <img src={Data[id].picture} alt="Image" />
            <p>
              {Data[id].description}
            </p>
          </div>

          <div className="author-container">
            <h2>Auteur: {Data[id].author}</h2>
          </div>
          <div className="button-container">
            <button>
              <a href={Data[id].link}>Meer info</a>       
                   </button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Detail;
