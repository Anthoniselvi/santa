import React from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import { NavBar } from "./NavBar";
import Register from "./Register";

function Login() {
  const navigate = useNavigate();

  function moveToRegister() {
    navigate("/Register");
  }

  return (
    <div className="container">
      <NavBar />
      <div className="login-container">
        <div className="login-text">
          <h1>Login</h1>
          <p>Log in to My WishList.</p>
          <p>
            (If you don't have an account yet, Kindly
            <a href="" onClick={moveToRegister}>
              Register Here
            </a>
            )
          </p>
          <form>
            <div className="form-innerbox">
              <label htmlFor="name">E.mail</label>
              <input type="email" name="email" />
            </div>
            <div className="form-innerbox">
              <label htmlFor="name">Password</label>
              <input type="password" name="password" />
            </div>
            <button>Login</button>
          </form>
          <a href="">Forgot your Password?</a>
        </div>
        <div className="login-pic"></div>
      </div>
    </div>
  );
}

export default Login;
