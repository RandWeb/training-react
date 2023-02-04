import { Component } from "react";
import Product from "../product/Product";
import "../list_products/Products.css";
import ProductsContext from "../../context/products/products";

class Products extends Component {
  static contextType = ProductsContext;
  componentDidUpdate() {
    console.log("Products - DidUpdate");
  }
  componentWillUnmount(){
    console.log("Products - Unmount");
  }
  render() {
    console.log("Products - Render");
    return (
      <div className="list-products">
        <button onClick={this.context.onReset} className="btn btn-secondary">
          reset
        </button>
        {this.context.products.map((product) => (
          <Product
            key={product.id}
            product={product}
          />
        ))}
      </div>
    );
  }
}

export default Products;
