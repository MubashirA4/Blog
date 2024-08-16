import React, { useState } from "react";
import axios from "axios";
import { apiUrl } from "../../utils";
import { useNavigate } from "react-router-dom";

const Signin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const userData = {
    email: email,
    password: password,
  };

  const handleSubmit = () => {
    axios
      .post(`${apiUrl}login`, userData)
      .then(function (response) {
        console.log("response", response);
        localStorage.setItem("auth", true);
        localStorage.setItem(
          "user_data",
          JSON.stringify(response?.data?.userData)
        );
        navigate("/dashboard");
        navigate(0);
      })
      .catch(function (error) {
        console.log("Error during login:", error);
      });
  };

  return (
    <div className="container">
      <div className="contact">
        <div className="form">
          <div className="login">
            <h3>
              <a href="/contact">Login</a>
            </h3>
            <h3>
              <a href="/signup">Signup</a>
            </h3>
          </div>
          <form action="">
            <h3>SIGN IN</h3>
            <p>Signin to continue in MetaBlog</p>
            {error && <p style={{ color: "red" }}>{error}</p>}
            <input
              type="text"
              placeholder="sample@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Pasword123"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button disabled={!email && !password} onClick={handleSubmit}>
              {loading ? "Sign in..." : "Sign in"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signin;
