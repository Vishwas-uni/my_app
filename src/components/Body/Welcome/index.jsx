import React, { useState } from "react";
import Button from "../../common/Button";
import {CounterDecrement, CounterIncrement} from "./Counter";
import "./style.css";
import Signup from "./Signup";

function Welcome() {
  const [count, setCount] = useState(0)

  const handleIncrement = () =>{
   setCount(prev=>prev+1)
  }
  const handleDecrement = () =>{
   setCount(prev=>prev-1)
  }

  return (
    <div className="body__welcome">
      <span style={{ display: "block", marginBottom: "10px" }}>
        {/* <h2>{count}</h2>
        <CounterIncrement handleIncrement={handleIncrement} />
        <CounterDecrement handleDecrement={handleDecrement}/> */}
        <Signup/>
      </span>
    </div>
  );
}

export default Welcome;
