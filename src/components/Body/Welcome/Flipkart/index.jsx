import React from "react";
import Cart from "./Cart";
import {products} from "./data";
import Products from "./Products";
import './style.css'
function Flipkart() {
    
  return (
    <div className="flipkart__container">
      <h2 className="flipkart__header">Flipkart</h2>
      <div className="flipkart__body">
        <Products products={products} />
        <Cart />
      </div>
    </div>
  );
}

export default Flipkart;
