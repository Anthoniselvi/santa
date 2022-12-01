import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import { NavBar } from "./NavBar";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";

function Login() {
  const navigate = useNavigate();
  const [err, setErr] = useState(false);

  function moveToRegister() {
    navigate("/Register");
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;
    console.log(email);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/GiftExchange");
    } catch (err) {
      setErr(true);
    }
  };
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
          <form onSubmit={handleSubmit}>
            <div className="form-innerbox">
              <label htmlFor="name">E.mail</label>
              <input type="email" name="email" />
            </div>
            <div className="form-innerbox">
              <label htmlFor="name">Password</label>
              <input type="password" name="password" />
            </div>
            <button>Login</button>
            {err && <span>Something went wrong</span>}
          </form>
          <a href="">Forgot your Password?</a>
        </div>
        <div className="login-pic"></div>
      </div>
    </div>
  );
}

export default Login;
