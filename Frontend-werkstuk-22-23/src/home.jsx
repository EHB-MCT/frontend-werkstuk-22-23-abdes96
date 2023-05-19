import "@fortawesome/fontawesome-free/css/all.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import "./styles/App.css";
import Footer from "./component/footer";
import Navbar from "./component/navbar";
import HetOudeEgypte from "./pages/oudeEgypte";

function App() {
  return (

    <>
      <Navbar showOnScroll={true} />
      <Routes>
        <Route path="/de-oude-egypte" element={<HetOudeEgypte/>} />
        <Route path="*" element={<Home />} />
      </Routes>

      <Footer />

    </>    

  );
}

export default App;