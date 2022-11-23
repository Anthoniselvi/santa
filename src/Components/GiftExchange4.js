import React from "react";
// import { useNavigate } from "react-router-dom";
import { NavBar } from "./NavBar";
import { TiTick } from "react-icons/ti";
import "./GiftExchange.css";

function GiftExchange4() {
  //   const navigate = useNavigate();

  //   function moveToGiftFinder() {
  //     navigate("/GiftFinder");
  //   }

  return (
    <div className="container">
      <NavBar />
      <div className="giftexchange-container">
        <div className="giftexchange-text">
          <h1>Product</h1>
          <div className="giftexchange-top">
            <div className="giftexchange-topline">
              <TiTick color="#0077b6" />
              <p>You are now a member of the group.</p>
            </div>
            <p className="gift-left">Make a wish list and draw a name now</p>
          </div>
          <div className="giftexchange-cotentbox">
            <p>
              You <b>haven't made a wish list</b>yet or added any hobbies.
            </p>
            <button>Make a wish list</button>
            <h5>I'll do this later</h5>
          </div>
          <div className="giftexchange-bottom">
            <h5>Visit the group page</h5>
          </div>
        </div>
        <div className="giftexchange-pic"></div>
      </div>
    </div>
  );
}

export default GiftExchange4;
