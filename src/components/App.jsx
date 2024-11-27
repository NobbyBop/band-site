import { useState } from "react";
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
  const [count, setCount] = useState(0);

  return (
    <>
      <header>
        <h1>MOBIUS LINE</h1>
        <Navigation />
      </header>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/tour" element={<Tour />} />
        <Route path="/newsletter" element={<Newsletter />} />
        <Route path="/merch" element={<Merch />} />
        <Route path="/releases" element={<Releases />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </>
  );
}

export default App;
