import { useState } from "react";
import "./Products.css";
import Product from "../product/Product";

const Products = () => {
  const [products, setProducts] = useState([
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
  ]);
  const handleIncrement = (productId) => {
    const newProducts = [...products];
    const index = newProducts.findIndex((product) => product.id === productId);
    newProducts[index].count += 1;
    setProducts(newProducts);
  };

  const handleDecrement = (productId) => {
    const newProducts = [...products];
    const index = newProducts.findIndex((product) => product.id === productId);
    if (newProducts[index].count === 0) return alert("count product is zero");
    newProducts[index].count -= 1;
    setProducts(newProducts);
  };
  const deleteProduct = (id) => {
    const newProducts = products.filter((item) => item.id !== id);
    setProducts(newProducts);
  };
  const handleReset = () => {
    console.log("reset");
    const newProducts = products.map((product) => {
      product.count = 0;
      return product;
    });
    setProducts(newProducts);
  };
  return (
    <div className="list-products">
      <button onClick={handleReset} className="btn btn-secondary">
        reset
      </button>
      {products.map((product) => (
        <Product
          key={product.id}
          product={product}
          onDelete={deleteProduct}
          OnIncrement={handleIncrement}
          OnDecrement={handleDecrement}
        />
      ))}
    </div>
  );
};

export default Products;
