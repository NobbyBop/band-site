import { useState } from "react";

import "./App.css";

function Newsletter() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h2>Newsletter</h2>
      <p>Newsletters here (obviously).</p>
    </>
  );
}

export default Newsletter;
