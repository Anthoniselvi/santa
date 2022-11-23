import React, { useState } from "react";
import { NavBar } from "./NavBar";
import { GrEdit } from "react-icons/gr";
import "./GiftFinder.css";

function GiftFinder() {
  const [show, setShow] = useState(true);
  return (
    <div className="container">
      <NavBar />
      <div className="giftfinder-container">
        <h1>Gift Finder</h1>
        <div className="giftfinder-top">
          <div className="giftfinder-top-left">
            <h2>My Wish List</h2>
            <p>
              <span>0</span> Gifts
            </p>
          </div>
          <div className="giftfinder-top-right">
            {show ? (
              <GrEdit color="#0077b6" onClick={() => setShow(!show)} />
            ) : (
              <input className="giftfinder-input" type="text" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default GiftFinder;
