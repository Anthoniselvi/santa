import React from "react";
import { useNavigate } from "react-router-dom";
import { NavBar } from "./NavBar";
import GiftExchange2 from "./GiftExchange2";
import "./GiftExchange.css";

function GiftExchange() {
  const navigate = useNavigate();

  function moveToGiftExchange2() {
    navigate("/GiftExchange2");
  }

  return (
    <div className="container">
      <NavBar />
      <div className="giftexchange-container">
        <div className="giftexchange-text">
          <h1>Join our Gift Exchange</h1>
          <div className="giftexchange-top">
            <p>
              user invites to draw names for product with user, member1, member2
              and member3.
            </p>
          </div>
          <div className="giftexchange-details">
            <p> Date of gift exchange: date</p>
            <p>Budget: amount</p>
          </div>
          <div className="giftexchange-bottom">
            <h5>Message from user</h5>
            <p>
              We're going to draw names! Make a wish list and draw a name so
              that everyone has time to buy a gift.
            </p>
          </div>
          <button onClick={moveToGiftExchange2}>Join the group</button>
        </div>
        <div className="giftexchange-pic"></div>
      </div>
    </div>
  );
}

export default GiftExchange;
