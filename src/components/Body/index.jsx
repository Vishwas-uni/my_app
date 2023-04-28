import React from "react";
import SideBar from "./SideBar";
import Welcome from "./Welcome";
import './style.css'
function Body() {
  return (
    <div className="demo-app__body">
      <SideBar />
      <Welcome />
    </div>
  );
}

export default Body;
