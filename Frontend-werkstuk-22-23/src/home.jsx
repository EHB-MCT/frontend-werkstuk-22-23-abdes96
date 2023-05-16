import "@fortawesome/fontawesome-free/css/all.css";
import { Routes, Route } from "react-router-dom";
import Content from "./component/content";
import "./styles/App.css";
import Footer from "./component/footer";
import Navbar from "./component/navbar";
import Header from "./component/header";
import HetOudeEgypte from "./pages/oudeEgypte";

function App() {
  return (

    <>
      <Navbar showOnScroll={true} />
      <Header />
      <Routes>
        <Route path="/de-oude-egypte" element={<HetOudeEgypte/>} />
        <Route path="*" element={<Content />} />
      </Routes>

      <Footer />

    </>    

  );
}

export default App;