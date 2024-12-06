import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";

function Releases() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleClick = (event) => {
    event.preventDefault();

    const correctUsername = "captain2021";
    const correctPassword = "m88or4g2a3n9537";

    if (username === correctUsername && password === correctPassword) {
      alert("Login successful!");
      navigate("/mobiusline/admin");
    } else {
      alert("Invalid credentials!");
    }
  };

  return (
    <>
      <h2>Releases</h2>
      <p>
        501 Unauthorized Access. Please contact admin or log in with admin
        account.
      </p>
      <form onSubmit={handleClick}>
        <div className="loginDiv">
          <label htmlFor="username">
            Username:
            <input
              name="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
          <br />
          <label htmlFor="password">
            Password:
            <input
              name="password"
              type="text"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <br />
          <button type="submit">Log In</button>
        </div>
      </form>
    </>
  );
}

export default Releases;
