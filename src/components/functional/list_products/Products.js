import "./Products.css";
import { useContext, useEffect } from "react";
import Product from "../product/Product";
import ProductsContext from "../../../context/products/products";

const Products = (props) => {
  const productsContext = useContext(ProductsContext);
  useEffect(() => {
    return () => {
      console.log("Products - UnMount");
    };
  },[]);
  return (
    <div className="list-products">
      <button onClick={productsContext.onReset} className="btn btn-secondary">
        reset
      </button>
      {productsContext.products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Products;
