import React from "react";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="login">
      <div className="login__card">
        <p className="login__title">Sign up</p>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />

        <button>Sign up</button>
        <p>
          <Link to="/">Already a member? Sign in</Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
