import React from "react";
import { Link } from "react-router-dom";


function Login() {
    return (
      <div className="login">
        <div className="login__card">
          <p className="login__title">Sign in</p>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
  
          <button>Sign in</button>
          <p>
            <Link to="/register">Not a member? Sign up</Link>
          </p>
        </div>
      </div>
    );
  }

  
export default Login;