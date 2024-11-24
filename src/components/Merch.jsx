import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h2>Merch</h2>
      <p>Merch listings here (obviously).</p>
    </>
  );
}

export default App;
