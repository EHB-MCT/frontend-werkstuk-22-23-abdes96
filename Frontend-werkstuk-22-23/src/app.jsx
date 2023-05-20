import "@fortawesome/fontawesome-free/css/all.css";
import { Routes, Route, useLocation } from "react-router-dom";
import {  AnimatePresence } from "framer-motion";
import Home from "./pages/home";
import Navbar from "./component/navbar";
import HetOudeEgypte from "./pages/oudeEgypte";
import Footer from "./component/footer";
import Detail from "./pages/detailPage";



function App() {
  const location = useLocation();

  return (
    <>
      <Navbar showOnScroll={true} />
      <AnimatePresence >
        
          <Routes location={location} key={location.pathname}>
            <Route path="/de-oude-egypte" element={<HetOudeEgypte />} />
            <Route path="/detail" element={<Detail />} />
            <Route path="*" element={<Home />} />
          </Routes>
      </AnimatePresence>
      <Footer />
    </>
  );
}

export default App;
