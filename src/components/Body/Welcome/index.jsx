import React, { useState } from "react";
import Button from "../../common/Button";
import { CounterDecrement, CounterIncrement } from "./Counter";
import "./style.css";
import Signup from "./Signup";
import SearchInput from "./SearchInput";

function Welcome() {
  const [isMount, setIsMount] = useState(false);

  return (
    <div className="body__welcome">
      {isMount ? (
        <div
          className="welcome_signup_wraaper"
          style={{ display: "block", marginBottom: "10px" }}
        >
          <Signup />
          
        </div>
      ) : (
        <></>
      )}
      <Button
        onClick={() => setIsMount((prev) => !prev)}
        label={isMount ? "Unmount" : "Mount"}
      />
    </div>
  );
}

export default Welcome;
