import { Route, Routes } from "react-router-dom";
import Navigation from "./Navigation";
import Home from "./Home";
import Merch from "./Merch";
import Tour from "./Tour";
import Newsletter from "./Newsletter";
import Releases from "./Releases";
import Admin from "./Admin";
import FAQ from "./FAQ";
import "./App.css";

function App() {
  return (
    <div className="main-container">
      <header>
        <div className="headerImages">
          <img src="/mobiusline/images/text_logo.png" className="header-logo" />
          <img
            src="/mobiusline/images/logo_cropped.PNG"
            className="header-logo"
          />
        </div>
        <Navigation />
      </header>
      <Routes>
        <Route path="/mobiusline/" element={<Home />} />
        <Route path="/mobiusline/tour" element={<Tour />} />
        <Route path="/mobiusline/newsletter" element={<Newsletter />} />
        <Route path="/mobiusline/merch" element={<Merch />} />
        <Route path="/mobiusline/releases" element={<Releases />} />
        <Route path="/mobiusline/faq" element={<FAQ />} />
        <Route path="/mobiusline/admin" element={<Admin />} />
      </Routes>
    </div>
  );
}

export default App;
