import React, { useState } from "react";
import axios from "axios";
import "./styles/login.css";
import { Link } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/login", {
        username,
        password,
      });
      console.log(response);
      if (response.data.message === "Login successful") {
        setMessage("Login successful!");
        window.location.href = "/";
      } else {
        setMessage("Login failed: " + response.data.message);
      }
    } catch (error) {
      setMessage("An error occurred: " + error.message);
    }
  };

  return (
    <div className="login-container">
      <h2 className="login-title">Login</h2>
      <form onSubmit={handleSubmit} className="login-form">
        <div className="form-group">
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
            required
            className="login-input"
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
            className="login-input"
          />
        </div>
        <button type="submit" className="login-submit-btn">
          Login
        </button>
      </form>
      {message && (
        <div
          className={
            message.startsWith("Login successful")
              ? "success-message"
              : "error-message"
          }
        >
          {message}
        </div>
      )}
    </div>
  );
}

export default Login;
