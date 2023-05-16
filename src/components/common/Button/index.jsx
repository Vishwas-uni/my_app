import React from "react";
import './style.css'
function Button(props) {
  const { label, isPrimary=true } = props;
  
  return (
    <button
      className={
        isPrimary ? "demo_app_button-primary" : "demo_app_button-secondary"
      }
      {...props}
    >
      {label}
    </button>
  );
}

export default Button;
