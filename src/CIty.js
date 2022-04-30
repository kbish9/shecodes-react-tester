import React from "react";
import "./City.css";

export default function City () {
  return (
    <div class="container">
      <div class="row">
        <div class="col-1"></div>
        <div class="col-5 mt-10">
          <div class="card" id="current">
            <h1>
              <span id="city">London</span>
            </h1>
            <h5>
              Last updated: Monday 8:45pm <span id="date"></span>
            </h5>
            <div class="icon">
              <img src="/" id="icon" width="100px" alt="Icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
