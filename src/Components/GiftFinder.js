import React, { useState } from "react";
import { NavBar } from "./NavBar";
import { GrEdit } from "react-icons/gr";
import "./GiftFinder.css";

function GiftFinder() {
  const [show, setShow] = useState(true);
  const [url, setUrl] = useState();

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
              <GrEdit className="edit" onClick={() => setShow(!show)} />
            ) : (
              <div className="hidden-container">
                <input
                  value={url}
                  onInput={(e) => setUrl(e.target.value)}
                  className="giftfinder-input"
                  type="text"
                />
                <button>Add</button>
              </div>
            )}
          </div>
        </div>
        <div className="display-container"></div>
      </div>
    </div>
  );
}

export default GiftFinder;
