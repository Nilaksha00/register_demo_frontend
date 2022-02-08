import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "../axios";

function Register() {
  //declare states
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [valid, setValid] = useState(" ");

  const handleSubmit = (evt) => {
    evt.preventDefault();

    setValid("");

    if (email == "" || password == "") {
      setValid("Please fill the fields!");
    } else if (!email.match( /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
    ) {
      setValid("Invalid email!");
    } else {
      const user = {
        email: email,
        password: password,
      };

      //backend
      axios
        .post("/", user)
        .then(alert("Registered Successfully!"))
        .catch(function (error) {
          alert("Something went wrong!");
        });
    }
  };
  return (
    <div className="login">
      <div className="login__card">
        <p className="login__title">Sign up</p>
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

        <button onClick={handleSubmit}>Sign up</button>

        <p>
          <Link to="/">Already a member? Sign in</Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
