import React from "react";
import "./Search.css";

export default function Search () {
  return (
    <div class="container">
      <div class="row" id="search">
        <div class="col shadow p-3 bg-body rounded">
          <input
            type="search"
            name="search"
            id="city-input"
            size="100"
            placeholder="Select a city..."
          />

          <input type="submit" value="Search" id="button" />
          <input type="button" value="Current Location" id="location" />
        </div>
      </div>
    </div>
  );
}
