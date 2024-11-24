import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Navigation from "./Navigation";
import Home from "./Home";
import Merch from "./Merch";
import Tour from "./Tour";
import Newsletter from "./Newsletter";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <header>
        <h1>Mobius Line</h1>
        <Navigation />
      </header>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/tour" element={<Tour />} />
        <Route path="/newsletter" element={<Newsletter />} />
        <Route path="/merch" element={<Merch />} />
      </Routes>
    </>
  );
}

export default App;
