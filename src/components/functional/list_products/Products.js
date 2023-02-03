import { useState } from "react";
import "./Products.css";
import Product from "../product/Product";

const Products = () => {
  const [products, setProduct] = useState([
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
  const deleteProduct = (id) => {
    const newProducts = products.filter((item) => item.id !== id);
    setProduct(newProducts);
  };
  return (
    <div className="list-products">
      {products.map((product) => (
        <Product key={product.id} product={product} onDelete={deleteProduct} />
      ))}
    </div>
  );
};

export default Products;
