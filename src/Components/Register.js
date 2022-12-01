import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";
import "./Register.css";
import { NavBar } from "./NavBar";
import Login from "./Login";

function Register() {
  const navigate = useNavigate();
  const [err, setErr] = useState(false);
  const [loading, setLoading] = useState(false);

  function moveToLogin() {
    navigate("/Login");
  }
  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    const name = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      console.log(res);
      navigate("/");
    } catch (err) {
      console.log(err);
      setErr(true);
      setLoading(false);
    }
  };
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
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input type="text" />
          <label htmlFor="name">Email</label>
          <input type="email" />
          <label htmlFor="name">Password</label>
          <input type="password" />
          <button>Register</button>
          {err && <span>Something went wrong</span>}
        </form>
      </div>
    </div>
  );
}

export default Register;
