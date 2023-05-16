import React from "react";
import Product from "./Product";
import './style.css'
function Products(props) {
  const { products } = props;
  return (
    <div className="products_container">
        <h3>Products</h3>
      {products.map((product) => (
        <React.Fragment key={product.id}>
        <Product {...product}/>
        </React.Fragment>
      ))}
    </div>
  );
}

export default Products;
