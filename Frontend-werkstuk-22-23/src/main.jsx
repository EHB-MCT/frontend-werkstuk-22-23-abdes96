import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import Home from "./home.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Home />
  </BrowserRouter>
);
