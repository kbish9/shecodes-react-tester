import React from "react";
import "./Temp.css";

export default function Temp () {
  return (
    <div class="container">
      <div class="col-5">
        <div class="card">
          <div class="card-today">
            <h5 class="card-temp">
              <div class="tempToday">
                <span id="temp">25</span>
                <a href="/" id="c-link" class="active">
                  °C
                </a>
                <span class="divider">|</span>
                <a href="/" id="f-link">
                  °F
                </a>
              </div>
            </h5>
            <h6 class="card-subtitle mb-2 text-muted">in London</h6>
            <p class="card-day">Current Temperature</p>
            <h6 id="weather-description">Few Clouds</h6>
            <h6>
              Wind: <span id="wind-speed">4</span> km/h
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
}
