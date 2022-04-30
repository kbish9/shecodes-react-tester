import React from "react";
import "./App.css";
import Header from "./Header";
import Search from "./Search";
import City from "./City";
import Temp from "./Temp";

export default function Weather() {
  return (
    <div className="Weather">
      <Header />
      <Search />
      <City />
      <Temp />
      <a href= "https://github.com/kbish9/React-Weather">Open Source code - Kelsey Bishop</a>
    </div>
  );
}
