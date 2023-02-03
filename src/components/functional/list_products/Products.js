import { useState } from "react";
import "./Products.css";
import Product from "../product/Product";

const Products = (props) => {

  return (
    <div className="list-products">
      <button onClick={props.onReset} className="btn btn-secondary">
        reset
      </button>
      {console.log(props.products)}
      {props.products.map((product) => (
        <Product
          key={product.id}
          product={product}
          onDelete={props.onDelete}
          onIncrement={props.onIncrement}
          onDecrement={props.onDecrement}
        />
      ))}
    </div>
  );
};

export default Products;
