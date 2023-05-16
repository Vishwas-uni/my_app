import React, { useState } from "react";
import "./style.css";

function Header(props) {
  const { title } = props;
 
  return (
    <header className="demo-app_header">
      <h1>{title}</h1>
    </header>
  );
}

export default Header;
