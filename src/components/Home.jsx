import { useState } from "react";
import "./App.css";

function Home() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h2>Home</h2>
      <p>
        Mobius Line Band information here. Some pictures and social links as
        well.
      </p>
    </>
  );
}

export default Home;
