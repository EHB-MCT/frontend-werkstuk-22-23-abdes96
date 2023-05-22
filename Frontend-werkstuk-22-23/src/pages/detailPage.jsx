import { Link, useLocation } from "react-router-dom";
import "../styles/Detail.css";
import Egypt from "../assets/goden.png";
import Navbar from "../component/navbar";
import { motion } from "framer-motion";
import { useEffect } from "react";
function Detail() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const location = useLocation();
  const title = new URLSearchParams(location.search).get("title");

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
           <button>
              <Link to="/home">Terug</Link>
            </button></div>
          <div className="titletopic">

            <h1>{title}</h1>
          </div>
          <div className="image-container">
            
            <img src={Egypt} alt="Image" />
            <p>
              Hier kun je dieper duiken in de fascinerende wereld van deze oude
              beschaving. Ontdek de betoverende architectuur, leer over de
              intrigerende kunstvormen en verken de boeiende religieuze
              overtuigingen van de oude Egyptenaren. Stap terug in de tijd
              terwijl je meer te weten komt over de historische gebeurtenissen,
              mythen en legendes die het oude Egypte hebben gevormd. Laat je
              meeslepen door de mysteriën van de piramiden, de prachtige
              hiërogliefen en de rituelen van farao's. Geniet van een boeiende
              reis door deze bijzondere en eeuwenoude beschaving op deze
              detailpagina.
            </p>
          </div>

          <div className="author-container">
            <h2>Auteur: Abdeslam Boutaarourt</h2>
          </div>
          <div className="button-container">
            <button>
              <Link to="/de-oude-egypte">Meer Info</Link>
            </button>
           
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Detail;
