import React from "react";
import "./Login.css";
import { NavBar } from "./NavBar";

function Reset() {
  return (
    <div className="container">
      <NavBar />
      <div className="reset-container">
        <h1>Reset Password</h1>
        <p>
          Forgot your Password? Enter your email address, and we'll email you a
          link to reset it.
        </p>

        <form>
          <label htmlFor="name">Email</label>
          <input type="email" name="email" />

          <button>Send Password Reset Link</button>
        </form>
      </div>
    </div>
  );
}

export default Reset;
