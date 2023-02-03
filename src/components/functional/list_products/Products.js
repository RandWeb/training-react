import { Component } from "react";
import "./Products.css";
import Product from "../product/Product";

const Products =()=>{
   const products = [
        {
          id: 1,
          title: "product 1",
          count: 2,
          imageUrl: "https://loremflickr.com/320/240",
        },
        {
          id: 2,
          title: "product 2",
          count: 1,
          imageUrl: "https://loremflickr.com/320/240/dog",
        },
        {
          id: 3,
          title: "product 3",
          count: 4,
          imageUrl: "https://loremflickr.com/320/240/paris",
        },
      ];
    return (
        <div className="list-products">
    {products.map(product=> <Product key={product.id} product={product}/>)}
      </div>
    );
}

export default Products;
