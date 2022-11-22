import React from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css";
import { NavBar } from "./NavBar";
import Login from "./Login";

function Register() {
  const navigate = useNavigate();

  function moveToLogin() {
    navigate("/Login");
  }
  return (
    <div className="container">
      <NavBar />
      <div className="register-container">
        <h1>Register</h1>
        <h2> It's Free!</h2>
        <p>Register to get started on your wishlist immediately</p>
        <p>
          (If you already have an account, Kindly
          <a href="" onClick={moveToLogin}>
            Login here
          </a>
          )
        </p>
        <form>
          <label htmlFor="name">Name</label>
          <input type="text" />
          <label htmlFor="name">Email</label>
          <input type="email" />
          <label htmlFor="name">Password</label>
          <input type="password" />
          <button onClick={moveToLogin}>Register</button>
        </form>
      </div>
    </div>
  );
}

export default Register;
