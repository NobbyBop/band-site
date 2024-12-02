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
    <>
      <header>
        <h1>MOBIUS LINE</h1>
        <Navigation />
      </header>
      <Routes>
        <Route path="/mobiusline/home" element={<Home />} />
        <Route path="/mobiusline/tour" element={<Tour />} />
        <Route path="/mobiusline/newsletter" element={<Newsletter />} />
        <Route path="/mobiusline/merch" element={<Merch />} />
        <Route path="/mobiusline/releases" element={<Releases />} />
        <Route path="/mobiusline/faq" element={<FAQ />} />
        <Route path="/mobiusline/admin" element={<Admin />} />
      </Routes>
    </>
  );
}

export default App;
