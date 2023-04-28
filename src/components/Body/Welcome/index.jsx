import React from "react";
import "./style.css";

function Welcome() {
  const array = [];
  
  const handleClcik = () => {
    array.push(array.length + 1);
  };

  const handleSubmit = () => {
    console.log(array);
  };

  const handleChange = (event) => {
    console.log("You Changed", event.target.value);
  };

  return (
    <div className="body__welcome">
      <input
        onChange={handleChange}
        style={{ borderRadius: "1px solid red" }}
      />
      array:{array}
      <button id="last_btn" className="welcome__btn" onClick={handleClcik}>
        Add
      </button>
      <button id="last_btn" className="welcome__btn" onClick={handleSubmit}>
        Get Array
      </button>
    </div>
  );
}

export default Welcome;
