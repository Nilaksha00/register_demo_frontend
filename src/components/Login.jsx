import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "../axios";

function Login() {
  //declare states
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [valid, setValid] = useState(" ");

  const handleSubmit = (evt) => {
    evt.preventDefault();
    setValid("")
    //backend
    axios
      .get("/" + email)
      .then((res) => {
        if (res.data.password == password) {
          alert("Login Successfully!");
        } else {
          setValid("Invalid Password!");
        }
      })

      .catch(function (error) {
        setValid("Invalid Email!");
      });
  };
  return (
    <div className="login">
      <div className="login__card">
        <p className="login__title">Sign in</p>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <p className="login__valid">{valid}</p>
        <button onClick={handleSubmit}>Sign in</button>
        <p>
          <Link to="/register">Not a member? Sign up</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
