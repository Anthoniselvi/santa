import React from "react";
import "./GiftExchange.css";
import { useNavigate } from "react-router-dom";
import { NavBar } from "./NavBar";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";

function GiftExchange2() {
  const navigate = useNavigate();

  function moveToGiftExchange3() {
    navigate("/GiftExchange3");
  }
  return (
    <div className="container">
      <NavBar />
      <div className="giftexchange-container">
        <div className="giftexchange-text">
          <h1>Join our Gift Exchange</h1>
          <p>
            To draw a name, select your name and confirm via email or social
            media.
          </p>
          <form>
            <label>Your name</label>
            <select className="gift-select">
              <option>User</option>
              <option>member1</option>
              <option>member2</option>
              <option>member3</option>
            </select>
            <label>Your email</label>
            <input
              type="email"
              className="gift-input"
              placeholder="Enter your email address"
            />
            <div className="giftexchange-or">
              <p>.............................................</p>
              <p>or confirm with just one click</p>
              <p>.............................................</p>
            </div>
            <div className="giftexchange-socialmedia">
              <div className="facebook">
                <BsFacebook color="#0077b6" />
                <p>Facebook</p>
              </div>
              <div className="google">
                <FcGoogle />
                <p>Google</p>
              </div>
            </div>
            <button onClick={moveToGiftExchange3}>Confirm</button>
          </form>
        </div>
        <div className="giftexchange-pic"></div>
      </div>
    </div>
  );
}

export default GiftExchange2;
