import React from "react";
import { useNavigate } from "react-router-dom";
import { NavBar } from "./NavBar";
import "./GiftExchange.css";

function GiftExchange3() {
  return (
    <div className="container">
      <NavBar />
      <div className="giftexchange-container">
        <div className="giftexchange-text">
          <h1>There is one thing left to do!</h1>
          <div className="giftexchange-msg">
            <p>
              You'll now receive an email at <b>email@gmail.com.</b> Use this
              email to join the group; then you can make a wish list and draw a
              name.
            </p>
            <p>
              If you did not receive the confirmation email, you can{" "}
              <span>resend</span> it.
            </p>
          </div>

          <div className="giftexchange-pic"></div>
        </div>
      </div>
    </div>
  );
}

export default GiftExchange3;
