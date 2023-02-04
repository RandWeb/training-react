import { useContext } from "react";
import ProductsContext from "../../../context/products/products";

const Navbar=(props)=> {
  const productsContext = useContext(ProductsContext);
  const calculateSumCount = () => {
    console.log(productsContext.products)
    let sum = 0;
    productsContext.products.forEach((product) => {
      sum += product.count;
    });
    return sum;
  };
    return (
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand"> Navbar {calculateSumCount()}</a>
        </div>
      </nav>
    );
}

export default Navbar;
