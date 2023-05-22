import Navbar from "../component/navbar";
import Parallax1 from "../component/ParallaxComponent/Parallax1";
import Parallax2 from "../component/ParallaxComponent/Parallax2";
import { motion } from "framer-motion";

import "../styles/HetOudeEgypte.css";

function HetOudeEgypte() {
  

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Navbar showOnScroll={false} />

      <div className="outer1">
        <Parallax1 />
        <Parallax2 /> 
      </div>
    </motion.div>
  );
}
export default HetOudeEgypte;
