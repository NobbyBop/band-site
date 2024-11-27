import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <nav className="navigation">
      <NavLink
        to="/home"
        className={(navData) => (navData.isActive ? "active" : "none")}
      >
        Home
      </NavLink>
      <NavLink
        to="/merch"
        className={(navData) => (navData.isActive ? "active" : "none")}
      >
        Merch
      </NavLink>
      <NavLink
        to="/tour"
        className={(navData) => (navData.isActive ? "active" : "none")}
      >
        Tour
      </NavLink>
      <NavLink
        to="/newsletter"
        className={(navData) => (navData.isActive ? "active" : "none")}
      >
        Newsletter
      </NavLink>
      <NavLink
        to="/faq"
        className={(navData) => (navData.isActive ? "active" : "none")}
      >
        FAQ
      </NavLink>
      <NavLink
        to="/releases"
        className={(navData) => (navData.isActive ? "active" : "none")}
      >
        Releases
      </NavLink>
    </nav>
  );
}

export default App;
