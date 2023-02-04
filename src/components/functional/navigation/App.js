import Products from "../list_products/Products";
import Navbar from "./Navbar";
import { useState,useEffect } from "react";
import ProductsContext from "../../../context/products/products";

const App = () => {
  useEffect(()=>{
    console.log("App - Mount And Update");
  });

  useEffect(()=>{
    console.log("App - Mount");
  },[]);
  
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
  const handleDelete = (productId) => {
    const newProducts = products.filter((item) => item.id !== productId);
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
    <>
      <ProductsContext.Provider
        value={{
          products: products,
          onDelete: handleDelete,
          onDecrement: handleDecrement,
          onIncrement: handleIncrement,
          onReset: handleReset,
        }}
      >
        <Navbar />
        <Products />
      </ProductsContext.Provider>
    </>
  );
};

export default App;
