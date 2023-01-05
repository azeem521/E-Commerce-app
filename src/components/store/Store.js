import React from "react";
import "./Store.css";
import Tours from "./Tours";

const Store = () => {
  return (
    <div>
    <div className="latestAlbum bg-secondary">
      <div className=" ">
        <div className="album-para">
          <p>Get our Latest Album</p>
        </div>
        <div className="main-playBtn">
          <div className="playBtn">
            <div class="play-button-outer">
              <div class="play-button"></div>
            </div>
          </div>
        </div>
      </div>
      </div>
      <div className="tours">TOURS</div>
      <Tours />
      <Tours />
      <Tours />
      <Tours />
      <Tours />
      <Tours />
    </div>
  );
};

export default Store;
